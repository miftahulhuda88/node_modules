"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplyUnsignedRoundingMode = void 0;
function ApplyUnsignedRoundingMode(x, r1, r2, unsignedRoundingMode) {
    if (x === r1)
        return r1;
    if (unsignedRoundingMode === undefined) {
        throw new Error('unsignedRoundingMode is mandatory');
    }
    if (unsignedRoundingMode === 'zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'infinity') {
        return r2;
    }
    var d1 = x - r1;
    var d2 = r2 - x;
    if (d1 < d2) {
        return r1;
    }
    if (d2 < d1) {
        return r2;
    }
    if (d1 !== d2) {
        throw new Error('Unexpected error');
    }
    if (unsignedRoundingMode === 'half-zero') {
        return r1;
    }
    if (unsignedRoundingMode === 'half-infinity') {
        return r2;
    }
    if (unsignedRoundingMode !== 'half-even') {
        throw new Error("Unexpected value for unsignedRoundingMode: ".concat(unsignedRoundingMode));
    }
    var cardinality = (r1 / (r2 - r1)) % 2;
    if (cardinality === 0) {
        return r1;
    }
    return r2;
}
exports.ApplyUnsignedRoundingMode = ApplyUnsignedRoundingMode;
