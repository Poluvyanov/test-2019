"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const jest_emotion_1 = __importDefault(require("jest-emotion"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const theme_1 = require("@ui/theme");
const index_1 = require("../index");
expect.addSnapshotSerializer(jest_emotion_1.default);
describe('Layout', () => {
    describe('column snapshot', () => {
        it('should match latest column render snapshot', () => {
            const column = react_test_renderer_1.default
                .create(<theme_1.ThemeProvider>
            <index_1.Column />
          </theme_1.ThemeProvider>)
                .toJSON();
            expect(column).toMatchSnapshot();
        });
        it('should match latest column fill render snapshot', () => {
            const column = react_test_renderer_1.default
                .create(<theme_1.ThemeProvider>
            <index_1.Column fill/>
          </theme_1.ThemeProvider>)
                .toJSON();
            expect(column).toMatchSnapshot();
        });
    });
    describe('layout snapshot', () => {
        it('should match latest layout render snapshot', () => {
            const layout = react_test_renderer_1.default
                .create(<theme_1.ThemeProvider>
            <index_1.Layout justify='center' align='center' basis='xl' grow={1} shrink={1}/>
          </theme_1.ThemeProvider>)
                .toJSON();
            expect(layout).toMatchSnapshot();
        });
    });
});
