"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions = __importStar(require("../constants/security"));
exports.auth = ({ token, expiresIn }) => ({
    type: actions.auth,
    token,
    expiresIn,
});
exports.logout = () => ({
    type: actions.logout,
});
