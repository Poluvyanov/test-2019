"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const layout_1 = require("@ui/layout");
const Footer_1 = __importDefault(require("../../components/desktop/Footer"));
const Header_1 = __importDefault(require("./Header"));
const App = ({ children }) => (<layout_1.Column fill>
    <Header_1.default />
    <layout_1.Layout grow={1}>{children}</layout_1.Layout>
    <Footer_1.default />
  </layout_1.Column>);
exports.default = App;
