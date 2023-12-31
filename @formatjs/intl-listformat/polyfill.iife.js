(() => {
  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/tslib@2.4.0/node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/262.js
  function ToString(o) {
    if (typeof o === "symbol") {
      throw TypeError("Cannot convert a Symbol value to a string");
    }
    return String(o);
  }
  function ToObject(arg) {
    if (arg == null) {
      throw new TypeError("undefined/null cannot be converted to object");
    }
    return Object(arg);
  }
  var MINUTES_PER_HOUR = 60;
  var SECONDS_PER_MINUTE = 60;
  var MS_PER_SECOND = 1e3;
  var MS_PER_MINUTE = MS_PER_SECOND * SECONDS_PER_MINUTE;
  var MS_PER_HOUR = MS_PER_MINUTE * MINUTES_PER_HOUR;

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetOption.js
  function GetOption(opts, prop, type, values, fallback) {
    if (typeof opts !== "object") {
      throw new TypeError("Options must be an object");
    }
    var value = opts[prop];
    if (value !== void 0) {
      if (type !== "boolean" && type !== "string") {
        throw new TypeError("invalid type");
      }
      if (type === "boolean") {
        value = Boolean(value);
      }
      if (type === "string") {
        value = ToString(value);
      }
      if (values !== void 0 && !values.filter(function(val) {
        return val == value;
      }).length) {
        throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
      }
      return value;
    }
    return fallback;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/GetOptionsObject.js
  function GetOptionsObject(options) {
    if (typeof options === "undefined") {
      return /* @__PURE__ */ Object.create(null);
    }
    if (typeof options === "object") {
      return options;
    }
    throw new TypeError("Options must be an object");
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/IsSanctionedSimpleUnitIdentifier.js
  var SANCTIONED_UNITS = [
    "angle-degree",
    "area-acre",
    "area-hectare",
    "concentr-percent",
    "digital-bit",
    "digital-byte",
    "digital-gigabit",
    "digital-gigabyte",
    "digital-kilobit",
    "digital-kilobyte",
    "digital-megabit",
    "digital-megabyte",
    "digital-petabyte",
    "digital-terabit",
    "digital-terabyte",
    "duration-day",
    "duration-hour",
    "duration-millisecond",
    "duration-minute",
    "duration-month",
    "duration-second",
    "duration-week",
    "duration-year",
    "length-centimeter",
    "length-foot",
    "length-inch",
    "length-kilometer",
    "length-meter",
    "length-mile-scandinavian",
    "length-mile",
    "length-millimeter",
    "length-yard",
    "mass-gram",
    "mass-kilogram",
    "mass-ounce",
    "mass-pound",
    "mass-stone",
    "temperature-celsius",
    "temperature-fahrenheit",
    "volume-fluid-ounce",
    "volume-gallon",
    "volume-liter",
    "volume-milliliter"
  ];
  function removeUnitNamespace(unit) {
    return unit.slice(unit.indexOf("-") + 1);
  }
  var SIMPLE_UNITS = SANCTIONED_UNITS.map(removeUnitNamespace);

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/utils.js
  function setInternalSlot(map, pl, field, value) {
    if (!map.get(pl)) {
      map.set(pl, /* @__PURE__ */ Object.create(null));
    }
    var slots = map.get(pl);
    slots[field] = value;
  }
  function getInternalSlot(map, pl, field) {
    return getMultiInternalSlots(map, pl, field)[field];
  }
  function getMultiInternalSlots(map, pl) {
    var fields = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      fields[_i - 2] = arguments[_i];
    }
    var slots = map.get(pl);
    if (!slots) {
      throw new TypeError("".concat(pl, " InternalSlot has not been initialized"));
    }
    return fields.reduce(function(all, f) {
      all[f] = slots[f];
      return all;
    }, /* @__PURE__ */ Object.create(null));
  }
  function isLiteralPart(patternPart) {
    return patternPart.type === "literal";
  }
  function invariant(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/regex.generated.js
  var S_UNICODE_REGEX = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC1\uFDFC\uFDFD\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDE8\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEE0-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDD78\uDD7A-\uDDCB\uDDCD-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6\uDF00-\uDF92\uDF94-\uDFCA]/;

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/NumberFormat/format_to_parts.js
  var CARET_S_UNICODE_REGEX = new RegExp("^".concat(S_UNICODE_REGEX.source));
  var S_DOLLAR_UNICODE_REGEX = new RegExp("".concat(S_UNICODE_REGEX.source, "$"));

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/CanonicalizeLocaleList.js
  function CanonicalizeLocaleList2(locales) {
    return Intl.getCanonicalLocales(locales);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/utils.js
  var UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
  function invariant2(condition, message, Err) {
    if (Err === void 0) {
      Err = Error;
    }
    if (!condition) {
      throw new Err(message);
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestAvailableLocale.js
  function BestAvailableLocale(availableLocales, locale) {
    var candidate = locale;
    while (true) {
      if (availableLocales.has(candidate)) {
        return candidate;
      }
      var pos = candidate.lastIndexOf("-");
      if (!~pos) {
        return void 0;
      }
      if (pos >= 2 && candidate[pos - 2] === "-") {
        pos -= 2;
      }
      candidate = candidate.slice(0, pos);
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupMatcher.js
  function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var result = { locale: "" };
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        result.locale = availableLocale;
        if (locale !== noExtensionLocale) {
          result.extension = locale.slice(noExtensionLocale.length + 1, locale.length);
        }
        return result;
      }
    }
    result.locale = getDefaultLocale();
    return result;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/BestFitMatcher.js
  function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
    var minimizedAvailableLocaleMap = {};
    var availableLocaleMap = {};
    var canonicalizedLocaleMap = {};
    var minimizedAvailableLocales = /* @__PURE__ */ new Set();
    availableLocales.forEach(function(locale2) {
      var minimizedLocale = new Intl.Locale(locale2).minimize().toString();
      var canonicalizedLocale = Intl.getCanonicalLocales(locale2)[0] || locale2;
      minimizedAvailableLocaleMap[minimizedLocale] = locale2;
      availableLocaleMap[locale2] = locale2;
      canonicalizedLocaleMap[canonicalizedLocale] = locale2;
      minimizedAvailableLocales.add(minimizedLocale);
      minimizedAvailableLocales.add(locale2);
      minimizedAvailableLocales.add(canonicalizedLocale);
    });
    var foundLocale;
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var l = requestedLocales_1[_i];
      if (foundLocale) {
        break;
      }
      var noExtensionLocale = l.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      if (availableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      if (minimizedAvailableLocales.has(noExtensionLocale)) {
        foundLocale = noExtensionLocale;
        break;
      }
      var locale = new Intl.Locale(noExtensionLocale);
      var maximizedRequestedLocale = locale.maximize().toString();
      var minimizedRequestedLocale = locale.minimize().toString();
      if (minimizedAvailableLocales.has(minimizedRequestedLocale)) {
        foundLocale = minimizedRequestedLocale;
        break;
      }
      foundLocale = BestAvailableLocale(minimizedAvailableLocales, maximizedRequestedLocale);
    }
    if (!foundLocale) {
      return { locale: getDefaultLocale() };
    }
    return {
      locale: availableLocaleMap[foundLocale] || canonicalizedLocaleMap[foundLocale] || minimizedAvailableLocaleMap[foundLocale] || foundLocale
    };
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/UnicodeExtensionValue.js
  function UnicodeExtensionValue(extension, key) {
    invariant2(key.length === 2, "key must have 2 elements");
    var size = extension.length;
    var searchValue = "-".concat(key, "-");
    var pos = extension.indexOf(searchValue);
    if (pos !== -1) {
      var start = pos + 4;
      var end = start;
      var k = start;
      var done = false;
      while (!done) {
        var e = extension.indexOf("-", k);
        var len = void 0;
        if (e === -1) {
          len = size - k;
        } else {
          len = e - k;
        }
        if (len === 2) {
          done = true;
        } else if (e === -1) {
          end = size;
          done = true;
        } else {
          end = e;
          k = e + 1;
        }
      }
      return extension.slice(start, end);
    }
    searchValue = "-".concat(key);
    pos = extension.indexOf(searchValue);
    if (pos !== -1 && pos + 3 === size) {
      return "";
    }
    return void 0;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/ResolveLocale.js
  function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
    var matcher = options.localeMatcher;
    var r;
    if (matcher === "lookup") {
      r = LookupMatcher(availableLocales, requestedLocales, getDefaultLocale);
    } else {
      r = BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale);
    }
    var foundLocale = r.locale;
    var result = { locale: "", dataLocale: foundLocale };
    var supportedExtension = "-u";
    for (var _i = 0, relevantExtensionKeys_1 = relevantExtensionKeys; _i < relevantExtensionKeys_1.length; _i++) {
      var key = relevantExtensionKeys_1[_i];
      invariant2(foundLocale in localeData, "Missing locale data for ".concat(foundLocale));
      var foundLocaleData = localeData[foundLocale];
      invariant2(typeof foundLocaleData === "object" && foundLocaleData !== null, "locale data ".concat(key, " must be an object"));
      var keyLocaleData = foundLocaleData[key];
      invariant2(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
      var value = keyLocaleData[0];
      invariant2(typeof value === "string" || value === null, "value must be string or null but got ".concat(typeof value, " in key ").concat(key));
      var supportedExtensionAddition = "";
      if (r.extension) {
        var requestedValue = UnicodeExtensionValue(r.extension, key);
        if (requestedValue !== void 0) {
          if (requestedValue !== "") {
            if (~keyLocaleData.indexOf(requestedValue)) {
              value = requestedValue;
              supportedExtensionAddition = "-".concat(key, "-").concat(value);
            }
          } else if (~requestedValue.indexOf("true")) {
            value = "true";
            supportedExtensionAddition = "-".concat(key);
          }
        }
      }
      if (key in options) {
        var optionsValue = options[key];
        invariant2(typeof optionsValue === "string" || typeof optionsValue === "undefined" || optionsValue === null, "optionsValue must be String, Undefined or Null");
        if (~keyLocaleData.indexOf(optionsValue)) {
          if (optionsValue !== value) {
            value = optionsValue;
            supportedExtensionAddition = "";
          }
        }
      }
      result[key] = value;
      supportedExtension += supportedExtensionAddition;
    }
    if (supportedExtension.length > 2) {
      var privateIndex = foundLocale.indexOf("-x-");
      if (privateIndex === -1) {
        foundLocale = foundLocale + supportedExtension;
      } else {
        var preExtension = foundLocale.slice(0, privateIndex);
        var postExtension = foundLocale.slice(privateIndex, foundLocale.length);
        foundLocale = preExtension + supportedExtension + postExtension;
      }
      foundLocale = Intl.getCanonicalLocales(foundLocale)[0];
    }
    result.locale = foundLocale;
    return result;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/abstract/LookupSupportedLocales.js
  function LookupSupportedLocales(availableLocales, requestedLocales) {
    var subset = [];
    for (var _i = 0, requestedLocales_1 = requestedLocales; _i < requestedLocales_1.length; _i++) {
      var locale = requestedLocales_1[_i];
      var noExtensionLocale = locale.replace(UNICODE_EXTENSION_SEQUENCE_REGEX, "");
      var availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
      if (availableLocale) {
        subset.push(availableLocale);
      }
    }
    return subset;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+intl-localematcher@0.0.0/node_modules/@formatjs/intl-localematcher/lib/index.js
  function match(requestedLocales, availableLocales, defaultLocale, opts) {
    var locales = availableLocales.reduce(function(all, l) {
      all.add(l);
      return all;
    }, /* @__PURE__ */ new Set());
    return ResolveLocale(locales, CanonicalizeLocaleList2(requestedLocales), {
      localeMatcher: (opts === null || opts === void 0 ? void 0 : opts.algorithm) || "best fit"
    }, [], {}, function() {
      return defaultLocale;
    }).locale;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/PartitionPattern.js
  function PartitionPattern(pattern) {
    var result = [];
    var beginIndex = pattern.indexOf("{");
    var endIndex = 0;
    var nextIndex = 0;
    var length = pattern.length;
    while (beginIndex < pattern.length && beginIndex > -1) {
      endIndex = pattern.indexOf("}", beginIndex);
      invariant(endIndex > beginIndex, "Invalid pattern ".concat(pattern));
      if (beginIndex > nextIndex) {
        result.push({
          type: "literal",
          value: pattern.substring(nextIndex, beginIndex)
        });
      }
      result.push({
        type: pattern.substring(beginIndex + 1, endIndex),
        value: void 0
      });
      nextIndex = endIndex + 1;
      beginIndex = pattern.indexOf("{", nextIndex);
    }
    if (nextIndex < length) {
      result.push({
        type: "literal",
        value: pattern.substring(nextIndex, length)
      });
    }
    return result;
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/SupportedLocales.js
  function SupportedLocales(availableLocales, requestedLocales, options) {
    var matcher = "best fit";
    if (options !== void 0) {
      options = ToObject(options);
      matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
    }
    if (matcher === "best fit") {
      return LookupSupportedLocales(availableLocales, requestedLocales);
    }
    return LookupSupportedLocales(availableLocales, requestedLocales);
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/data.js
  var MissingLocaleDataError = (
    /** @class */
    function(_super) {
      __extends(MissingLocaleDataError2, _super);
      function MissingLocaleDataError2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = "MISSING_LOCALE_DATA";
        return _this;
      }
      return MissingLocaleDataError2;
    }(Error)
  );

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/node_modules/.aspect_rules_js/@formatjs+ecma402-abstract@0.0.0/node_modules/@formatjs/ecma402-abstract/lib/types/date-time.js
  var RangePatternType;
  (function(RangePatternType2) {
    RangePatternType2["startRange"] = "startRange";
    RangePatternType2["shared"] = "shared";
    RangePatternType2["endRange"] = "endRange";
  })(RangePatternType || (RangePatternType = {}));

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/index.js
  function validateInstance(instance, method) {
    if (!(instance instanceof ListFormat)) {
      throw new TypeError("Method Intl.ListFormat.prototype.".concat(method, " called on incompatible receiver ").concat(String(instance)));
    }
  }
  function stringListFromIterable(list) {
    if (list === void 0) {
      return [];
    }
    var result = [];
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
      var el = list_1[_i];
      if (typeof el !== "string") {
        throw new TypeError("array list[".concat(list.indexOf(el), "] is not type String"));
      }
      result.push(el);
    }
    return result;
  }
  function createPartsFromList(internalSlotMap, lf, list) {
    var size = list.length;
    if (size === 0) {
      return [];
    }
    if (size === 2) {
      var pattern = getInternalSlot(internalSlotMap, lf, "templatePair");
      var first = { type: "element", value: list[0] };
      var second = { type: "element", value: list[1] };
      return deconstructPattern(pattern, { "0": first, "1": second });
    }
    var last = {
      type: "element",
      value: list[size - 1]
    };
    var parts = last;
    var i = size - 2;
    while (i >= 0) {
      var pattern = void 0;
      if (i === 0) {
        pattern = getInternalSlot(internalSlotMap, lf, "templateStart");
      } else if (i < size - 2) {
        pattern = getInternalSlot(internalSlotMap, lf, "templateMiddle");
      } else {
        pattern = getInternalSlot(internalSlotMap, lf, "templateEnd");
      }
      var head = { type: "element", value: list[i] };
      parts = deconstructPattern(pattern, { "0": head, "1": parts });
      i--;
    }
    return parts;
  }
  function deconstructPattern(pattern, placeables) {
    var patternParts = PartitionPattern(pattern);
    var result = [];
    for (var _i = 0, patternParts_1 = patternParts; _i < patternParts_1.length; _i++) {
      var patternPart = patternParts_1[_i];
      var part = patternPart.type;
      if (isLiteralPart(patternPart)) {
        result.push({
          type: "literal",
          value: patternPart.value
        });
      } else {
        invariant(part in placeables, "".concat(part, " is missing from placables"));
        var subst = placeables[part];
        if (Array.isArray(subst)) {
          result.push.apply(result, subst);
        } else {
          result.push(subst);
        }
      }
    }
    return result;
  }
  var ListFormat = (
    /** @class */
    function() {
      function ListFormat2(locales, options) {
        var newTarget = this && this instanceof ListFormat2 ? this.constructor : void 0;
        if (!newTarget) {
          throw new TypeError("Intl.ListFormat must be called with 'new'");
        }
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "initializedListFormat", true);
        var requestedLocales = CanonicalizeLocaleList(locales);
        var opt = /* @__PURE__ */ Object.create(null);
        var opts = GetOptionsObject(options);
        var matcher = GetOption(opts, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        opt.localeMatcher = matcher;
        var localeData = ListFormat2.localeData;
        var r = ResolveLocale(ListFormat2.availableLocales, requestedLocales, opt, ListFormat2.relevantExtensionKeys, localeData, ListFormat2.getDefaultLocale);
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "locale", r.locale);
        var type = GetOption(opts, "type", "string", ["conjunction", "disjunction", "unit"], "conjunction");
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "type", type);
        var style = GetOption(opts, "style", "string", ["long", "short", "narrow"], "long");
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "style", style);
        var dataLocale = r.dataLocale;
        var dataLocaleData = localeData[dataLocale];
        invariant(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
        var dataLocaleTypes = dataLocaleData[type];
        var templates = dataLocaleTypes[style];
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templatePair", templates.pair);
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateStart", templates.start);
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateMiddle", templates.middle);
        setInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "templateEnd", templates.end);
      }
      ListFormat2.prototype.format = function(elements) {
        validateInstance(this, "format");
        var result = "";
        var parts = createPartsFromList(ListFormat2.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(elements));
        if (!Array.isArray(parts)) {
          return parts.value;
        }
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
          var p = parts_1[_i];
          result += p.value;
        }
        return result;
      };
      ListFormat2.prototype.formatToParts = function(elements) {
        validateInstance(this, "format");
        var parts = createPartsFromList(ListFormat2.__INTERNAL_SLOT_MAP__, this, stringListFromIterable(elements));
        if (!Array.isArray(parts)) {
          return [parts];
        }
        var result = [];
        for (var _i = 0, parts_2 = parts; _i < parts_2.length; _i++) {
          var part = parts_2[_i];
          result.push(__assign({}, part));
        }
        return result;
      };
      ListFormat2.prototype.resolvedOptions = function() {
        validateInstance(this, "resolvedOptions");
        return {
          locale: getInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "locale"),
          type: getInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "type"),
          style: getInternalSlot(ListFormat2.__INTERNAL_SLOT_MAP__, this, "style")
        };
      };
      ListFormat2.supportedLocalesOf = function(locales, options) {
        return SupportedLocales(ListFormat2.availableLocales, CanonicalizeLocaleList(locales), options);
      };
      ListFormat2.__addLocaleData = function() {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          data[_i] = arguments[_i];
        }
        for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
          var _b = data_1[_a], d = _b.data, locale = _b.locale;
          var minimizedLocale = new Intl.Locale(locale).minimize().toString();
          ListFormat2.localeData[locale] = ListFormat2.localeData[minimizedLocale] = d;
          ListFormat2.availableLocales.add(minimizedLocale);
          ListFormat2.availableLocales.add(locale);
          if (!ListFormat2.__defaultLocale) {
            ListFormat2.__defaultLocale = minimizedLocale;
          }
        }
      };
      ListFormat2.getDefaultLocale = function() {
        return ListFormat2.__defaultLocale;
      };
      ListFormat2.localeData = {};
      ListFormat2.availableLocales = /* @__PURE__ */ new Set();
      ListFormat2.__defaultLocale = "";
      ListFormat2.relevantExtensionKeys = [];
      ListFormat2.polyfilled = true;
      ListFormat2.__INTERNAL_SLOT_MAP__ = /* @__PURE__ */ new WeakMap();
      return ListFormat2;
    }()
  );
  var lib_default = ListFormat;
  try {
    if (typeof Symbol !== "undefined") {
      Object.defineProperty(ListFormat.prototype, Symbol.toStringTag, {
        value: "Intl.ListFormat",
        writable: false,
        enumerable: false,
        configurable: true
      });
    }
    Object.defineProperty(ListFormat.prototype.constructor, "length", {
      value: 0,
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ListFormat.supportedLocalesOf, "length", {
      value: 1,
      writable: false,
      enumerable: false,
      configurable: true
    });
  } catch (e) {
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/supported-locales.generated.js
  var supportedLocales = ["af", "af-NA", "agq", "ak", "am", "ar", "ar-AE", "ar-BH", "ar-DJ", "ar-DZ", "ar-EG", "ar-EH", "ar-ER", "ar-IL", "ar-IQ", "ar-JO", "ar-KM", "ar-KW", "ar-LB", "ar-LY", "ar-MA", "ar-MR", "ar-OM", "ar-PS", "ar-QA", "ar-SA", "ar-SD", "ar-SO", "ar-SS", "ar-SY", "ar-TD", "ar-TN", "ar-YE", "as", "asa", "ast", "az", "az-Cyrl", "az-Latn", "bas", "be", "be-tarask", "bem", "bez", "bg", "bm", "bn", "bn-IN", "bo", "bo-IN", "br", "brx", "bs", "bs-Cyrl", "bs-Latn", "ca", "ca-AD", "ca-ES-valencia", "ca-FR", "ca-IT", "ccp", "ccp-IN", "ce", "ceb", "cgg", "chr", "ckb", "ckb-IR", "cs", "cy", "da", "da-GL", "dav", "de", "de-AT", "de-BE", "de-CH", "de-IT", "de-LI", "de-LU", "dje", "doi", "dsb", "dua", "dyo", "dz", "ebu", "ee", "ee-TG", "el", "el-CY", "en", "en-001", "en-150", "en-AE", "en-AG", "en-AI", "en-AS", "en-AT", "en-AU", "en-BB", "en-BE", "en-BI", "en-BM", "en-BS", "en-BW", "en-BZ", "en-CA", "en-CC", "en-CH", "en-CK", "en-CM", "en-CX", "en-CY", "en-DE", "en-DG", "en-DK", "en-DM", "en-ER", "en-FI", "en-FJ", "en-FK", "en-FM", "en-GB", "en-GD", "en-GG", "en-GH", "en-GI", "en-GM", "en-GU", "en-GY", "en-HK", "en-IE", "en-IL", "en-IM", "en-IN", "en-IO", "en-JE", "en-JM", "en-KE", "en-KI", "en-KN", "en-KY", "en-LC", "en-LR", "en-LS", "en-MG", "en-MH", "en-MO", "en-MP", "en-MS", "en-MT", "en-MU", "en-MW", "en-MY", "en-NA", "en-NF", "en-NG", "en-NL", "en-NR", "en-NU", "en-NZ", "en-PG", "en-PH", "en-PK", "en-PN", "en-PR", "en-PW", "en-RW", "en-SB", "en-SC", "en-SD", "en-SE", "en-SG", "en-SH", "en-SI", "en-SL", "en-SS", "en-SX", "en-SZ", "en-TC", "en-TK", "en-TO", "en-TT", "en-TV", "en-TZ", "en-UG", "en-UM", "en-VC", "en-VG", "en-VI", "en-VU", "en-WS", "en-ZA", "en-ZM", "en-ZW", "eo", "es", "es-419", "es-AR", "es-BO", "es-BR", "es-BZ", "es-CL", "es-CO", "es-CR", "es-CU", "es-DO", "es-EA", "es-EC", "es-GQ", "es-GT", "es-HN", "es-IC", "es-MX", "es-NI", "es-PA", "es-PE", "es-PH", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "et", "eu", "ewo", "fa", "fa-AF", "ff", "ff-Adlm", "ff-Adlm-BF", "ff-Adlm-CM", "ff-Adlm-GH", "ff-Adlm-GM", "ff-Adlm-GW", "ff-Adlm-LR", "ff-Adlm-MR", "ff-Adlm-NE", "ff-Adlm-NG", "ff-Adlm-SL", "ff-Adlm-SN", "ff-Latn", "ff-Latn-BF", "ff-Latn-CM", "ff-Latn-GH", "ff-Latn-GM", "ff-Latn-GN", "ff-Latn-GW", "ff-Latn-LR", "ff-Latn-MR", "ff-Latn-NE", "ff-Latn-NG", "ff-Latn-SL", "fi", "fil", "fo", "fo-DK", "fr", "fr-BE", "fr-BF", "fr-BI", "fr-BJ", "fr-BL", "fr-CA", "fr-CD", "fr-CF", "fr-CG", "fr-CH", "fr-CI", "fr-CM", "fr-DJ", "fr-DZ", "fr-GA", "fr-GF", "fr-GN", "fr-GP", "fr-GQ", "fr-HT", "fr-KM", "fr-LU", "fr-MA", "fr-MC", "fr-MF", "fr-MG", "fr-ML", "fr-MQ", "fr-MR", "fr-MU", "fr-NC", "fr-NE", "fr-PF", "fr-PM", "fr-RE", "fr-RW", "fr-SC", "fr-SN", "fr-SY", "fr-TD", "fr-TG", "fr-TN", "fr-VU", "fr-WF", "fr-YT", "fur", "fy", "ga", "ga-GB", "gd", "gl", "gsw", "gsw-FR", "gsw-LI", "gu", "guz", "gv", "ha", "ha-GH", "ha-NE", "haw", "he", "hi", "hr", "hr-BA", "hsb", "hu", "hy", "ia", "id", "ig", "ii", "is", "it", "it-CH", "it-SM", "it-VA", "ja", "jgo", "jmc", "jv", "ka", "kab", "kam", "kde", "kea", "kgp", "khq", "ki", "kk", "kkj", "kl", "kln", "km", "kn", "ko", "ko-KP", "kok", "ks", "ks-Arab", "ksb", "ksf", "ksh", "ku", "kw", "ky", "lag", "lb", "lg", "lkt", "ln", "ln-AO", "ln-CF", "ln-CG", "lo", "lrc", "lrc-IQ", "lt", "lu", "luo", "luy", "lv", "mai", "mas", "mas-TZ", "mer", "mfe", "mg", "mgh", "mgo", "mi", "mk", "ml", "mn", "mni", "mni-Beng", "mr", "ms", "ms-BN", "ms-ID", "ms-SG", "mt", "mua", "my", "mzn", "naq", "nb", "nb-SJ", "nd", "nds", "nds-NL", "ne", "ne-IN", "nl", "nl-AW", "nl-BE", "nl-BQ", "nl-CW", "nl-SR", "nl-SX", "nmg", "nn", "nnh", "no", "nus", "nyn", "om", "om-KE", "or", "os", "os-RU", "pa", "pa-Arab", "pa-Guru", "pcm", "pl", "ps", "ps-PK", "pt", "pt-AO", "pt-CH", "pt-CV", "pt-GQ", "pt-GW", "pt-LU", "pt-MO", "pt-MZ", "pt-PT", "pt-ST", "pt-TL", "qu", "qu-BO", "qu-EC", "rm", "rn", "ro", "ro-MD", "rof", "ru", "ru-BY", "ru-KG", "ru-KZ", "ru-MD", "ru-UA", "rw", "rwk", "sa", "sah", "saq", "sat", "sat-Olck", "sbp", "sc", "sd", "sd-Arab", "sd-Deva", "se", "se-FI", "se-SE", "seh", "ses", "sg", "shi", "shi-Latn", "shi-Tfng", "si", "sk", "sl", "smn", "sn", "so", "so-DJ", "so-ET", "so-KE", "sq", "sq-MK", "sq-XK", "sr", "sr-Cyrl", "sr-Cyrl-BA", "sr-Cyrl-ME", "sr-Cyrl-XK", "sr-Latn", "sr-Latn-BA", "sr-Latn-ME", "sr-Latn-XK", "su", "su-Latn", "sv", "sv-AX", "sv-FI", "sw", "sw-CD", "sw-KE", "sw-UG", "ta", "ta-LK", "ta-MY", "ta-SG", "te", "teo", "teo-KE", "tg", "th", "ti", "ti-ER", "tk", "to", "tr", "tr-CY", "tt", "twq", "tzm", "ug", "uk", "und", "ur", "ur-IN", "uz", "uz-Arab", "uz-Cyrl", "uz-Latn", "vai", "vai-Latn", "vai-Vaii", "vi", "vun", "wae", "wo", "xh", "xog", "yav", "yi", "yo", "yo-BJ", "yrl", "yrl-CO", "yrl-VE", "yue", "yue-Hans", "yue-Hant", "zgh", "zh", "zh-Hans", "zh-Hans-HK", "zh-Hans-MO", "zh-Hans-SG", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO", "zu"];

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/should-polyfill.js
  function supportedLocalesOf(locale) {
    if (!locale) {
      return true;
    }
    var locales = Array.isArray(locale) ? locale : [locale];
    return Intl.ListFormat.supportedLocalesOf(locales).length === locales.length;
  }
  function shouldPolyfill(locale) {
    if (locale === void 0) {
      locale = "en";
    }
    if (!("ListFormat" in Intl) || !supportedLocalesOf(locale)) {
      return locale ? match([locale], supportedLocales, "en") : void 0;
    }
  }

  // ../../../../../../../../execroot/formatjs/bazel-out/darwin-fastbuild/bin/packages/intl-listformat/lib/polyfill.js
  if (shouldPolyfill()) {
    Object.defineProperty(Intl, "ListFormat", {
      value: lib_default,
      writable: true,
      enumerable: false,
      configurable: true
    });
  }
})();
//# sourceMappingURL=polyfill.iife.js.map
