"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const init_1 = require("../actions/init");
class Preload extends react_1.Component {
    componentDidMount() {
        const { token, onInit, onAuth, onMain } = this.props;
        if (!!token) {
            onInit();
        }
        else if (!/^\/auth/.test(window.location.pathname)) {
            onAuth();
        }
        if (token && /^\/auth/.test(window.location.pathname)) {
            onMain();
        }
    }
    componentDidUpdate(prevProps) {
        const { token, onMain, onInit, onAuth } = this.props;
        if (!prevProps.token && token) {
            onMain();
            onInit();
        }
        if (prevProps.token && !token) {
            onAuth();
        }
    }
    render() {
        const { children } = this.props;
        return children;
    }
}
exports.default = react_redux_1.connect(state => ({
    token: state.security.token,
}), (dispatch, { history }) => ({
    onInit: () => dispatch(init_1.init()),
    onAuth: () => history.replace('/auth'),
    onMain: () => history.replace('/'),
}))(Preload);
