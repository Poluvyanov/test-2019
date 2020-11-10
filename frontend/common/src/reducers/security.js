"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const storage_1 = __importDefault(require("redux-persist/lib/storage"));
const redux_persist_1 = require("redux-persist");
const reducer_1 = require("@utils/reducer");
const actions = __importStar(require("../constants/security"));
const initialState = {
    token: '',
    expiresIn: '',
};
const reducer = reducer_1.createReducer(initialState, {
    [actions.auth]: (state, { token, expiresIn }) => ({
        token,
        expiresIn,
    }),
    [actions.logout]: () => initialState,
});
exports.default = redux_persist_1.persistReducer({
    storage: storage_1.default,
    key: 'token',
    keyPrefix: 'aunited',
    version: 1,
}, reducer);
