"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("@utils/reducer");
const actions = __importStar(require("../constants"));
const initialState = {
    email: '',
    password: '',
    errors: {},
};
exports.default = reducer_1.createReducer(initialState, {
    [actions.change]: (state, { field, value }) => (Object.assign(Object.assign({}, state), { field: value })),
    [actions.setErrors]: (state, { errors }) => (Object.assign(Object.assign({}, state), { errors })),
    [actions.clear]: () => initialState,
});
