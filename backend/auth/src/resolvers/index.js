"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthMutations_1 = require("./AuthMutations");
const AuthQueries_1 = require("./AuthQueries");
exports.Resolvers = [
    AuthMutations_1.AuthMutations,
    AuthQueries_1.AuthQueries,
];
