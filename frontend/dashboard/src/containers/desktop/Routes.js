"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const auth_1 = require("@aunited/auth");
const users_1 = require("@aunited/users");
const App_1 = __importDefault(require("./App"));
const Routes = () => (<react_router_dom_1.Switch>
    <react_router_dom_1.Route path='/auth' component={auth_1.AuthDesktop}/>
    <App_1.default>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route path='/' exact component={users_1.ListDesktop}/>
      </react_router_dom_1.Switch>
    </App_1.default>
  </react_router_dom_1.Switch>);
exports.default = Routes;
