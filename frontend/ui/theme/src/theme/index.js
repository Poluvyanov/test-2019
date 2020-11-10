"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const borderRadius_1 = __importDefault(require("./borderRadius"));
const fontFamily_1 = __importDefault(require("./fontFamily"));
const fontSizes_1 = __importDefault(require("./fontSizes"));
const fontWeights_1 = __importDefault(require("./fontWeights"));
const colors_1 = __importDefault(require("./colors"));
const lineHeights_1 = __importDefault(require("./lineHeights"));
exports.theme = {
    borderRadius: borderRadius_1.default,
    fontFamily: fontFamily_1.default,
    fontSizes: fontSizes_1.default,
    fontWeights: fontWeights_1.default,
    colors: colors_1.default,
    lineHeights: lineHeights_1.default,
};
