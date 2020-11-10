"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_intl_1 = require("react-intl");
const layout_1 = require("@ui/layout");
const text_1 = require("@ui/text");
const messages_1 = __importDefault(require("../../messages"));
const List = ({ rows, intl }) => (<layout_1.Column>
    <layout_1.Layout basis={60}/>
    <layout_1.Row>
      <layout_1.Layout basis='10%'/>
      <text_1.Text weight='medium' size='l'>
        {intl.formatMessage(messages_1.default.users)}
      </text_1.Text>
      <layout_1.Layout basis='10%'/>
    </layout_1.Row>
    <layout_1.Layout basis={20}/>
    <layout_1.Row>
      <layout_1.Layout basis='10%'/>
      <layout_1.Layout basis={300}>
        <layout_1.Layout basis={8}/>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.name)}
        </text_1.Text>
      </layout_1.Layout>
      <layout_1.Layout basis={200}>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.email)}
        </text_1.Text>
      </layout_1.Layout>
      <layout_1.Layout basis={180}>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.registered)}
        </text_1.Text>
      </layout_1.Layout>
      <layout_1.Layout basis={160}>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.lastLogin)}
        </text_1.Text>
      </layout_1.Layout>
      <layout_1.Layout basis='10%'/>
    </layout_1.Row>
    <layout_1.Layout basis={8}/>
    {rows.map(({ id, profile, email, registeredAt, lastLogonAt }) => (<react_1.Fragment key={id}>
        <layout_1.Row>
          <layout_1.Layout basis='10%'/>
          <layout_1.Layout basis={8}/>
          <layout_1.Layout basis={280}>
            <text_1.Text size='s'>
              {profile.firstName}
              <text_1.Space />
              {profile.lastName}
            </text_1.Text>
          </layout_1.Layout>
          <layout_1.Layout basis={12}/>
          <layout_1.Layout basis={188}>
            <text_1.Text size='s'>{email}</text_1.Text>
          </layout_1.Layout>
          <layout_1.Layout basis={12}/>
          <layout_1.Layout basis={168}>
            <text_1.Text size='s'>{intl.formatDate(registeredAt)}</text_1.Text>
          </layout_1.Layout>
          <layout_1.Layout basis={12}/>
          <text_1.Text size='s'>
            {intl.formatDate(lastLogonAt)}
            <text_1.Space />
            {intl.formatMessage(messages_1.default.at)}
            <text_1.Space />
            {intl.formatTime(lastLogonAt)}
          </text_1.Text>
          <layout_1.Layout basis='10%'/>
        </layout_1.Row>
        <layout_1.Layout basis={12}/>
      </react_1.Fragment>))}
  </layout_1.Column>);
exports.default = react_intl_1.injectIntl(List);
