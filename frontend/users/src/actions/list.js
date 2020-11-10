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
const actions = __importStar(require("../constants/list"));
const stub_1 = __importDefault(require("./stub"));
exports.load = () => (dispatch, getState, client) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield client.query({
            fetchPolicy: 'network-only',
            query: graphql_tag_1.default `
        query Users {
          users {
            rows {
              id
              email
              profile {
                firstName
                lastName
              }
              registeredAt
              lastLogonAt
            }
            count
          }
        }
      `,
        });
    }
    catch (e) {
        dispatch({
            type: actions.load,
            list: stub_1.default,
        });
    }
});
exports.clear = () => ({
    type: actions.clear,
});
