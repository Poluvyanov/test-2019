"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("../../pages/login/containers/desktop/Login"));
const Registration_1 = __importDefault(require("../../pages/registration/containers/desktop/Registration"));
const Auth = () => (<react_router_dom_1.Switch>
    <react_router_dom_1.Route path='/auth/registration' component={Registration_1.default}/>
    <react_router_dom_1.Route path='/auth' component={Login_1.default}/>
  </react_router_dom_1.Switch>);
exports.default = Auth;
