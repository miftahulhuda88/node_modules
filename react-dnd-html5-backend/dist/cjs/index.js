"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getEmptyImage", {
    enumerable: true,
    get: function() {
        return _getEmptyImageJs.getEmptyImage;
    }
});
exports.HTML5Backend = exports.NativeTypes = void 0;
var _html5BackendImplJs = require("./HTML5BackendImpl.js");
var _NativeTypes = _interopRequireWildcard(require("./NativeTypes.js"));
var _getEmptyImageJs = require("./getEmptyImage.js");
exports.NativeTypes = _NativeTypes;
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
const HTML5Backend = function createBackend(manager, context, options) {
    return new _html5BackendImplJs.HTML5BackendImpl(manager, context, options);
};
exports.HTML5Backend = HTML5Backend;

//# sourceMappingURL=index.js.map