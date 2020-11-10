"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const layout_1 = require("@ui/layout");
const header_1 = require("@ui/header");
const text_1 = require("@ui/text");
const link_1 = require("@ui/link");
const messages_1 = __importDefault(require("../../messages"));
const Header = ({ firstName, lastName, intl, onLogout }) => (<header_1.Header>
    <layout_1.Layout basis='10%'/>
    <link_1.RouteLink to='/profile' color='ebony' hoverColor='lightGray'>
      {firstName}
      <text_1.Space />
      {lastName}
    </link_1.RouteLink>
    <layout_1.Layout grow={1}/>
    <link_1.Link onClick={onLogout} size='s' weight='medium' hoverColor='blueBayoux'>
      {intl.formatMessage(messages_1.default.exit)}
    </link_1.Link>
    <layout_1.Layout basis='10%'/>
  </header_1.Header>);
exports.default = react_intl_1.injectIntl(Header);
