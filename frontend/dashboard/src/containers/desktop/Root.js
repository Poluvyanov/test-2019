"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_2 = require("redux-persist/es/integration/react");
const react_hot_loader_1 = require("react-hot-loader");
const react_router_dom_1 = require("react-router-dom");
const theme_1 = require("@ui/theme");
const IntlProvider_1 = __importDefault(require("../IntlProvider"));
const Preload_1 = __importDefault(require("../Preload"));
const Routes_1 = __importDefault(require("./Routes"));
const Root = ({ store, persistor, history }) => (<react_redux_1.Provider store={store}>
    <react_2.PersistGate persistor={persistor}>
      <Preload_1.default history={history}>
        <IntlProvider_1.default>
          <theme_1.ThemeProvider>
            <react_router_dom_1.Router history={history}>
              <Routes_1.default />
            </react_router_dom_1.Router>
          </theme_1.ThemeProvider>
        </IntlProvider_1.default>
      </Preload_1.default>
    </react_2.PersistGate>
  </react_redux_1.Provider>);
exports.default = react_hot_loader_1.hot(module)(Root);
