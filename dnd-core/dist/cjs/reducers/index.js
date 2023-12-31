"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = reduce;
var _dragOffsetJs = require("./dragOffset.js");
var _dragOperationJs = require("./dragOperation.js");
var _refCountJs = require("./refCount.js");
var _dirtyHandlerIdsJs = require("./dirtyHandlerIds.js");
var _stateIdJs = require("./stateId.js");
var _jsUtilsJs = require("../utils/js_utils.js");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: (0, _dirtyHandlerIdsJs).reduce(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread({}, action.payload, {
                prevTargetIds: (0, _jsUtilsJs).get(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: (0, _dragOffsetJs).reduce(state.dragOffset, action),
        refCount: (0, _refCountJs).reduce(state.refCount, action),
        dragOperation: (0, _dragOperationJs).reduce(state.dragOperation, action),
        stateId: (0, _stateIdJs).reduce(state.stateId)
    };
}

//# sourceMappingURL=index.js.map