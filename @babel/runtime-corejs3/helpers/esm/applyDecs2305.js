import _typeof from "./typeof.js";
import _pushInstanceProperty from "core-js-pure/features/instance/push.js";
import _bindInstanceProperty from "core-js-pure/features/instance/bind.js";
import _Array$isArray from "core-js-pure/features/array/is-array.js";
import _Object$getOwnPropertyDescriptor from "core-js-pure/features/object/get-own-property-descriptor.js";
import _Object$defineProperty from "core-js-pure/features/object/define-property.js";
import _Map from "core-js-pure/features/map/index.js";
import checkInRHS from "./checkInRHS.js";
function createAddInitializerMethod(initializers, decoratorFinishedRef) {
  return function (initializer) {
    assertNotFinished(decoratorFinishedRef, "addInitializer"), assertCallable(initializer, "An initializer"), _pushInstanceProperty(initializers).call(initializers, initializer);
  };
}
function assertInstanceIfPrivate(has, target) {
  if (!has(target)) throw new TypeError("Attempted to access private element on non-instance");
}
function memberDec(dec, thisArg, name, desc, initializers, kind, isStatic, isPrivate, value, hasPrivateBrand) {
  var kindStr;
  switch (kind) {
    case 1:
      kindStr = "accessor";
      break;
    case 2:
      kindStr = "method";
      break;
    case 3:
      kindStr = "getter";
      break;
    case 4:
      kindStr = "setter";
      break;
    default:
      kindStr = "field";
  }
  var get,
    set,
    ctx = {
      kind: kindStr,
      name: isPrivate ? "#" + name : name,
      "static": isStatic,
      "private": isPrivate
    },
    decoratorFinishedRef = {
      v: !1
    };
  if (0 !== kind && (ctx.addInitializer = createAddInitializerMethod(initializers, decoratorFinishedRef)), isPrivate || 0 !== kind && 2 !== kind) {
    if (2 === kind) get = function get(target) {
      return assertInstanceIfPrivate(hasPrivateBrand, target), desc.value;
    };else {
      var t = 0 === kind || 1 === kind;
      (t || 3 === kind) && (get = isPrivate ? function (target) {
        return assertInstanceIfPrivate(hasPrivateBrand, target), desc.get.call(target);
      } : function (target) {
        return desc.get.call(target);
      }), (t || 4 === kind) && (set = isPrivate ? function (target, value) {
        assertInstanceIfPrivate(hasPrivateBrand, target), desc.set.call(target, value);
      } : function (target, value) {
        desc.set.call(target, value);
      });
    }
  } else get = function get(target) {
    return target[name];
  }, 0 === kind && (set = function set(target, v) {
    target[name] = v;
  });
  var has = isPrivate ? _bindInstanceProperty(hasPrivateBrand).call(hasPrivateBrand) : function (target) {
    return name in target;
  };
  ctx.access = get && set ? {
    get: get,
    set: set,
    has: has
  } : get ? {
    get: get,
    has: has
  } : {
    set: set,
    has: has
  };
  try {
    return dec.call(thisArg, value, ctx);
  } finally {
    decoratorFinishedRef.v = !0;
  }
}
function assertNotFinished(decoratorFinishedRef, fnName) {
  if (decoratorFinishedRef.v) throw new Error("attempted to call " + fnName + " after decoration was finished");
}
function assertCallable(fn, hint) {
  if ("function" != typeof fn) throw new TypeError(hint + " must be a function");
}
function assertValidReturnValue(kind, value) {
  var type = _typeof(value);
  if (1 === kind) {
    if ("object" !== type || null === value) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
    void 0 !== value.get && assertCallable(value.get, "accessor.get"), void 0 !== value.set && assertCallable(value.set, "accessor.set"), void 0 !== value.init && assertCallable(value.init, "accessor.init");
  } else if ("function" !== type) {
    var hint;
    throw hint = 0 === kind ? "field" : 5 === kind ? "class" : "method", new TypeError(hint + " decorators must return a function or void 0");
  }
}
function curryThis1(fn) {
  return function () {
    return fn(this);
  };
}
function curryThis2(fn) {
  return function (value) {
    fn(this, value);
  };
}
function applyMemberDec(ret, base, decInfo, decoratorsHaveThis, name, kind, isStatic, isPrivate, initializers, hasPrivateBrand) {
  var desc,
    init,
    value,
    newValue,
    get,
    set,
    decs = decInfo[0];
  decoratorsHaveThis || _Array$isArray(decs) || (decs = [decs]), isPrivate ? desc = 0 === kind || 1 === kind ? {
    get: curryThis1(decInfo[3]),
    set: curryThis2(decInfo[4])
  } : 3 === kind ? {
    get: decInfo[3]
  } : 4 === kind ? {
    set: decInfo[3]
  } : {
    value: decInfo[3]
  } : 0 !== kind && (desc = _Object$getOwnPropertyDescriptor(base, name)), 1 === kind ? value = {
    get: desc.get,
    set: desc.set
  } : 2 === kind ? value = desc.value : 3 === kind ? value = desc.get : 4 === kind && (value = desc.set);
  for (var inc = decoratorsHaveThis ? 2 : 1, i = decs.length - 1; i >= 0; i -= inc) {
    var newInit;
    if (void 0 !== (newValue = memberDec(decs[i], decoratorsHaveThis ? decs[i - 1] : void 0, name, desc, initializers, kind, isStatic, isPrivate, value, hasPrivateBrand))) assertValidReturnValue(kind, newValue), 0 === kind ? newInit = newValue : 1 === kind ? (newInit = newValue.init, get = newValue.get || value.get, set = newValue.set || value.set, value = {
      get: get,
      set: set
    }) : value = newValue, void 0 !== newInit && (void 0 === init ? init = newInit : "function" == typeof init ? init = [init, newInit] : _pushInstanceProperty(init).call(init, newInit));
  }
  if (0 === kind || 1 === kind) {
    if (void 0 === init) init = function init(instance, _init) {
      return _init;
    };else if ("function" != typeof init) {
      var ownInitializers = init;
      init = function init(instance, _init2) {
        for (var value = _init2, i = ownInitializers.length - 1; i >= 0; i--) value = ownInitializers[i].call(instance, value);
        return value;
      };
    } else {
      var originalInitializer = init;
      init = function init(instance, _init3) {
        return originalInitializer.call(instance, _init3);
      };
    }
    _pushInstanceProperty(ret).call(ret, init);
  }
  0 !== kind && (1 === kind ? (desc.get = value.get, desc.set = value.set) : 2 === kind ? desc.value = value : 3 === kind ? desc.get = value : 4 === kind && (desc.set = value), isPrivate ? 1 === kind ? (_pushInstanceProperty(ret).call(ret, function (instance, args) {
    return value.get.call(instance, args);
  }), _pushInstanceProperty(ret).call(ret, function (instance, args) {
    return value.set.call(instance, args);
  })) : 2 === kind ? _pushInstanceProperty(ret).call(ret, value) : _pushInstanceProperty(ret).call(ret, function (instance, args) {
    return value.call(instance, args);
  }) : _Object$defineProperty(base, name, desc));
}
function applyMemberDecs(Class, decInfos, instanceBrand) {
  for (var protoInitializers, staticInitializers, staticBrand, ret = [], existingProtoNonFields = new _Map(), existingStaticNonFields = new _Map(), i = 0; i < decInfos.length; i++) {
    var decInfo = decInfos[i];
    if (_Array$isArray(decInfo)) {
      var base,
        initializers,
        kind = decInfo[1],
        name = decInfo[2],
        isPrivate = decInfo.length > 3,
        decoratorsHaveThis = 16 & kind,
        isStatic = !!(8 & kind),
        hasPrivateBrand = instanceBrand;
      if (kind &= 7, isStatic ? (base = Class, 0 !== kind && (initializers = staticInitializers = staticInitializers || []), isPrivate && !staticBrand && (staticBrand = function staticBrand(_) {
        return checkInRHS(_) === Class;
      }), hasPrivateBrand = staticBrand) : (base = Class.prototype, 0 !== kind && (initializers = protoInitializers = protoInitializers || [])), 0 !== kind && !isPrivate) {
        var existingNonFields = isStatic ? existingStaticNonFields : existingProtoNonFields,
          existingKind = existingNonFields.get(name) || 0;
        if (!0 === existingKind || 3 === existingKind && 4 !== kind || 4 === existingKind && 3 !== kind) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + name);
        existingNonFields.set(name, !(!existingKind && kind > 2) || kind);
      }
      applyMemberDec(ret, base, decInfo, decoratorsHaveThis, name, kind, isStatic, isPrivate, initializers, hasPrivateBrand);
    }
  }
  return pushInitializers(ret, protoInitializers), pushInitializers(ret, staticInitializers), ret;
}
function pushInitializers(ret, initializers) {
  initializers && _pushInstanceProperty(ret).call(ret, function (instance) {
    for (var i = 0; i < initializers.length; i++) initializers[i].call(instance);
    return instance;
  });
}
function applyClassDecs(targetClass, classDecs, decoratorsHaveThis) {
  if (classDecs.length) {
    for (var initializers = [], newClass = targetClass, name = targetClass.name, inc = decoratorsHaveThis ? 2 : 1, i = classDecs.length - 1; i >= 0; i -= inc) {
      var decoratorFinishedRef = {
        v: !1
      };
      try {
        var nextNewClass = classDecs[i].call(decoratorsHaveThis ? classDecs[i - 1] : void 0, newClass, {
          kind: "class",
          name: name,
          addInitializer: createAddInitializerMethod(initializers, decoratorFinishedRef)
        });
      } finally {
        decoratorFinishedRef.v = !0;
      }
      void 0 !== nextNewClass && (assertValidReturnValue(5, nextNewClass), newClass = nextNewClass);
    }
    return [newClass, function () {
      for (var i = 0; i < initializers.length; i++) initializers[i].call(newClass);
    }];
  }
}
export default function applyDecs2305(targetClass, memberDecs, classDecs, classDecsHaveThis, instanceBrand) {
  return {
    e: applyMemberDecs(targetClass, memberDecs, instanceBrand),
    get c() {
      return applyClassDecs(targetClass, classDecs, classDecsHaveThis);
    }
  };
}