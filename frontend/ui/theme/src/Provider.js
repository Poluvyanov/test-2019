"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emotion_theming_1 = require("emotion-theming");
const react_1 = require("react");
const theme_1 = require("./theme");
exports.ThemeProvider = props => react_1.createElement(emotion_theming_1.ThemeProvider, Object.assign(Object.assign({}, props), { theme: theme_1.theme }));
