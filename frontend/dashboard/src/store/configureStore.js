"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_persist_1 = require("redux-persist");
const react_router_redux_1 = require("react-router-redux");
const reducers_1 = __importDefault(require("../reducers"));
const api_1 = __importDefault(require("./middleware/api"));
const configureStore = (initialState, history) => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
    const enhancer = composeEnhancers(redux_1.applyMiddleware(react_router_redux_1.routerMiddleware(history), api_1.default(history)));
    const store = redux_1.createStore(reducers_1.default, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(reducers_1.default));
    }
    const persistor = redux_persist_1.persistStore(store);
    return {
        persistor,
        store,
    };
};
exports.default = configureStore;
