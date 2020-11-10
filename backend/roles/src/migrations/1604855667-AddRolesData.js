"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AddRolesData1604855667 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
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
            yield queryRunner.query(`
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
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('truncate table role');
        });
    }
}
exports.AddRolesData1604855667 = AddRolesData1604855667;
