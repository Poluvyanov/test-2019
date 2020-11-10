import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRolesData1604855667 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        insert into role (name, permissions, role)
         VALUES (
         'own',
           '[
             {
               "resource": "profile",
               "action": "update"
             }
           ]',
        'user')
    `);

        await queryRunner.query(`
        insert into role (name, permissions, role)
          VALUES (
          'any',
           '[
             {
              "resource": "profile",
              "action": "read"
             }
           ]',
           'support')
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('truncate table role');
    }
}
