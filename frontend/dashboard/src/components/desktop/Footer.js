"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const layout_1 = require("@ui/layout");
const text_1 = require("@ui/text");
const messages_1 = __importDefault(require("../../messages"));
const Footer = ({ intl }) => (<layout_1.Row basis={40}>
    <layout_1.Layout basis='10%'/>
    <text_1.Text>
      {'©'}
      <text_1.Space />
      {intl.formatDate(new Date(), { year: 'numeric' })}
      <text_1.Space />
      {intl.formatMessage(messages_1.default.copyright)}
    </text_1.Text>
  </layout_1.Row>);
exports.default = react_intl_1.injectIntl(Footer);
