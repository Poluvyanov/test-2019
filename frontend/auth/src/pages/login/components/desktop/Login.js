"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_intl_1 = require("react-intl");
const layout_1 = require("@ui/layout");
const text_1 = require("@ui/text");
const input_1 = require("@ui/input");
const button_1 = require("@ui/button");
const link_1 = require("@ui/link");
const messages_1 = __importDefault(require("../../messages"));
const Login = ({ email, errors, intl, password, onChangeEmail, onChangePassword, onLogin, }) => (<layout_1.Column align='center'>
    <layout_1.Layout basis={60}/>
    <text_1.Text size='2xl' height='xs' weight='bold'>
      {intl.formatMessage(messages_1.default.entrance)}
    </text_1.Text>
    <layout_1.Layout basis={40}/>
    <layout_1.Row justify='center'>
      <layout_1.Layout basis={360}>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.mail)}
        </text_1.Text>
      </layout_1.Layout>
    </layout_1.Row>
    <layout_1.Layout basis={12}/>
    <layout_1.Row justify='center'>
      <layout_1.Layout basis={360}>
        <input_1.Input type='email' border='lightGray' error={errors.email} value={email} onChange={onChangeEmail} placeholder={intl.formatMessage(messages_1.default.enterEmail)}/>
      </layout_1.Layout>
    </layout_1.Row>
    <layout_1.Layout basis={24}/>
    <layout_1.Row justify='center'>
      <layout_1.Layout basis={360}>
        <text_1.Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages_1.default.password)}
        </text_1.Text>
      </layout_1.Layout>
    </layout_1.Row>
    <layout_1.Layout basis={12}/>
    <layout_1.Row justify='center'>
      <layout_1.Layout basis={360}>
        <input_1.Input type='password' border='lightGray' error={errors.password} value={password} onEnter={onLogin} onChange={onChangePassword} placeholder={intl.formatMessage(messages_1.default.enterPassword)}/>
      </layout_1.Layout>
    </layout_1.Row>
    <layout_1.Layout basis={24}/>
    <layout_1.Row justify='center'>
      <layout_1.Layout basis={360}>
        <button_1.Button text disabled={!email || !password} onClick={onLogin}>
          {intl.formatMessage(messages_1.default.login)}
        </button_1.Button>
      </layout_1.Layout>
    </layout_1.Row>
    <layout_1.Layout basis={16}/>
    <link_1.RouteLink to='/auth/registration' size='s' height='xs' weight='medium' color='black' hoverColor='blueBayoux'>
      {intl.formatMessage(messages_1.default.registration)}
    </link_1.RouteLink>
  </layout_1.Column>);
exports.default = react_intl_1.injectIntl(Login);
