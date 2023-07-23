"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultLightThemeOption = void 0;
var _view = require("@codemirror/view");
var defaultLightThemeOption = _view.EditorView.theme({
  '&': {
    backgroundColor: '#fff'
  }
}, {
  dark: false
});
exports.defaultLightThemeOption = defaultLightThemeOption;