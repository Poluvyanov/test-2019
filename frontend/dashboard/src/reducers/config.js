"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("@utils/reducer");
const initialState = {
    apiUrl: process.env.API_URL || 'http://localhost:3000/graphql',
};
exports.default = reducer_1.createReducer(initialState, {});
