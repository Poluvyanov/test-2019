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
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const security_1 = require("@aunited/common/src/constants/security");
const actions = __importStar(require("../constants"));
const stub_1 = __importDefault(require("./stub"));
exports.change = (field, value) => ({
    type: actions.change,
    field,
    value,
});
exports.login = () => (dispatch, getState, client) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = getState().auth.login;
    try {
        const { data } = yield client.query({
            fetchPolicy: 'network-only',
            query: graphql_tag_1.default `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            token {
              token
              expiresIn
            }
            errors {
              email
              password
            }
          }
        }
      `,
            variables: {
                email,
                password,
            },
        });
    }
    catch (e) {
        dispatch({
            type: security_1.auth,
            token: stub_1.default.token,
            expiresIn: stub_1.default.expiresIn,
        });
        dispatch({
            type: actions.clear,
        });
    }
});
