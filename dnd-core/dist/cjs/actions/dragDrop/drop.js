"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDrop = createDrop;
var _invariant = require("@react-dnd/invariant");
var _typesJs = require("./types.js");
var _jsUtilsJs = require("../../utils/js_utils.js");
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
function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: _typesJs.DROP,
                payload: {
                    dropResult: _objectSpread({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    (0, _invariant).invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
    (0, _invariant).invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    (0, _invariant).invariant(typeof dropResult === 'undefined' || (0, _jsUtilsJs).isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

//# sourceMappingURL=drop.js.map