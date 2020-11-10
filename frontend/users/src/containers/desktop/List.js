"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const recompose_1 = require("recompose");
const list_1 = require("../../actions/list");
const List_1 = __importDefault(require("../../components/desktop/List"));
const enhance = recompose_1.lifecycle({
    componentDidMount() {
        this.props.onLoad();
    },
});
exports.default = react_redux_1.connect(state => ({
    rows: state.users.list.rows,
}), dispatch => ({
    onLoad: () => dispatch(list_1.load()),
}))(enhance(List_1.default));
