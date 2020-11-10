"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserMutations_1 = require("./UserMutations");
const UserQueries_1 = require("./UserQueries");
exports.Resolvers = [
    UserMutations_1.UserMutations,
    UserQueries_1.UserQueries,
];
