"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOperator = exports.isOperatorOfType = void 0;
const GROUP_OPERATORS = ['$and', '$or'];
const WHERE_OPERATORS = [
    '$not',
    '$in',
    '$notIn',
    '$eq',
    '$eqi',
    '$ne',
    '$gt',
    '$gte',
    '$lt',
    '$lte',
    '$null',
    '$notNull',
    '$between',
    '$startsWith',
    '$endsWith',
    '$startsWithi',
    '$endsWithi',
    '$contains',
    '$notContains',
    '$containsi',
    '$notContainsi',
];
const CAST_OPERATORS = [
    '$not',
    '$in',
    '$notIn',
    '$eq',
    '$ne',
    '$gt',
    '$gte',
    '$lt',
    '$lte',
    '$between',
];
const ARRAY_OPERATORS = ['$in', '$notIn', '$between'];
const OPERATORS = {
    where: WHERE_OPERATORS,
    cast: CAST_OPERATORS,
    group: GROUP_OPERATORS,
    array: ARRAY_OPERATORS,
};
// for performance, cache all operators in lowercase
const OPERATORS_LOWERCASE = Object.fromEntries(Object.entries(OPERATORS).map(([key, values]) => [
    key,
    values.map((value) => value.toLowerCase()),
]));
const isObjKey = (key, obj) => {
    return key in obj;
};
const isOperatorOfType = (type, key, ignoreCase = false) => {
    if (ignoreCase) {
        return OPERATORS_LOWERCASE[type]?.includes(key.toLowerCase()) ?? false;
    }
    if (isObjKey(type, OPERATORS)) {
        return OPERATORS[type]?.includes(key) ?? false;
    }
    return false;
};
exports.isOperatorOfType = isOperatorOfType;
const isOperator = (key, ignoreCase = false) => {
    return Object.keys(OPERATORS).some((type) => (0, exports.isOperatorOfType)(type, key, ignoreCase));
};
exports.isOperator = isOperator;
//# sourceMappingURL=operators.js.map