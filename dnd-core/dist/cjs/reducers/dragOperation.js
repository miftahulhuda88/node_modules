"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = reduce;
var _indexJs = require("../actions/dragDrop/index.js");
var _registryJs = require("../actions/registry.js");
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
const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case _indexJs.BEGIN_DRAG:
            return _objectSpread({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case _indexJs.PUBLISH_DRAG_SOURCE:
            return _objectSpread({}, state, {
                isSourcePublic: true
            });
        case _indexJs.HOVER:
            return _objectSpread({}, state, {
                targetIds: payload.targetIds
            });
        case _registryJs.REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread({}, state, {
                targetIds: (0, _jsUtilsJs).without(state.targetIds, payload.targetId)
            });
        case _indexJs.DROP:
            return _objectSpread({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case _indexJs.END_DRAG:
            return _objectSpread({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

//# sourceMappingURL=dragOperation.js.map