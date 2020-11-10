"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobile_detect_1 = __importDefault(require("mobile-detect"));
const device = new mobile_detect_1.default(window.navigator.userAgent);
if (device.phone()) {
    Promise.resolve().then(() => __importStar(require('./mobile')));
}
else {
    Promise.resolve().then(() => __importStar(require('./desktop')));
}
