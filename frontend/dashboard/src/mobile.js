"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const history_1 = require("history");
const Root_1 = __importDefault(require("./containers/desktop/Root"));
require("./index.css");
const history = history_1.createBrowserHistory();
react_dom_1.render(<Root_1.default history={history}/>, document.getElementById('app'));
