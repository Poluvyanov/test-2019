import { NestModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@backend/users';
import { RolesModule } from '@backend/roles';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { AccessGuard, ResourceGuard } from '@backend/common';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import { AuthModule } from '@backend/auth/src';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '192.168.99.100',
      database: process.env.DB_NAME || 'test_2019',
      username: process.env.DB_USERNAME || 'raccoon',
      password: process.env.DB_PASSWORD || '12345678',
      port: +process.env.DB_PORT || 5436,
      entities: [
        '../**/src/**/entities/**.ts',
      ],
      migrations: [
        '../**/migrations/**.ts',
      ],
      migrationsRun: false,
      synchronize: true,
      logging: false,
    }),
    GraphQLModule.forRoot({
      path: '/graphql',
      typePaths: [
        '../**/*.graphql',
      ],
      installSubscriptionHandlers: false,
      resolvers: {
        Date: GraphQLDate,
        Time: GraphQLTime,
        DateTime: GraphQLDateTime,
      },
      rootValue: ({ req }) => req,
      formatError: error => {
        return error;
      },
      playground: true,
      context: ({ req }) => {
        return {
          request: req,
        };
      },
    }),
    AuthModule,
    UsersModule,
    RolesModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessGuard,
      inject: [Reflector],
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
      inject: [Reflector],
    },
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // TODO: connect middleware here
  }
}
