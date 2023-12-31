"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateYupSchemaSync = exports.validateYupSchema = exports.handleYupError = exports.StrapiIDSchema = exports.yup = void 0;
/* eslint-disable no-template-curly-in-string */
const yup = __importStar(require("yup"));
const lodash_1 = __importDefault(require("lodash"));
const fp_1 = require("lodash/fp");
const utils = __importStar(require("./string-formatting"));
const errors_1 = require("./errors");
const print_value_1 = __importDefault(require("./print-value"));
const MixedSchemaType = yup.MixedSchema;
const isNotNilTest = (value) => !lodash_1.default.isNil(value);
const isNotNullTest = (value) => !lodash_1.default.isNull(value);
yup.addMethod(yup.mixed, 'notNil', function isNotNill(msg = '${path} must be defined.') {
    return this.test('defined', msg, isNotNilTest);
});
yup.addMethod(yup.mixed, 'notNull', function isNotNull(msg = '${path} cannot be null.') {
    return this.test('defined', msg, isNotNullTest);
});
yup.addMethod(yup.mixed, 'isFunction', function isFunction(message = '${path} is not a function') {
    return this.test('is a function', message, (value) => lodash_1.default.isUndefined(value) || lodash_1.default.isFunction(value));
});
yup.addMethod(yup.string, 'isCamelCase', function isCamelCase(message = '${path} is not in camel case (anExampleOfCamelCase)') {
    return this.test('is in camelCase', message, (value) => value ? utils.isCamelCase(value) : true);
});
yup.addMethod(yup.string, 'isKebabCase', function isKebabCase(message = '${path} is not in kebab case (an-example-of-kebab-case)') {
    return this.test('is in kebab-case', message, (value) => value ? utils.isKebabCase(value) : true);
});
yup.addMethod(yup.object, 'onlyContainsFunctions', function onlyContainsFunctions(message = '${path} contains values that are not functions') {
    return this.test('only contains functions', message, (value) => lodash_1.default.isUndefined(value) || (value && Object.values(value).every(lodash_1.default.isFunction)));
});
class StrapiIDSchema extends MixedSchemaType {
    constructor() {
        super({ type: 'strapiID' });
    }
    _typeCheck(value) {
        return typeof value === 'string' || ((0, fp_1.isNumber)(value) && (0, fp_1.isInteger)(value) && value >= 0);
    }
}
exports.StrapiIDSchema = StrapiIDSchema;
const handleYupError = (error, errorMessage) => {
    throw new errors_1.YupValidationError(error, errorMessage);
};
exports.handleYupError = handleYupError;
const defaultValidationParam = { strict: true, abortEarly: false };
const validateYupSchema = (schema, options = {}) => async (body, errorMessage) => {
    try {
        const optionsWithDefaults = (0, fp_1.defaults)(defaultValidationParam, options);
        const result = await schema.validate(body, optionsWithDefaults);
        return result;
    }
    catch (e) {
        if (e instanceof yup.ValidationError) {
            handleYupError(e, errorMessage);
        }
        throw e;
    }
};
exports.validateYupSchema = validateYupSchema;
const validateYupSchemaSync = (schema, options = {}) => (body, errorMessage) => {
    try {
        const optionsWithDefaults = (0, fp_1.defaults)(defaultValidationParam, options);
        return schema.validateSync(body, optionsWithDefaults);
    }
    catch (e) {
        if (e instanceof yup.ValidationError) {
            handleYupError(e, errorMessage);
        }
        throw e;
    }
};
exports.validateYupSchemaSync = validateYupSchemaSync;
// Temporary fix of this issue : https://github.com/jquense/yup/issues/616
yup.setLocale({
    mixed: {
        notType(options) {
            const { path, type, value, originalValue } = options;
            const isCast = originalValue != null && originalValue !== value;
            const msg = `${path} must be a \`${type}\` type, ` +
                `but the final value was: \`${(0, print_value_1.default)(value, true)}\`${isCast ? ` (cast from the value \`${(0, print_value_1.default)(originalValue, true)}\`).` : '.'}`;
            /* Remove comment that is not supposed to be seen by the enduser
            if (value === null) {
              msg += `\n If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
            }
            */
            return msg;
        },
    },
});
const customYup = Object.assign(yup, {
    strapiID: () => new StrapiIDSchema(),
});
exports.yup = customYup;
//# sourceMappingURL=validators.js.map