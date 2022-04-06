(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"点餐系统","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 10:
/*!*************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var app_url = 'http://www.qi.com:8000';
// 如果是本地测试环境
if (true) {



}
// 如果是生产环境，h5环境下直接读取url
if (false) {}var _default =
{
  /*服务器地址*/
  app_url: app_url,
  /*appid*/
  app_id: 10001,
  //h5发布路径
  h5_addr: '/h5',
  //inonfont 字体url
  font_url: 'https://at.alicdn.com/t/font_2184879_i7r5f24ts0d.ttf' };exports.default = _default;

/***/ }),

/***/ 13:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 14:
/*!***********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/directive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var defaultImg = __webpack_require__(/*! @/static/default.png */ 15);

/*指令测试*/
_vue.default.directive('demo', {
  bind: function bind(el, binding, vnode) {
    var s = JSON.stringify;
    el.innerHTML =
    'name: ' + s(binding.name) + '<br>' +
    'value: ' + s(binding.value) + '<br>' +
    'expression: ' + s(binding.expression) + '<br>' +
    'argument: ' + s(binding.arg) + '<br>' +
    'modifiers: ' + s(binding.modifiers) + '<br>' +
    'vnode keys: ' + Object.keys(vnode).join(', ');
  } });

/***/ }),

/***/ 15:
/*!**********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/static/default.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQzRkI1RkU5MjU4MjExRUFCQTlGRjhBRjJBMDVGM0JBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQzRkI1RkVBMjU4MjExRUFCQTlGRjhBRjJBMDVGM0JBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDNGQjVGRTcyNTgyMTFFQUJBOUZGOEFGMkEwNUYzQkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDNGQjVGRTgyNTgyMTFFQUJBOUZGOEFGMkEwNUYzQkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6N5rJgAAAb9klEQVR42uyda1PjuNZGCSSEBMJl6O7pqvn/P22mpq80IdAhEHifis7rk+PId0mWkrU+THUxYBsTLe+9pS0PVqvVEQBAChxzCwAAYQEAICwAQFgAAAgLAABhAQDCAgBAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAAGEBAMICAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQB0YMgtgPh52bBarV43rNfr9/d3fX0wGJycnAw3nJ6ejjZwu/aYgT4E3AWIE4np9+/fy+Xy+fn57e2tOl84Ph6Px2dnZ5PJRCLjBiIsgBAojHp6epKt2n0+FW3JWdPpVJEXNxNhAXjkcYOiqo7HUbR1voFbujfw/IG4AqvFYvHw8ODkaM8bXl5eLi4uCLWIsABcIrlIVUoDnR9Z6eFsNlPAxU0mwgJwwHK5nM/n3dNAK5Lg29vb5eXl2dkZtzppWIcFUcRW/mwV7BSAsGD/eX19VSYYQCUm5dTpuOcIC6Ali8XCR92qKDfU6bjnCAugDY+Pj67mBGui0+mk3HmEBdA4GezFHTopiWGiMEt4cLy8vDw/P69WK/1D4/bt7e34+Hg4HI5Go9PT0/F4HKwd7+npqZcquE6qU19eXvJhQFgQL5KU6XfJxRdy1mqDQg+ZyzS1SF5eL8b0CfZ1K3Tq8/Nz+g0RFkTKYoOiqso07eHhYblcXmzwqoweFy3r1LoAr78g+IAa1v7z/v5+f39/d3dXaavttFHfr58yu7j4QE7s97b0fgGAsMDCfEPIH6wjxN7XcJo2Qz4eCAviygS7SEc/62PhkkxRZ38rr+gCEBbCgohYrVbddaMjOC82RdJyT+c/woKIeHp66h5E6Ag6jtsLi2QZFKuxEBbEgkTjat2AjuM2e0JYgLDgf3h+fnY1IHUctzXy9Xodwy2K5DIAYYHjAo3bo/lbLZHiZQDCgiO3SRwTaoCwwCNuCzRujzYYDGK4RZFcBiAsOHK70Mnt0SJp4qOXEGFBNH/a4+NojxbJO2x4lQ7CglhwOxpjPhrCQliQPG63tXJ7NN9716R1GYCwwPFodHs06c9tjtkuyQ22VSEgLKhgPB67Snl0HLdvIZUpen+taci9VQFhQbUUJpOJk0PpOM7Hdu/vNOWlqggL4mI6nXYXjY6g4zi/NkmwxxKSTu3K5oCwwNmw7L4LsI7gwywnJyc9KkOnZhEWwoLokG66vB5GP+tv43MFbr1UsnRSHzEjICxwwOWGkD9Yk+FweH5+Hv6G6KSswEoU/mz7z2AwuLq6UgZU5605htFo5PutOZk7dEkhX/48m816sSQgLGiWG56enlrfS5iLesK8l3D7wnQ9Yd5RqF+NV3ul/fRlW+tDI543P2foeu7v732/R0e/miLN3td/AcKC5Fkul/P53J+z5KnLy0vWXpESAjhAKhkMBg8PDz5yQ2WCs9mM2AphAbgMgk5OTpScuq3BS1UXFxdMC5ISAnjhcUP39FAGPN/ALUVYAB55fX01E5rtPp+m82Y6nRJYISyAQKzXazlruVwq2qqzR/Px8bGiqrOzMzpvEBZAb7xs0Gf1dYNEZt7QNRgMTNlLKKoabeB2ISwAgP6hlxAAEBYAAMICAIQFAICwAAAQFgAgLACASDmIxoW7u7vHx8fBYOD1LLe3t853L1kulz9+/HB4QN2Et7c3s+py+4vOb45OYQ6bO1eXK9ehcuvdfbyNVWe5vr52uM+fDvjt27eae712OctkMtGHEGElz/n5uYRVp7ejC/f39+Px2O3IlwFHo5Hvne3eNzj+YA2HJfuausLH31RX7vYVFYvFwvdfMPuckxLuA6enpwHekrJarZ6enpwf1utrIHw9BofDDx8+JNoloxvuMHCTUiWsAJetT/ghbE94KDWs2WzmI33I8fDw4PyZr09hcu+kUj5lXmPBs00fiQCRpuJ6fcIPYSAfirA0fgIEzC8vL8o9fdjWdwHOx63Wf3t8t3Pr8MrhrZaqwoRXKd5qhFU97ANsOaIn6nq9TjGldR7MJvfYN/vSRB5xW8bw8fGBhFeHJSzZKkCSIlv5eKiGSWmduzWtworbYe8p3LYm4IezT+FhrcMK86eVsJyXLcKktD5SqlQe/s7dOp/Pnc+99vUYRlg9/bZBgmdlAT5eZRwmpXWeUiUxaeA8e31+fvYxZZzipwJhdSJMeVK5gPOFgvE/S4vGfPyTBs4/FT6eWOnG3QgromepFeUCyggOqlpRklJFPmngPO7+vSHMEyKJyibCiqtaYUUZgfP1zdHOB1U+Btyuxoz8MRAmvEpr7hhheUle3OIjyIpzxU3lVckIceazzhNtHw+qRBNthOUM5yturCyXS+epQYSLm2rGffJChOVht1flqRRg/QAfYHh1dMjby7hd01ySHTif245tcVPNlCrCSQPncZ+PyZYeUwSEFRFhSgCeprfj+bw20lBskwbO+5zDVK8OpM8ZYVmGfZiOaOdBVpiU1nlKFdWkgfMnlo8Fw0nUBBBWIIJ1RPto1gmT0jpPqeKZNHBbtA7W5yzJHkifM8Kyf2oDVIL1Ud7LjugWIWokAYLzorWPP7E1RE1xfzSE5YwwlWBPj99+1w3KmO3i0xhKMM77nINtI3M4fc4Iyw4d0eFTqn6DLOfG9FGmtD5cD7l6hbD+G2bTER04pepx0sB5TrparYJtI3NQfc4IqyzSpiM6cIjU16SB86J1mJWi0bYKIKx9eOpa2ZuOaCcpVS+TBs6jaR/NDEVPiEPrc0ZYQesaVvagI9qh3MMPQoXSbt/lEya8aj2/gbD2mTDD3kclK+TiJocpVeBJA+dFa/qcEVafhKkE+9gsSZ/mMC8BdB7NhZw0oM8ZYe0bwTqi3R7w5eUlzIa8bxvcRj1hVEufM8LaQ4J1RLudCA+zDsiHbZcbklNtsD5nhfwH2+eMsOo+0NLqiA62DshHShsmq3KumGB9zgfeiIOwqkmuIzrYmHceZAUrWrtN4jy9enKXA+9zRlgNgqwwHdHdk5Rg64ByKW33klmworXzM/p4ubdlZB7S+5wRVieCdUR3D1XCh1fZeTumtMGK1m5jupB9zmGmIxDWPpBER3TglMrhuA1WtHaez9LnjLCivC/Rd0SHT6kcprRhitZWukwa0OeMsOIl8o7oXlKqXErbLsgKVrR2HmTR54yw4iXmjugeU6rugVKYonUJ7SYN6HNGWLEznU7H47Hvs7QoRfWYUnWMlYIVrStjpaalKPqcEVYChFm51yhc6j2lyqmzUWYaclG+Q2/S54yw0iBYR3T9DpXeU6pcSlvftqvVKkzPY03V1pw0CDa/oXCePmeElcZDr+aQiCSl2ubx8bFm9NF99ZZD6k8aBJvfoBEHYSXz3KtZCY4kpWqR0vayKL8yyKosBdLnjLAIsloGIFGlVE1T2n5XjVmpUw2kzxlhpcdoNAqwNEZ5R/m6xKhSqkY+6nFRfqWPStI9+pwRVqqEWXys7KOoEhxhSlUzpW1UmA9M+bXR54ywUiXM+uOSSnCEKVXNAFBho5LZaC+7aNKgMuB1BX3OCMtXkBWmI3r3qR5tSlU5wiNZlF8Z2DaKdh1CnzPCSjt0l61y4yfmlKpykEeyKL+c3UmDYPMb9DkjrOSj91wlOPKUqiSljWpRfmU+Wye9TbHOgLAOlzDTz9shVRIpVVFKG9Wi/HK2Jw3oc0ZY+8NkMgnTEW2iqiRSKmtKG6xo7TDIMlEVfc4Ia6+CrDDbzpjwJJWUaht5yuSGAYrWDjGvd1R4RZ9zvKMvleJIbHz//t131qBkYTgcJvoHUvggZ6UlrKNNUeloU4nzfSIF6Z8+fWIcEWEFIsDjUaM93ceJrjw5WxlVhUnAacRBWEFhJxBoDX3OCGs/gyzYP8LUQBEW5AnTEQ17Rph9txEWWGCZMhBeIaxkSHqlslTLqsXwTzj6nBFWzx/BAB3RPri5uUnUtrrhKVYP9YSghoCw+r6DaW5mNB6PJ5OJxk9yQZZUdXt7G+DNIDzbENZ+kuJ+RmYdUIrPfLM5Z3KXTZ8zworomZ9WkLW9Diitx352qxUhptWIR58zworrsZ/KXHVOr2kFWdtF64TWwema6XNGWARZbtyaytRVzq0JWUAJOGuMEVZ0eVb8lWCrWFOx7W72mkSeRRcXwoqU+Id9UTAVf0prLVonUclmpSjC4lnqIKVKK8gqWoER+aRBEnE3wjroICvaakX52I55C4GSts2YJw1oxEFYsRPtvrd1sqdoa8Plj4Fo18HR54yw0giyIuyIrrOo3Sx/jzDRLn8GxNlsQHiFsNJAsUxsQVb9nXAiTGnrDPsIYxn6nBFWMsRWCa6f68WW0tYsWscWztDnjLBSIqrPa9O5y3gWNzXSUFTzcZI+fc4IK7EgK5KMoGnoEc/ipqaJXiRBlm4g1SuElRiRJCnt4o4YUtoWNzCSdXApbtqDsKD/SnBracaQ0rYLUXtfmcFO/wiLIKsHY/ab0ipCaTfse++I5l1KCCtheqwEd9Rlv7btkpP2OGlAnzPCSp6+hn33EKmvlLZj0brHSQPCK4SVPL08dVunVDEEWd2L1r28fo0+Z4S1P0FW4Aevq2m+8B3RTorWslV41bKUAWHtCYGXj7vNiczrKpKTe+COaPqcEda+BVnBKsFuE6KQKa3Dc4XsiJZhA2sdYUFKUY/vlKqvlNbticwLwQJcdorveUNYUB34BFg+7kMuYVLas7Mzt0XrMIFPom/SRVhQQYDl4/7StwAprQ+5BJg04H3OCGtv8Z07+MvdfKe0/orWXoMs3ueMsPb6dvtMH3yvA/K3uMlr7uZ10qCXBV8IC8LhrxLsu5Lib3FTooEnfc4Ia//xFE2EWQfkwywBitaeJg1oxEFYB4HzSnCwdUA+5BJs8tTtpAF9zgjrgHDrl5DrgNymtMGK1s5PRHiFsA6IRJd0O4/mQhatHZ7L+ZIxQFix4+oRHX4dkKuUNnDR2uGkAY04COvgcFIJ7msdkJORHz6rcpI70+eMsA43yEpx4yeTE3VMafvaJqyjaulzRliHS8f4qN91QB3jo76K1h0nDehzRlgHTZcQqd+Jqi4pbY9F6y4hEn3OCOvQaV0JjmEdUOuUtt+sqvWkAX3OCAtaZhkxrANql9LGULRu8ZCI4V2NgLAi+Bs0TzTiWQfUNKWN5IXYLSYNdNn0OSMs+E/Q0agSHM9EVdOUVuFkmF1A3Yaovb+fFRBWRDSqBMe2Dqh+ShtV0brRpEGPL2cFhBUjNSvBkaRU7TQUW9G6poakNvqcERZYxk9CKVXTlDbConXNSQMFv/Q5IyzIU1kJjnYdUJ2UNs6ideWkAX3OCAvKRnXJwzzmdUDlKW20RevKSQMacRAWFFJSCY5/HVDJyI+5aF0yaUCfM8KC6mFvHdvxrwMqSmkjL1oXJdoRzm8AwooOayU4lXVA1pQ2/qK1ddIgzvkNhAXRsVsJTmUd0G5Km0TRenfSgD5nhAV1yVWC01oHlHNrKsM+N2lAnzPCggYoTskGTFrrgLZTWnnW95vi3ao2e2DQ54ywoMkf5vjYJCkprgPKUtq0sqps0oA+53gfh9yCaNHgWSwWKT7qNdoVIa7X6+SK1rrbr6+v9DlHy2C1WnEXokWDR4M/xb4Q2cqYK63Lfn9/15VTvUJYAABdoYYFAAgLAABhAQDCAgBAWAAACAsAEBYAAMICAEBYAICwAAAQFgAAwgIAhAUAgLAAABAWACAsAACEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABIF95wmyrv7+9fv34dDofj8Vj/HY1GEb5m+cePH/rv6P/p8Y3Kuy8MPj095VOEsCAQy+XydYP+8Z9o+fhYg/D6+joSc63Xa3Nt2RWKs7Oz8/Nz/TfwxXz79i33lb/++otPESkhBGKxWOS+8vb2Jn/FE2c9Pj5aPatQiz8fEGHFznw+f3l5afGDV1dXuWRqtWH3Oy8vL7tc4e/fv5+enlr84HQ6nUwmuYzVKiyFVxGmroCwII9stZ0c1Wc2m+W+YtWKUsKOqVaWxDVlPB7vRlKK+Kxq63iFsmrNbz7dwAcPYUGfaNBagxd5bTAYxBNO7n5RPu1oEP3u9/f39SPTLqdrFBHf3t7yyURYYOHh4aEooXt+fm6XwblFV/L6+rr7dX3RzBtWMhqNOqa3PUbEgLCgIrw6ss3c18/gAoRXRlhWkflDp7NmpiW3S5l1j8svAGHtFb9+/Yr8CheLRWArlaD8sShK2l3okOWt5HcIC452p/OtY2m3cK5nfhYUeE1STk5OcmfXGXcjlNPT0+ySsh80/3h/fy/KWAEQVkrsFmX+/vvv3W8rebzXrze3Y7Jh+ys/fvzYVWRJMVu2KkrBXEn/48ePJVHS9fV19mCQRmsW9QBhgWMeHx/rV6l6QZmg7/BqMBiUT/zJVv6WMpyfn5vylu8nByCstFGqZa1ka/zc3NwU/dR6vf7586f1p3xcZNEwVsyYSyFzQdxuUBbnavjpdGpsiLAQFpTx69cva6qlNLMkoCiaT/QxS6hzWetr5Z2DRbN4rqKkTHy5azN9l9b/BQgLOqERZV3ariFXvpzKmkLqp5yvL1UoZw0A5YXdZfrbFNWYXCk1qxvmyoW6CVmt0FpJhDih+TmBZPDu7s76v66ursolYtWcjyWjRQGgbFXeObjbwn20mSeNZ8k+ICxw4IKsnlISl1m/7nxrl6JkcDgcKh8s+cGidaThN58BhAVusEYoSrUqO1eswctwg+PP0AZrAFgeKFmvEGFBCdSwwrFarYpWV2+TK6l8/PhRccp8Pt/O7ypTLZ3LGryUhzxH9Qo6ud9CYvr8+bPirO25s7MN5amudd8F/VSLLDJDdymr3Cn5ZSsbhAU9BFk3NzdyzcPDg5IvhUgXFxflP1K0HspTz7MiKV2SDq7zmqnJ6+vrykSy3f4z5UsKtidGlTIjLIQF/WAmthSVVA7Cog6eyuClu1jlKRlnvV6Xn6iog6f7ll6AsCAi6oRIReFVZT7oSqyV31MUXukKmR+EEii67xtF4ZUSyUiCl5IG6TBKBYQFsVBU4ul9P7ztALAovPKUsSpF5YNBSgjN0GjMLfW0yiX3PY3GcFGDdP3aUO7sOuDubGPWA1w/B8woaZCuud17/d0asn8gLIQFbYSVm92zCqtyBrAkjija6lPhVc3aUO7sz8/Pu8KqXLNaQtGq/frH7HG3BiAlBGcUrYmvXHEejMViUbRDTuCM1fcm0YCwoMIFRb04stj7+3vvVyhVlSyh8pq1Rb6PGCCsw0KqKnGBhFW0z0ww5KPy9+UE3liZxRMIC/rh9fW1qDC0rYMeC8+K737+/Fm+dfJyg6cL2N3EJs4NAgFhJS+jX79+lfhILrDu2LkbZBXV47uHTspGv3z5UvI9+hXqJGUKEj2lrrvzBiU7oELMMEsYqaeenp6y15EWrUjQ8P7+/XvNd2rpgJPJxNXaUfNS++1O4xJbWbflsv7WigSdV991l3ZvEW8eRFjgBkUrdRxkbNWonKxI7fPnz93LNzpOTUvKVo3KZxJW99fZ59h93TzrHkgJwWP+0sJW1jGpxFA/FeYKK21VZA1luF3KbSb0U/77Y8ORbYqQ8AphQeMxX76v0za5Iaef/fr1a4mtZrPZH3/8UXSomu+O1si3LnOvYzFTWSu31cePH63ikFV//vzZupiln9WpzT485iu7FXciLFJCqDWkNXhMc3Kjt41uf7N+vLzKrpTKlIHOz8+tyijZr0qS0vGfNzR93Xx2SebdYiU+PT4+/vDhw9Fmsaj1LWT6WUWC+h5r9qr/u95Q+ZLUk5MTiW938rH1FOFudgkIaz/5/fu3dXA2Qq4pj48UO2Sx1dXVlU5qVZvVWVLAv//+2/EKK30qWym2MiYykwDW1QxFzrK+ibrwwz0c7n7z9gu+mlIzOAWElTwtBomGlhnSQpFC5XSbTrE9wvUPhTBFY0zO0jHlrOz7FY9ohDcNrKbTqblCHUdJbvl2oMZW25mgrFokIOOsm5ub7e9vup3D7h3LzZPG0AMACCs66utA3yZPSQTZQNWQvru7K88ic7YyKCssWZBpFiXc3t5mJxqPx3WucNukWbarKyyfsty1lfll5awizZld8GXVbNvCRvVyXdXu754TVmVeCQjrQDFbnte3gHn+11nHZLWVQRmiEr0i2WlIf/nyRcowW33q1OWrELbjqeyLlYFVka0MFxcXskZJI6RSaZ1X0aKRfh3j64aMRiOrjLZvr4QYuCUIEFbaWaHVU1nWNp/PK8vzJbYyiaFMoTil5DjSjdmPtGgPA6unzICvsyarxFaZVctXaUjZspWcVXQQc/H6v/KUSRut+5rqF/nnn3/4KCIsqCangyIL1MywsoNs16GKIg59T0nJfzabGV3qONJfdl7921zkbuWoZuhnDpKrQ1mtqu8psaoOYqY+s+PoH7qf0pPxlNXCu0czqWX5ZZfsPKPLMD09/toeAWHFgtFBpqqS+nHN0rJEU7ORRQNVUYzVWZkLsuGqcZ4roll/lzor5vVr6rx1vlPnKooE5YjtZWW3t7dZGFWEjL+b25oocr1elwur5LdW7mz+gnXe3ggIK3lKcrecDvSd8kvRk1xjWCFJo8bAImfpOO0kqKhNl1FSA9LwbrR7apGzTPVqW4KVh7K2i5vfq3wRVjyv6gD7J59bEDjIqv+dCiWsO4XqIf/p06cW40rO+vPPP7c3KpB0cgFFo05DKcC6pN4UrVrs9ayL+fz583axT4Fe0+1Sla7uRklm7vWodH2JLlv3nE9p1COIzRgjJ9eR1zRs2SVbiS7lORmfuTWxdcpqlca5v7/Xby2DtO7WNhucZh9viTVbG6EgbvtjbypTyoVzb0VUXpmL9RSdsfMfwoJazpJfZCtXjbvz+dzha7WMs8yiKlcplY5pVlp0OYiZaTUvzeaDhLAgEMvlMvLaij5IcQYgiiitSSIgLAAAj1B0BwCEBQCAsAAAYQEAICwAAIQFAAgLAABhAQAgLABAWAAACAsAAGEBAMICAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLABAWNwCAEBYAAAICwAQFgAAwgIAQFgAgLAAABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLAAAhAUACAsAAGEBACAsAEBYAAAICwAAYQEAwgIAQFgAAAgLABAWAADCAgCEBQCAsAAAEBYAICwAAIQFAICwAABhAQAgLAAAhAUACAsAAGEBACAsAEBYAAAICwAAYQEAwgIAQFgAAAgLABAWAADCAgBAWACAsAAAEBYAAMICAIQFAICwAAAQFgAgLAAAhAUACAsAIA3+T4ABAKDsGlePpqaeAAAAAElFTkSuQmCC"

/***/ }),

/***/ 16:
/*!********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/onfire.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
               * mini (~300 b) version for event-emitter.
               */

Object.defineProperty(exports, "__esModule", {
  value: true });

/**
                   * const ee = new OnFire();
                   *
                   * ee.on('click', () => {});
                   *
                   * ee.on('mouseover', () => {});
                   *
                   * ee.emit('click', 1, 2, 3);
                   * ee.fire('mouseover', {}); // same with emit
                   *
                   * ee.off();
                   */

var OnFire =
/** @class */
function () {
  function OnFire() {
    // 所有事件的监听器
    this.es = {}; // cname of fire

    this.emit = this.fire;
  }

  OnFire.prototype.on = function (eventName, cb, once) {
    if (once === void 0) {
      once = false;
    }

    if (!this.es[eventName]) {
      this.es[eventName] = [];
    }

    this.es[eventName].push({
      cb: cb,
      once: once });

  };

  OnFire.prototype.once = function (eventName, cb) {
    this.on(eventName, cb, true);
  };

  OnFire.prototype.fire = function (eventName) {
    var params = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      params[_i - 1] = arguments[_i];
    }

    var listeners = this.es[eventName] || [];

    for (var i = 0; i < listeners.length; i++) {
      var _a = listeners[i],
      cb = _a.cb,
      once = _a.once;
      cb.apply(this, params);

      if (once) {
        listeners.splice(i, 1);
        i--;
      }
    }
  };

  OnFire.prototype.off = function (eventName, cb) {
    // clean all
    if (eventName === undefined) {
      this.es = {};
    } else {
      if (cb === undefined) {
        // clean the eventName's listeners
        delete this.es[eventName];
      } else {
        var listeners = this.es[eventName] || []; // clean the event and listener

        for (var i = 0; i < listeners.length; i++) {
          if (listeners[i].cb === cb) {
            listeners.splice(i, 1);
            i--;
          }
        }
      }
    }
  };

  OnFire.ver = "2.0.0";
  return OnFire;
}();

exports.default = OnFire;

/***/ }),

/***/ 17:
/*!**********************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/gotopage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.gotopage = void 0;var _config = _interopRequireDefault(__webpack_require__(/*! ../config.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/*导航菜单白名单*/
var tabBarLinks = [
'/pages/index/index',
'/pages/product/list/takeaway',
'/pages/order/myorder',
'/pages/user/index/index'];


/*分享页面,扫码白名单*/
var shareLinks = [
'/pages/plus/assemble/fight-group-detail/fight-group-detail',
'/pages/plus/bargain/haggle/haggle',
'/pages/user/invite/invite',
'/pages/product/detail/detail'];


/*
                                  * 跳转页面
                                  */
var gotopage = function gotopage(url) {
  if (!url || url.length == 0) {
    return false;
  }

  if (url.substr(0, 1) !== '/') {
    url = '/' + url;
  }
  var p = url;
  if (url.indexOf('?') != -1) {
    p = url.substr(0, url.indexOf('?'));
  }
  // tabBar页面
  if (tabBarLinks.indexOf(p) > -1) {
    uni.reLaunch({
      url: url });

  } else {
    if (false) {}
    // 普通页面
    uni.navigateTo({
      url: url });

  }
};exports.gotopage = gotopage;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/store/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);var _default =

new _vuex.default.Store({
  // 全局属性变量
  state: { // state的作用是定义属性变量。定义一个参数
    theme: 'red_theme' },

  // 全局同步方法，在methods{this.$store.commit("changeTheme")}
  mutations: {
    changeTheme: function changeTheme(state, value) {
      state.theme = value;
    } },

  getters: {},


  actions: {} });exports.default = _default;

/***/ }),

/***/ 19:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(item =>String.fromCharCode(item)).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 273:
/*!*****************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/province.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "北京市",
  "value": 1 },
{
  "label": "天津市",
  "value": 19 },
{
  "label": "河北省",
  "value": 37 },
{
  "label": "山西省",
  "value": 220 },
{
  "label": "内蒙古自治区",
  "value": 351 },
{
  "label": "辽宁省",
  "value": 466 },
{
  "label": "吉林省",
  "value": 585 },
{
  "label": "黑龙江省",
  "value": 655 },
{
  "label": "上海市",
  "value": 801 },
{
  "label": "江苏省",
  "value": 820 },
{
  "label": "浙江省",
  "value": 933 },
{
  "label": "安徽省",
  "value": 1046 },
{
  "label": "福建省",
  "value": 1168 },
{
  "label": "江西省",
  "value": 1263 },
{
  "label": "山东省",
  "value": 1375 },
{
  "label": "河南省",
  "value": 1532 },
{
  "label": "湖北省",
  "value": 1709 },
{
  "label": "湖南省",
  "value": 1827 },
{
  "label": "广东省",
  "value": 1964 },
{
  "label": "广西壮族自治区",
  "value": 2162 },
{
  "label": "海南省",
  "value": 2291 },
{
  "label": "重庆市",
  "value": 2323 },
{
  "label": "四川省",
  "value": 2367 },
{
  "label": "贵州省",
  "value": 2572 },
{
  "label": "云南省",
  "value": 2670 },
{
  "label": "西藏自治区",
  "value": 2816 },
{
  "label": "陕西省",
  "value": 2898 },
{
  "label": "甘肃省",
  "value": 3022 },
{
  "label": "青海省",
  "value": 3126 },
{
  "label": "宁夏回族自治区",
  "value": 3178 },
{
  "label": "新疆维吾尔自治区",
  "value": 3206 },
{
  "label": "台湾省",
  "value": 3325 },
{
  "label": "香港特别行政区",
  "value": 3716 },
{
  "label": "澳门特别行政区",
  "value": 3738 }];var _default =

provinceData;exports.default = _default;

/***/ }),

/***/ 274:
/*!*************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/city.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "北京市",
  "value": 2 }],

[{
  "label": "天津市",
  "value": 20 }],

[{
  "label": "石家庄市",
  "value": 38 },
{
  "label": "唐山市",
  "value": 61 },
{
  "label": "秦皇岛市",
  "value": 76 },
{
  "label": "邯郸市",
  "value": 84 },
{
  "label": "邢台市",
  "value": 104 },
{
  "label": "保定市",
  "value": 124 },
{
  "label": "张家口市",
  "value": 150 },
{
  "label": "承德市",
  "value": 168 },
{
  "label": "沧州市",
  "value": 180 },
{
  "label": "廊坊市",
  "value": 197 },
{
  "label": "衡水市",
  "value": 208 }],

[{
  "label": "太原市",
  "value": 221 },
{
  "label": "大同市",
  "value": 232 },
{
  "label": "阳泉市",
  "value": 244 },
{
  "label": "长治市",
  "value": 250 },
{
  "label": "晋城市",
  "value": 264 },
{
  "label": "朔州市",
  "value": 271 },
{
  "label": "晋中市",
  "value": 278 },
{
  "label": "运城市",
  "value": 290 },
{
  "label": "忻州市",
  "value": 304 },
{
  "label": "临汾市",
  "value": 319 },
{
  "label": "吕梁市",
  "value": 337 }],

[{
  "label": "呼和浩特市",
  "value": 352 },
{
  "label": "包头市",
  "value": 362 },
{
  "label": "乌海市",
  "value": 372 },
{
  "label": "赤峰市",
  "value": 376 },
{
  "label": "通辽市",
  "value": 389 },
{
  "label": "鄂尔多斯市",
  "value": 398 },
{
  "label": "呼伦贝尔市",
  "value": 407 },
{
  "label": "巴彦淖尔市",
  "value": 422 },
{
  "label": "乌兰察布市",
  "value": 430 },
{
  "label": "兴安盟",
  "value": 442 },
{
  "label": "锡林郭勒盟",
  "value": 449 },
{
  "label": "阿拉善盟",
  "value": 462 }],

[{
  "label": "沈阳市",
  "value": 467 },
{
  "label": "大连市",
  "value": 481 },
{
  "label": "鞍山市",
  "value": 492 },
{
  "label": "抚顺市",
  "value": 500 },
{
  "label": "本溪市",
  "value": 508 },
{
  "label": "丹东市",
  "value": 515 },
{
  "label": "锦州市",
  "value": 522 },
{
  "label": "营口市",
  "value": 530 },
{
  "label": "阜新市",
  "value": 537 },
{
  "label": "辽阳市",
  "value": 545 },
{
  "label": "盘锦市",
  "value": 553 },
{
  "label": "铁岭市",
  "value": 558 },
{
  "label": "朝阳市",
  "value": 566 },
{
  "label": "葫芦岛市",
  "value": 574 },
{
  "label": "金普新区",
  "value": 581 }],

[{
  "label": "长春市",
  "value": 586 },
{
  "label": "吉林市",
  "value": 597 },
{
  "label": "四平市",
  "value": 607 },
{
  "label": "辽源市",
  "value": 614 },
{
  "label": "通化市",
  "value": 619 },
{
  "label": "白山市",
  "value": 627 },
{
  "label": "松原市",
  "value": 634 },
{
  "label": "白城市",
  "value": 640 },
{
  "label": "延边朝鲜族自治州",
  "value": 646 }],

[{
  "label": "哈尔滨市",
  "value": 656 },
{
  "label": "齐齐哈尔市",
  "value": 675 },
{
  "label": "鸡西市",
  "value": 692 },
{
  "label": "鹤岗市",
  "value": 702 },
{
  "label": "双鸭山市",
  "value": 711 },
{
  "label": "大庆市",
  "value": 720 },
{
  "label": "伊春市",
  "value": 730 },
{
  "label": "佳木斯市",
  "value": 748 },
{
  "label": "七台河市",
  "value": 759 },
{
  "label": "牡丹江市",
  "value": 764 },
{
  "label": "黑河市",
  "value": 775 },
{
  "label": "绥化市",
  "value": 782 },
{
  "label": "大兴安岭地区",
  "value": 793 }],

[{
  "label": "上海市",
  "value": 802 }],

[{
  "label": "南京市",
  "value": 821 },
{
  "label": "无锡市",
  "value": 833 },
{
  "label": "徐州市",
  "value": 842 },
{
  "label": "常州市",
  "value": 853 },
{
  "label": "苏州市",
  "value": 861 },
{
  "label": "南通市",
  "value": 871 },
{
  "label": "连云港市",
  "value": 880 },
{
  "label": "淮安市",
  "value": 887 },
{
  "label": "盐城市",
  "value": 896 },
{
  "label": "扬州市",
  "value": 906 },
{
  "label": "镇江市",
  "value": 913 },
{
  "label": "泰州市",
  "value": 920 },
{
  "label": "宿迁市",
  "value": 927 }],

[{
  "label": "杭州市",
  "value": 934 },
{
  "label": "宁波市",
  "value": 948 },
{
  "label": "温州市",
  "value": 960 },
{
  "label": "嘉兴市",
  "value": 972 },
{
  "label": "湖州市",
  "value": 980 },
{
  "label": "绍兴市",
  "value": 986 },
{
  "label": "金华市",
  "value": 993 },
{
  "label": "衢州市",
  "value": 1003 },
{
  "label": "舟山市",
  "value": 1010 },
{
  "label": "台州市",
  "value": 1015 },
{
  "label": "丽水市",
  "value": 1025 },
{
  "label": "舟山群岛新区",
  "value": 1035 }],

[{
  "label": "合肥市",
  "value": 1047 },
{
  "label": "芜湖市",
  "value": 1057 },
{
  "label": "蚌埠市",
  "value": 1066 },
{
  "label": "淮南市",
  "value": 1074 },
{
  "label": "马鞍山市",
  "value": 1081 },
{
  "label": "淮北市",
  "value": 1088 },
{
  "label": "铜陵市",
  "value": 1093 },
{
  "label": "安庆市",
  "value": 1098 },
{
  "label": "黄山市",
  "value": 1110 },
{
  "label": "滁州市",
  "value": 1118 },
{
  "label": "阜阳市",
  "value": 1127 },
{
  "label": "宿州市",
  "value": 1136 },
{
  "label": "六安市",
  "value": 1142 },
{
  "label": "亳州市",
  "value": 1150 },
{
  "label": "池州市",
  "value": 1155 },
{
  "label": "宣城市",
  "value": 1160 }],

[{
  "label": "福州市",
  "value": 1169 },
{
  "label": "厦门市",
  "value": 1183 },
{
  "label": "莆田市",
  "value": 1190 },
{
  "label": "三明市",
  "value": 1196 },
{
  "label": "泉州市",
  "value": 1209 },
{
  "label": "漳州市",
  "value": 1222 },
{
  "label": "南平市",
  "value": 1234 },
{
  "label": "龙岩市",
  "value": 1245 },
{
  "label": "宁德市",
  "value": 1253 }],

[{
  "label": "南昌市",
  "value": 1264 },
{
  "label": "景德镇市",
  "value": 1274 },
{
  "label": "萍乡市",
  "value": 1279 },
{
  "label": "九江市",
  "value": 1285 },
{
  "label": "新余市",
  "value": 1299 },
{
  "label": "鹰潭市",
  "value": 1302 },
{
  "label": "赣州市",
  "value": 1306 },
{
  "label": "吉安市",
  "value": 1325 },
{
  "label": "宜春市",
  "value": 1339 },
{
  "label": "抚州市",
  "value": 1350 },
{
  "label": "上饶市",
  "value": 1362 }],

[{
  "label": "济南市",
  "value": 1376 },
{
  "label": "青岛市",
  "value": 1387 },
{
  "label": "淄博市",
  "value": 1399 },
{
  "label": "枣庄市",
  "value": 1408 },
{
  "label": "东营市",
  "value": 1415 },
{
  "label": "烟台市",
  "value": 1421 },
{
  "label": "潍坊市",
  "value": 1434 },
{
  "label": "济宁市",
  "value": 1447 },
{
  "label": "泰安市",
  "value": 1459 },
{
  "label": "威海市",
  "value": 1466 },
{
  "label": "日照市",
  "value": 1471 },
{
  "label": "莱芜市",
  "value": 1476 },
{
  "label": "临沂市",
  "value": 1479 },
{
  "label": "德州市",
  "value": 1492 },
{
  "label": "聊城市",
  "value": 1504 },
{
  "label": "滨州市",
  "value": 1513 },
{
  "label": "菏泽市",
  "value": 1522 }],

[{
  "label": "郑州市",
  "value": 1533 },
{
  "label": "开封市",
  "value": 1546 },
{
  "label": "洛阳市",
  "value": 1556 },
{
  "label": "平顶山市",
  "value": 1572 },
{
  "label": "安阳市",
  "value": 1583 },
{
  "label": "鹤壁市",
  "value": 1593 },
{
  "label": "新乡市",
  "value": 1599 },
{
  "label": "焦作市",
  "value": 1612 },
{
  "label": "濮阳市",
  "value": 1623 },
{
  "label": "许昌市",
  "value": 1630 },
{
  "label": "漯河市",
  "value": 1637 },
{
  "label": "三门峡市",
  "value": 1643 },
{
  "label": "南阳市",
  "value": 1650 },
{
  "label": "商丘市",
  "value": 1664 },
{
  "label": "信阳市",
  "value": 1674 },
{
  "label": "周口市",
  "value": 1685 },
{
  "label": "驻马店市",
  "value": 1696 },
{
  "label": "直辖县级",
  "value": 1707 }],

[{
  "label": "武汉市",
  "value": 1710 },
{
  "label": "黄石市",
  "value": 1724 },
{
  "label": "十堰市",
  "value": 1731 },
{
  "label": "宜昌市",
  "value": 1740 },
{
  "label": "襄阳市",
  "value": 1754 },
{
  "label": "鄂州市",
  "value": 1764 },
{
  "label": "荆门市",
  "value": 1768 },
{
  "label": "孝感市",
  "value": 1774 },
{
  "label": "荆州市",
  "value": 1782 },
{
  "label": "黄冈市",
  "value": 1791 },
{
  "label": "咸宁市",
  "value": 1802 },
{
  "label": "随州市",
  "value": 1809 },
{
  "label": "恩施土家族苗族自治州",
  "value": 1813 },
{
  "label": "直辖县级",
  "value": 1822 }],

[{
  "label": "长沙市",
  "value": 1828 },
{
  "label": "株洲市",
  "value": 1838 },
{
  "label": "湘潭市",
  "value": 1848 },
{
  "label": "衡阳市",
  "value": 1854 },
{
  "label": "邵阳市",
  "value": 1867 },
{
  "label": "岳阳市",
  "value": 1880 },
{
  "label": "常德市",
  "value": 1890 },
{
  "label": "张家界市",
  "value": 1900 },
{
  "label": "益阳市",
  "value": 1905 },
{
  "label": "郴州市",
  "value": 1912 },
{
  "label": "永州市",
  "value": 1924 },
{
  "label": "怀化市",
  "value": 1936 },
{
  "label": "娄底市",
  "value": 1949 },
{
  "label": "湘西土家族苗族自治州",
  "value": 1955 }],

[{
  "label": "广州市",
  "value": 1965 },
{
  "label": "韶关市",
  "value": 1977 },
{
  "label": "深圳市",
  "value": 1988 },
{
  "label": "珠海市",
  "value": 1999 },
{
  "label": "汕头市",
  "value": 2003 },
{
  "label": "佛山市",
  "value": 2011 },
{
  "label": "江门市",
  "value": 2017 },
{
  "label": "湛江市",
  "value": 2025 },
{
  "label": "茂名市",
  "value": 2035 },
{
  "label": "肇庆市",
  "value": 2041 },
{
  "label": "惠州市",
  "value": 2050 },
{
  "label": "梅州市",
  "value": 2056 },
{
  "label": "汕尾市",
  "value": 2065 },
{
  "label": "河源市",
  "value": 2070 },
{
  "label": "阳江市",
  "value": 2077 },
{
  "label": "清远市",
  "value": 2082 },
{
  "label": "东莞市",
  "value": 2091 },
{
  "label": "中山市",
  "value": 2123 },
{
  "label": "潮州市",
  "value": 2146 },
{
  "label": "揭阳市",
  "value": 2150 },
{
  "label": "云浮市",
  "value": 2156 }],

[{
  "label": "南宁市",
  "value": 2163 },
{
  "label": "柳州市",
  "value": 2177 },
{
  "label": "桂林市",
  "value": 2189 },
{
  "label": "梧州市",
  "value": 2207 },
{
  "label": "北海市",
  "value": 2215 },
{
  "label": "防城港市",
  "value": 2220 },
{
  "label": "钦州市",
  "value": 2225 },
{
  "label": "贵港市",
  "value": 2230 },
{
  "label": "玉林市",
  "value": 2236 },
{
  "label": "百色市",
  "value": 2245 },
{
  "label": "贺州市",
  "value": 2258 },
{
  "label": "河池市",
  "value": 2264 },
{
  "label": "来宾市",
  "value": 2276 },
{
  "label": "崇左市",
  "value": 2283 }],

[{
  "label": "海口市",
  "value": 2292 },
{
  "label": "三亚市",
  "value": 2297 },
{
  "label": "三沙市",
  "value": 2302 },
{
  "label": "直辖县级",
  "value": 2306 }],

[{
  "label": "重庆市",
  "value": 2324 },
{
  "label": "两江新区",
  "value": 2363 }],

[{
  "label": "成都市",
  "value": 2368 },
{
  "label": "自贡市",
  "value": 2388 },
{
  "label": "攀枝花市",
  "value": 2395 },
{
  "label": "泸州市",
  "value": 2401 },
{
  "label": "德阳市",
  "value": 2409 },
{
  "label": "绵阳市",
  "value": 2416 },
{
  "label": "广元市",
  "value": 2426 },
{
  "label": "遂宁市",
  "value": 2434 },
{
  "label": "内江市",
  "value": 2440 },
{
  "label": "乐山市",
  "value": 2446 },
{
  "label": "南充市",
  "value": 2458 },
{
  "label": "眉山市",
  "value": 2468 },
{
  "label": "宜宾市",
  "value": 2475 },
{
  "label": "广安市",
  "value": 2486 },
{
  "label": "达州市",
  "value": 2493 },
{
  "label": "雅安市",
  "value": 2501 },
{
  "label": "巴中市",
  "value": 2510 },
{
  "label": "资阳市",
  "value": 2516 },
{
  "label": "阿坝藏族羌族自治州",
  "value": 2521 },
{
  "label": "甘孜藏族自治州",
  "value": 2535 },
{
  "label": "凉山彝族自治州",
  "value": 2554 }],

[{
  "label": "贵阳市",
  "value": 2573 },
{
  "label": "六盘水市",
  "value": 2584 },
{
  "label": "遵义市",
  "value": 2589 },
{
  "label": "安顺市",
  "value": 2604 },
{
  "label": "毕节市",
  "value": 2611 },
{
  "label": "铜仁市",
  "value": 2620 },
{
  "label": "黔西南布依族苗族自治州",
  "value": 2631 },
{
  "label": "黔东南苗族侗族自治州",
  "value": 2640 },
{
  "label": "黔南布依族苗族自治州",
  "value": 2657 }],

[{
  "label": "昆明市",
  "value": 2671 },
{
  "label": "曲靖市",
  "value": 2686 },
{
  "label": "玉溪市",
  "value": 2696 },
{
  "label": "保山市",
  "value": 2706 },
{
  "label": "昭通市",
  "value": 2712 },
{
  "label": "丽江市",
  "value": 2724 },
{
  "label": "普洱市",
  "value": 2730 },
{
  "label": "临沧市",
  "value": 2741 },
{
  "label": "楚雄彝族自治州",
  "value": 2750 },
{
  "label": "红河哈尼族彝族自治州",
  "value": 2761 },
{
  "label": "文山壮族苗族自治州",
  "value": 2775 },
{
  "label": "西双版纳傣族自治州",
  "value": 2784 },
{
  "label": "大理白族自治州",
  "value": 2788 },
{
  "label": "德宏傣族景颇族自治州",
  "value": 2801 },
{
  "label": "怒江傈僳族自治州",
  "value": 2807 },
{
  "label": "迪庆藏族自治州",
  "value": 2812 }],

[{
  "label": "拉萨市",
  "value": 2817 },
{
  "label": "日喀则市",
  "value": 2826 },
{
  "label": "昌都市",
  "value": 2845 },
{
  "label": "山南地区",
  "value": 2857 },
{
  "label": "那曲地区",
  "value": 2870 },
{
  "label": "阿里地区",
  "value": 2882 },
{
  "label": "林芝地区",
  "value": 2890 }],

[{
  "label": "西安市",
  "value": 2899 },
{
  "label": "铜川市",
  "value": 2913 },
{
  "label": "宝鸡市",
  "value": 2918 },
{
  "label": "咸阳市",
  "value": 2931 },
{
  "label": "渭南市",
  "value": 2946 },
{
  "label": "延安市",
  "value": 2958 },
{
  "label": "汉中市",
  "value": 2972 },
{
  "label": "榆林市",
  "value": 2984 },
{
  "label": "安康市",
  "value": 2997 },
{
  "label": "商洛市",
  "value": 3008 },
{
  "label": "西咸新区",
  "value": 3016 }],

[{
  "label": "兰州市",
  "value": 3023 },
{
  "label": "嘉峪关市",
  "value": 3032 },
{
  "label": "金昌市",
  "value": 3036 },
{
  "label": "白银市",
  "value": 3039 },
{
  "label": "天水市",
  "value": 3045 },
{
  "label": "武威市",
  "value": 3053 },
{
  "label": "张掖市",
  "value": 3058 },
{
  "label": "平凉市",
  "value": 3065 },
{
  "label": "酒泉市",
  "value": 3073 },
{
  "label": "庆阳市",
  "value": 3081 },
{
  "label": "定西市",
  "value": 3090 },
{
  "label": "陇南市",
  "value": 3098 },
{
  "label": "临夏回族自治州",
  "value": 3108 },
{
  "label": "甘南藏族自治州",
  "value": 3117 }],

[{
  "label": "西宁市",
  "value": 3127 },
{
  "label": "海东市",
  "value": 3135 },
{
  "label": "海北藏族自治州",
  "value": 3142 },
{
  "label": "黄南藏族自治州",
  "value": 3147 },
{
  "label": "海南藏族自治州",
  "value": 3152 },
{
  "label": "果洛藏族自治州",
  "value": 3158 },
{
  "label": "玉树藏族自治州",
  "value": 3165 },
{
  "label": "海西蒙古族藏族自治州",
  "value": 3172 }],

[{
  "label": "银川市",
  "value": 3179 },
{
  "label": "石嘴山市",
  "value": 3186 },
{
  "label": "吴忠市",
  "value": 3190 },
{
  "label": "固原市",
  "value": 3196 },
{
  "label": "中卫市",
  "value": 3202 }],

[{
  "label": "乌鲁木齐市",
  "value": 3207 },
{
  "label": "克拉玛依市",
  "value": 3216 },
{
  "label": "吐鲁番地区",
  "value": 3221 },
{
  "label": "哈密地区",
  "value": 3225 },
{
  "label": "昌吉回族自治州",
  "value": 3229 },
{
  "label": "博尔塔拉蒙古自治州",
  "value": 3237 },
{
  "label": "巴音郭楞蒙古自治州",
  "value": 3242 },
{
  "label": "阿克苏地区",
  "value": 3252 },
{
  "label": "克孜勒苏柯尔克孜自治州",
  "value": 3262 },
{
  "label": "喀什地区",
  "value": 3267 },
{
  "label": "和田地区",
  "value": 3280 },
{
  "label": "伊犁哈萨克自治州",
  "value": 3289 },
{
  "label": "塔城地区",
  "value": 3301 },
{
  "label": "阿勒泰地区",
  "value": 3309 },
{
  "label": "直辖县级",
  "value": 3317 }],

[{
  "label": "台北市",
  "value": 3326 },
{
  "label": "高雄市",
  "value": 3339 },
{
  "label": "基隆市",
  "value": 3378 },
{
  "label": "台中市",
  "value": 3386 },
{
  "label": "台南市",
  "value": 3416 },
{
  "label": "新竹市",
  "value": 3454 },
{
  "label": "嘉义市",
  "value": 3458 },
{
  "label": "新北市",
  "value": 3461 },
{
  "label": "宜兰县",
  "value": 3491 },
{
  "label": "桃园县",
  "value": 3504 },
{
  "label": "新竹县",
  "value": 3518 },
{
  "label": "苗栗县",
  "value": 3532 },
{
  "label": "彰化县",
  "value": 3551 },
{
  "label": "南投县",
  "value": 3578 },
{
  "label": "云林县",
  "value": 3592 },
{
  "label": "嘉义县",
  "value": 3613 },
{
  "label": "屏东县",
  "value": 3632 },
{
  "label": "台东县",
  "value": 3666 },
{
  "label": "花莲县",
  "value": 3683 },
{
  "label": "澎湖县",
  "value": 3697 },
{
  "label": "金门县",
  "value": 3704 },
{
  "label": "连江县",
  "value": 3711 }],

[{
  "label": "香港岛",
  "value": 3717 },
{
  "label": "九龙",
  "value": 3722 },
{
  "label": "新界",
  "value": 3728 }],

[{
  "label": "澳门半岛",
  "value": 3739 },
{
  "label": "氹仔岛",
  "value": 3745 },
{
  "label": "路环岛",
  "value": 3747 }]];var _default =


cityData;exports.default = _default;

/***/ }),

/***/ 275:
/*!*************************************************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/components/mpvue-citypicker/city-data/area.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "东城区",
  "value": 3 },
{
  "label": "西城区",
  "value": 4 },
{
  "label": "朝阳区",
  "value": 5 },
{
  "label": "丰台区",
  "value": 6 },
{
  "label": "石景山区",
  "value": 7 },
{
  "label": "海淀区",
  "value": 8 },
{
  "label": "门头沟区",
  "value": 9 },
{
  "label": "房山区",
  "value": 10 },
{
  "label": "通州区",
  "value": 11 },
{
  "label": "顺义区",
  "value": 12 },
{
  "label": "昌平区",
  "value": 13 },
{
  "label": "大兴区",
  "value": 14 },
{
  "label": "怀柔区",
  "value": 15 },
{
  "label": "平谷区",
  "value": 16 },
{
  "label": "密云县",
  "value": 17 },
{
  "label": "延庆县",
  "value": 18 }]],


[
[{
  "label": "和平区",
  "value": 21 },
{
  "label": "河东区",
  "value": 22 },
{
  "label": "河西区",
  "value": 23 },
{
  "label": "南开区",
  "value": 24 },
{
  "label": "河北区",
  "value": 25 },
{
  "label": "红桥区",
  "value": 26 },
{
  "label": "东丽区",
  "value": 27 },
{
  "label": "西青区",
  "value": 28 },
{
  "label": "津南区",
  "value": 29 },
{
  "label": "北辰区",
  "value": 30 },
{
  "label": "武清区",
  "value": 31 },
{
  "label": "宝坻区",
  "value": 32 },
{
  "label": "滨海新区",
  "value": 33 },
{
  "label": "宁河县",
  "value": 34 },
{
  "label": "静海县",
  "value": 35 },
{
  "label": "蓟县",
  "value": 36 }]],


[
[{
  "label": "长安区",
  "value": 39 },
{
  "label": "桥西区",
  "value": 40 },
{
  "label": "新华区",
  "value": 41 },
{
  "label": "井陉矿区",
  "value": 42 },
{
  "label": "裕华区",
  "value": 43 },
{
  "label": "藁城区",
  "value": 44 },
{
  "label": "鹿泉区",
  "value": 45 },
{
  "label": "栾城区",
  "value": 46 },
{
  "label": "井陉县",
  "value": 47 },
{
  "label": "正定县",
  "value": 48 },
{
  "label": "行唐县",
  "value": 49 },
{
  "label": "灵寿县",
  "value": 50 },
{
  "label": "高邑县",
  "value": 51 },
{
  "label": "深泽县",
  "value": 52 },
{
  "label": "赞皇县",
  "value": 53 },
{
  "label": "无极县",
  "value": 54 },
{
  "label": "平山县",
  "value": 55 },
{
  "label": "元氏县",
  "value": 56 },
{
  "label": "赵县",
  "value": 57 },
{
  "label": "辛集市",
  "value": 58 },
{
  "label": "晋州市",
  "value": 59 },
{
  "label": "新乐市",
  "value": 60 }],

[{
  "label": "路南区",
  "value": 62 },
{
  "label": "路北区",
  "value": 63 },
{
  "label": "古冶区",
  "value": 64 },
{
  "label": "开平区",
  "value": 65 },
{
  "label": "丰南区",
  "value": 66 },
{
  "label": "丰润区",
  "value": 67 },
{
  "label": "曹妃甸区",
  "value": 68 },
{
  "label": "滦县",
  "value": 69 },
{
  "label": "滦南县",
  "value": 70 },
{
  "label": "乐亭县",
  "value": 71 },
{
  "label": "迁西县",
  "value": 72 },
{
  "label": "玉田县",
  "value": 73 },
{
  "label": "遵化市",
  "value": 74 },
{
  "label": "迁安市",
  "value": 75 }],

[{
  "label": "海港区",
  "value": 77 },
{
  "label": "山海关区",
  "value": 78 },
{
  "label": "北戴河区",
  "value": 79 },
{
  "label": "青龙满族自治县",
  "value": 80 },
{
  "label": "昌黎县",
  "value": 81 },
{
  "label": "抚宁县",
  "value": 82 },
{
  "label": "卢龙县",
  "value": 83 }],

[{
  "label": "邯山区",
  "value": 85 },
{
  "label": "丛台区",
  "value": 86 },
{
  "label": "复兴区",
  "value": 87 },
{
  "label": "峰峰矿区",
  "value": 88 },
{
  "label": "邯郸县",
  "value": 89 },
{
  "label": "临漳县",
  "value": 90 },
{
  "label": "成安县",
  "value": 91 },
{
  "label": "大名县",
  "value": 92 },
{
  "label": "涉县",
  "value": 93 },
{
  "label": "磁县",
  "value": 94 },
{
  "label": "肥乡县",
  "value": 95 },
{
  "label": "永年县",
  "value": 96 },
{
  "label": "邱县",
  "value": 97 },
{
  "label": "鸡泽县",
  "value": 98 },
{
  "label": "广平县",
  "value": 99 },
{
  "label": "馆陶县",
  "value": 100 },
{
  "label": "魏县",
  "value": 101 },
{
  "label": "曲周县",
  "value": 102 },
{
  "label": "武安市",
  "value": 103 }],

[{
  "label": "桥东区",
  "value": 105 },
{
  "label": "桥西区",
  "value": 106 },
{
  "label": "邢台县",
  "value": 107 },
{
  "label": "临城县",
  "value": 108 },
{
  "label": "内丘县",
  "value": 109 },
{
  "label": "柏乡县",
  "value": 110 },
{
  "label": "隆尧县",
  "value": 111 },
{
  "label": "任县",
  "value": 112 },
{
  "label": "南和县",
  "value": 113 },
{
  "label": "宁晋县",
  "value": 114 },
{
  "label": "巨鹿县",
  "value": 115 },
{
  "label": "新河县",
  "value": 116 },
{
  "label": "广宗县",
  "value": 117 },
{
  "label": "平乡县",
  "value": 118 },
{
  "label": "威县",
  "value": 119 },
{
  "label": "清河县",
  "value": 120 },
{
  "label": "临西县",
  "value": 121 },
{
  "label": "南宫市",
  "value": 122 },
{
  "label": "沙河市",
  "value": 123 }],

[{
  "label": "新市区",
  "value": 125 },
{
  "label": "北市区",
  "value": 126 },
{
  "label": "南市区",
  "value": 127 },
{
  "label": "满城县",
  "value": 128 },
{
  "label": "清苑县",
  "value": 129 },
{
  "label": "涞水县",
  "value": 130 },
{
  "label": "阜平县",
  "value": 131 },
{
  "label": "徐水县",
  "value": 132 },
{
  "label": "定兴县",
  "value": 133 },
{
  "label": "唐县",
  "value": 134 },
{
  "label": "高阳县",
  "value": 135 },
{
  "label": "容城县",
  "value": 136 },
{
  "label": "涞源县",
  "value": 137 },
{
  "label": "望都县",
  "value": 138 },
{
  "label": "安新县",
  "value": 139 },
{
  "label": "易县",
  "value": 140 },
{
  "label": "曲阳县",
  "value": 141 },
{
  "label": "蠡县",
  "value": 142 },
{
  "label": "顺平县",
  "value": 143 },
{
  "label": "博野县",
  "value": 144 },
{
  "label": "雄县",
  "value": 145 },
{
  "label": "涿州市",
  "value": 146 },
{
  "label": "定州市",
  "value": 147 },
{
  "label": "安国市",
  "value": 148 },
{
  "label": "高碑店市",
  "value": 149 }],

[{
  "label": "桥东区",
  "value": 151 },
{
  "label": "桥西区",
  "value": 152 },
{
  "label": "宣化区",
  "value": 153 },
{
  "label": "下花园区",
  "value": 154 },
{
  "label": "宣化县",
  "value": 155 },
{
  "label": "张北县",
  "value": 156 },
{
  "label": "康保县",
  "value": 157 },
{
  "label": "沽源县",
  "value": 158 },
{
  "label": "尚义县",
  "value": 159 },
{
  "label": "蔚县",
  "value": 160 },
{
  "label": "阳原县",
  "value": 161 },
{
  "label": "怀安县",
  "value": 162 },
{
  "label": "万全县",
  "value": 163 },
{
  "label": "怀来县",
  "value": 164 },
{
  "label": "涿鹿县",
  "value": 165 },
{
  "label": "赤城县",
  "value": 166 },
{
  "label": "崇礼县",
  "value": 167 }],

[{
  "label": "双桥区",
  "value": 169 },
{
  "label": "双滦区",
  "value": 170 },
{
  "label": "鹰手营子矿区",
  "value": 171 },
{
  "label": "承德县",
  "value": 172 },
{
  "label": "兴隆县",
  "value": 173 },
{
  "label": "平泉县",
  "value": 174 },
{
  "label": "滦平县",
  "value": 175 },
{
  "label": "隆化县",
  "value": 176 },
{
  "label": "丰宁满族自治县",
  "value": 177 },
{
  "label": "宽城满族自治县",
  "value": 178 },
{
  "label": "围场满族蒙古族自治县",
  "value": 179 }],

[{
  "label": "新华区",
  "value": 181 },
{
  "label": "运河区",
  "value": 182 },
{
  "label": "沧县",
  "value": 183 },
{
  "label": "青县",
  "value": 184 },
{
  "label": "东光县",
  "value": 185 },
{
  "label": "海兴县",
  "value": 186 },
{
  "label": "盐山县",
  "value": 187 },
{
  "label": "肃宁县",
  "value": 188 },
{
  "label": "南皮县",
  "value": 189 },
{
  "label": "吴桥县",
  "value": 190 },
{
  "label": "献县",
  "value": 191 },
{
  "label": "孟村回族自治县",
  "value": 192 },
{
  "label": "泊头市",
  "value": 193 },
{
  "label": "任丘市",
  "value": 194 },
{
  "label": "黄骅市",
  "value": 195 },
{
  "label": "河间市",
  "value": 196 }],

[{
  "label": "安次区",
  "value": 198 },
{
  "label": "广阳区",
  "value": 199 },
{
  "label": "固安县",
  "value": 200 },
{
  "label": "永清县",
  "value": 201 },
{
  "label": "香河县",
  "value": 202 },
{
  "label": "大城县",
  "value": 203 },
{
  "label": "文安县",
  "value": 204 },
{
  "label": "大厂回族自治县",
  "value": 205 },
{
  "label": "霸州市",
  "value": 206 },
{
  "label": "三河市",
  "value": 207 }],

[{
  "label": "桃城区",
  "value": 209 },
{
  "label": "枣强县",
  "value": 210 },
{
  "label": "武邑县",
  "value": 211 },
{
  "label": "武强县",
  "value": 212 },
{
  "label": "饶阳县",
  "value": 213 },
{
  "label": "安平县",
  "value": 214 },
{
  "label": "故城县",
  "value": 215 },
{
  "label": "景县",
  "value": 216 },
{
  "label": "阜城县",
  "value": 217 },
{
  "label": "冀州市",
  "value": 218 },
{
  "label": "深州市",
  "value": 219 }]],


[
[{
  "label": "小店区",
  "value": 222 },
{
  "label": "迎泽区",
  "value": 223 },
{
  "label": "杏花岭区",
  "value": 224 },
{
  "label": "尖草坪区",
  "value": 225 },
{
  "label": "万柏林区",
  "value": 226 },
{
  "label": "晋源区",
  "value": 227 },
{
  "label": "清徐县",
  "value": 228 },
{
  "label": "阳曲县",
  "value": 229 },
{
  "label": "娄烦县",
  "value": 230 },
{
  "label": "古交市",
  "value": 231 }],

[{
  "label": "城区",
  "value": 233 },
{
  "label": "矿区",
  "value": 234 },
{
  "label": "南郊区",
  "value": 235 },
{
  "label": "新荣区",
  "value": 236 },
{
  "label": "阳高县",
  "value": 237 },
{
  "label": "天镇县",
  "value": 238 },
{
  "label": "广灵县",
  "value": 239 },
{
  "label": "灵丘县",
  "value": 240 },
{
  "label": "浑源县",
  "value": 241 },
{
  "label": "左云县",
  "value": 242 },
{
  "label": "大同县",
  "value": 243 }],

[{
  "label": "城区",
  "value": 245 },
{
  "label": "矿区",
  "value": 246 },
{
  "label": "郊区",
  "value": 247 },
{
  "label": "平定县",
  "value": 248 },
{
  "label": "盂县",
  "value": 249 }],

[{
  "label": "城区",
  "value": 251 },
{
  "label": "郊区",
  "value": 252 },
{
  "label": "长治县",
  "value": 253 },
{
  "label": "襄垣县",
  "value": 254 },
{
  "label": "屯留县",
  "value": 255 },
{
  "label": "平顺县",
  "value": 256 },
{
  "label": "黎城县",
  "value": 257 },
{
  "label": "壶关县",
  "value": 258 },
{
  "label": "长子县",
  "value": 259 },
{
  "label": "武乡县",
  "value": 260 },
{
  "label": "沁县",
  "value": 261 },
{
  "label": "沁源县",
  "value": 262 },
{
  "label": "潞城市",
  "value": 263 }],

[{
  "label": "城区",
  "value": 265 },
{
  "label": "沁水县",
  "value": 266 },
{
  "label": "阳城县",
  "value": 267 },
{
  "label": "陵川县",
  "value": 268 },
{
  "label": "泽州县",
  "value": 269 },
{
  "label": "高平市",
  "value": 270 }],

[{
  "label": "朔城区",
  "value": 272 },
{
  "label": "平鲁区",
  "value": 273 },
{
  "label": "山阴县",
  "value": 274 },
{
  "label": "应县",
  "value": 275 },
{
  "label": "右玉县",
  "value": 276 },
{
  "label": "怀仁县",
  "value": 277 }],

[{
  "label": "榆次区",
  "value": 279 },
{
  "label": "榆社县",
  "value": 280 },
{
  "label": "左权县",
  "value": 281 },
{
  "label": "和顺县",
  "value": 282 },
{
  "label": "昔阳县",
  "value": 283 },
{
  "label": "寿阳县",
  "value": 284 },
{
  "label": "太谷县",
  "value": 285 },
{
  "label": "祁县",
  "value": 286 },
{
  "label": "平遥县",
  "value": 287 },
{
  "label": "灵石县",
  "value": 288 },
{
  "label": "介休市",
  "value": 289 }],

[{
  "label": "盐湖区",
  "value": 291 },
{
  "label": "临猗县",
  "value": 292 },
{
  "label": "万荣县",
  "value": 293 },
{
  "label": "闻喜县",
  "value": 294 },
{
  "label": "稷山县",
  "value": 295 },
{
  "label": "新绛县",
  "value": 296 },
{
  "label": "绛县",
  "value": 297 },
{
  "label": "垣曲县",
  "value": 298 },
{
  "label": "夏县",
  "value": 299 },
{
  "label": "平陆县",
  "value": 300 },
{
  "label": "芮城县",
  "value": 301 },
{
  "label": "永济市",
  "value": 302 },
{
  "label": "河津市",
  "value": 303 }],

[{
  "label": "忻府区",
  "value": 305 },
{
  "label": "定襄县",
  "value": 306 },
{
  "label": "五台县",
  "value": 307 },
{
  "label": "代县",
  "value": 308 },
{
  "label": "繁峙县",
  "value": 309 },
{
  "label": "宁武县",
  "value": 310 },
{
  "label": "静乐县",
  "value": 311 },
{
  "label": "神池县",
  "value": 312 },
{
  "label": "五寨县",
  "value": 313 },
{
  "label": "岢岚县",
  "value": 314 },
{
  "label": "河曲县",
  "value": 315 },
{
  "label": "保德县",
  "value": 316 },
{
  "label": "偏关县",
  "value": 317 },
{
  "label": "原平市",
  "value": 318 }],

[{
  "label": "尧都区",
  "value": 320 },
{
  "label": "曲沃县",
  "value": 321 },
{
  "label": "翼城县",
  "value": 322 },
{
  "label": "襄汾县",
  "value": 323 },
{
  "label": "洪洞县",
  "value": 324 },
{
  "label": "古县",
  "value": 325 },
{
  "label": "安泽县",
  "value": 326 },
{
  "label": "浮山县",
  "value": 327 },
{
  "label": "吉县",
  "value": 328 },
{
  "label": "乡宁县",
  "value": 329 },
{
  "label": "大宁县",
  "value": 330 },
{
  "label": "隰县",
  "value": 331 },
{
  "label": "永和县",
  "value": 332 },
{
  "label": "蒲县",
  "value": 333 },
{
  "label": "汾西县",
  "value": 334 },
{
  "label": "侯马市",
  "value": 335 },
{
  "label": "霍州市",
  "value": 336 }],

[{
  "label": "离石区",
  "value": 338 },
{
  "label": "文水县",
  "value": 339 },
{
  "label": "交城县",
  "value": 340 },
{
  "label": "兴县",
  "value": 341 },
{
  "label": "临县",
  "value": 342 },
{
  "label": "柳林县",
  "value": 343 },
{
  "label": "石楼县",
  "value": 344 },
{
  "label": "岚县",
  "value": 345 },
{
  "label": "方山县",
  "value": 346 },
{
  "label": "中阳县",
  "value": 347 },
{
  "label": "交口县",
  "value": 348 },
{
  "label": "孝义市",
  "value": 349 },
{
  "label": "汾阳市",
  "value": 350 }]],


[
[{
  "label": "新城区",
  "value": 353 },
{
  "label": "回民区",
  "value": 354 },
{
  "label": "玉泉区",
  "value": 355 },
{
  "label": "赛罕区",
  "value": 356 },
{
  "label": "土默特左旗",
  "value": 357 },
{
  "label": "托克托县",
  "value": 358 },
{
  "label": "和林格尔县",
  "value": 359 },
{
  "label": "清水河县",
  "value": 360 },
{
  "label": "武川县",
  "value": 361 }],

[{
  "label": "东河区",
  "value": 363 },
{
  "label": "昆都仑区",
  "value": 364 },
{
  "label": "青山区",
  "value": 365 },
{
  "label": "石拐区",
  "value": 366 },
{
  "label": "白云鄂博矿区",
  "value": 367 },
{
  "label": "九原区",
  "value": 368 },
{
  "label": "土默特右旗",
  "value": 369 },
{
  "label": "固阳县",
  "value": 370 },
{
  "label": "达尔罕茂明安联合旗",
  "value": 371 }],

[{
  "label": "海勃湾区",
  "value": 373 },
{
  "label": "海南区",
  "value": 374 },
{
  "label": "乌达区",
  "value": 375 }],

[{
  "label": "红山区",
  "value": 377 },
{
  "label": "元宝山区",
  "value": 378 },
{
  "label": "松山区",
  "value": 379 },
{
  "label": "阿鲁科尔沁旗",
  "value": 380 },
{
  "label": "巴林左旗",
  "value": 381 },
{
  "label": "巴林右旗",
  "value": 382 },
{
  "label": "林西县",
  "value": 383 },
{
  "label": "克什克腾旗",
  "value": 384 },
{
  "label": "翁牛特旗",
  "value": 385 },
{
  "label": "喀喇沁旗",
  "value": 386 },
{
  "label": "宁城县",
  "value": 387 },
{
  "label": "敖汉旗",
  "value": 388 }],

[{
  "label": "科尔沁区",
  "value": 390 },
{
  "label": "科尔沁左翼中旗",
  "value": 391 },
{
  "label": "科尔沁左翼后旗",
  "value": 392 },
{
  "label": "开鲁县",
  "value": 393 },
{
  "label": "库伦旗",
  "value": 394 },
{
  "label": "奈曼旗",
  "value": 395 },
{
  "label": "扎鲁特旗",
  "value": 396 },
{
  "label": "霍林郭勒市",
  "value": 397 }],

[{
  "label": "东胜区",
  "value": 399 },
{
  "label": "达拉特旗",
  "value": 400 },
{
  "label": "准格尔旗",
  "value": 401 },
{
  "label": "鄂托克前旗",
  "value": 402 },
{
  "label": "鄂托克旗",
  "value": 403 },
{
  "label": "杭锦旗",
  "value": 404 },
{
  "label": "乌审旗",
  "value": 405 },
{
  "label": "伊金霍洛旗",
  "value": 406 }],

[{
  "label": "海拉尔区",
  "value": 408 },
{
  "label": "扎赉诺尔区",
  "value": 409 },
{
  "label": "阿荣旗",
  "value": 410 },
{
  "label": "莫力达瓦达斡尔族自治旗",
  "value": 411 },
{
  "label": "鄂伦春自治旗",
  "value": 412 },
{
  "label": "鄂温克族自治旗",
  "value": 413 },
{
  "label": "陈巴尔虎旗",
  "value": 414 },
{
  "label": "新巴尔虎左旗",
  "value": 415 },
{
  "label": "新巴尔虎右旗",
  "value": 416 },
{
  "label": "满洲里市",
  "value": 417 },
{
  "label": "牙克石市",
  "value": 418 },
{
  "label": "扎兰屯市",
  "value": 419 },
{
  "label": "额尔古纳市",
  "value": 420 },
{
  "label": "根河市",
  "value": 421 }],

[{
  "label": "临河区",
  "value": 423 },
{
  "label": "五原县",
  "value": 424 },
{
  "label": "磴口县",
  "value": 425 },
{
  "label": "乌拉特前旗",
  "value": 426 },
{
  "label": "乌拉特中旗",
  "value": 427 },
{
  "label": "乌拉特后旗",
  "value": 428 },
{
  "label": "杭锦后旗",
  "value": 429 }],

[{
  "label": "集宁区",
  "value": 431 },
{
  "label": "卓资县",
  "value": 432 },
{
  "label": "化德县",
  "value": 433 },
{
  "label": "商都县",
  "value": 434 },
{
  "label": "兴和县",
  "value": 435 },
{
  "label": "凉城县",
  "value": 436 },
{
  "label": "察哈尔右翼前旗",
  "value": 437 },
{
  "label": "察哈尔右翼中旗",
  "value": 438 },
{
  "label": "察哈尔右翼后旗",
  "value": 439 },
{
  "label": "四子王旗",
  "value": 440 },
{
  "label": "丰镇市",
  "value": 441 }],

[{
  "label": "乌兰浩特市",
  "value": 443 },
{
  "label": "阿尔山市",
  "value": 444 },
{
  "label": "科尔沁右翼前旗",
  "value": 445 },
{
  "label": "科尔沁右翼中旗",
  "value": 446 },
{
  "label": "扎赉特旗",
  "value": 447 },
{
  "label": "突泉县",
  "value": 448 }],

[{
  "label": "二连浩特市",
  "value": 450 },
{
  "label": "锡林浩特市",
  "value": 451 },
{
  "label": "阿巴嘎旗",
  "value": 452 },
{
  "label": "苏尼特左旗",
  "value": 453 },
{
  "label": "苏尼特右旗",
  "value": 454 },
{
  "label": "东乌珠穆沁旗",
  "value": 455 },
{
  "label": "西乌珠穆沁旗",
  "value": 456 },
{
  "label": "太仆寺旗",
  "value": 457 },
{
  "label": "镶黄旗",
  "value": 458 },
{
  "label": "正镶白旗",
  "value": 459 },
{
  "label": "正蓝旗",
  "value": 460 },
{
  "label": "多伦县",
  "value": 461 }],

[{
  "label": "阿拉善左旗",
  "value": 463 },
{
  "label": "阿拉善右旗",
  "value": 464 },
{
  "label": "额济纳旗",
  "value": 465 }]],


[
[{
  "label": "和平区",
  "value": 468 },
{
  "label": "沈河区",
  "value": 469 },
{
  "label": "大东区",
  "value": 470 },
{
  "label": "皇姑区",
  "value": 471 },
{
  "label": "铁西区",
  "value": 472 },
{
  "label": "苏家屯区",
  "value": 473 },
{
  "label": "浑南区",
  "value": 474 },
{
  "label": "沈北新区",
  "value": 475 },
{
  "label": "于洪区",
  "value": 476 },
{
  "label": "辽中县",
  "value": 477 },
{
  "label": "康平县",
  "value": 478 },
{
  "label": "法库县",
  "value": 479 },
{
  "label": "新民市",
  "value": 480 }],

[{
  "label": "中山区",
  "value": 482 },
{
  "label": "西岗区",
  "value": 483 },
{
  "label": "沙河口区",
  "value": 484 },
{
  "label": "甘井子区",
  "value": 485 },
{
  "label": "旅顺口区",
  "value": 486 },
{
  "label": "金州区",
  "value": 487 },
{
  "label": "长海县",
  "value": 488 },
{
  "label": "瓦房店市",
  "value": 489 },
{
  "label": "普兰店市",
  "value": 490 },
{
  "label": "庄河市",
  "value": 491 }],

[{
  "label": "铁东区",
  "value": 493 },
{
  "label": "铁西区",
  "value": 494 },
{
  "label": "立山区",
  "value": 495 },
{
  "label": "千山区",
  "value": 496 },
{
  "label": "台安县",
  "value": 497 },
{
  "label": "岫岩满族自治县",
  "value": 498 },
{
  "label": "海城市",
  "value": 499 }],

[{
  "label": "新抚区",
  "value": 501 },
{
  "label": "东洲区",
  "value": 502 },
{
  "label": "望花区",
  "value": 503 },
{
  "label": "顺城区",
  "value": 504 },
{
  "label": "抚顺县",
  "value": 505 },
{
  "label": "新宾满族自治县",
  "value": 506 },
{
  "label": "清原满族自治县",
  "value": 507 }],

[{
  "label": "平山区",
  "value": 509 },
{
  "label": "溪湖区",
  "value": 510 },
{
  "label": "明山区",
  "value": 511 },
{
  "label": "南芬区",
  "value": 512 },
{
  "label": "本溪满族自治县",
  "value": 513 },
{
  "label": "桓仁满族自治县",
  "value": 514 }],

[{
  "label": "元宝区",
  "value": 516 },
{
  "label": "振兴区",
  "value": 517 },
{
  "label": "振安区",
  "value": 518 },
{
  "label": "宽甸满族自治县",
  "value": 519 },
{
  "label": "东港市",
  "value": 520 },
{
  "label": "凤城市",
  "value": 521 }],

[{
  "label": "古塔区",
  "value": 523 },
{
  "label": "凌河区",
  "value": 524 },
{
  "label": "太和区",
  "value": 525 },
{
  "label": "黑山县",
  "value": 526 },
{
  "label": "义县",
  "value": 527 },
{
  "label": "凌海市",
  "value": 528 },
{
  "label": "北镇市",
  "value": 529 }],

[{
  "label": "站前区",
  "value": 531 },
{
  "label": "西市区",
  "value": 532 },
{
  "label": "鲅鱼圈区",
  "value": 533 },
{
  "label": "老边区",
  "value": 534 },
{
  "label": "盖州市",
  "value": 535 },
{
  "label": "大石桥市",
  "value": 536 }],

[{
  "label": "海州区",
  "value": 538 },
{
  "label": "新邱区",
  "value": 539 },
{
  "label": "太平区",
  "value": 540 },
{
  "label": "清河门区",
  "value": 541 },
{
  "label": "细河区",
  "value": 542 },
{
  "label": "阜新蒙古族自治县",
  "value": 543 },
{
  "label": "彰武县",
  "value": 544 }],

[{
  "label": "白塔区",
  "value": 546 },
{
  "label": "文圣区",
  "value": 547 },
{
  "label": "宏伟区",
  "value": 548 },
{
  "label": "弓长岭区",
  "value": 549 },
{
  "label": "太子河区",
  "value": 550 },
{
  "label": "辽阳县",
  "value": 551 },
{
  "label": "灯塔市",
  "value": 552 }],

[{
  "label": "双台子区",
  "value": 554 },
{
  "label": "兴隆台区",
  "value": 555 },
{
  "label": "大洼县",
  "value": 556 },
{
  "label": "盘山县",
  "value": 557 }],

[{
  "label": "银州区",
  "value": 559 },
{
  "label": "清河区",
  "value": 560 },
{
  "label": "铁岭县",
  "value": 561 },
{
  "label": "西丰县",
  "value": 562 },
{
  "label": "昌图县",
  "value": 563 },
{
  "label": "调兵山市",
  "value": 564 },
{
  "label": "开原市",
  "value": 565 }],

[{
  "label": "双塔区",
  "value": 567 },
{
  "label": "龙城区",
  "value": 568 },
{
  "label": "朝阳县",
  "value": 569 },
{
  "label": "建平县",
  "value": 570 },
{
  "label": "喀喇沁左翼蒙古族自治县",
  "value": 571 },
{
  "label": "北票市",
  "value": 572 },
{
  "label": "凌源市",
  "value": 573 }],

[{
  "label": "连山区",
  "value": 575 },
{
  "label": "龙港区",
  "value": 576 },
{
  "label": "南票区",
  "value": 577 },
{
  "label": "绥中县",
  "value": 578 },
{
  "label": "建昌县",
  "value": 579 },
{
  "label": "兴城市",
  "value": 580 }],

[{
  "label": "金州新区",
  "value": 582 },
{
  "label": "普湾新区",
  "value": 583 },
{
  "label": "保税区",
  "value": 584 }]],


[
[{
  "label": "南关区",
  "value": 587 },
{
  "label": "宽城区",
  "value": 588 },
{
  "label": "朝阳区",
  "value": 589 },
{
  "label": "二道区",
  "value": 590 },
{
  "label": "绿园区",
  "value": 591 },
{
  "label": "双阳区",
  "value": 592 },
{
  "label": "九台区",
  "value": 593 },
{
  "label": "农安县",
  "value": 594 },
{
  "label": "榆树市",
  "value": 595 },
{
  "label": "德惠市",
  "value": 596 }],

[{
  "label": "昌邑区",
  "value": 598 },
{
  "label": "龙潭区",
  "value": 599 },
{
  "label": "船营区",
  "value": 600 },
{
  "label": "丰满区",
  "value": 601 },
{
  "label": "永吉县",
  "value": 602 },
{
  "label": "蛟河市",
  "value": 603 },
{
  "label": "桦甸市",
  "value": 604 },
{
  "label": "舒兰市",
  "value": 605 },
{
  "label": "磐石市",
  "value": 606 }],

[{
  "label": "铁西区",
  "value": 608 },
{
  "label": "铁东区",
  "value": 609 },
{
  "label": "梨树县",
  "value": 610 },
{
  "label": "伊通满族自治县",
  "value": 611 },
{
  "label": "公主岭市",
  "value": 612 },
{
  "label": "双辽市",
  "value": 613 }],

[{
  "label": "龙山区",
  "value": 615 },
{
  "label": "西安区",
  "value": 616 },
{
  "label": "东丰县",
  "value": 617 },
{
  "label": "东辽县",
  "value": 618 }],

[{
  "label": "东昌区",
  "value": 620 },
{
  "label": "二道江区",
  "value": 621 },
{
  "label": "通化县",
  "value": 622 },
{
  "label": "辉南县",
  "value": 623 },
{
  "label": "柳河县",
  "value": 624 },
{
  "label": "梅河口市",
  "value": 625 },
{
  "label": "集安市",
  "value": 626 }],

[{
  "label": "浑江区",
  "value": 628 },
{
  "label": "江源区",
  "value": 629 },
{
  "label": "抚松县",
  "value": 630 },
{
  "label": "靖宇县",
  "value": 631 },
{
  "label": "长白朝鲜族自治县",
  "value": 632 },
{
  "label": "临江市",
  "value": 633 }],

[{
  "label": "宁江区",
  "value": 635 },
{
  "label": "前郭尔罗斯蒙古族自治县",
  "value": 636 },
{
  "label": "长岭县",
  "value": 637 },
{
  "label": "乾安县",
  "value": 638 },
{
  "label": "扶余市",
  "value": 639 }],

[{
  "label": "洮北区",
  "value": 641 },
{
  "label": "镇赉县",
  "value": 642 },
{
  "label": "通榆县",
  "value": 643 },
{
  "label": "洮南市",
  "value": 644 },
{
  "label": "大安市",
  "value": 645 }],

[{
  "label": "延吉市",
  "value": 647 },
{
  "label": "图们市",
  "value": 648 },
{
  "label": "敦化市",
  "value": 649 },
{
  "label": "珲春市",
  "value": 650 },
{
  "label": "龙井市",
  "value": 651 },
{
  "label": "和龙市",
  "value": 652 },
{
  "label": "汪清县",
  "value": 653 },
{
  "label": "安图县",
  "value": 654 }]],


[
[{
  "label": "道里区",
  "value": 657 },
{
  "label": "南岗区",
  "value": 658 },
{
  "label": "道外区",
  "value": 659 },
{
  "label": "平房区",
  "value": 660 },
{
  "label": "松北区",
  "value": 661 },
{
  "label": "香坊区",
  "value": 662 },
{
  "label": "呼兰区",
  "value": 663 },
{
  "label": "阿城区",
  "value": 664 },
{
  "label": "双城区",
  "value": 665 },
{
  "label": "依兰县",
  "value": 666 },
{
  "label": "方正县",
  "value": 667 },
{
  "label": "宾县",
  "value": 668 },
{
  "label": "巴彦县",
  "value": 669 },
{
  "label": "木兰县",
  "value": 670 },
{
  "label": "通河县",
  "value": 671 },
{
  "label": "延寿县",
  "value": 672 },
{
  "label": "尚志市",
  "value": 673 },
{
  "label": "五常市",
  "value": 674 }],

[{
  "label": "龙沙区",
  "value": 676 },
{
  "label": "建华区",
  "value": 677 },
{
  "label": "铁锋区",
  "value": 678 },
{
  "label": "昂昂溪区",
  "value": 679 },
{
  "label": "富拉尔基区",
  "value": 680 },
{
  "label": "碾子山区",
  "value": 681 },
{
  "label": "梅里斯达斡尔族区",
  "value": 682 },
{
  "label": "龙江县",
  "value": 683 },
{
  "label": "依安县",
  "value": 684 },
{
  "label": "泰来县",
  "value": 685 },
{
  "label": "甘南县",
  "value": 686 },
{
  "label": "富裕县",
  "value": 687 },
{
  "label": "克山县",
  "value": 688 },
{
  "label": "克东县",
  "value": 689 },
{
  "label": "拜泉县",
  "value": 690 },
{
  "label": "讷河市",
  "value": 691 }],

[{
  "label": "鸡冠区",
  "value": 693 },
{
  "label": "恒山区",
  "value": 694 },
{
  "label": "滴道区",
  "value": 695 },
{
  "label": "梨树区",
  "value": 696 },
{
  "label": "城子河区",
  "value": 697 },
{
  "label": "麻山区",
  "value": 698 },
{
  "label": "鸡东县",
  "value": 699 },
{
  "label": "虎林市",
  "value": 700 },
{
  "label": "密山市",
  "value": 701 }],

[{
  "label": "向阳区",
  "value": 703 },
{
  "label": "工农区",
  "value": 704 },
{
  "label": "南山区",
  "value": 705 },
{
  "label": "兴安区",
  "value": 706 },
{
  "label": "东山区",
  "value": 707 },
{
  "label": "兴山区",
  "value": 708 },
{
  "label": "萝北县",
  "value": 709 },
{
  "label": "绥滨县",
  "value": 710 }],

[{
  "label": "尖山区",
  "value": 712 },
{
  "label": "岭东区",
  "value": 713 },
{
  "label": "四方台区",
  "value": 714 },
{
  "label": "宝山区",
  "value": 715 },
{
  "label": "集贤县",
  "value": 716 },
{
  "label": "友谊县",
  "value": 717 },
{
  "label": "宝清县",
  "value": 718 },
{
  "label": "饶河县",
  "value": 719 }],

[{
  "label": "萨尔图区",
  "value": 721 },
{
  "label": "龙凤区",
  "value": 722 },
{
  "label": "让胡路区",
  "value": 723 },
{
  "label": "红岗区",
  "value": 724 },
{
  "label": "大同区",
  "value": 725 },
{
  "label": "肇州县",
  "value": 726 },
{
  "label": "肇源县",
  "value": 727 },
{
  "label": "林甸县",
  "value": 728 },
{
  "label": "杜尔伯特蒙古族自治县",
  "value": 729 }],

[{
  "label": "伊春区",
  "value": 731 },
{
  "label": "南岔区",
  "value": 732 },
{
  "label": "友好区",
  "value": 733 },
{
  "label": "西林区",
  "value": 734 },
{
  "label": "翠峦区",
  "value": 735 },
{
  "label": "新青区",
  "value": 736 },
{
  "label": "美溪区",
  "value": 737 },
{
  "label": "金山屯区",
  "value": 738 },
{
  "label": "五营区",
  "value": 739 },
{
  "label": "乌马河区",
  "value": 740 },
{
  "label": "汤旺河区",
  "value": 741 },
{
  "label": "带岭区",
  "value": 742 },
{
  "label": "乌伊岭区",
  "value": 743 },
{
  "label": "红星区",
  "value": 744 },
{
  "label": "上甘岭区",
  "value": 745 },
{
  "label": "嘉荫县",
  "value": 746 },
{
  "label": "铁力市",
  "value": 747 }],

[{
  "label": "向阳区",
  "value": 749 },
{
  "label": "前进区",
  "value": 750 },
{
  "label": "东风区",
  "value": 751 },
{
  "label": "郊区",
  "value": 752 },
{
  "label": "桦南县",
  "value": 753 },
{
  "label": "桦川县",
  "value": 754 },
{
  "label": "汤原县",
  "value": 755 },
{
  "label": "抚远县",
  "value": 756 },
{
  "label": "同江市",
  "value": 757 },
{
  "label": "富锦市",
  "value": 758 }],

[{
  "label": "新兴区",
  "value": 760 },
{
  "label": "桃山区",
  "value": 761 },
{
  "label": "茄子河区",
  "value": 762 },
{
  "label": "勃利县",
  "value": 763 }],

[{
  "label": "东安区",
  "value": 765 },
{
  "label": "阳明区",
  "value": 766 },
{
  "label": "爱民区",
  "value": 767 },
{
  "label": "西安区",
  "value": 768 },
{
  "label": "东宁县",
  "value": 769 },
{
  "label": "林口县",
  "value": 770 },
{
  "label": "绥芬河市",
  "value": 771 },
{
  "label": "海林市",
  "value": 772 },
{
  "label": "宁安市",
  "value": 773 },
{
  "label": "穆棱市",
  "value": 774 }],

[{
  "label": "爱辉区",
  "value": 776 },
{
  "label": "嫩江县",
  "value": 777 },
{
  "label": "逊克县",
  "value": 778 },
{
  "label": "孙吴县",
  "value": 779 },
{
  "label": "北安市",
  "value": 780 },
{
  "label": "五大连池市",
  "value": 781 }],

[{
  "label": "北林区",
  "value": 783 },
{
  "label": "望奎县",
  "value": 784 },
{
  "label": "兰西县",
  "value": 785 },
{
  "label": "青冈县",
  "value": 786 },
{
  "label": "庆安县",
  "value": 787 },
{
  "label": "明水县",
  "value": 788 },
{
  "label": "绥棱县",
  "value": 789 },
{
  "label": "安达市",
  "value": 790 },
{
  "label": "肇东市",
  "value": 791 },
{
  "label": "海伦市",
  "value": 792 }],

[{
  "label": "加格达奇区",
  "value": 794 },
{
  "label": "新林区",
  "value": 795 },
{
  "label": "松岭区",
  "value": 796 },
{
  "label": "呼中区",
  "value": 797 },
{
  "label": "呼玛县",
  "value": 798 },
{
  "label": "塔河县",
  "value": 799 },
{
  "label": "漠河县",
  "value": 800 }]],


[
[{
  "label": "黄浦区",
  "value": 803 },
{
  "label": "徐汇区",
  "value": 804 },
{
  "label": "长宁区",
  "value": 805 },
{
  "label": "静安区",
  "value": 806 },
{
  "label": "普陀区",
  "value": 807 },
{
  "label": "闸北区",
  "value": 808 },
{
  "label": "虹口区",
  "value": 809 },
{
  "label": "杨浦区",
  "value": 810 },
{
  "label": "闵行区",
  "value": 811 },
{
  "label": "宝山区",
  "value": 812 },
{
  "label": "嘉定区",
  "value": 813 },
{
  "label": "浦东新区",
  "value": 814 },
{
  "label": "金山区",
  "value": 815 },
{
  "label": "松江区",
  "value": 816 },
{
  "label": "青浦区",
  "value": 817 },
{
  "label": "奉贤区",
  "value": 818 },
{
  "label": "崇明县",
  "value": 819 }]],


[
[{
  "label": "玄武区",
  "value": 822 },
{
  "label": "秦淮区",
  "value": 823 },
{
  "label": "建邺区",
  "value": 824 },
{
  "label": "鼓楼区",
  "value": 825 },
{
  "label": "浦口区",
  "value": 826 },
{
  "label": "栖霞区",
  "value": 827 },
{
  "label": "雨花台区",
  "value": 828 },
{
  "label": "江宁区",
  "value": 829 },
{
  "label": "六合区",
  "value": 830 },
{
  "label": "溧水区",
  "value": 831 },
{
  "label": "高淳区",
  "value": 832 }],

[{
  "label": "梁溪区",
  "value": 834 },
{
  "label": "新吴区",
  "value": 835 },
{
  "label": "锡山区",
  "value": 837 },
{
  "label": "惠山区",
  "value": 838 },
{
  "label": "滨湖区",
  "value": 839 },
{
  "label": "江阴市",
  "value": 840 },
{
  "label": "宜兴市",
  "value": 841 }],

[{
  "label": "鼓楼区",
  "value": 843 },
{
  "label": "云龙区",
  "value": 844 },
{
  "label": "贾汪区",
  "value": 845 },
{
  "label": "泉山区",
  "value": 846 },
{
  "label": "铜山区",
  "value": 847 },
{
  "label": "丰县",
  "value": 848 },
{
  "label": "沛县",
  "value": 849 },
{
  "label": "睢宁县",
  "value": 850 },
{
  "label": "新沂市",
  "value": 851 },
{
  "label": "邳州市",
  "value": 852 }],

[{
  "label": "天宁区",
  "value": 854 },
{
  "label": "钟楼区",
  "value": 855 },
{
  "label": "戚墅堰区",
  "value": 856 },
{
  "label": "新北区",
  "value": 857 },
{
  "label": "武进区",
  "value": 858 },
{
  "label": "溧阳市",
  "value": 859 },
{
  "label": "金坛市",
  "value": 860 }],

[{
  "label": "虎丘区",
  "value": 862 },
{
  "label": "吴中区",
  "value": 863 },
{
  "label": "相城区",
  "value": 864 },
{
  "label": "姑苏区",
  "value": 865 },
{
  "label": "吴江区",
  "value": 866 },
{
  "label": "常熟市",
  "value": 867 },
{
  "label": "张家港市",
  "value": 868 },
{
  "label": "昆山市",
  "value": 869 },
{
  "label": "太仓市",
  "value": 870 }],

[{
  "label": "崇川区",
  "value": 872 },
{
  "label": "港闸区",
  "value": 873 },
{
  "label": "通州区",
  "value": 874 },
{
  "label": "海安县",
  "value": 875 },
{
  "label": "如东县",
  "value": 876 },
{
  "label": "启东市",
  "value": 877 },
{
  "label": "如皋市",
  "value": 878 },
{
  "label": "海门市",
  "value": 879 }],

[{
  "label": "连云区",
  "value": 881 },
{
  "label": "海州区",
  "value": 882 },
{
  "label": "赣榆区",
  "value": 883 },
{
  "label": "东海县",
  "value": 884 },
{
  "label": "灌云县",
  "value": 885 },
{
  "label": "灌南县",
  "value": 886 }],

[{
  "label": "清河区",
  "value": 888 },
{
  "label": "淮安区",
  "value": 889 },
{
  "label": "淮阴区",
  "value": 890 },
{
  "label": "清浦区",
  "value": 891 },
{
  "label": "涟水县",
  "value": 892 },
{
  "label": "洪泽县",
  "value": 893 },
{
  "label": "盱眙县",
  "value": 894 },
{
  "label": "金湖县",
  "value": 895 }],

[{
  "label": "亭湖区",
  "value": 897 },
{
  "label": "盐都区",
  "value": 898 },
{
  "label": "响水县",
  "value": 899 },
{
  "label": "滨海县",
  "value": 900 },
{
  "label": "阜宁县",
  "value": 901 },
{
  "label": "射阳县",
  "value": 902 },
{
  "label": "建湖县",
  "value": 903 },
{
  "label": "东台市",
  "value": 904 },
{
  "label": "大丰市",
  "value": 905 }],

[{
  "label": "广陵区",
  "value": 907 },
{
  "label": "邗江区",
  "value": 908 },
{
  "label": "江都区",
  "value": 909 },
{
  "label": "宝应县",
  "value": 910 },
{
  "label": "仪征市",
  "value": 911 },
{
  "label": "高邮市",
  "value": 912 }],

[{
  "label": "京口区",
  "value": 914 },
{
  "label": "润州区",
  "value": 915 },
{
  "label": "丹徒区",
  "value": 916 },
{
  "label": "丹阳市",
  "value": 917 },
{
  "label": "扬中市",
  "value": 918 },
{
  "label": "句容市",
  "value": 919 }],

[{
  "label": "海陵区",
  "value": 921 },
{
  "label": "高港区",
  "value": 922 },
{
  "label": "姜堰区",
  "value": 923 },
{
  "label": "兴化市",
  "value": 924 },
{
  "label": "靖江市",
  "value": 925 },
{
  "label": "泰兴市",
  "value": 926 }],

[{
  "label": "宿城区",
  "value": 928 },
{
  "label": "宿豫区",
  "value": 929 },
{
  "label": "沭阳县",
  "value": 930 },
{
  "label": "泗阳县",
  "value": 931 },
{
  "label": "泗洪县",
  "value": 932 }]],


[
[{
  "label": "上城区",
  "value": 935 },
{
  "label": "下城区",
  "value": 936 },
{
  "label": "江干区",
  "value": 937 },
{
  "label": "拱墅区",
  "value": 938 },
{
  "label": "西湖区",
  "value": 939 },
{
  "label": "滨江区",
  "value": 940 },
{
  "label": "萧山区",
  "value": 941 },
{
  "label": "余杭区",
  "value": 942 },
{
  "label": "桐庐县",
  "value": 943 },
{
  "label": "淳安县",
  "value": 944 },
{
  "label": "建德市",
  "value": 945 },
{
  "label": "富阳区",
  "value": 946 },
{
  "label": "临安市",
  "value": 947 }],

[{
  "label": "海曙区",
  "value": 949 },
{
  "label": "江东区",
  "value": 950 },
{
  "label": "江北区",
  "value": 951 },
{
  "label": "北仑区",
  "value": 952 },
{
  "label": "镇海区",
  "value": 953 },
{
  "label": "鄞州区",
  "value": 954 },
{
  "label": "象山县",
  "value": 955 },
{
  "label": "宁海县",
  "value": 956 },
{
  "label": "余姚市",
  "value": 957 },
{
  "label": "慈溪市",
  "value": 958 },
{
  "label": "奉化市",
  "value": 959 }],

[{
  "label": "鹿城区",
  "value": 961 },
{
  "label": "龙湾区",
  "value": 962 },
{
  "label": "瓯海区",
  "value": 963 },
{
  "label": "洞头县",
  "value": 964 },
{
  "label": "永嘉县",
  "value": 965 },
{
  "label": "平阳县",
  "value": 966 },
{
  "label": "苍南县",
  "value": 967 },
{
  "label": "文成县",
  "value": 968 },
{
  "label": "泰顺县",
  "value": 969 },
{
  "label": "瑞安市",
  "value": 970 },
{
  "label": "乐清市",
  "value": 971 }],

[{
  "label": "南湖区",
  "value": 973 },
{
  "label": "秀洲区",
  "value": 974 },
{
  "label": "嘉善县",
  "value": 975 },
{
  "label": "海盐县",
  "value": 976 },
{
  "label": "海宁市",
  "value": 977 },
{
  "label": "平湖市",
  "value": 978 },
{
  "label": "桐乡市",
  "value": 979 }],

[{
  "label": "吴兴区",
  "value": 981 },
{
  "label": "南浔区",
  "value": 982 },
{
  "label": "德清县",
  "value": 983 },
{
  "label": "长兴县",
  "value": 984 },
{
  "label": "安吉县",
  "value": 985 }],

[{
  "label": "越城区",
  "value": 987 },
{
  "label": "柯桥区",
  "value": 988 },
{
  "label": "上虞区",
  "value": 989 },
{
  "label": "新昌县",
  "value": 990 },
{
  "label": "诸暨市",
  "value": 991 },
{
  "label": "嵊州市",
  "value": 992 }],

[{
  "label": "婺城区",
  "value": 994 },
{
  "label": "金东区",
  "value": 995 },
{
  "label": "武义县",
  "value": 996 },
{
  "label": "浦江县",
  "value": 997 },
{
  "label": "磐安县",
  "value": 998 },
{
  "label": "兰溪市",
  "value": 999 },
{
  "label": "义乌市",
  "value": 1000 },
{
  "label": "东阳市",
  "value": 1001 },
{
  "label": "永康市",
  "value": 1002 }],

[{
  "label": "柯城区",
  "value": 1004 },
{
  "label": "衢江区",
  "value": 1005 },
{
  "label": "常山县",
  "value": 1006 },
{
  "label": "开化县",
  "value": 1007 },
{
  "label": "龙游县",
  "value": 1008 },
{
  "label": "江山市",
  "value": 1009 }],

[{
  "label": "定海区",
  "value": 1011 },
{
  "label": "普陀区",
  "value": 1012 },
{
  "label": "岱山县",
  "value": 1013 },
{
  "label": "嵊泗县",
  "value": 1014 }],

[{
  "label": "椒江区",
  "value": 1016 },
{
  "label": "黄岩区",
  "value": 1017 },
{
  "label": "路桥区",
  "value": 1018 },
{
  "label": "玉环县",
  "value": 1019 },
{
  "label": "三门县",
  "value": 1020 },
{
  "label": "天台县",
  "value": 1021 },
{
  "label": "仙居县",
  "value": 1022 },
{
  "label": "温岭市",
  "value": 1023 },
{
  "label": "临海市",
  "value": 1024 }],

[{
  "label": "莲都区",
  "value": 1026 },
{
  "label": "青田县",
  "value": 1027 },
{
  "label": "缙云县",
  "value": 1028 },
{
  "label": "遂昌县",
  "value": 1029 },
{
  "label": "松阳县",
  "value": 1030 },
{
  "label": "云和县",
  "value": 1031 },
{
  "label": "庆元县",
  "value": 1032 },
{
  "label": "景宁畲族自治县",
  "value": 1033 },
{
  "label": "龙泉市",
  "value": 1034 }],

[{
  "label": "金塘岛",
  "value": 1036 },
{
  "label": "六横岛",
  "value": 1037 },
{
  "label": "衢山岛",
  "value": 1038 },
{
  "label": "舟山本岛西北部",
  "value": 1039 },
{
  "label": "岱山岛西南部",
  "value": 1040 },
{
  "label": "泗礁岛",
  "value": 1041 },
{
  "label": "朱家尖岛",
  "value": 1042 },
{
  "label": "洋山岛",
  "value": 1043 },
{
  "label": "长涂岛",
  "value": 1044 },
{
  "label": "虾峙岛",
  "value": 1045 }]],


[
[{
  "label": "瑶海区",
  "value": 1048 },
{
  "label": "庐阳区",
  "value": 1049 },
{
  "label": "蜀山区",
  "value": 1050 },
{
  "label": "包河区",
  "value": 1051 },
{
  "label": "长丰县",
  "value": 1052 },
{
  "label": "肥东县",
  "value": 1053 },
{
  "label": "肥西县",
  "value": 1054 },
{
  "label": "庐江县",
  "value": 1055 },
{
  "label": "巢湖市",
  "value": 1056 }],

[{
  "label": "镜湖区",
  "value": 1058 },
{
  "label": "弋江区",
  "value": 1059 },
{
  "label": "鸠江区",
  "value": 1060 },
{
  "label": "三山区",
  "value": 1061 },
{
  "label": "芜湖县",
  "value": 1062 },
{
  "label": "繁昌县",
  "value": 1063 },
{
  "label": "南陵县",
  "value": 1064 },
{
  "label": "无为县",
  "value": 1065 }],

[{
  "label": "龙子湖区",
  "value": 1067 },
{
  "label": "蚌山区",
  "value": 1068 },
{
  "label": "禹会区",
  "value": 1069 },
{
  "label": "淮上区",
  "value": 1070 },
{
  "label": "怀远县",
  "value": 1071 },
{
  "label": "五河县",
  "value": 1072 },
{
  "label": "固镇县",
  "value": 1073 }],

[{
  "label": "大通区",
  "value": 1075 },
{
  "label": "田家庵区",
  "value": 1076 },
{
  "label": "谢家集区",
  "value": 1077 },
{
  "label": "八公山区",
  "value": 1078 },
{
  "label": "潘集区",
  "value": 1079 },
{
  "label": "凤台县",
  "value": 1080 }],

[{
  "label": "花山区",
  "value": 1082 },
{
  "label": "雨山区",
  "value": 1083 },
{
  "label": "博望区",
  "value": 1084 },
{
  "label": "当涂县",
  "value": 1085 },
{
  "label": "含山县",
  "value": 1086 },
{
  "label": "和县",
  "value": 1087 }],

[{
  "label": "杜集区",
  "value": 1089 },
{
  "label": "相山区",
  "value": 1090 },
{
  "label": "烈山区",
  "value": 1091 },
{
  "label": "濉溪县",
  "value": 1092 }],

[{
  "label": "铜官山区",
  "value": 1094 },
{
  "label": "狮子山区",
  "value": 1095 },
{
  "label": "郊区",
  "value": 1096 },
{
  "label": "铜陵县",
  "value": 1097 }],

[{
  "label": "迎江区",
  "value": 1099 },
{
  "label": "大观区",
  "value": 1100 },
{
  "label": "宜秀区",
  "value": 1101 },
{
  "label": "怀宁县",
  "value": 1102 },
{
  "label": "枞阳县",
  "value": 1103 },
{
  "label": "潜山县",
  "value": 1104 },
{
  "label": "太湖县",
  "value": 1105 },
{
  "label": "宿松县",
  "value": 1106 },
{
  "label": "望江县",
  "value": 1107 },
{
  "label": "岳西县",
  "value": 1108 },
{
  "label": "桐城市",
  "value": 1109 }],

[{
  "label": "屯溪区",
  "value": 1111 },
{
  "label": "黄山区",
  "value": 1112 },
{
  "label": "徽州区",
  "value": 1113 },
{
  "label": "歙县",
  "value": 1114 },
{
  "label": "休宁县",
  "value": 1115 },
{
  "label": "黟县",
  "value": 1116 },
{
  "label": "祁门县",
  "value": 1117 }],

[{
  "label": "琅琊区",
  "value": 1119 },
{
  "label": "南谯区",
  "value": 1120 },
{
  "label": "来安县",
  "value": 1121 },
{
  "label": "全椒县",
  "value": 1122 },
{
  "label": "定远县",
  "value": 1123 },
{
  "label": "凤阳县",
  "value": 1124 },
{
  "label": "天长市",
  "value": 1125 },
{
  "label": "明光市",
  "value": 1126 }],

[{
  "label": "颍州区",
  "value": 1128 },
{
  "label": "颍东区",
  "value": 1129 },
{
  "label": "颍泉区",
  "value": 1130 },
{
  "label": "临泉县",
  "value": 1131 },
{
  "label": "太和县",
  "value": 1132 },
{
  "label": "阜南县",
  "value": 1133 },
{
  "label": "颍上县",
  "value": 1134 },
{
  "label": "界首市",
  "value": 1135 }],

[{
  "label": "埇桥区",
  "value": 1137 },
{
  "label": "砀山县",
  "value": 1138 },
{
  "label": "萧县",
  "value": 1139 },
{
  "label": "灵璧县",
  "value": 1140 },
{
  "label": "泗县",
  "value": 1141 }],

[{
  "label": "金安区",
  "value": 1143 },
{
  "label": "裕安区",
  "value": 1144 },
{
  "label": "寿县",
  "value": 1145 },
{
  "label": "霍邱县",
  "value": 1146 },
{
  "label": "舒城县",
  "value": 1147 },
{
  "label": "金寨县",
  "value": 1148 },
{
  "label": "霍山县",
  "value": 1149 }],

[{
  "label": "谯城区",
  "value": 1151 },
{
  "label": "涡阳县",
  "value": 1152 },
{
  "label": "蒙城县",
  "value": 1153 },
{
  "label": "利辛县",
  "value": 1154 }],

[{
  "label": "贵池区",
  "value": 1156 },
{
  "label": "东至县",
  "value": 1157 },
{
  "label": "石台县",
  "value": 1158 },
{
  "label": "青阳县",
  "value": 1159 }],

[{
  "label": "宣州区",
  "value": 1161 },
{
  "label": "郎溪县",
  "value": 1162 },
{
  "label": "广德县",
  "value": 1163 },
{
  "label": "泾县",
  "value": 1164 },
{
  "label": "绩溪县",
  "value": 1165 },
{
  "label": "旌德县",
  "value": 1166 },
{
  "label": "宁国市",
  "value": 1167 }]],


[
[{
  "label": "鼓楼区",
  "value": 1170 },
{
  "label": "台江区",
  "value": 1171 },
{
  "label": "仓山区",
  "value": 1172 },
{
  "label": "马尾区",
  "value": 1173 },
{
  "label": "晋安区",
  "value": 1174 },
{
  "label": "闽侯县",
  "value": 1175 },
{
  "label": "连江县",
  "value": 1176 },
{
  "label": "罗源县",
  "value": 1177 },
{
  "label": "闽清县",
  "value": 1178 },
{
  "label": "永泰县",
  "value": 1179 },
{
  "label": "平潭县",
  "value": 1180 },
{
  "label": "福清市",
  "value": 1181 },
{
  "label": "长乐市",
  "value": 1182 }],

[{
  "label": "思明区",
  "value": 1184 },
{
  "label": "海沧区",
  "value": 1185 },
{
  "label": "湖里区",
  "value": 1186 },
{
  "label": "集美区",
  "value": 1187 },
{
  "label": "同安区",
  "value": 1188 },
{
  "label": "翔安区",
  "value": 1189 }],

[{
  "label": "城厢区",
  "value": 1191 },
{
  "label": "涵江区",
  "value": 1192 },
{
  "label": "荔城区",
  "value": 1193 },
{
  "label": "秀屿区",
  "value": 1194 },
{
  "label": "仙游县",
  "value": 1195 }],

[{
  "label": "梅列区",
  "value": 1197 },
{
  "label": "三元区",
  "value": 1198 },
{
  "label": "明溪县",
  "value": 1199 },
{
  "label": "清流县",
  "value": 1200 },
{
  "label": "宁化县",
  "value": 1201 },
{
  "label": "大田县",
  "value": 1202 },
{
  "label": "尤溪县",
  "value": 1203 },
{
  "label": "沙县",
  "value": 1204 },
{
  "label": "将乐县",
  "value": 1205 },
{
  "label": "泰宁县",
  "value": 1206 },
{
  "label": "建宁县",
  "value": 1207 },
{
  "label": "永安市",
  "value": 1208 }],

[{
  "label": "鲤城区",
  "value": 1210 },
{
  "label": "丰泽区",
  "value": 1211 },
{
  "label": "洛江区",
  "value": 1212 },
{
  "label": "泉港区",
  "value": 1213 },
{
  "label": "惠安县",
  "value": 1214 },
{
  "label": "安溪县",
  "value": 1215 },
{
  "label": "永春县",
  "value": 1216 },
{
  "label": "德化县",
  "value": 1217 },
{
  "label": "金门县",
  "value": 1218 },
{
  "label": "石狮市",
  "value": 1219 },
{
  "label": "晋江市",
  "value": 1220 },
{
  "label": "南安市",
  "value": 1221 }],

[{
  "label": "芗城区",
  "value": 1223 },
{
  "label": "龙文区",
  "value": 1224 },
{
  "label": "云霄县",
  "value": 1225 },
{
  "label": "漳浦县",
  "value": 1226 },
{
  "label": "诏安县",
  "value": 1227 },
{
  "label": "长泰县",
  "value": 1228 },
{
  "label": "东山县",
  "value": 1229 },
{
  "label": "南靖县",
  "value": 1230 },
{
  "label": "平和县",
  "value": 1231 },
{
  "label": "华安县",
  "value": 1232 },
{
  "label": "龙海市",
  "value": 1233 }],

[{
  "label": "延平区",
  "value": 1235 },
{
  "label": "建阳区",
  "value": 1236 },
{
  "label": "顺昌县",
  "value": 1237 },
{
  "label": "浦城县",
  "value": 1238 },
{
  "label": "光泽县",
  "value": 1239 },
{
  "label": "松溪县",
  "value": 1240 },
{
  "label": "政和县",
  "value": 1241 },
{
  "label": "邵武市",
  "value": 1242 },
{
  "label": "武夷山市",
  "value": 1243 },
{
  "label": "建瓯市",
  "value": 1244 }],

[{
  "label": "新罗区",
  "value": 1246 },
{
  "label": "长汀县",
  "value": 1247 },
{
  "label": "永定区",
  "value": 1248 },
{
  "label": "上杭县",
  "value": 1249 },
{
  "label": "武平县",
  "value": 1250 },
{
  "label": "连城县",
  "value": 1251 },
{
  "label": "漳平市",
  "value": 1252 }],

[{
  "label": "蕉城区",
  "value": 1254 },
{
  "label": "霞浦县",
  "value": 1255 },
{
  "label": "古田县",
  "value": 1256 },
{
  "label": "屏南县",
  "value": 1257 },
{
  "label": "寿宁县",
  "value": 1258 },
{
  "label": "周宁县",
  "value": 1259 },
{
  "label": "柘荣县",
  "value": 1260 },
{
  "label": "福安市",
  "value": 1261 },
{
  "label": "福鼎市",
  "value": 1262 }]],


[
[{
  "label": "东湖区",
  "value": 1265 },
{
  "label": "西湖区",
  "value": 1266 },
{
  "label": "青云谱区",
  "value": 1267 },
{
  "label": "湾里区",
  "value": 1268 },
{
  "label": "青山湖区",
  "value": 1269 },
{
  "label": "南昌县",
  "value": 1270 },
{
  "label": "新建县",
  "value": 1271 },
{
  "label": "安义县",
  "value": 1272 },
{
  "label": "进贤县",
  "value": 1273 }],

[{
  "label": "昌江区",
  "value": 1275 },
{
  "label": "珠山区",
  "value": 1276 },
{
  "label": "浮梁县",
  "value": 1277 },
{
  "label": "乐平市",
  "value": 1278 }],

[{
  "label": "安源区",
  "value": 1280 },
{
  "label": "湘东区",
  "value": 1281 },
{
  "label": "莲花县",
  "value": 1282 },
{
  "label": "上栗县",
  "value": 1283 },
{
  "label": "芦溪县",
  "value": 1284 }],

[{
  "label": "庐山区",
  "value": 1286 },
{
  "label": "浔阳区",
  "value": 1287 },
{
  "label": "九江县",
  "value": 1288 },
{
  "label": "武宁县",
  "value": 1289 },
{
  "label": "修水县",
  "value": 1290 },
{
  "label": "永修县",
  "value": 1291 },
{
  "label": "德安县",
  "value": 1292 },
{
  "label": "星子县",
  "value": 1293 },
{
  "label": "都昌县",
  "value": 1294 },
{
  "label": "湖口县",
  "value": 1295 },
{
  "label": "彭泽县",
  "value": 1296 },
{
  "label": "瑞昌市",
  "value": 1297 },
{
  "label": "共青城市",
  "value": 1298 }],

[{
  "label": "渝水区",
  "value": 1300 },
{
  "label": "分宜县",
  "value": 1301 }],

[{
  "label": "月湖区",
  "value": 1303 },
{
  "label": "余江县",
  "value": 1304 },
{
  "label": "贵溪市",
  "value": 1305 }],

[{
  "label": "章贡区",
  "value": 1307 },
{
  "label": "南康区",
  "value": 1308 },
{
  "label": "赣县",
  "value": 1309 },
{
  "label": "信丰县",
  "value": 1310 },
{
  "label": "大余县",
  "value": 1311 },
{
  "label": "上犹县",
  "value": 1312 },
{
  "label": "崇义县",
  "value": 1313 },
{
  "label": "安远县",
  "value": 1314 },
{
  "label": "龙南县",
  "value": 1315 },
{
  "label": "定南县",
  "value": 1316 },
{
  "label": "全南县",
  "value": 1317 },
{
  "label": "宁都县",
  "value": 1318 },
{
  "label": "于都县",
  "value": 1319 },
{
  "label": "兴国县",
  "value": 1320 },
{
  "label": "会昌县",
  "value": 1321 },
{
  "label": "寻乌县",
  "value": 1322 },
{
  "label": "石城县",
  "value": 1323 },
{
  "label": "瑞金市",
  "value": 1324 }],

[{
  "label": "吉州区",
  "value": 1326 },
{
  "label": "青原区",
  "value": 1327 },
{
  "label": "吉安县",
  "value": 1328 },
{
  "label": "吉水县",
  "value": 1329 },
{
  "label": "峡江县",
  "value": 1330 },
{
  "label": "新干县",
  "value": 1331 },
{
  "label": "永丰县",
  "value": 1332 },
{
  "label": "泰和县",
  "value": 1333 },
{
  "label": "遂川县",
  "value": 1334 },
{
  "label": "万安县",
  "value": 1335 },
{
  "label": "安福县",
  "value": 1336 },
{
  "label": "永新县",
  "value": 1337 },
{
  "label": "井冈山市",
  "value": 1338 }],

[{
  "label": "袁州区",
  "value": 1340 },
{
  "label": "奉新县",
  "value": 1341 },
{
  "label": "万载县",
  "value": 1342 },
{
  "label": "上高县",
  "value": 1343 },
{
  "label": "宜丰县",
  "value": 1344 },
{
  "label": "靖安县",
  "value": 1345 },
{
  "label": "铜鼓县",
  "value": 1346 },
{
  "label": "丰城市",
  "value": 1347 },
{
  "label": "樟树市",
  "value": 1348 },
{
  "label": "高安市",
  "value": 1349 }],

[{
  "label": "临川区",
  "value": 1351 },
{
  "label": "南城县",
  "value": 1352 },
{
  "label": "黎川县",
  "value": 1353 },
{
  "label": "南丰县",
  "value": 1354 },
{
  "label": "崇仁县",
  "value": 1355 },
{
  "label": "乐安县",
  "value": 1356 },
{
  "label": "宜黄县",
  "value": 1357 },
{
  "label": "金溪县",
  "value": 1358 },
{
  "label": "资溪县",
  "value": 1359 },
{
  "label": "东乡县",
  "value": 1360 },
{
  "label": "广昌县",
  "value": 1361 }],

[{
  "label": "信州区",
  "value": 1363 },
{
  "label": "上饶县",
  "value": 1364 },
{
  "label": "广丰县",
  "value": 1365 },
{
  "label": "玉山县",
  "value": 1366 },
{
  "label": "铅山县",
  "value": 1367 },
{
  "label": "横峰县",
  "value": 1368 },
{
  "label": "弋阳县",
  "value": 1369 },
{
  "label": "余干县",
  "value": 1370 },
{
  "label": "鄱阳县",
  "value": 1371 },
{
  "label": "万年县",
  "value": 1372 },
{
  "label": "婺源县",
  "value": 1373 },
{
  "label": "德兴市",
  "value": 1374 }]],


[
[{
  "label": "历下区",
  "value": 1377 },
{
  "label": "市中区",
  "value": 1378 },
{
  "label": "槐荫区",
  "value": 1379 },
{
  "label": "天桥区",
  "value": 1380 },
{
  "label": "历城区",
  "value": 1381 },
{
  "label": "长清区",
  "value": 1382 },
{
  "label": "平阴县",
  "value": 1383 },
{
  "label": "济阳县",
  "value": 1384 },
{
  "label": "商河县",
  "value": 1385 },
{
  "label": "章丘市",
  "value": 1386 }],

[{
  "label": "市南区",
  "value": 1388 },
{
  "label": "市北区",
  "value": 1389 },
{
  "label": "黄岛区",
  "value": 1390 },
{
  "label": "崂山区",
  "value": 1391 },
{
  "label": "李沧区",
  "value": 1392 },
{
  "label": "城阳区",
  "value": 1393 },
{
  "label": "胶州市",
  "value": 1394 },
{
  "label": "即墨市",
  "value": 1395 },
{
  "label": "平度市",
  "value": 1396 },
{
  "label": "莱西市",
  "value": 1397 },
{
  "label": "西海岸新区",
  "value": 1398 }],

[{
  "label": "淄川区",
  "value": 1400 },
{
  "label": "张店区",
  "value": 1401 },
{
  "label": "博山区",
  "value": 1402 },
{
  "label": "临淄区",
  "value": 1403 },
{
  "label": "周村区",
  "value": 1404 },
{
  "label": "桓台县",
  "value": 1405 },
{
  "label": "高青县",
  "value": 1406 },
{
  "label": "沂源县",
  "value": 1407 }],

[{
  "label": "市中区",
  "value": 1409 },
{
  "label": "薛城区",
  "value": 1410 },
{
  "label": "峄城区",
  "value": 1411 },
{
  "label": "台儿庄区",
  "value": 1412 },
{
  "label": "山亭区",
  "value": 1413 },
{
  "label": "滕州市",
  "value": 1414 }],

[{
  "label": "东营区",
  "value": 1416 },
{
  "label": "河口区",
  "value": 1417 },
{
  "label": "垦利县",
  "value": 1418 },
{
  "label": "利津县",
  "value": 1419 },
{
  "label": "广饶县",
  "value": 1420 }],

[{
  "label": "芝罘区",
  "value": 1422 },
{
  "label": "福山区",
  "value": 1423 },
{
  "label": "牟平区",
  "value": 1424 },
{
  "label": "莱山区",
  "value": 1425 },
{
  "label": "长岛县",
  "value": 1426 },
{
  "label": "龙口市",
  "value": 1427 },
{
  "label": "莱阳市",
  "value": 1428 },
{
  "label": "莱州市",
  "value": 1429 },
{
  "label": "蓬莱市",
  "value": 1430 },
{
  "label": "招远市",
  "value": 1431 },
{
  "label": "栖霞市",
  "value": 1432 },
{
  "label": "海阳市",
  "value": 1433 }],

[{
  "label": "潍城区",
  "value": 1435 },
{
  "label": "寒亭区",
  "value": 1436 },
{
  "label": "坊子区",
  "value": 1437 },
{
  "label": "奎文区",
  "value": 1438 },
{
  "label": "临朐县",
  "value": 1439 },
{
  "label": "昌乐县",
  "value": 1440 },
{
  "label": "青州市",
  "value": 1441 },
{
  "label": "诸城市",
  "value": 1442 },
{
  "label": "寿光市",
  "value": 1443 },
{
  "label": "安丘市",
  "value": 1444 },
{
  "label": "高密市",
  "value": 1445 },
{
  "label": "昌邑市",
  "value": 1446 }],

[{
  "label": "任城区",
  "value": 1448 },
{
  "label": "兖州区",
  "value": 1449 },
{
  "label": "微山县",
  "value": 1450 },
{
  "label": "鱼台县",
  "value": 1451 },
{
  "label": "金乡县",
  "value": 1452 },
{
  "label": "嘉祥县",
  "value": 1453 },
{
  "label": "汶上县",
  "value": 1454 },
{
  "label": "泗水县",
  "value": 1455 },
{
  "label": "梁山县",
  "value": 1456 },
{
  "label": "曲阜市",
  "value": 1457 },
{
  "label": "邹城市",
  "value": 1458 }],

[{
  "label": "泰山区",
  "value": 1460 },
{
  "label": "岱岳区",
  "value": 1461 },
{
  "label": "宁阳县",
  "value": 1462 },
{
  "label": "东平县",
  "value": 1463 },
{
  "label": "新泰市",
  "value": 1464 },
{
  "label": "肥城市",
  "value": 1465 }],

[{
  "label": "环翠区",
  "value": 1467 },
{
  "label": "文登区",
  "value": 1468 },
{
  "label": "荣成市",
  "value": 1469 },
{
  "label": "乳山市",
  "value": 1470 }],

[{
  "label": "东港区",
  "value": 1472 },
{
  "label": "岚山区",
  "value": 1473 },
{
  "label": "五莲县",
  "value": 1474 },
{
  "label": "莒县",
  "value": 1475 }],

[{
  "label": "莱城区",
  "value": 1477 },
{
  "label": "钢城区",
  "value": 1478 }],

[{
  "label": "兰山区",
  "value": 1480 },
{
  "label": "罗庄区",
  "value": 1481 },
{
  "label": "河东区",
  "value": 1482 },
{
  "label": "沂南县",
  "value": 1483 },
{
  "label": "郯城县",
  "value": 1484 },
{
  "label": "沂水县",
  "value": 1485 },
{
  "label": "兰陵县",
  "value": 1486 },
{
  "label": "费县",
  "value": 1487 },
{
  "label": "平邑县",
  "value": 1488 },
{
  "label": "莒南县",
  "value": 1489 },
{
  "label": "蒙阴县",
  "value": 1490 },
{
  "label": "临沭县",
  "value": 1491 }],

[{
  "label": "德城区",
  "value": 1493 },
{
  "label": "陵城区",
  "value": 1494 },
{
  "label": "宁津县",
  "value": 1495 },
{
  "label": "庆云县",
  "value": 1496 },
{
  "label": "临邑县",
  "value": 1497 },
{
  "label": "齐河县",
  "value": 1498 },
{
  "label": "平原县",
  "value": 1499 },
{
  "label": "夏津县",
  "value": 1500 },
{
  "label": "武城县",
  "value": 1501 },
{
  "label": "乐陵市",
  "value": 1502 },
{
  "label": "禹城市",
  "value": 1503 }],

[{
  "label": "东昌府区",
  "value": 1505 },
{
  "label": "阳谷县",
  "value": 1506 },
{
  "label": "莘县",
  "value": 1507 },
{
  "label": "茌平县",
  "value": 1508 },
{
  "label": "东阿县",
  "value": 1509 },
{
  "label": "冠县",
  "value": 1510 },
{
  "label": "高唐县",
  "value": 1511 },
{
  "label": "临清市",
  "value": 1512 }],

[{
  "label": "滨城区",
  "value": 1514 },
{
  "label": "沾化区",
  "value": 1515 },
{
  "label": "惠民县",
  "value": 1516 },
{
  "label": "阳信县",
  "value": 1517 },
{
  "label": "无棣县",
  "value": 1518 },
{
  "label": "博兴县",
  "value": 1519 },
{
  "label": "邹平县",
  "value": 1520 },
{
  "label": "北海新区",
  "value": 1521 }],

[{
  "label": "牡丹区",
  "value": 1523 },
{
  "label": "曹县",
  "value": 1524 },
{
  "label": "单县",
  "value": 1525 },
{
  "label": "成武县",
  "value": 1526 },
{
  "label": "巨野县",
  "value": 1527 },
{
  "label": "郓城县",
  "value": 1528 },
{
  "label": "鄄城县",
  "value": 1529 },
{
  "label": "定陶县",
  "value": 1530 },
{
  "label": "东明县",
  "value": 1531 }]],


[
[{
  "label": "中原区",
  "value": 1534 },
{
  "label": "二七区",
  "value": 1535 },
{
  "label": "管城回族区",
  "value": 1536 },
{
  "label": "金水区",
  "value": 1537 },
{
  "label": "上街区",
  "value": 1538 },
{
  "label": "惠济区",
  "value": 1539 },
{
  "label": "中牟县",
  "value": 1540 },
{
  "label": "巩义市",
  "value": 1541 },
{
  "label": "荥阳市",
  "value": 1542 },
{
  "label": "新密市",
  "value": 1543 },
{
  "label": "新郑市",
  "value": 1544 },
{
  "label": "登封市",
  "value": 1545 }],

[{
  "label": "龙亭区",
  "value": 1547 },
{
  "label": "顺河回族区",
  "value": 1548 },
{
  "label": "鼓楼区",
  "value": 1549 },
{
  "label": "禹王台区",
  "value": 1550 },
{
  "label": "祥符区",
  "value": 1551 },
{
  "label": "杞县",
  "value": 1552 },
{
  "label": "通许县",
  "value": 1553 },
{
  "label": "尉氏县",
  "value": 1554 },
{
  "label": "兰考县",
  "value": 1555 }],

[{
  "label": "老城区",
  "value": 1557 },
{
  "label": "西工区",
  "value": 1558 },
{
  "label": "瀍河回族区",
  "value": 1559 },
{
  "label": "涧西区",
  "value": 1560 },
{
  "label": "吉利区",
  "value": 1561 },
{
  "label": "洛龙区",
  "value": 1562 },
{
  "label": "孟津县",
  "value": 1563 },
{
  "label": "新安县",
  "value": 1564 },
{
  "label": "栾川县",
  "value": 1565 },
{
  "label": "嵩县",
  "value": 1566 },
{
  "label": "汝阳县",
  "value": 1567 },
{
  "label": "宜阳县",
  "value": 1568 },
{
  "label": "洛宁县",
  "value": 1569 },
{
  "label": "伊川县",
  "value": 1570 },
{
  "label": "偃师市",
  "value": 1571 }],

[{
  "label": "新华区",
  "value": 1573 },
{
  "label": "卫东区",
  "value": 1574 },
{
  "label": "石龙区",
  "value": 1575 },
{
  "label": "湛河区",
  "value": 1576 },
{
  "label": "宝丰县",
  "value": 1577 },
{
  "label": "叶县",
  "value": 1578 },
{
  "label": "鲁山县",
  "value": 1579 },
{
  "label": "郏县",
  "value": 1580 },
{
  "label": "舞钢市",
  "value": 1581 },
{
  "label": "汝州市",
  "value": 1582 }],

[{
  "label": "文峰区",
  "value": 1584 },
{
  "label": "北关区",
  "value": 1585 },
{
  "label": "殷都区",
  "value": 1586 },
{
  "label": "龙安区",
  "value": 1587 },
{
  "label": "安阳县",
  "value": 1588 },
{
  "label": "汤阴县",
  "value": 1589 },
{
  "label": "滑县",
  "value": 1590 },
{
  "label": "内黄县",
  "value": 1591 },
{
  "label": "林州市",
  "value": 1592 }],

[{
  "label": "鹤山区",
  "value": 1594 },
{
  "label": "山城区",
  "value": 1595 },
{
  "label": "淇滨区",
  "value": 1596 },
{
  "label": "浚县",
  "value": 1597 },
{
  "label": "淇县",
  "value": 1598 }],

[{
  "label": "红旗区",
  "value": 1600 },
{
  "label": "卫滨区",
  "value": 1601 },
{
  "label": "凤泉区",
  "value": 1602 },
{
  "label": "牧野区",
  "value": 1603 },
{
  "label": "新乡县",
  "value": 1604 },
{
  "label": "获嘉县",
  "value": 1605 },
{
  "label": "原阳县",
  "value": 1606 },
{
  "label": "延津县",
  "value": 1607 },
{
  "label": "封丘县",
  "value": 1608 },
{
  "label": "长垣县",
  "value": 1609 },
{
  "label": "卫辉市",
  "value": 1610 },
{
  "label": "辉县市",
  "value": 1611 }],

[{
  "label": "解放区",
  "value": 1613 },
{
  "label": "中站区",
  "value": 1614 },
{
  "label": "马村区",
  "value": 1615 },
{
  "label": "山阳区",
  "value": 1616 },
{
  "label": "修武县",
  "value": 1617 },
{
  "label": "博爱县",
  "value": 1618 },
{
  "label": "武陟县",
  "value": 1619 },
{
  "label": "温县",
  "value": 1620 },
{
  "label": "沁阳市",
  "value": 1621 },
{
  "label": "孟州市",
  "value": 1622 }],

[{
  "label": "华龙区",
  "value": 1624 },
{
  "label": "清丰县",
  "value": 1625 },
{
  "label": "南乐县",
  "value": 1626 },
{
  "label": "范县",
  "value": 1627 },
{
  "label": "台前县",
  "value": 1628 },
{
  "label": "濮阳县",
  "value": 1629 }],

[{
  "label": "魏都区",
  "value": 1631 },
{
  "label": "许昌县",
  "value": 1632 },
{
  "label": "鄢陵县",
  "value": 1633 },
{
  "label": "襄城县",
  "value": 1634 },
{
  "label": "禹州市",
  "value": 1635 },
{
  "label": "长葛市",
  "value": 1636 }],

[{
  "label": "源汇区",
  "value": 1638 },
{
  "label": "郾城区",
  "value": 1639 },
{
  "label": "召陵区",
  "value": 1640 },
{
  "label": "舞阳县",
  "value": 1641 },
{
  "label": "临颍县",
  "value": 1642 }],

[{
  "label": "湖滨区",
  "value": 1644 },
{
  "label": "渑池县",
  "value": 1645 },
{
  "label": "陕县",
  "value": 1646 },
{
  "label": "卢氏县",
  "value": 1647 },
{
  "label": "义马市",
  "value": 1648 },
{
  "label": "灵宝市",
  "value": 1649 }],

[{
  "label": "宛城区",
  "value": 1651 },
{
  "label": "卧龙区",
  "value": 1652 },
{
  "label": "南召县",
  "value": 1653 },
{
  "label": "方城县",
  "value": 1654 },
{
  "label": "西峡县",
  "value": 1655 },
{
  "label": "镇平县",
  "value": 1656 },
{
  "label": "内乡县",
  "value": 1657 },
{
  "label": "淅川县",
  "value": 1658 },
{
  "label": "社旗县",
  "value": 1659 },
{
  "label": "唐河县",
  "value": 1660 },
{
  "label": "新野县",
  "value": 1661 },
{
  "label": "桐柏县",
  "value": 1662 },
{
  "label": "邓州市",
  "value": 1663 }],

[{
  "label": "梁园区",
  "value": 1665 },
{
  "label": "睢阳区",
  "value": 1666 },
{
  "label": "民权县",
  "value": 1667 },
{
  "label": "睢县",
  "value": 1668 },
{
  "label": "宁陵县",
  "value": 1669 },
{
  "label": "柘城县",
  "value": 1670 },
{
  "label": "虞城县",
  "value": 1671 },
{
  "label": "夏邑县",
  "value": 1672 },
{
  "label": "永城市",
  "value": 1673 }],

[{
  "label": "浉河区",
  "value": 1675 },
{
  "label": "平桥区",
  "value": 1676 },
{
  "label": "罗山县",
  "value": 1677 },
{
  "label": "光山县",
  "value": 1678 },
{
  "label": "新县",
  "value": 1679 },
{
  "label": "商城县",
  "value": 1680 },
{
  "label": "固始县",
  "value": 1681 },
{
  "label": "潢川县",
  "value": 1682 },
{
  "label": "淮滨县",
  "value": 1683 },
{
  "label": "息县",
  "value": 1684 }],

[{
  "label": "川汇区",
  "value": 1686 },
{
  "label": "扶沟县",
  "value": 1687 },
{
  "label": "西华县",
  "value": 1688 },
{
  "label": "商水县",
  "value": 1689 },
{
  "label": "沈丘县",
  "value": 1690 },
{
  "label": "郸城县",
  "value": 1691 },
{
  "label": "淮阳县",
  "value": 1692 },
{
  "label": "太康县",
  "value": 1693 },
{
  "label": "鹿邑县",
  "value": 1694 },
{
  "label": "项城市",
  "value": 1695 }],

[{
  "label": "驿城区",
  "value": 1697 },
{
  "label": "西平县",
  "value": 1698 },
{
  "label": "上蔡县",
  "value": 1699 },
{
  "label": "平舆县",
  "value": 1700 },
{
  "label": "正阳县",
  "value": 1701 },
{
  "label": "确山县",
  "value": 1702 },
{
  "label": "泌阳县",
  "value": 1703 },
{
  "label": "汝南县",
  "value": 1704 },
{
  "label": "遂平县",
  "value": 1705 },
{
  "label": "新蔡县",
  "value": 1706 }],

[{
  "label": "济源市",
  "value": 1708 }]],


[
[{
  "label": "江岸区",
  "value": 1711 },
{
  "label": "江汉区",
  "value": 1712 },
{
  "label": "硚口区",
  "value": 1713 },
{
  "label": "汉阳区",
  "value": 1714 },
{
  "label": "武昌区",
  "value": 1715 },
{
  "label": "青山区",
  "value": 1716 },
{
  "label": "洪山区",
  "value": 1717 },
{
  "label": "东西湖区",
  "value": 1718 },
{
  "label": "汉南区",
  "value": 1719 },
{
  "label": "蔡甸区",
  "value": 1720 },
{
  "label": "江夏区",
  "value": 1721 },
{
  "label": "黄陂区",
  "value": 1722 },
{
  "label": "新洲区",
  "value": 1723 }],

[{
  "label": "黄石港区",
  "value": 1725 },
{
  "label": "西塞山区",
  "value": 1726 },
{
  "label": "下陆区",
  "value": 1727 },
{
  "label": "铁山区",
  "value": 1728 },
{
  "label": "阳新县",
  "value": 1729 },
{
  "label": "大冶市",
  "value": 1730 }],

[{
  "label": "茅箭区",
  "value": 1732 },
{
  "label": "张湾区",
  "value": 1733 },
{
  "label": "郧阳区",
  "value": 1734 },
{
  "label": "郧西县",
  "value": 1735 },
{
  "label": "竹山县",
  "value": 1736 },
{
  "label": "竹溪县",
  "value": 1737 },
{
  "label": "房县",
  "value": 1738 },
{
  "label": "丹江口市",
  "value": 1739 }],

[{
  "label": "西陵区",
  "value": 1741 },
{
  "label": "伍家岗区",
  "value": 1742 },
{
  "label": "点军区",
  "value": 1743 },
{
  "label": "猇亭区",
  "value": 1744 },
{
  "label": "夷陵区",
  "value": 1745 },
{
  "label": "远安县",
  "value": 1746 },
{
  "label": "兴山县",
  "value": 1747 },
{
  "label": "秭归县",
  "value": 1748 },
{
  "label": "长阳土家族自治县",
  "value": 1749 },
{
  "label": "五峰土家族自治县",
  "value": 1750 },
{
  "label": "宜都市",
  "value": 1751 },
{
  "label": "当阳市",
  "value": 1752 },
{
  "label": "枝江市",
  "value": 1753 }],

[{
  "label": "襄城区",
  "value": 1755 },
{
  "label": "樊城区",
  "value": 1756 },
{
  "label": "襄州区",
  "value": 1757 },
{
  "label": "南漳县",
  "value": 1758 },
{
  "label": "谷城县",
  "value": 1759 },
{
  "label": "保康县",
  "value": 1760 },
{
  "label": "老河口市",
  "value": 1761 },
{
  "label": "枣阳市",
  "value": 1762 },
{
  "label": "宜城市",
  "value": 1763 }],

[{
  "label": "梁子湖区",
  "value": 1765 },
{
  "label": "华容区",
  "value": 1766 },
{
  "label": "鄂城区",
  "value": 1767 }],

[{
  "label": "东宝区",
  "value": 1769 },
{
  "label": "掇刀区",
  "value": 1770 },
{
  "label": "京山县",
  "value": 1771 },
{
  "label": "沙洋县",
  "value": 1772 },
{
  "label": "钟祥市",
  "value": 1773 }],

[{
  "label": "孝南区",
  "value": 1775 },
{
  "label": "孝昌县",
  "value": 1776 },
{
  "label": "大悟县",
  "value": 1777 },
{
  "label": "云梦县",
  "value": 1778 },
{
  "label": "应城市",
  "value": 1779 },
{
  "label": "安陆市",
  "value": 1780 },
{
  "label": "汉川市",
  "value": 1781 }],

[{
  "label": "沙市区",
  "value": 1783 },
{
  "label": "荆州区",
  "value": 1784 },
{
  "label": "公安县",
  "value": 1785 },
{
  "label": "监利县",
  "value": 1786 },
{
  "label": "江陵县",
  "value": 1787 },
{
  "label": "石首市",
  "value": 1788 },
{
  "label": "洪湖市",
  "value": 1789 },
{
  "label": "松滋市",
  "value": 1790 }],

[{
  "label": "黄州区",
  "value": 1792 },
{
  "label": "团风县",
  "value": 1793 },
{
  "label": "红安县",
  "value": 1794 },
{
  "label": "罗田县",
  "value": 1795 },
{
  "label": "英山县",
  "value": 1796 },
{
  "label": "浠水县",
  "value": 1797 },
{
  "label": "蕲春县",
  "value": 1798 },
{
  "label": "黄梅县",
  "value": 1799 },
{
  "label": "麻城市",
  "value": 1800 },
{
  "label": "武穴市",
  "value": 1801 }],

[{
  "label": "咸安区",
  "value": 1803 },
{
  "label": "嘉鱼县",
  "value": 1804 },
{
  "label": "通城县",
  "value": 1805 },
{
  "label": "崇阳县",
  "value": 1806 },
{
  "label": "通山县",
  "value": 1807 },
{
  "label": "赤壁市",
  "value": 1808 }],

[{
  "label": "曾都区",
  "value": 1810 },
{
  "label": "随县",
  "value": 1811 },
{
  "label": "广水市",
  "value": 1812 }],

[{
  "label": "恩施市",
  "value": 1814 },
{
  "label": "利川市",
  "value": 1815 },
{
  "label": "建始县",
  "value": 1816 },
{
  "label": "巴东县",
  "value": 1817 },
{
  "label": "宣恩县",
  "value": 1818 },
{
  "label": "咸丰县",
  "value": 1819 },
{
  "label": "来凤县",
  "value": 1820 },
{
  "label": "鹤峰县",
  "value": 1821 }],

[{
  "label": "仙桃市",
  "value": 1823 },
{
  "label": "潜江市",
  "value": 1824 },
{
  "label": "天门市",
  "value": 1825 },
{
  "label": "神农架林区",
  "value": 1826 }]],


[
[{
  "label": "芙蓉区",
  "value": 1829 },
{
  "label": "天心区",
  "value": 1830 },
{
  "label": "岳麓区",
  "value": 1831 },
{
  "label": "开福区",
  "value": 1832 },
{
  "label": "雨花区",
  "value": 1833 },
{
  "label": "望城区",
  "value": 1834 },
{
  "label": "长沙县",
  "value": 1835 },
{
  "label": "宁乡县",
  "value": 1836 },
{
  "label": "浏阳市",
  "value": 1837 }],

[{
  "label": "荷塘区",
  "value": 1839 },
{
  "label": "芦淞区",
  "value": 1840 },
{
  "label": "石峰区",
  "value": 1841 },
{
  "label": "天元区",
  "value": 1842 },
{
  "label": "株洲县",
  "value": 1843 },
{
  "label": "攸县",
  "value": 1844 },
{
  "label": "茶陵县",
  "value": 1845 },
{
  "label": "炎陵县",
  "value": 1846 },
{
  "label": "醴陵市",
  "value": 1847 }],

[{
  "label": "雨湖区",
  "value": 1849 },
{
  "label": "岳塘区",
  "value": 1850 },
{
  "label": "湘潭县",
  "value": 1851 },
{
  "label": "湘乡市",
  "value": 1852 },
{
  "label": "韶山市",
  "value": 1853 }],

[{
  "label": "珠晖区",
  "value": 1855 },
{
  "label": "雁峰区",
  "value": 1856 },
{
  "label": "石鼓区",
  "value": 1857 },
{
  "label": "蒸湘区",
  "value": 1858 },
{
  "label": "南岳区",
  "value": 1859 },
{
  "label": "衡阳县",
  "value": 1860 },
{
  "label": "衡南县",
  "value": 1861 },
{
  "label": "衡山县",
  "value": 1862 },
{
  "label": "衡东县",
  "value": 1863 },
{
  "label": "祁东县",
  "value": 1864 },
{
  "label": "耒阳市",
  "value": 1865 },
{
  "label": "常宁市",
  "value": 1866 }],

[{
  "label": "双清区",
  "value": 1868 },
{
  "label": "大祥区",
  "value": 1869 },
{
  "label": "北塔区",
  "value": 1870 },
{
  "label": "邵东县",
  "value": 1871 },
{
  "label": "新邵县",
  "value": 1872 },
{
  "label": "邵阳县",
  "value": 1873 },
{
  "label": "隆回县",
  "value": 1874 },
{
  "label": "洞口县",
  "value": 1875 },
{
  "label": "绥宁县",
  "value": 1876 },
{
  "label": "新宁县",
  "value": 1877 },
{
  "label": "城步苗族自治县",
  "value": 1878 },
{
  "label": "武冈市",
  "value": 1879 }],

[{
  "label": "岳阳楼区",
  "value": 1881 },
{
  "label": "云溪区",
  "value": 1882 },
{
  "label": "君山区",
  "value": 1883 },
{
  "label": "岳阳县",
  "value": 1884 },
{
  "label": "华容县",
  "value": 1885 },
{
  "label": "湘阴县",
  "value": 1886 },
{
  "label": "平江县",
  "value": 1887 },
{
  "label": "汨罗市",
  "value": 1888 },
{
  "label": "临湘市",
  "value": 1889 }],

[{
  "label": "武陵区",
  "value": 1891 },
{
  "label": "鼎城区",
  "value": 1892 },
{
  "label": "安乡县",
  "value": 1893 },
{
  "label": "汉寿县",
  "value": 1894 },
{
  "label": "澧县",
  "value": 1895 },
{
  "label": "临澧县",
  "value": 1896 },
{
  "label": "桃源县",
  "value": 1897 },
{
  "label": "石门县",
  "value": 1898 },
{
  "label": "津市市",
  "value": 1899 }],

[{
  "label": "永定区",
  "value": 1901 },
{
  "label": "武陵源区",
  "value": 1902 },
{
  "label": "慈利县",
  "value": 1903 },
{
  "label": "桑植县",
  "value": 1904 }],

[{
  "label": "资阳区",
  "value": 1906 },
{
  "label": "赫山区",
  "value": 1907 },
{
  "label": "南县",
  "value": 1908 },
{
  "label": "桃江县",
  "value": 1909 },
{
  "label": "安化县",
  "value": 1910 },
{
  "label": "沅江市",
  "value": 1911 }],

[{
  "label": "北湖区",
  "value": 1913 },
{
  "label": "苏仙区",
  "value": 1914 },
{
  "label": "桂阳县",
  "value": 1915 },
{
  "label": "宜章县",
  "value": 1916 },
{
  "label": "永兴县",
  "value": 1917 },
{
  "label": "嘉禾县",
  "value": 1918 },
{
  "label": "临武县",
  "value": 1919 },
{
  "label": "汝城县",
  "value": 1920 },
{
  "label": "桂东县",
  "value": 1921 },
{
  "label": "安仁县",
  "value": 1922 },
{
  "label": "资兴市",
  "value": 1923 }],

[{
  "label": "零陵区",
  "value": 1925 },
{
  "label": "冷水滩区",
  "value": 1926 },
{
  "label": "祁阳县",
  "value": 1927 },
{
  "label": "东安县",
  "value": 1928 },
{
  "label": "双牌县",
  "value": 1929 },
{
  "label": "道县",
  "value": 1930 },
{
  "label": "江永县",
  "value": 1931 },
{
  "label": "宁远县",
  "value": 1932 },
{
  "label": "蓝山县",
  "value": 1933 },
{
  "label": "新田县",
  "value": 1934 },
{
  "label": "江华瑶族自治县",
  "value": 1935 }],

[{
  "label": "鹤城区",
  "value": 1937 },
{
  "label": "中方县",
  "value": 1938 },
{
  "label": "沅陵县",
  "value": 1939 },
{
  "label": "辰溪县",
  "value": 1940 },
{
  "label": "溆浦县",
  "value": 1941 },
{
  "label": "会同县",
  "value": 1942 },
{
  "label": "麻阳苗族自治县",
  "value": 1943 },
{
  "label": "新晃侗族自治县",
  "value": 1944 },
{
  "label": "芷江侗族自治县",
  "value": 1945 },
{
  "label": "靖州苗族侗族自治县",
  "value": 1946 },
{
  "label": "通道侗族自治县",
  "value": 1947 },
{
  "label": "洪江市",
  "value": 1948 }],

[{
  "label": "娄星区",
  "value": 1950 },
{
  "label": "双峰县",
  "value": 1951 },
{
  "label": "新化县",
  "value": 1952 },
{
  "label": "冷水江市",
  "value": 1953 },
{
  "label": "涟源市",
  "value": 1954 }],

[{
  "label": "吉首市",
  "value": 1956 },
{
  "label": "泸溪县",
  "value": 1957 },
{
  "label": "凤凰县",
  "value": 1958 },
{
  "label": "花垣县",
  "value": 1959 },
{
  "label": "保靖县",
  "value": 1960 },
{
  "label": "古丈县",
  "value": 1961 },
{
  "label": "永顺县",
  "value": 1962 },
{
  "label": "龙山县",
  "value": 1963 }]],


[
[{
  "label": "荔湾区",
  "value": 1966 },
{
  "label": "越秀区",
  "value": 1967 },
{
  "label": "海珠区",
  "value": 1968 },
{
  "label": "天河区",
  "value": 1969 },
{
  "label": "白云区",
  "value": 1970 },
{
  "label": "黄埔区",
  "value": 1971 },
{
  "label": "番禺区",
  "value": 1972 },
{
  "label": "花都区",
  "value": 1973 },
{
  "label": "南沙区",
  "value": 1974 },
{
  "label": "从化区",
  "value": 1975 },
{
  "label": "增城区",
  "value": 1976 }],

[{
  "label": "武江区",
  "value": 1978 },
{
  "label": "浈江区",
  "value": 1979 },
{
  "label": "曲江区",
  "value": 1980 },
{
  "label": "始兴县",
  "value": 1981 },
{
  "label": "仁化县",
  "value": 1982 },
{
  "label": "翁源县",
  "value": 1983 },
{
  "label": "乳源瑶族自治县",
  "value": 1984 },
{
  "label": "新丰县",
  "value": 1985 },
{
  "label": "乐昌市",
  "value": 1986 },
{
  "label": "南雄市",
  "value": 1987 }],

[{
  "label": "罗湖区",
  "value": 1989 },
{
  "label": "福田区",
  "value": 1990 },
{
  "label": "南山区",
  "value": 1991 },
{
  "label": "宝安区",
  "value": 1992 },
{
  "label": "龙岗区",
  "value": 1993 },
{
  "label": "盐田区",
  "value": 1994 },
{
  "label": "光明新区",
  "value": 1995 },
{
  "label": "坪山新区",
  "value": 1996 },
{
  "label": "大鹏新区",
  "value": 1997 },
{
  "label": "龙华新区",
  "value": 1998 }],

[{
  "label": "香洲区",
  "value": 2000 },
{
  "label": "斗门区",
  "value": 2001 },
{
  "label": "金湾区",
  "value": 2002 }],

[{
  "label": "龙湖区",
  "value": 2004 },
{
  "label": "金平区",
  "value": 2005 },
{
  "label": "濠江区",
  "value": 2006 },
{
  "label": "潮阳区",
  "value": 2007 },
{
  "label": "潮南区",
  "value": 2008 },
{
  "label": "澄海区",
  "value": 2009 },
{
  "label": "南澳县",
  "value": 2010 }],

[{
  "label": "禅城区",
  "value": 2012 },
{
  "label": "南海区",
  "value": 2013 },
{
  "label": "顺德区",
  "value": 2014 },
{
  "label": "三水区",
  "value": 2015 },
{
  "label": "高明区",
  "value": 2016 }],

[{
  "label": "蓬江区",
  "value": 2018 },
{
  "label": "江海区",
  "value": 2019 },
{
  "label": "新会区",
  "value": 2020 },
{
  "label": "台山市",
  "value": 2021 },
{
  "label": "开平市",
  "value": 2022 },
{
  "label": "鹤山市",
  "value": 2023 },
{
  "label": "恩平市",
  "value": 2024 }],

[{
  "label": "赤坎区",
  "value": 2026 },
{
  "label": "霞山区",
  "value": 2027 },
{
  "label": "坡头区",
  "value": 2028 },
{
  "label": "麻章区",
  "value": 2029 },
{
  "label": "遂溪县",
  "value": 2030 },
{
  "label": "徐闻县",
  "value": 2031 },
{
  "label": "廉江市",
  "value": 2032 },
{
  "label": "雷州市",
  "value": 2033 },
{
  "label": "吴川市",
  "value": 2034 }],

[{
  "label": "茂南区",
  "value": 2036 },
{
  "label": "电白区",
  "value": 2037 },
{
  "label": "高州市",
  "value": 2038 },
{
  "label": "化州市",
  "value": 2039 },
{
  "label": "信宜市",
  "value": 2040 }],

[{
  "label": "端州区",
  "value": 2042 },
{
  "label": "鼎湖区",
  "value": 2043 },
{
  "label": "广宁县",
  "value": 2044 },
{
  "label": "怀集县",
  "value": 2045 },
{
  "label": "封开县",
  "value": 2046 },
{
  "label": "德庆县",
  "value": 2047 },
{
  "label": "高要市",
  "value": 2048 },
{
  "label": "四会市",
  "value": 2049 }],

[{
  "label": "惠城区",
  "value": 2051 },
{
  "label": "惠阳区",
  "value": 2052 },
{
  "label": "博罗县",
  "value": 2053 },
{
  "label": "惠东县",
  "value": 2054 },
{
  "label": "龙门县",
  "value": 2055 }],

[{
  "label": "梅江区",
  "value": 2057 },
{
  "label": "梅县区",
  "value": 2058 },
{
  "label": "大埔县",
  "value": 2059 },
{
  "label": "丰顺县",
  "value": 2060 },
{
  "label": "五华县",
  "value": 2061 },
{
  "label": "平远县",
  "value": 2062 },
{
  "label": "蕉岭县",
  "value": 2063 },
{
  "label": "兴宁市",
  "value": 2064 }],

[{
  "label": "城区",
  "value": 2066 },
{
  "label": "海丰县",
  "value": 2067 },
{
  "label": "陆河县",
  "value": 2068 },
{
  "label": "陆丰市",
  "value": 2069 }],

[{
  "label": "源城区",
  "value": 2071 },
{
  "label": "紫金县",
  "value": 2072 },
{
  "label": "龙川县",
  "value": 2073 },
{
  "label": "连平县",
  "value": 2074 },
{
  "label": "和平县",
  "value": 2075 },
{
  "label": "东源县",
  "value": 2076 }],

[{
  "label": "江城区",
  "value": 2078 },
{
  "label": "阳东区",
  "value": 2079 },
{
  "label": "阳西县",
  "value": 2080 },
{
  "label": "阳春市",
  "value": 2081 }],

[{
  "label": "清城区",
  "value": 2083 },
{
  "label": "清新区",
  "value": 2084 },
{
  "label": "佛冈县",
  "value": 2085 },
{
  "label": "阳山县",
  "value": 2086 },
{
  "label": "连山壮族瑶族自治县",
  "value": 2087 },
{
  "label": "连南瑶族自治县",
  "value": 2088 },
{
  "label": "英德市",
  "value": 2089 },
{
  "label": "连州市",
  "value": 2090 }],

[{
  "label": "莞城区",
  "value": 2092 },
{
  "label": "南城区",
  "value": 2093 },
{
  "label": "万江区",
  "value": 2094 },
{
  "label": "石碣镇",
  "value": 2095 },
{
  "label": "石龙镇",
  "value": 2096 },
{
  "label": "茶山镇",
  "value": 2097 },
{
  "label": "石排镇",
  "value": 2098 },
{
  "label": "企石镇",
  "value": 2099 },
{
  "label": "横沥镇",
  "value": 2100 },
{
  "label": "桥头镇",
  "value": 2101 },
{
  "label": "谢岗镇",
  "value": 2102 },
{
  "label": "东坑镇",
  "value": 2103 },
{
  "label": "常平镇",
  "value": 2104 },
{
  "label": "寮步镇",
  "value": 2105 },
{
  "label": "大朗镇",
  "value": 2106 },
{
  "label": "麻涌镇",
  "value": 2107 },
{
  "label": "中堂镇",
  "value": 2108 },
{
  "label": "高埗镇",
  "value": 2109 },
{
  "label": "樟木头镇",
  "value": 2110 },
{
  "label": "大岭山镇",
  "value": 2111 },
{
  "label": "望牛墩镇",
  "value": 2112 },
{
  "label": "黄江镇",
  "value": 2113 },
{
  "label": "洪梅镇",
  "value": 2114 },
{
  "label": "清溪镇",
  "value": 2115 },
{
  "label": "沙田镇",
  "value": 2116 },
{
  "label": "道滘镇",
  "value": 2117 },
{
  "label": "塘厦镇",
  "value": 2118 },
{
  "label": "虎门镇",
  "value": 2119 },
{
  "label": "厚街镇",
  "value": 2120 },
{
  "label": "凤岗镇",
  "value": 2121 },
{
  "label": "长安镇",
  "value": 2122 }],

[{
  "label": "石岐区",
  "value": 2124 },
{
  "label": "南区",
  "value": 2125 },
{
  "label": "五桂山区",
  "value": 2126 },
{
  "label": "火炬开发区",
  "value": 2127 },
{
  "label": "黄圃镇",
  "value": 2128 },
{
  "label": "南头镇",
  "value": 2129 },
{
  "label": "东凤镇",
  "value": 2130 },
{
  "label": "阜沙镇",
  "value": 2131 },
{
  "label": "小榄镇",
  "value": 2132 },
{
  "label": "东升镇",
  "value": 2133 },
{
  "label": "古镇镇",
  "value": 2134 },
{
  "label": "横栏镇",
  "value": 2135 },
{
  "label": "三角镇",
  "value": 2136 },
{
  "label": "民众镇",
  "value": 2137 },
{
  "label": "南朗镇",
  "value": 2138 },
{
  "label": "港口镇",
  "value": 2139 },
{
  "label": "大涌镇",
  "value": 2140 },
{
  "label": "沙溪镇",
  "value": 2141 },
{
  "label": "三乡镇",
  "value": 2142 },
{
  "label": "板芙镇",
  "value": 2143 },
{
  "label": "神湾镇",
  "value": 2144 },
{
  "label": "坦洲镇",
  "value": 2145 }],

[{
  "label": "湘桥区",
  "value": 2147 },
{
  "label": "潮安区",
  "value": 2148 },
{
  "label": "饶平县",
  "value": 2149 }],

[{
  "label": "榕城区",
  "value": 2151 },
{
  "label": "揭东区",
  "value": 2152 },
{
  "label": "揭西县",
  "value": 2153 },
{
  "label": "惠来县",
  "value": 2154 },
{
  "label": "普宁市",
  "value": 2155 }],

[{
  "label": "云城区",
  "value": 2157 },
{
  "label": "云安区",
  "value": 2158 },
{
  "label": "新兴县",
  "value": 2159 },
{
  "label": "郁南县",
  "value": 2160 },
{
  "label": "罗定市",
  "value": 2161 }]],


[
[{
  "label": "兴宁区",
  "value": 2164 },
{
  "label": "青秀区",
  "value": 2165 },
{
  "label": "江南区",
  "value": 2166 },
{
  "label": "西乡塘区",
  "value": 2167 },
{
  "label": "良庆区",
  "value": 2168 },
{
  "label": "邕宁区",
  "value": 2169 },
{
  "label": "武鸣县",
  "value": 2170 },
{
  "label": "隆安县",
  "value": 2171 },
{
  "label": "马山县",
  "value": 2172 },
{
  "label": "上林县",
  "value": 2173 },
{
  "label": "宾阳县",
  "value": 2174 },
{
  "label": "横县",
  "value": 2175 },
{
  "label": "埌东新区",
  "value": 2176 }],

[{
  "label": "城中区",
  "value": 2178 },
{
  "label": "鱼峰区",
  "value": 2179 },
{
  "label": "柳南区",
  "value": 2180 },
{
  "label": "柳北区",
  "value": 2181 },
{
  "label": "柳江县",
  "value": 2182 },
{
  "label": "柳城县",
  "value": 2183 },
{
  "label": "鹿寨县",
  "value": 2184 },
{
  "label": "融安县",
  "value": 2185 },
{
  "label": "融水苗族自治县",
  "value": 2186 },
{
  "label": "三江侗族自治县",
  "value": 2187 },
{
  "label": "柳东新区",
  "value": 2188 }],

[{
  "label": "秀峰区",
  "value": 2190 },
{
  "label": "叠彩区",
  "value": 2191 },
{
  "label": "象山区",
  "value": 2192 },
{
  "label": "七星区",
  "value": 2193 },
{
  "label": "雁山区",
  "value": 2194 },
{
  "label": "临桂区",
  "value": 2195 },
{
  "label": "阳朔县",
  "value": 2196 },
{
  "label": "灵川县",
  "value": 2197 },
{
  "label": "全州县",
  "value": 2198 },
{
  "label": "兴安县",
  "value": 2199 },
{
  "label": "永福县",
  "value": 2200 },
{
  "label": "灌阳县",
  "value": 2201 },
{
  "label": "龙胜各族自治县",
  "value": 2202 },
{
  "label": "资源县",
  "value": 2203 },
{
  "label": "平乐县",
  "value": 2204 },
{
  "label": "荔浦县",
  "value": 2205 },
{
  "label": "恭城瑶族自治县",
  "value": 2206 }],

[{
  "label": "万秀区",
  "value": 2208 },
{
  "label": "长洲区",
  "value": 2209 },
{
  "label": "龙圩区",
  "value": 2210 },
{
  "label": "苍梧县",
  "value": 2211 },
{
  "label": "藤县",
  "value": 2212 },
{
  "label": "蒙山县",
  "value": 2213 },
{
  "label": "岑溪市",
  "value": 2214 }],

[{
  "label": "海城区",
  "value": 2216 },
{
  "label": "银海区",
  "value": 2217 },
{
  "label": "铁山港区",
  "value": 2218 },
{
  "label": "合浦县",
  "value": 2219 }],

[{
  "label": "港口区",
  "value": 2221 },
{
  "label": "防城区",
  "value": 2222 },
{
  "label": "上思县",
  "value": 2223 },
{
  "label": "东兴市",
  "value": 2224 }],

[{
  "label": "钦南区",
  "value": 2226 },
{
  "label": "钦北区",
  "value": 2227 },
{
  "label": "灵山县",
  "value": 2228 },
{
  "label": "浦北县",
  "value": 2229 }],

[{
  "label": "港北区",
  "value": 2231 },
{
  "label": "港南区",
  "value": 2232 },
{
  "label": "覃塘区",
  "value": 2233 },
{
  "label": "平南县",
  "value": 2234 },
{
  "label": "桂平市",
  "value": 2235 }],

[{
  "label": "玉州区",
  "value": 2237 },
{
  "label": "福绵区",
  "value": 2238 },
{
  "label": "玉东新区",
  "value": 2239 },
{
  "label": "容县",
  "value": 2240 },
{
  "label": "陆川县",
  "value": 2241 },
{
  "label": "博白县",
  "value": 2242 },
{
  "label": "兴业县",
  "value": 2243 },
{
  "label": "北流市",
  "value": 2244 }],

[{
  "label": "右江区",
  "value": 2246 },
{
  "label": "田阳县",
  "value": 2247 },
{
  "label": "田东县",
  "value": 2248 },
{
  "label": "平果县",
  "value": 2249 },
{
  "label": "德保县",
  "value": 2250 },
{
  "label": "靖西县",
  "value": 2251 },
{
  "label": "那坡县",
  "value": 2252 },
{
  "label": "凌云县",
  "value": 2253 },
{
  "label": "乐业县",
  "value": 2254 },
{
  "label": "田林县",
  "value": 2255 },
{
  "label": "西林县",
  "value": 2256 },
{
  "label": "隆林各族自治县",
  "value": 2257 }],

[{
  "label": "八步区",
  "value": 2259 },
{
  "label": "昭平县",
  "value": 2260 },
{
  "label": "钟山县",
  "value": 2261 },
{
  "label": "富川瑶族自治县",
  "value": 2262 },
{
  "label": "平桂管理区",
  "value": 2263 }],

[{
  "label": "金城江区",
  "value": 2265 },
{
  "label": "南丹县",
  "value": 2266 },
{
  "label": "天峨县",
  "value": 2267 },
{
  "label": "凤山县",
  "value": 2268 },
{
  "label": "东兰县",
  "value": 2269 },
{
  "label": "罗城仫佬族自治县",
  "value": 2270 },
{
  "label": "环江毛南族自治县",
  "value": 2271 },
{
  "label": "巴马瑶族自治县",
  "value": 2272 },
{
  "label": "都安瑶族自治县",
  "value": 2273 },
{
  "label": "大化瑶族自治县",
  "value": 2274 },
{
  "label": "宜州市",
  "value": 2275 }],

[{
  "label": "兴宾区",
  "value": 2277 },
{
  "label": "忻城县",
  "value": 2278 },
{
  "label": "象州县",
  "value": 2279 },
{
  "label": "武宣县",
  "value": 2280 },
{
  "label": "金秀瑶族自治县",
  "value": 2281 },
{
  "label": "合山市",
  "value": 2282 }],

[{
  "label": "江州区",
  "value": 2284 },
{
  "label": "扶绥县",
  "value": 2285 },
{
  "label": "宁明县",
  "value": 2286 },
{
  "label": "龙州县",
  "value": 2287 },
{
  "label": "大新县",
  "value": 2288 },
{
  "label": "天等县",
  "value": 2289 },
{
  "label": "凭祥市",
  "value": 2290 }]],


[
[{
  "label": "秀英区",
  "value": 2293 },
{
  "label": "龙华区",
  "value": 2294 },
{
  "label": "琼山区",
  "value": 2295 },
{
  "label": "美兰区",
  "value": 2296 }],

[{
  "label": "海棠区",
  "value": 2298 },
{
  "label": "吉阳区",
  "value": 2299 },
{
  "label": "天涯区",
  "value": 2300 },
{
  "label": "崖州区",
  "value": 2301 }],

[{
  "label": "西沙群岛",
  "value": 2303 },
{
  "label": "南沙群岛",
  "value": 2304 },
{
  "label": "中沙群岛",
  "value": 2305 }],

[{
  "label": "五指山市",
  "value": 2307 },
{
  "label": "琼海市",
  "value": 2308 },
{
  "label": "儋州市",
  "value": 2309 },
{
  "label": "文昌市",
  "value": 2310 },
{
  "label": "万宁市",
  "value": 2311 },
{
  "label": "东方市",
  "value": 2312 },
{
  "label": "定安县",
  "value": 2313 },
{
  "label": "屯昌县",
  "value": 2314 },
{
  "label": "澄迈县",
  "value": 2315 },
{
  "label": "临高县",
  "value": 2316 },
{
  "label": "白沙黎族自治县",
  "value": 2317 },
{
  "label": "昌江黎族自治县",
  "value": 2318 },
{
  "label": "乐东黎族自治县",
  "value": 2319 },
{
  "label": "陵水黎族自治县",
  "value": 2320 },
{
  "label": "保亭黎族苗族自治县",
  "value": 2321 },
{
  "label": "琼中黎族苗族自治县",
  "value": 2322 }]],


[
[{
  "label": "万州区",
  "value": 2325 },
{
  "label": "涪陵区",
  "value": 2326 },
{
  "label": "渝中区",
  "value": 2327 },
{
  "label": "大渡口区",
  "value": 2328 },
{
  "label": "江北区",
  "value": 2329 },
{
  "label": "沙坪坝区",
  "value": 2330 },
{
  "label": "九龙坡区",
  "value": 2331 },
{
  "label": "南岸区",
  "value": 2332 },
{
  "label": "北碚区",
  "value": 2333 },
{
  "label": "綦江区",
  "value": 2334 },
{
  "label": "大足区",
  "value": 2335 },
{
  "label": "渝北区",
  "value": 2336 },
{
  "label": "巴南区",
  "value": 2337 },
{
  "label": "黔江区",
  "value": 2338 },
{
  "label": "长寿区",
  "value": 2339 },
{
  "label": "江津区",
  "value": 2340 },
{
  "label": "合川区",
  "value": 2341 },
{
  "label": "永川区",
  "value": 2342 },
{
  "label": "南川区",
  "value": 2343 },
{
  "label": "璧山区",
  "value": 2344 },
{
  "label": "铜梁区",
  "value": 2345 },
{
  "label": "潼南县",
  "value": 2346 },
{
  "label": "荣昌县",
  "value": 2347 },
{
  "label": "梁平县",
  "value": 2348 },
{
  "label": "城口县",
  "value": 2349 },
{
  "label": "丰都县",
  "value": 2350 },
{
  "label": "垫江县",
  "value": 2351 },
{
  "label": "武隆县",
  "value": 2352 },
{
  "label": "忠县",
  "value": 2353 },
{
  "label": "开县",
  "value": 2354 },
{
  "label": "云阳县",
  "value": 2355 },
{
  "label": "奉节县",
  "value": 2356 },
{
  "label": "巫山县",
  "value": 2357 },
{
  "label": "巫溪县",
  "value": 2358 },
{
  "label": "石柱土家族自治县",
  "value": 2359 },
{
  "label": "秀山土家族苗族自治县",
  "value": 2360 },
{
  "label": "酉阳土家族苗族自治县",
  "value": 2361 },
{
  "label": "彭水苗族土家族自治县",
  "value": 2362 }],

[{
  "label": "北部新区",
  "value": 2364 },
{
  "label": "保税港区",
  "value": 2365 },
{
  "label": "工业园区",
  "value": 2366 }]],


[
[{
  "label": "锦江区",
  "value": 2369 },
{
  "label": "青羊区",
  "value": 2370 },
{
  "label": "金牛区",
  "value": 2371 },
{
  "label": "武侯区",
  "value": 2372 },
{
  "label": "成华区",
  "value": 2373 },
{
  "label": "龙泉驿区",
  "value": 2374 },
{
  "label": "青白江区",
  "value": 2375 },
{
  "label": "新都区",
  "value": 2376 },
{
  "label": "温江区",
  "value": 2377 },
{
  "label": "金堂县",
  "value": 2378 },
{
  "label": "双流县",
  "value": 2379 },
{
  "label": "郫县",
  "value": 2380 },
{
  "label": "大邑县",
  "value": 2381 },
{
  "label": "蒲江县",
  "value": 2382 },
{
  "label": "新津县",
  "value": 2383 },
{
  "label": "都江堰市",
  "value": 2384 },
{
  "label": "彭州市",
  "value": 2385 },
{
  "label": "邛崃市",
  "value": 2386 },
{
  "label": "崇州市",
  "value": 2387 }],

[{
  "label": "自流井区",
  "value": 2389 },
{
  "label": "贡井区",
  "value": 2390 },
{
  "label": "大安区",
  "value": 2391 },
{
  "label": "沿滩区",
  "value": 2392 },
{
  "label": "荣县",
  "value": 2393 },
{
  "label": "富顺县",
  "value": 2394 }],

[{
  "label": "东区",
  "value": 2396 },
{
  "label": "西区",
  "value": 2397 },
{
  "label": "仁和区",
  "value": 2398 },
{
  "label": "米易县",
  "value": 2399 },
{
  "label": "盐边县",
  "value": 2400 }],

[{
  "label": "江阳区",
  "value": 2402 },
{
  "label": "纳溪区",
  "value": 2403 },
{
  "label": "龙马潭区",
  "value": 2404 },
{
  "label": "泸县",
  "value": 2405 },
{
  "label": "合江县",
  "value": 2406 },
{
  "label": "叙永县",
  "value": 2407 },
{
  "label": "古蔺县",
  "value": 2408 }],

[{
  "label": "旌阳区",
  "value": 2410 },
{
  "label": "中江县",
  "value": 2411 },
{
  "label": "罗江县",
  "value": 2412 },
{
  "label": "广汉市",
  "value": 2413 },
{
  "label": "什邡市",
  "value": 2414 },
{
  "label": "绵竹市",
  "value": 2415 }],

[{
  "label": "涪城区",
  "value": 2417 },
{
  "label": "游仙区",
  "value": 2418 },
{
  "label": "三台县",
  "value": 2419 },
{
  "label": "盐亭县",
  "value": 2420 },
{
  "label": "安县",
  "value": 2421 },
{
  "label": "梓潼县",
  "value": 2422 },
{
  "label": "北川羌族自治县",
  "value": 2423 },
{
  "label": "平武县",
  "value": 2424 },
{
  "label": "江油市",
  "value": 2425 }],

[{
  "label": "利州区",
  "value": 2427 },
{
  "label": "昭化区",
  "value": 2428 },
{
  "label": "朝天区",
  "value": 2429 },
{
  "label": "旺苍县",
  "value": 2430 },
{
  "label": "青川县",
  "value": 2431 },
{
  "label": "剑阁县",
  "value": 2432 },
{
  "label": "苍溪县",
  "value": 2433 }],

[{
  "label": "船山区",
  "value": 2435 },
{
  "label": "安居区",
  "value": 2436 },
{
  "label": "蓬溪县",
  "value": 2437 },
{
  "label": "射洪县",
  "value": 2438 },
{
  "label": "大英县",
  "value": 2439 }],

[{
  "label": "市中区",
  "value": 2441 },
{
  "label": "东兴区",
  "value": 2442 },
{
  "label": "威远县",
  "value": 2443 },
{
  "label": "资中县",
  "value": 2444 },
{
  "label": "隆昌县",
  "value": 2445 }],

[{
  "label": "市中区",
  "value": 2447 },
{
  "label": "沙湾区",
  "value": 2448 },
{
  "label": "五通桥区",
  "value": 2449 },
{
  "label": "金口河区",
  "value": 2450 },
{
  "label": "犍为县",
  "value": 2451 },
{
  "label": "井研县",
  "value": 2452 },
{
  "label": "夹江县",
  "value": 2453 },
{
  "label": "沐川县",
  "value": 2454 },
{
  "label": "峨边彝族自治县",
  "value": 2455 },
{
  "label": "马边彝族自治县",
  "value": 2456 },
{
  "label": "峨眉山市",
  "value": 2457 }],

[{
  "label": "顺庆区",
  "value": 2459 },
{
  "label": "高坪区",
  "value": 2460 },
{
  "label": "嘉陵区",
  "value": 2461 },
{
  "label": "南部县",
  "value": 2462 },
{
  "label": "营山县",
  "value": 2463 },
{
  "label": "蓬安县",
  "value": 2464 },
{
  "label": "仪陇县",
  "value": 2465 },
{
  "label": "西充县",
  "value": 2466 },
{
  "label": "阆中市",
  "value": 2467 }],

[{
  "label": "东坡区",
  "value": 2469 },
{
  "label": "彭山区",
  "value": 2470 },
{
  "label": "仁寿县",
  "value": 2471 },
{
  "label": "洪雅县",
  "value": 2472 },
{
  "label": "丹棱县",
  "value": 2473 },
{
  "label": "青神县",
  "value": 2474 }],

[{
  "label": "翠屏区",
  "value": 2476 },
{
  "label": "南溪区",
  "value": 2477 },
{
  "label": "宜宾县",
  "value": 2478 },
{
  "label": "江安县",
  "value": 2479 },
{
  "label": "长宁县",
  "value": 2480 },
{
  "label": "高县",
  "value": 2481 },
{
  "label": "珙县",
  "value": 2482 },
{
  "label": "筠连县",
  "value": 2483 },
{
  "label": "兴文县",
  "value": 2484 },
{
  "label": "屏山县",
  "value": 2485 }],

[{
  "label": "广安区",
  "value": 2487 },
{
  "label": "前锋区",
  "value": 2488 },
{
  "label": "岳池县",
  "value": 2489 },
{
  "label": "武胜县",
  "value": 2490 },
{
  "label": "邻水县",
  "value": 2491 },
{
  "label": "华蓥市",
  "value": 2492 }],

[{
  "label": "通川区",
  "value": 2494 },
{
  "label": "达川区",
  "value": 2495 },
{
  "label": "宣汉县",
  "value": 2496 },
{
  "label": "开江县",
  "value": 2497 },
{
  "label": "大竹县",
  "value": 2498 },
{
  "label": "渠县",
  "value": 2499 },
{
  "label": "万源市",
  "value": 2500 }],

[{
  "label": "雨城区",
  "value": 2502 },
{
  "label": "名山区",
  "value": 2503 },
{
  "label": "荥经县",
  "value": 2504 },
{
  "label": "汉源县",
  "value": 2505 },
{
  "label": "石棉县",
  "value": 2506 },
{
  "label": "天全县",
  "value": 2507 },
{
  "label": "芦山县",
  "value": 2508 },
{
  "label": "宝兴县",
  "value": 2509 }],

[{
  "label": "巴州区",
  "value": 2511 },
{
  "label": "恩阳区",
  "value": 2512 },
{
  "label": "通江县",
  "value": 2513 },
{
  "label": "南江县",
  "value": 2514 },
{
  "label": "平昌县",
  "value": 2515 }],

[{
  "label": "雁江区",
  "value": 2517 },
{
  "label": "安岳县",
  "value": 2518 },
{
  "label": "乐至县",
  "value": 2519 },
{
  "label": "简阳市",
  "value": 2520 }],

[{
  "label": "汶川县",
  "value": 2522 },
{
  "label": "理县",
  "value": 2523 },
{
  "label": "茂县",
  "value": 2524 },
{
  "label": "松潘县",
  "value": 2525 },
{
  "label": "九寨沟县",
  "value": 2526 },
{
  "label": "金川县",
  "value": 2527 },
{
  "label": "小金县",
  "value": 2528 },
{
  "label": "黑水县",
  "value": 2529 },
{
  "label": "马尔康县",
  "value": 2530 },
{
  "label": "壤塘县",
  "value": 2531 },
{
  "label": "阿坝县",
  "value": 2532 },
{
  "label": "若尔盖县",
  "value": 2533 },
{
  "label": "红原县",
  "value": 2534 }],

[{
  "label": "康定县",
  "value": 2536 },
{
  "label": "泸定县",
  "value": 2537 },
{
  "label": "丹巴县",
  "value": 2538 },
{
  "label": "九龙县",
  "value": 2539 },
{
  "label": "雅江县",
  "value": 2540 },
{
  "label": "道孚县",
  "value": 2541 },
{
  "label": "炉霍县",
  "value": 2542 },
{
  "label": "甘孜县",
  "value": 2543 },
{
  "label": "新龙县",
  "value": 2544 },
{
  "label": "德格县",
  "value": 2545 },
{
  "label": "白玉县",
  "value": 2546 },
{
  "label": "石渠县",
  "value": 2547 },
{
  "label": "色达县",
  "value": 2548 },
{
  "label": "理塘县",
  "value": 2549 },
{
  "label": "巴塘县",
  "value": 2550 },
{
  "label": "乡城县",
  "value": 2551 },
{
  "label": "稻城县",
  "value": 2552 },
{
  "label": "得荣县",
  "value": 2553 }],

[{
  "label": "西昌市",
  "value": 2555 },
{
  "label": "木里藏族自治县",
  "value": 2556 },
{
  "label": "盐源县",
  "value": 2557 },
{
  "label": "德昌县",
  "value": 2558 },
{
  "label": "会理县",
  "value": 2559 },
{
  "label": "会东县",
  "value": 2560 },
{
  "label": "宁南县",
  "value": 2561 },
{
  "label": "普格县",
  "value": 2562 },
{
  "label": "布拖县",
  "value": 2563 },
{
  "label": "金阳县",
  "value": 2564 },
{
  "label": "昭觉县",
  "value": 2565 },
{
  "label": "喜德县",
  "value": 2566 },
{
  "label": "冕宁县",
  "value": 2567 },
{
  "label": "越西县",
  "value": 2568 },
{
  "label": "甘洛县",
  "value": 2569 },
{
  "label": "美姑县",
  "value": 2570 },
{
  "label": "雷波县",
  "value": 2571 }]],


[
[{
  "label": "南明区",
  "value": 2574 },
{
  "label": "云岩区",
  "value": 2575 },
{
  "label": "花溪区",
  "value": 2576 },
{
  "label": "乌当区",
  "value": 2577 },
{
  "label": "白云区",
  "value": 2578 },
{
  "label": "观山湖区",
  "value": 2579 },
{
  "label": "开阳县",
  "value": 2580 },
{
  "label": "息烽县",
  "value": 2581 },
{
  "label": "修文县",
  "value": 2582 },
{
  "label": "清镇市",
  "value": 2583 }],

[{
  "label": "钟山区",
  "value": 2585 },
{
  "label": "六枝特区",
  "value": 2586 },
{
  "label": "水城县",
  "value": 2587 },
{
  "label": "盘县",
  "value": 2588 }],

[{
  "label": "红花岗区",
  "value": 2590 },
{
  "label": "汇川区",
  "value": 2591 },
{
  "label": "遵义县",
  "value": 2592 },
{
  "label": "桐梓县",
  "value": 2593 },
{
  "label": "绥阳县",
  "value": 2594 },
{
  "label": "正安县",
  "value": 2595 },
{
  "label": "道真仡佬族苗族自治县",
  "value": 2596 },
{
  "label": "务川仡佬族苗族自治县",
  "value": 2597 },
{
  "label": "凤冈县",
  "value": 2598 },
{
  "label": "湄潭县",
  "value": 2599 },
{
  "label": "余庆县",
  "value": 2600 },
{
  "label": "习水县",
  "value": 2601 },
{
  "label": "赤水市",
  "value": 2602 },
{
  "label": "仁怀市",
  "value": 2603 }],

[{
  "label": "西秀区",
  "value": 2605 },
{
  "label": "平坝区",
  "value": 2606 },
{
  "label": "普定县",
  "value": 2607 },
{
  "label": "镇宁布依族苗族自治县",
  "value": 2608 },
{
  "label": "关岭布依族苗族自治县",
  "value": 2609 },
{
  "label": "紫云苗族布依族自治县",
  "value": 2610 }],

[{
  "label": "七星关区",
  "value": 2612 },
{
  "label": "大方县",
  "value": 2613 },
{
  "label": "黔西县",
  "value": 2614 },
{
  "label": "金沙县",
  "value": 2615 },
{
  "label": "织金县",
  "value": 2616 },
{
  "label": "纳雍县",
  "value": 2617 },
{
  "label": "威宁彝族回族苗族自治县",
  "value": 2618 },
{
  "label": "赫章县",
  "value": 2619 }],

[{
  "label": "碧江区",
  "value": 2621 },
{
  "label": "万山区",
  "value": 2622 },
{
  "label": "江口县",
  "value": 2623 },
{
  "label": "玉屏侗族自治县",
  "value": 2624 },
{
  "label": "石阡县",
  "value": 2625 },
{
  "label": "思南县",
  "value": 2626 },
{
  "label": "印江土家族苗族自治县",
  "value": 2627 },
{
  "label": "德江县",
  "value": 2628 },
{
  "label": "沿河土家族自治县",
  "value": 2629 },
{
  "label": "松桃苗族自治县",
  "value": 2630 }],

[{
  "label": "兴义市 ",
  "value": 2632 },
{
  "label": "兴仁县",
  "value": 2633 },
{
  "label": "普安县",
  "value": 2634 },
{
  "label": "晴隆县",
  "value": 2635 },
{
  "label": "贞丰县",
  "value": 2636 },
{
  "label": "望谟县",
  "value": 2637 },
{
  "label": "册亨县",
  "value": 2638 },
{
  "label": "安龙县",
  "value": 2639 }],

[{
  "label": "凯里市",
  "value": 2641 },
{
  "label": "黄平县",
  "value": 2642 },
{
  "label": "施秉县",
  "value": 2643 },
{
  "label": "三穗县",
  "value": 2644 },
{
  "label": "镇远县",
  "value": 2645 },
{
  "label": "岑巩县",
  "value": 2646 },
{
  "label": "天柱县",
  "value": 2647 },
{
  "label": "锦屏县",
  "value": 2648 },
{
  "label": "剑河县",
  "value": 2649 },
{
  "label": "台江县",
  "value": 2650 },
{
  "label": "黎平县",
  "value": 2651 },
{
  "label": "榕江县",
  "value": 2652 },
{
  "label": "从江县",
  "value": 2653 },
{
  "label": "雷山县",
  "value": 2654 },
{
  "label": "麻江县",
  "value": 2655 },
{
  "label": "丹寨县",
  "value": 2656 }],

[{
  "label": "都匀市",
  "value": 2658 },
{
  "label": "福泉市",
  "value": 2659 },
{
  "label": "荔波县",
  "value": 2660 },
{
  "label": "贵定县",
  "value": 2661 },
{
  "label": "瓮安县",
  "value": 2662 },
{
  "label": "独山县",
  "value": 2663 },
{
  "label": "平塘县",
  "value": 2664 },
{
  "label": "罗甸县",
  "value": 2665 },
{
  "label": "长顺县",
  "value": 2666 },
{
  "label": "龙里县",
  "value": 2667 },
{
  "label": "惠水县",
  "value": 2668 },
{
  "label": "三都水族自治县",
  "value": 2669 }]],


[
[{
  "label": "五华区",
  "value": 2672 },
{
  "label": "盘龙区",
  "value": 2673 },
{
  "label": "官渡区",
  "value": 2674 },
{
  "label": "西山区",
  "value": 2675 },
{
  "label": "东川区",
  "value": 2676 },
{
  "label": "呈贡区",
  "value": 2677 },
{
  "label": "晋宁县",
  "value": 2678 },
{
  "label": "富民县",
  "value": 2679 },
{
  "label": "宜良县",
  "value": 2680 },
{
  "label": "石林彝族自治县",
  "value": 2681 },
{
  "label": "嵩明县",
  "value": 2682 },
{
  "label": "禄劝彝族苗族自治县",
  "value": 2683 },
{
  "label": "寻甸回族彝族自治县 ",
  "value": 2684 },
{
  "label": "安宁市",
  "value": 2685 }],

[{
  "label": "麒麟区",
  "value": 2687 },
{
  "label": "马龙县",
  "value": 2688 },
{
  "label": "陆良县",
  "value": 2689 },
{
  "label": "师宗县",
  "value": 2690 },
{
  "label": "罗平县",
  "value": 2691 },
{
  "label": "富源县",
  "value": 2692 },
{
  "label": "会泽县",
  "value": 2693 },
{
  "label": "沾益县",
  "value": 2694 },
{
  "label": "宣威市",
  "value": 2695 }],

[{
  "label": "红塔区",
  "value": 2697 },
{
  "label": "江川县",
  "value": 2698 },
{
  "label": "澄江县",
  "value": 2699 },
{
  "label": "通海县",
  "value": 2700 },
{
  "label": "华宁县",
  "value": 2701 },
{
  "label": "易门县",
  "value": 2702 },
{
  "label": "峨山彝族自治县",
  "value": 2703 },
{
  "label": "新平彝族傣族自治县",
  "value": 2704 },
{
  "label": "元江哈尼族彝族傣族自治县",
  "value": 2705 }],

[{
  "label": "隆阳区",
  "value": 2707 },
{
  "label": "施甸县",
  "value": 2708 },
{
  "label": "腾冲县",
  "value": 2709 },
{
  "label": "龙陵县",
  "value": 2710 },
{
  "label": "昌宁县",
  "value": 2711 }],

[{
  "label": "昭阳区",
  "value": 2713 },
{
  "label": "鲁甸县",
  "value": 2714 },
{
  "label": "巧家县",
  "value": 2715 },
{
  "label": "盐津县",
  "value": 2716 },
{
  "label": "大关县",
  "value": 2717 },
{
  "label": "永善县",
  "value": 2718 },
{
  "label": "绥江县",
  "value": 2719 },
{
  "label": "镇雄县",
  "value": 2720 },
{
  "label": "彝良县",
  "value": 2721 },
{
  "label": "威信县",
  "value": 2722 },
{
  "label": "水富县",
  "value": 2723 }],

[{
  "label": "古城区",
  "value": 2725 },
{
  "label": "玉龙纳西族自治县",
  "value": 2726 },
{
  "label": "永胜县",
  "value": 2727 },
{
  "label": "华坪县",
  "value": 2728 },
{
  "label": "宁蒗彝族自治县",
  "value": 2729 }],

[{
  "label": "思茅区",
  "value": 2731 },
{
  "label": "宁洱哈尼族彝族自治县",
  "value": 2732 },
{
  "label": "墨江哈尼族自治县",
  "value": 2733 },
{
  "label": "景东彝族自治县",
  "value": 2734 },
{
  "label": "景谷傣族彝族自治县",
  "value": 2735 },
{
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": 2736 },
{
  "label": "江城哈尼族彝族自治县",
  "value": 2737 },
{
  "label": "孟连傣族拉祜族佤族自治县",
  "value": 2738 },
{
  "label": "澜沧拉祜族自治县",
  "value": 2739 },
{
  "label": "西盟佤族自治县",
  "value": 2740 }],

[{
  "label": "临翔区",
  "value": 2742 },
{
  "label": "凤庆县",
  "value": 2743 },
{
  "label": "云县",
  "value": 2744 },
{
  "label": "永德县",
  "value": 2745 },
{
  "label": "镇康县",
  "value": 2746 },
{
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": 2747 },
{
  "label": "耿马傣族佤族自治县",
  "value": 2748 },
{
  "label": "沧源佤族自治县",
  "value": 2749 }],

[{
  "label": "楚雄市",
  "value": 2751 },
{
  "label": "双柏县",
  "value": 2752 },
{
  "label": "牟定县",
  "value": 2753 },
{
  "label": "南华县",
  "value": 2754 },
{
  "label": "姚安县",
  "value": 2755 },
{
  "label": "大姚县",
  "value": 2756 },
{
  "label": "永仁县",
  "value": 2757 },
{
  "label": "元谋县",
  "value": 2758 },
{
  "label": "武定县",
  "value": 2759 },
{
  "label": "禄丰县",
  "value": 2760 }],

[{
  "label": "个旧市",
  "value": 2762 },
{
  "label": "开远市",
  "value": 2763 },
{
  "label": "蒙自市",
  "value": 2764 },
{
  "label": "弥勒市",
  "value": 2765 },
{
  "label": "屏边苗族自治县",
  "value": 2766 },
{
  "label": "建水县",
  "value": 2767 },
{
  "label": "石屏县",
  "value": 2768 },
{
  "label": "泸西县",
  "value": 2769 },
{
  "label": "元阳县",
  "value": 2770 },
{
  "label": "红河县",
  "value": 2771 },
{
  "label": "金平苗族瑶族傣族自治县",
  "value": 2772 },
{
  "label": "绿春县",
  "value": 2773 },
{
  "label": "河口瑶族自治县",
  "value": 2774 }],

[{
  "label": "文山市",
  "value": 2776 },
{
  "label": "砚山县",
  "value": 2777 },
{
  "label": "西畴县",
  "value": 2778 },
{
  "label": "麻栗坡县",
  "value": 2779 },
{
  "label": "马关县",
  "value": 2780 },
{
  "label": "丘北县",
  "value": 2781 },
{
  "label": "广南县",
  "value": 2782 },
{
  "label": "富宁县",
  "value": 2783 }],

[{
  "label": "景洪市",
  "value": 2785 },
{
  "label": "勐海县",
  "value": 2786 },
{
  "label": "勐腊县",
  "value": 2787 }],

[{
  "label": "大理市",
  "value": 2789 },
{
  "label": "漾濞彝族自治县",
  "value": 2790 },
{
  "label": "祥云县",
  "value": 2791 },
{
  "label": "宾川县",
  "value": 2792 },
{
  "label": "弥渡县",
  "value": 2793 },
{
  "label": "南涧彝族自治县",
  "value": 2794 },
{
  "label": "巍山彝族回族自治县",
  "value": 2795 },
{
  "label": "永平县",
  "value": 2796 },
{
  "label": "云龙县",
  "value": 2797 },
{
  "label": "洱源县",
  "value": 2798 },
{
  "label": "剑川县",
  "value": 2799 },
{
  "label": "鹤庆县",
  "value": 2800 }],

[{
  "label": "瑞丽市",
  "value": 2802 },
{
  "label": "芒市",
  "value": 2803 },
{
  "label": "梁河县",
  "value": 2804 },
{
  "label": "盈江县",
  "value": 2805 },
{
  "label": "陇川县",
  "value": 2806 }],

[{
  "label": "泸水县",
  "value": 2808 },
{
  "label": "福贡县",
  "value": 2809 },
{
  "label": "贡山独龙族怒族自治县",
  "value": 2810 },
{
  "label": "兰坪白族普米族自治县",
  "value": 2811 }],

[{
  "label": "香格里拉市",
  "value": 2813 },
{
  "label": "德钦县",
  "value": 2814 },
{
  "label": "维西傈僳族自治县",
  "value": 2815 }]],


[
[{
  "label": "城关区",
  "value": 2818 },
{
  "label": "林周县",
  "value": 2819 },
{
  "label": "当雄县",
  "value": 2820 },
{
  "label": "尼木县",
  "value": 2821 },
{
  "label": "曲水县",
  "value": 2822 },
{
  "label": "堆龙德庆县",
  "value": 2823 },
{
  "label": "达孜县",
  "value": 2824 },
{
  "label": "墨竹工卡县",
  "value": 2825 }],

[{
  "label": "桑珠孜区",
  "value": 2827 },
{
  "label": "南木林县",
  "value": 2828 },
{
  "label": "江孜县",
  "value": 2829 },
{
  "label": "定日县",
  "value": 2830 },
{
  "label": "萨迦县",
  "value": 2831 },
{
  "label": "拉孜县",
  "value": 2832 },
{
  "label": "昂仁县",
  "value": 2833 },
{
  "label": "谢通门县",
  "value": 2834 },
{
  "label": "白朗县",
  "value": 2835 },
{
  "label": "仁布县",
  "value": 2836 },
{
  "label": "康马县",
  "value": 2837 },
{
  "label": "定结县",
  "value": 2838 },
{
  "label": "仲巴县",
  "value": 2839 },
{
  "label": "亚东县",
  "value": 2840 },
{
  "label": "吉隆县",
  "value": 2841 },
{
  "label": "聂拉木县",
  "value": 2842 },
{
  "label": "萨嘎县",
  "value": 2843 },
{
  "label": "岗巴县",
  "value": 2844 }],

[{
  "label": "卡若区",
  "value": 2846 },
{
  "label": "江达县",
  "value": 2847 },
{
  "label": "贡觉县",
  "value": 2848 },
{
  "label": "类乌齐县",
  "value": 2849 },
{
  "label": "丁青县",
  "value": 2850 },
{
  "label": "察雅县",
  "value": 2851 },
{
  "label": "八宿县",
  "value": 2852 },
{
  "label": "左贡县",
  "value": 2853 },
{
  "label": "芒康县",
  "value": 2854 },
{
  "label": "洛隆县",
  "value": 2855 },
{
  "label": "边坝县",
  "value": 2856 }],

[{
  "label": "乃东县",
  "value": 2858 },
{
  "label": "扎囊县",
  "value": 2859 },
{
  "label": "贡嘎县",
  "value": 2860 },
{
  "label": "桑日县",
  "value": 2861 },
{
  "label": "琼结县",
  "value": 2862 },
{
  "label": "曲松县",
  "value": 2863 },
{
  "label": "措美县",
  "value": 2864 },
{
  "label": "洛扎县",
  "value": 2865 },
{
  "label": "加查县",
  "value": 2866 },
{
  "label": "隆子县",
  "value": 2867 },
{
  "label": "错那县",
  "value": 2868 },
{
  "label": "浪卡子县",
  "value": 2869 }],

[{
  "label": "那曲县",
  "value": 2871 },
{
  "label": "嘉黎县",
  "value": 2872 },
{
  "label": "比如县",
  "value": 2873 },
{
  "label": "聂荣县",
  "value": 2874 },
{
  "label": "安多县",
  "value": 2875 },
{
  "label": "申扎县",
  "value": 2876 },
{
  "label": "索县",
  "value": 2877 },
{
  "label": "班戈县",
  "value": 2878 },
{
  "label": "巴青县",
  "value": 2879 },
{
  "label": "尼玛县",
  "value": 2880 },
{
  "label": "双湖县",
  "value": 2881 }],

[{
  "label": "普兰县",
  "value": 2883 },
{
  "label": "札达县",
  "value": 2884 },
{
  "label": "噶尔县",
  "value": 2885 },
{
  "label": "日土县",
  "value": 2886 },
{
  "label": "革吉县",
  "value": 2887 },
{
  "label": "改则县",
  "value": 2888 },
{
  "label": "措勤县",
  "value": 2889 }],

[{
  "label": "林芝县",
  "value": 2891 },
{
  "label": "工布江达县",
  "value": 2892 },
{
  "label": "米林县",
  "value": 2893 },
{
  "label": "墨脱县",
  "value": 2894 },
{
  "label": "波密县",
  "value": 2895 },
{
  "label": "察隅县",
  "value": 2896 },
{
  "label": "朗县",
  "value": 2897 }]],


[
[{
  "label": "新城区",
  "value": 2900 },
{
  "label": "碑林区",
  "value": 2901 },
{
  "label": "莲湖区",
  "value": 2902 },
{
  "label": "灞桥区",
  "value": 2903 },
{
  "label": "未央区",
  "value": 2904 },
{
  "label": "雁塔区",
  "value": 2905 },
{
  "label": "阎良区",
  "value": 2906 },
{
  "label": "临潼区",
  "value": 2907 },
{
  "label": "长安区",
  "value": 2908 },
{
  "label": "蓝田县",
  "value": 2909 },
{
  "label": "周至县",
  "value": 2910 },
{
  "label": "户县",
  "value": 2911 },
{
  "label": "高陵区",
  "value": 2912 }],

[{
  "label": "王益区",
  "value": 2914 },
{
  "label": "印台区",
  "value": 2915 },
{
  "label": "耀州区",
  "value": 2916 },
{
  "label": "宜君县",
  "value": 2917 }],

[{
  "label": "渭滨区",
  "value": 2919 },
{
  "label": "金台区",
  "value": 2920 },
{
  "label": "陈仓区",
  "value": 2921 },
{
  "label": "凤翔县",
  "value": 2922 },
{
  "label": "岐山县",
  "value": 2923 },
{
  "label": "扶风县",
  "value": 2924 },
{
  "label": "眉县",
  "value": 2925 },
{
  "label": "陇县",
  "value": 2926 },
{
  "label": "千阳县",
  "value": 2927 },
{
  "label": "麟游县",
  "value": 2928 },
{
  "label": "凤县",
  "value": 2929 },
{
  "label": "太白县",
  "value": 2930 }],

[{
  "label": "秦都区",
  "value": 2932 },
{
  "label": "杨陵区",
  "value": 2933 },
{
  "label": "渭城区",
  "value": 2934 },
{
  "label": "三原县",
  "value": 2935 },
{
  "label": "泾阳县",
  "value": 2936 },
{
  "label": "乾县",
  "value": 2937 },
{
  "label": "礼泉县",
  "value": 2938 },
{
  "label": "永寿县",
  "value": 2939 },
{
  "label": "彬县",
  "value": 2940 },
{
  "label": "长武县",
  "value": 2941 },
{
  "label": "旬邑县",
  "value": 2942 },
{
  "label": "淳化县",
  "value": 2943 },
{
  "label": "武功县",
  "value": 2944 },
{
  "label": "兴平市",
  "value": 2945 }],

[{
  "label": "临渭区",
  "value": 2947 },
{
  "label": "华县",
  "value": 2948 },
{
  "label": "潼关县",
  "value": 2949 },
{
  "label": "大荔县",
  "value": 2950 },
{
  "label": "合阳县",
  "value": 2951 },
{
  "label": "澄城县",
  "value": 2952 },
{
  "label": "蒲城县",
  "value": 2953 },
{
  "label": "白水县",
  "value": 2954 },
{
  "label": "富平县",
  "value": 2955 },
{
  "label": "韩城市",
  "value": 2956 },
{
  "label": "华阴市",
  "value": 2957 }],

[{
  "label": "宝塔区",
  "value": 2959 },
{
  "label": "延长县",
  "value": 2960 },
{
  "label": "延川县",
  "value": 2961 },
{
  "label": "子长县",
  "value": 2962 },
{
  "label": "安塞县",
  "value": 2963 },
{
  "label": "志丹县",
  "value": 2964 },
{
  "label": "吴起县",
  "value": 2965 },
{
  "label": "甘泉县",
  "value": 2966 },
{
  "label": "富县",
  "value": 2967 },
{
  "label": "洛川县",
  "value": 2968 },
{
  "label": "宜川县",
  "value": 2969 },
{
  "label": "黄龙县",
  "value": 2970 },
{
  "label": "黄陵县",
  "value": 2971 }],

[{
  "label": "汉台区",
  "value": 2973 },
{
  "label": "南郑县",
  "value": 2974 },
{
  "label": "城固县",
  "value": 2975 },
{
  "label": "洋县",
  "value": 2976 },
{
  "label": "西乡县",
  "value": 2977 },
{
  "label": "勉县",
  "value": 2978 },
{
  "label": "宁强县",
  "value": 2979 },
{
  "label": "略阳县",
  "value": 2980 },
{
  "label": "镇巴县",
  "value": 2981 },
{
  "label": "留坝县",
  "value": 2982 },
{
  "label": "佛坪县",
  "value": 2983 }],

[{
  "label": "榆阳区",
  "value": 2985 },
{
  "label": "神木县",
  "value": 2986 },
{
  "label": "府谷县",
  "value": 2987 },
{
  "label": "横山县",
  "value": 2988 },
{
  "label": "靖边县",
  "value": 2989 },
{
  "label": "定边县",
  "value": 2990 },
{
  "label": "绥德县",
  "value": 2991 },
{
  "label": "米脂县",
  "value": 2992 },
{
  "label": "佳县",
  "value": 2993 },
{
  "label": "吴堡县",
  "value": 2994 },
{
  "label": "清涧县",
  "value": 2995 },
{
  "label": "子洲县",
  "value": 2996 }],

[{
  "label": "汉滨区",
  "value": 2998 },
{
  "label": "汉阴县",
  "value": 2999 },
{
  "label": "石泉县",
  "value": 3000 },
{
  "label": "宁陕县",
  "value": 3001 },
{
  "label": "紫阳县",
  "value": 3002 },
{
  "label": "岚皋县",
  "value": 3003 },
{
  "label": "平利县",
  "value": 3004 },
{
  "label": "镇坪县",
  "value": 3005 },
{
  "label": "旬阳县",
  "value": 3006 },
{
  "label": "白河县",
  "value": 3007 }],

[{
  "label": "商州区",
  "value": 3009 },
{
  "label": "洛南县",
  "value": 3010 },
{
  "label": "丹凤县",
  "value": 3011 },
{
  "label": "商南县",
  "value": 3012 },
{
  "label": "山阳县",
  "value": 3013 },
{
  "label": "镇安县",
  "value": 3014 },
{
  "label": "柞水县",
  "value": 3015 }],

[{
  "label": "空港新城",
  "value": 3017 },
{
  "label": "沣东新城",
  "value": 3018 },
{
  "label": "秦汉新城",
  "value": 3019 },
{
  "label": "沣西新城",
  "value": 3020 },
{
  "label": "泾河新城",
  "value": 3021 }]],


[
[{
  "label": "城关区",
  "value": 3024 },
{
  "label": "七里河区",
  "value": 3025 },
{
  "label": "西固区",
  "value": 3026 },
{
  "label": "安宁区",
  "value": 3027 },
{
  "label": "红古区",
  "value": 3028 },
{
  "label": "永登县",
  "value": 3029 },
{
  "label": "皋兰县",
  "value": 3030 },
{
  "label": "榆中县",
  "value": 3031 }],

[{
  "label": "雄关区",
  "value": 3033 },
{
  "label": "长城区",
  "value": 3034 },
{
  "label": "镜铁区",
  "value": 3035 }],

[{
  "label": "金川区",
  "value": 3037 },
{
  "label": "永昌县",
  "value": 3038 }],

[{
  "label": "白银区",
  "value": 3040 },
{
  "label": "平川区",
  "value": 3041 },
{
  "label": "靖远县",
  "value": 3042 },
{
  "label": "会宁县",
  "value": 3043 },
{
  "label": "景泰县",
  "value": 3044 }],

[{
  "label": "秦州区",
  "value": 3046 },
{
  "label": "麦积区",
  "value": 3047 },
{
  "label": "清水县",
  "value": 3048 },
{
  "label": "秦安县",
  "value": 3049 },
{
  "label": "甘谷县",
  "value": 3050 },
{
  "label": "武山县",
  "value": 3051 },
{
  "label": "张家川回族自治县",
  "value": 3052 }],

[{
  "label": "凉州区",
  "value": 3054 },
{
  "label": "民勤县",
  "value": 3055 },
{
  "label": "古浪县",
  "value": 3056 },
{
  "label": "天祝藏族自治县",
  "value": 3057 }],

[{
  "label": "甘州区",
  "value": 3059 },
{
  "label": "肃南裕固族自治县",
  "value": 3060 },
{
  "label": "民乐县",
  "value": 3061 },
{
  "label": "临泽县",
  "value": 3062 },
{
  "label": "高台县",
  "value": 3063 },
{
  "label": "山丹县",
  "value": 3064 }],

[{
  "label": "崆峒区",
  "value": 3066 },
{
  "label": "泾川县",
  "value": 3067 },
{
  "label": "灵台县",
  "value": 3068 },
{
  "label": "崇信县",
  "value": 3069 },
{
  "label": "华亭县",
  "value": 3070 },
{
  "label": "庄浪县",
  "value": 3071 },
{
  "label": "静宁县",
  "value": 3072 }],

[{
  "label": "肃州区",
  "value": 3074 },
{
  "label": "金塔县",
  "value": 3075 },
{
  "label": "瓜州县",
  "value": 3076 },
{
  "label": "肃北蒙古族自治县",
  "value": 3077 },
{
  "label": "阿克塞哈萨克族自治县",
  "value": 3078 },
{
  "label": "玉门市",
  "value": 3079 },
{
  "label": "敦煌市",
  "value": 3080 }],

[{
  "label": "西峰区",
  "value": 3082 },
{
  "label": "庆城县",
  "value": 3083 },
{
  "label": "环县",
  "value": 3084 },
{
  "label": "华池县",
  "value": 3085 },
{
  "label": "合水县",
  "value": 3086 },
{
  "label": "正宁县",
  "value": 3087 },
{
  "label": "宁县",
  "value": 3088 },
{
  "label": "镇原县",
  "value": 3089 }],

[{
  "label": "安定区",
  "value": 3091 },
{
  "label": "通渭县",
  "value": 3092 },
{
  "label": "陇西县",
  "value": 3093 },
{
  "label": "渭源县",
  "value": 3094 },
{
  "label": "临洮县",
  "value": 3095 },
{
  "label": "漳县",
  "value": 3096 },
{
  "label": "岷县",
  "value": 3097 }],

[{
  "label": "武都区",
  "value": 3099 },
{
  "label": "成县",
  "value": 3100 },
{
  "label": "文县",
  "value": 3101 },
{
  "label": "宕昌县",
  "value": 3102 },
{
  "label": "康县",
  "value": 3103 },
{
  "label": "西和县",
  "value": 3104 },
{
  "label": "礼县",
  "value": 3105 },
{
  "label": "徽县",
  "value": 3106 },
{
  "label": "两当县",
  "value": 3107 }],

[{
  "label": "临夏市",
  "value": 3109 },
{
  "label": "临夏县",
  "value": 3110 },
{
  "label": "康乐县",
  "value": 3111 },
{
  "label": "永靖县",
  "value": 3112 },
{
  "label": "广河县",
  "value": 3113 },
{
  "label": "和政县",
  "value": 3114 },
{
  "label": "东乡族自治县",
  "value": 3115 },
{
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": 3116 }],

[{
  "label": "合作市",
  "value": 3118 },
{
  "label": "临潭县",
  "value": 3119 },
{
  "label": "卓尼县",
  "value": 3120 },
{
  "label": "舟曲县",
  "value": 3121 },
{
  "label": "迭部县",
  "value": 3122 },
{
  "label": "玛曲县",
  "value": 3123 },
{
  "label": "碌曲县",
  "value": 3124 },
{
  "label": "夏河县",
  "value": 3125 }]],


[
[{
  "label": "城东区",
  "value": 3128 },
{
  "label": "城中区",
  "value": 3129 },
{
  "label": "城西区",
  "value": 3130 },
{
  "label": "城北区",
  "value": 3131 },
{
  "label": "大通回族土族自治县",
  "value": 3132 },
{
  "label": "湟中县",
  "value": 3133 },
{
  "label": "湟源县",
  "value": 3134 }],

[{
  "label": "乐都区",
  "value": 3136 },
{
  "label": "平安县",
  "value": 3137 },
{
  "label": "民和回族土族自治县",
  "value": 3138 },
{
  "label": "互助土族自治县",
  "value": 3139 },
{
  "label": "化隆回族自治县",
  "value": 3140 },
{
  "label": "循化撒拉族自治县",
  "value": 3141 }],

[{
  "label": "门源回族自治县",
  "value": 3143 },
{
  "label": "祁连县",
  "value": 3144 },
{
  "label": "海晏县",
  "value": 3145 },
{
  "label": "刚察县",
  "value": 3146 }],

[{
  "label": "同仁县",
  "value": 3148 },
{
  "label": "尖扎县",
  "value": 3149 },
{
  "label": "泽库县",
  "value": 3150 },
{
  "label": "河南蒙古族自治县",
  "value": 3151 }],

[{
  "label": "共和县",
  "value": 3153 },
{
  "label": "同德县",
  "value": 3154 },
{
  "label": "贵德县",
  "value": 3155 },
{
  "label": "兴海县",
  "value": 3156 },
{
  "label": "贵南县",
  "value": 3157 }],

[{
  "label": "玛沁县",
  "value": 3159 },
{
  "label": "班玛县",
  "value": 3160 },
{
  "label": "甘德县",
  "value": 3161 },
{
  "label": "达日县",
  "value": 3162 },
{
  "label": "久治县",
  "value": 3163 },
{
  "label": "玛多县",
  "value": 3164 }],

[{
  "label": "玉树市",
  "value": 3166 },
{
  "label": "杂多县",
  "value": 3167 },
{
  "label": "称多县",
  "value": 3168 },
{
  "label": "治多县",
  "value": 3169 },
{
  "label": "囊谦县",
  "value": 3170 },
{
  "label": "曲麻莱县",
  "value": 3171 }],

[{
  "label": "格尔木市",
  "value": 3173 },
{
  "label": "德令哈市",
  "value": 3174 },
{
  "label": "乌兰县",
  "value": 3175 },
{
  "label": "都兰县",
  "value": 3176 },
{
  "label": "天峻县",
  "value": 3177 }]],


[
[{
  "label": "兴庆区",
  "value": 3180 },
{
  "label": "西夏区",
  "value": 3181 },
{
  "label": "金凤区",
  "value": 3182 },
{
  "label": "永宁县",
  "value": 3183 },
{
  "label": "贺兰县",
  "value": 3184 },
{
  "label": "灵武市",
  "value": 3185 }],

[{
  "label": "大武口区",
  "value": 3187 },
{
  "label": "惠农区",
  "value": 3188 },
{
  "label": "平罗县",
  "value": 3189 }],

[{
  "label": "利通区",
  "value": 3191 },
{
  "label": "红寺堡区",
  "value": 3192 },
{
  "label": "盐池县",
  "value": 3193 },
{
  "label": "同心县",
  "value": 3194 },
{
  "label": "青铜峡市",
  "value": 3195 }],

[{
  "label": "原州区",
  "value": 3197 },
{
  "label": "西吉县",
  "value": 3198 },
{
  "label": "隆德县",
  "value": 3199 },
{
  "label": "泾源县",
  "value": 3200 },
{
  "label": "彭阳县",
  "value": 3201 }],

[{
  "label": "沙坡头区",
  "value": 3203 },
{
  "label": "中宁县",
  "value": 3204 },
{
  "label": "海原县",
  "value": 3205 }]],


[
[{
  "label": "天山区",
  "value": 3208 },
{
  "label": "沙依巴克区",
  "value": 3209 },
{
  "label": "新市区",
  "value": 3210 },
{
  "label": "水磨沟区",
  "value": 3211 },
{
  "label": "头屯河区",
  "value": 3212 },
{
  "label": "达坂城区",
  "value": 3213 },
{
  "label": "米东区",
  "value": 3214 },
{
  "label": "乌鲁木齐县",
  "value": 3215 }],

[{
  "label": "独山子区",
  "value": 3217 },
{
  "label": "克拉玛依区",
  "value": 3218 },
{
  "label": "白碱滩区",
  "value": 3219 },
{
  "label": "乌尔禾区",
  "value": 3220 }],

[{
  "label": "吐鲁番市",
  "value": 3222 },
{
  "label": "鄯善县",
  "value": 3223 },
{
  "label": "托克逊县",
  "value": 3224 }],

[{
  "label": "哈密市",
  "value": 3226 },
{
  "label": "巴里坤哈萨克自治县",
  "value": 3227 },
{
  "label": "伊吾县",
  "value": 3228 }],

[{
  "label": "昌吉市",
  "value": 3230 },
{
  "label": "阜康市",
  "value": 3231 },
{
  "label": "呼图壁县",
  "value": 3232 },
{
  "label": "玛纳斯县",
  "value": 3233 },
{
  "label": "奇台县",
  "value": 3234 },
{
  "label": "吉木萨尔县",
  "value": 3235 },
{
  "label": "木垒哈萨克自治县",
  "value": 3236 }],

[{
  "label": "博乐市",
  "value": 3238 },
{
  "label": "阿拉山口市",
  "value": 3239 },
{
  "label": "精河县",
  "value": 3240 },
{
  "label": "温泉县",
  "value": 3241 }],

[{
  "label": "库尔勒市",
  "value": 3243 },
{
  "label": "轮台县",
  "value": 3244 },
{
  "label": "尉犁县",
  "value": 3245 },
{
  "label": "若羌县",
  "value": 3246 },
{
  "label": "且末县",
  "value": 3247 },
{
  "label": "焉耆回族自治县",
  "value": 3248 },
{
  "label": "和静县",
  "value": 3249 },
{
  "label": "和硕县",
  "value": 3250 },
{
  "label": "博湖县",
  "value": 3251 }],

[{
  "label": "阿克苏市",
  "value": 3253 },
{
  "label": "温宿县",
  "value": 3254 },
{
  "label": "库车县",
  "value": 3255 },
{
  "label": "沙雅县",
  "value": 3256 },
{
  "label": "新和县",
  "value": 3257 },
{
  "label": "拜城县",
  "value": 3258 },
{
  "label": "乌什县",
  "value": 3259 },
{
  "label": "阿瓦提县",
  "value": 3260 },
{
  "label": "柯坪县",
  "value": 3261 }],

[{
  "label": "阿图什市",
  "value": 3263 },
{
  "label": "阿克陶县",
  "value": 3264 },
{
  "label": "阿合奇县",
  "value": 3265 },
{
  "label": "乌恰县",
  "value": 3266 }],

[{
  "label": "喀什市",
  "value": 3268 },
{
  "label": "疏附县",
  "value": 3269 },
{
  "label": "疏勒县",
  "value": 3270 },
{
  "label": "英吉沙县",
  "value": 3271 },
{
  "label": "泽普县",
  "value": 3272 },
{
  "label": "莎车县",
  "value": 3273 },
{
  "label": "叶城县",
  "value": 3274 },
{
  "label": "麦盖提县",
  "value": 3275 },
{
  "label": "岳普湖县",
  "value": 3276 },
{
  "label": "伽师县",
  "value": 3277 },
{
  "label": "巴楚县",
  "value": 3278 },
{
  "label": "塔什库尔干塔吉克自治县",
  "value": 3279 }],

[{
  "label": "和田市",
  "value": 3281 },
{
  "label": "和田县",
  "value": 3282 },
{
  "label": "墨玉县",
  "value": 3283 },
{
  "label": "皮山县",
  "value": 3284 },
{
  "label": "洛浦县",
  "value": 3285 },
{
  "label": "策勒县",
  "value": 3286 },
{
  "label": "于田县",
  "value": 3287 },
{
  "label": "民丰县",
  "value": 3288 }],

[{
  "label": "伊宁市",
  "value": 3290 },
{
  "label": "奎屯市",
  "value": 3291 },
{
  "label": "霍尔果斯市",
  "value": 3292 },
{
  "label": "伊宁县",
  "value": 3293 },
{
  "label": "察布查尔锡伯自治县",
  "value": 3294 },
{
  "label": "霍城县",
  "value": 3295 },
{
  "label": "巩留县",
  "value": 3296 },
{
  "label": "新源县",
  "value": 3297 },
{
  "label": "昭苏县",
  "value": 3298 },
{
  "label": "特克斯县",
  "value": 3299 },
{
  "label": "尼勒克县",
  "value": 3300 }],

[{
  "label": "塔城市",
  "value": 3302 },
{
  "label": "乌苏市",
  "value": 3303 },
{
  "label": "额敏县",
  "value": 3304 },
{
  "label": "沙湾县",
  "value": 3305 },
{
  "label": "托里县",
  "value": 3306 },
{
  "label": "裕民县",
  "value": 3307 },
{
  "label": "和布克赛尔蒙古自治县",
  "value": 3308 }],

[{
  "label": "阿勒泰市",
  "value": 3310 },
{
  "label": "布尔津县",
  "value": 3311 },
{
  "label": "富蕴县",
  "value": 3312 },
{
  "label": "福海县",
  "value": 3313 },
{
  "label": "哈巴河县",
  "value": 3314 },
{
  "label": "青河县",
  "value": 3315 },
{
  "label": "吉木乃县",
  "value": 3316 }],

[{
  "label": "石河子市",
  "value": 3318 },
{
  "label": "阿拉尔市",
  "value": 3319 },
{
  "label": "图木舒克市",
  "value": 3320 },
{
  "label": "五家渠市",
  "value": 3321 },
{
  "label": "北屯市",
  "value": 3322 },
{
  "label": "铁门关市",
  "value": 3323 },
{
  "label": "双河市",
  "value": 3324 }]],


[
[{
  "label": "松山区",
  "value": 3327 },
{
  "label": "信义区",
  "value": 3328 },
{
  "label": "大安区",
  "value": 3329 },
{
  "label": "中山区",
  "value": 3330 },
{
  "label": "中正区",
  "value": 3331 },
{
  "label": "大同区",
  "value": 3332 },
{
  "label": "万华区",
  "value": 3333 },
{
  "label": "文山区",
  "value": 3334 },
{
  "label": "南港区",
  "value": 3335 },
{
  "label": "内湖区",
  "value": 3336 },
{
  "label": "士林区",
  "value": 3337 },
{
  "label": "北投区",
  "value": 3338 }],

[{
  "label": "盐埕区",
  "value": 3340 },
{
  "label": "鼓山区",
  "value": 3341 },
{
  "label": "左营区",
  "value": 3342 },
{
  "label": "楠梓区",
  "value": 3343 },
{
  "label": "三民区",
  "value": 3344 },
{
  "label": "新兴区",
  "value": 3345 },
{
  "label": "前金区",
  "value": 3346 },
{
  "label": "苓雅区",
  "value": 3347 },
{
  "label": "前镇区",
  "value": 3348 },
{
  "label": "旗津区",
  "value": 3349 },
{
  "label": "小港区",
  "value": 3350 },
{
  "label": "凤山区",
  "value": 3351 },
{
  "label": "林园区",
  "value": 3352 },
{
  "label": "大寮区",
  "value": 3353 },
{
  "label": "大树区",
  "value": 3354 },
{
  "label": "大社区",
  "value": 3355 },
{
  "label": "仁武区",
  "value": 3356 },
{
  "label": "鸟松区",
  "value": 3357 },
{
  "label": "冈山区",
  "value": 3358 },
{
  "label": "桥头区",
  "value": 3359 },
{
  "label": "燕巢区",
  "value": 3360 },
{
  "label": "田寮区",
  "value": 3361 },
{
  "label": "阿莲区",
  "value": 3362 },
{
  "label": "路竹区",
  "value": 3363 },
{
  "label": "湖内区",
  "value": 3364 },
{
  "label": "茄萣区",
  "value": 3365 },
{
  "label": "永安区",
  "value": 3366 },
{
  "label": "弥陀区",
  "value": 3367 },
{
  "label": "梓官区",
  "value": 3368 },
{
  "label": "旗山区",
  "value": 3369 },
{
  "label": "美浓区",
  "value": 3370 },
{
  "label": "六龟区",
  "value": 3371 },
{
  "label": "甲仙区",
  "value": 3372 },
{
  "label": "杉林区",
  "value": 3373 },
{
  "label": "内门区",
  "value": 3374 },
{
  "label": "茂林区",
  "value": 3375 },
{
  "label": "桃源区",
  "value": 3376 },
{
  "label": "那玛夏区",
  "value": 3377 }],

[{
  "label": "中正区",
  "value": 3379 },
{
  "label": "七堵区",
  "value": 3380 },
{
  "label": "暖暖区",
  "value": 3381 },
{
  "label": "仁爱区",
  "value": 3382 },
{
  "label": "中山区",
  "value": 3383 },
{
  "label": "安乐区",
  "value": 3384 },
{
  "label": "信义区",
  "value": 3385 }],

[{
  "label": "中区",
  "value": 3387 },
{
  "label": "东区",
  "value": 3388 },
{
  "label": "南区",
  "value": 3389 },
{
  "label": "西区",
  "value": 3390 },
{
  "label": "北区",
  "value": 3391 },
{
  "label": "西屯区",
  "value": 3392 },
{
  "label": "南屯区",
  "value": 3393 },
{
  "label": "北屯区",
  "value": 3394 },
{
  "label": "丰原区",
  "value": 3395 },
{
  "label": "东势区",
  "value": 3396 },
{
  "label": "大甲区",
  "value": 3397 },
{
  "label": "清水区",
  "value": 3398 },
{
  "label": "沙鹿区",
  "value": 3399 },
{
  "label": "梧栖区",
  "value": 3400 },
{
  "label": "后里区",
  "value": 3401 },
{
  "label": "神冈区",
  "value": 3402 },
{
  "label": "潭子区",
  "value": 3403 },
{
  "label": "大雅区",
  "value": 3404 },
{
  "label": "新社区",
  "value": 3405 },
{
  "label": "石冈区",
  "value": 3406 },
{
  "label": "外埔区",
  "value": 3407 },
{
  "label": "大安区",
  "value": 3408 },
{
  "label": "乌日区",
  "value": 3409 },
{
  "label": "大肚区",
  "value": 3410 },
{
  "label": "龙井区",
  "value": 3411 },
{
  "label": "雾峰区",
  "value": 3412 },
{
  "label": "太平区",
  "value": 3413 },
{
  "label": "大里区",
  "value": 3414 },
{
  "label": "和平区",
  "value": 3415 }],

[{
  "label": "东区",
  "value": 3417 },
{
  "label": "南区",
  "value": 3418 },
{
  "label": "北区",
  "value": 3419 },
{
  "label": "安南区",
  "value": 3420 },
{
  "label": "安平区",
  "value": 3421 },
{
  "label": "中西区",
  "value": 3422 },
{
  "label": "新营区",
  "value": 3423 },
{
  "label": "盐水区",
  "value": 3424 },
{
  "label": "白河区",
  "value": 3425 },
{
  "label": "柳营区",
  "value": 3426 },
{
  "label": "后壁区",
  "value": 3427 },
{
  "label": "东山区",
  "value": 3428 },
{
  "label": "麻豆区",
  "value": 3429 },
{
  "label": "下营区",
  "value": 3430 },
{
  "label": "六甲区",
  "value": 3431 },
{
  "label": "官田区",
  "value": 3432 },
{
  "label": "大内区",
  "value": 3433 },
{
  "label": "佳里区",
  "value": 3434 },
{
  "label": "学甲区",
  "value": 3435 },
{
  "label": "西港区",
  "value": 3436 },
{
  "label": "七股区",
  "value": 3437 },
{
  "label": "将军区",
  "value": 3438 },
{
  "label": "北门区",
  "value": 3439 },
{
  "label": "新化区",
  "value": 3440 },
{
  "label": "善化区",
  "value": 3441 },
{
  "label": "新市区",
  "value": 3442 },
{
  "label": "安定区",
  "value": 3443 },
{
  "label": "山上区",
  "value": 3444 },
{
  "label": "玉井区",
  "value": 3445 },
{
  "label": "楠西区",
  "value": 3446 },
{
  "label": "南化区",
  "value": 3447 },
{
  "label": "左镇区",
  "value": 3448 },
{
  "label": "仁德区",
  "value": 3449 },
{
  "label": "归仁区",
  "value": 3450 },
{
  "label": "关庙区",
  "value": 3451 },
{
  "label": "龙崎区",
  "value": 3452 },
{
  "label": "永康区",
  "value": 3453 }],

[{
  "label": "东区",
  "value": 3455 },
{
  "label": "北区",
  "value": 3456 },
{
  "label": "香山区",
  "value": 3457 }],

[{
  "label": "东区",
  "value": 3459 },
{
  "label": "西区",
  "value": 3460 }],

[{
  "label": "板桥区",
  "value": 3462 },
{
  "label": "三重区",
  "value": 3463 },
{
  "label": "中和区",
  "value": 3464 },
{
  "label": "永和区",
  "value": 3465 },
{
  "label": "新庄区",
  "value": 3466 },
{
  "label": "新店区",
  "value": 3467 },
{
  "label": "树林区",
  "value": 3468 },
{
  "label": "莺歌区",
  "value": 3469 },
{
  "label": "三峡区",
  "value": 3470 },
{
  "label": "淡水区",
  "value": 3471 },
{
  "label": "汐止区",
  "value": 3472 },
{
  "label": "瑞芳区",
  "value": 3473 },
{
  "label": "土城区",
  "value": 3474 },
{
  "label": "芦洲区",
  "value": 3475 },
{
  "label": "五股区",
  "value": 3476 },
{
  "label": "泰山区",
  "value": 3477 },
{
  "label": "林口区",
  "value": 3478 },
{
  "label": "深坑区",
  "value": 3479 },
{
  "label": "石碇区",
  "value": 3480 },
{
  "label": "坪林区",
  "value": 3481 },
{
  "label": "三芝区",
  "value": 3482 },
{
  "label": "石门区",
  "value": 3483 },
{
  "label": "八里区",
  "value": 3484 },
{
  "label": "平溪区",
  "value": 3485 },
{
  "label": "双溪区",
  "value": 3486 },
{
  "label": "贡寮区",
  "value": 3487 },
{
  "label": "金山区",
  "value": 3488 },
{
  "label": "万里区",
  "value": 3489 },
{
  "label": "乌来区",
  "value": 3490 }],

[{
  "label": "宜兰市",
  "value": 3492 },
{
  "label": "罗东镇",
  "value": 3493 },
{
  "label": "苏澳镇",
  "value": 3494 },
{
  "label": "头城镇",
  "value": 3495 },
{
  "label": "礁溪乡",
  "value": 3496 },
{
  "label": "壮围乡",
  "value": 3497 },
{
  "label": "员山乡",
  "value": 3498 },
{
  "label": "冬山乡",
  "value": 3499 },
{
  "label": "五结乡",
  "value": 3500 },
{
  "label": "三星乡",
  "value": 3501 },
{
  "label": "大同乡",
  "value": 3502 },
{
  "label": "南澳乡",
  "value": 3503 }],

[{
  "label": "桃园市",
  "value": 3505 },
{
  "label": "中坜市",
  "value": 3506 },
{
  "label": "平镇市",
  "value": 3507 },
{
  "label": "八德市",
  "value": 3508 },
{
  "label": "杨梅市",
  "value": 3509 },
{
  "label": "芦竹市",
  "value": 3510 },
{
  "label": "大溪镇",
  "value": 3511 },
{
  "label": "大园乡",
  "value": 3512 },
{
  "label": "龟山乡",
  "value": 3513 },
{
  "label": "龙潭乡",
  "value": 3514 },
{
  "label": "新屋乡",
  "value": 3515 },
{
  "label": "观音乡",
  "value": 3516 },
{
  "label": "复兴乡",
  "value": 3517 }],

[{
  "label": "竹北市",
  "value": 3519 },
{
  "label": "竹东镇",
  "value": 3520 },
{
  "label": "新埔镇",
  "value": 3521 },
{
  "label": "关西镇",
  "value": 3522 },
{
  "label": "湖口乡",
  "value": 3523 },
{
  "label": "新丰乡",
  "value": 3524 },
{
  "label": "芎林乡",
  "value": 3525 },
{
  "label": "横山乡",
  "value": 3526 },
{
  "label": "北埔乡",
  "value": 3527 },
{
  "label": "宝山乡",
  "value": 3528 },
{
  "label": "峨眉乡",
  "value": 3529 },
{
  "label": "尖石乡",
  "value": 3530 },
{
  "label": "五峰乡",
  "value": 3531 }],

[{
  "label": "苗栗市",
  "value": 3533 },
{
  "label": "苑里镇",
  "value": 3534 },
{
  "label": "通霄镇",
  "value": 3535 },
{
  "label": "竹南镇",
  "value": 3536 },
{
  "label": "头份镇",
  "value": 3537 },
{
  "label": "后龙镇",
  "value": 3538 },
{
  "label": "卓兰镇",
  "value": 3539 },
{
  "label": "大湖乡",
  "value": 3540 },
{
  "label": "公馆乡",
  "value": 3541 },
{
  "label": "铜锣乡",
  "value": 3542 },
{
  "label": "南庄乡",
  "value": 3543 },
{
  "label": "头屋乡",
  "value": 3544 },
{
  "label": "三义乡",
  "value": 3545 },
{
  "label": "西湖乡",
  "value": 3546 },
{
  "label": "造桥乡",
  "value": 3547 },
{
  "label": "三湾乡",
  "value": 3548 },
{
  "label": "狮潭乡",
  "value": 3549 },
{
  "label": "泰安乡",
  "value": 3550 }],

[{
  "label": "彰化市",
  "value": 3552 },
{
  "label": "鹿港镇",
  "value": 3553 },
{
  "label": "和美镇",
  "value": 3554 },
{
  "label": "线西乡",
  "value": 3555 },
{
  "label": "伸港乡",
  "value": 3556 },
{
  "label": "福兴乡",
  "value": 3557 },
{
  "label": "秀水乡",
  "value": 3558 },
{
  "label": "花坛乡",
  "value": 3559 },
{
  "label": "芬园乡",
  "value": 3560 },
{
  "label": "员林镇",
  "value": 3561 },
{
  "label": "溪湖镇",
  "value": 3562 },
{
  "label": "田中镇",
  "value": 3563 },
{
  "label": "大村乡",
  "value": 3564 },
{
  "label": "埔盐乡",
  "value": 3565 },
{
  "label": "埔心乡",
  "value": 3566 },
{
  "label": "永靖乡",
  "value": 3567 },
{
  "label": "社头乡",
  "value": 3568 },
{
  "label": "二水乡",
  "value": 3569 },
{
  "label": "北斗镇",
  "value": 3570 },
{
  "label": "二林镇",
  "value": 3571 },
{
  "label": "田尾乡",
  "value": 3572 },
{
  "label": "埤头乡",
  "value": 3573 },
{
  "label": "芳苑乡",
  "value": 3574 },
{
  "label": "大城乡",
  "value": 3575 },
{
  "label": "竹塘乡",
  "value": 3576 },
{
  "label": "溪州乡",
  "value": 3577 }],

[{
  "label": "南投市",
  "value": 3579 },
{
  "label": "埔里镇",
  "value": 3580 },
{
  "label": "草屯镇",
  "value": 3581 },
{
  "label": "竹山镇",
  "value": 3582 },
{
  "label": "集集镇",
  "value": 3583 },
{
  "label": "名间乡",
  "value": 3584 },
{
  "label": "鹿谷乡",
  "value": 3585 },
{
  "label": "中寮乡",
  "value": 3586 },
{
  "label": "鱼池乡",
  "value": 3587 },
{
  "label": "国姓乡",
  "value": 3588 },
{
  "label": "水里乡",
  "value": 3589 },
{
  "label": "信义乡",
  "value": 3590 },
{
  "label": "仁爱乡",
  "value": 3591 }],

[{
  "label": "斗六市",
  "value": 3593 },
{
  "label": "斗南镇",
  "value": 3594 },
{
  "label": "虎尾镇",
  "value": 3595 },
{
  "label": "西螺镇",
  "value": 3596 },
{
  "label": "土库镇",
  "value": 3597 },
{
  "label": "北港镇",
  "value": 3598 },
{
  "label": "古坑乡",
  "value": 3599 },
{
  "label": "大埤乡",
  "value": 3600 },
{
  "label": "莿桐乡",
  "value": 3601 },
{
  "label": "林内乡",
  "value": 3602 },
{
  "label": "二仑乡",
  "value": 3603 },
{
  "label": "仑背乡",
  "value": 3604 },
{
  "label": "麦寮乡",
  "value": 3605 },
{
  "label": "东势乡",
  "value": 3606 },
{
  "label": "褒忠乡",
  "value": 3607 },
{
  "label": "台西乡",
  "value": 3608 },
{
  "label": "元长乡",
  "value": 3609 },
{
  "label": "四湖乡",
  "value": 3610 },
{
  "label": "口湖乡",
  "value": 3611 },
{
  "label": "水林乡",
  "value": 3612 }],

[{
  "label": "太保市",
  "value": 3614 },
{
  "label": "朴子市",
  "value": 3615 },
{
  "label": "布袋镇",
  "value": 3616 },
{
  "label": "大林镇",
  "value": 3617 },
{
  "label": "民雄乡",
  "value": 3618 },
{
  "label": "溪口乡",
  "value": 3619 },
{
  "label": "新港乡",
  "value": 3620 },
{
  "label": "六脚乡",
  "value": 3621 },
{
  "label": "东石乡",
  "value": 3622 },
{
  "label": "义竹乡",
  "value": 3623 },
{
  "label": "鹿草乡",
  "value": 3624 },
{
  "label": "水上乡",
  "value": 3625 },
{
  "label": "中埔乡",
  "value": 3626 },
{
  "label": "竹崎乡",
  "value": 3627 },
{
  "label": "梅山乡",
  "value": 3628 },
{
  "label": "番路乡",
  "value": 3629 },
{
  "label": "大埔乡",
  "value": 3630 },
{
  "label": "阿里山乡",
  "value": 3631 }],

[{
  "label": "屏东市",
  "value": 3633 },
{
  "label": "潮州镇",
  "value": 3634 },
{
  "label": "东港镇",
  "value": 3635 },
{
  "label": "恒春镇",
  "value": 3636 },
{
  "label": "万丹乡",
  "value": 3637 },
{
  "label": "长治乡",
  "value": 3638 },
{
  "label": "麟洛乡",
  "value": 3639 },
{
  "label": "九如乡",
  "value": 3640 },
{
  "label": "里港乡",
  "value": 3641 },
{
  "label": "盐埔乡",
  "value": 3642 },
{
  "label": "高树乡",
  "value": 3643 },
{
  "label": "万峦乡",
  "value": 3644 },
{
  "label": "内埔乡",
  "value": 3645 },
{
  "label": "竹田乡",
  "value": 3646 },
{
  "label": "新埤乡",
  "value": 3647 },
{
  "label": "枋寮乡",
  "value": 3648 },
{
  "label": "新园乡",
  "value": 3649 },
{
  "label": "崁顶乡",
  "value": 3650 },
{
  "label": "林边乡",
  "value": 3651 },
{
  "label": "南州乡",
  "value": 3652 },
{
  "label": "佳冬乡",
  "value": 3653 },
{
  "label": "琉球乡",
  "value": 3654 },
{
  "label": "车城乡",
  "value": 3655 },
{
  "label": "满州乡",
  "value": 3656 },
{
  "label": "枋山乡",
  "value": 3657 },
{
  "label": "三地门乡",
  "value": 3658 },
{
  "label": "雾台乡",
  "value": 3659 },
{
  "label": "玛家乡",
  "value": 3660 },
{
  "label": "泰武乡",
  "value": 3661 },
{
  "label": "来义乡",
  "value": 3662 },
{
  "label": "春日乡",
  "value": 3663 },
{
  "label": "狮子乡",
  "value": 3664 },
{
  "label": "牡丹乡",
  "value": 3665 }],

[{
  "label": "台东市",
  "value": 3667 },
{
  "label": "成功镇",
  "value": 3668 },
{
  "label": "关山镇",
  "value": 3669 },
{
  "label": "卑南乡",
  "value": 3670 },
{
  "label": "鹿野乡",
  "value": 3671 },
{
  "label": "池上乡",
  "value": 3672 },
{
  "label": "东河乡",
  "value": 3673 },
{
  "label": "长滨乡",
  "value": 3674 },
{
  "label": "太麻里乡",
  "value": 3675 },
{
  "label": "大武乡",
  "value": 3676 },
{
  "label": "绿岛乡",
  "value": 3677 },
{
  "label": "海端乡",
  "value": 3678 },
{
  "label": "延平乡",
  "value": 3679 },
{
  "label": "金峰乡",
  "value": 3680 },
{
  "label": "达仁乡",
  "value": 3681 },
{
  "label": "兰屿乡",
  "value": 3682 }],

[{
  "label": "花莲市",
  "value": 3684 },
{
  "label": "凤林镇",
  "value": 3685 },
{
  "label": "玉里镇",
  "value": 3686 },
{
  "label": "新城乡",
  "value": 3687 },
{
  "label": "吉安乡",
  "value": 3688 },
{
  "label": "寿丰乡",
  "value": 3689 },
{
  "label": "光复乡",
  "value": 3690 },
{
  "label": "丰滨乡",
  "value": 3691 },
{
  "label": "瑞穗乡",
  "value": 3692 },
{
  "label": "富里乡",
  "value": 3693 },
{
  "label": "秀林乡",
  "value": 3694 },
{
  "label": "万荣乡",
  "value": 3695 },
{
  "label": "卓溪乡",
  "value": 3696 }],

[{
  "label": "马公市",
  "value": 3698 },
{
  "label": "湖西乡",
  "value": 3699 },
{
  "label": "白沙乡",
  "value": 3700 },
{
  "label": "西屿乡",
  "value": 3701 },
{
  "label": "望安乡",
  "value": 3702 },
{
  "label": "七美乡",
  "value": 3703 }],

[{
  "label": "金城镇",
  "value": 3705 },
{
  "label": "金湖镇",
  "value": 3706 },
{
  "label": "金沙镇",
  "value": 3707 },
{
  "label": "金宁乡",
  "value": 3708 },
{
  "label": "烈屿乡",
  "value": 3709 },
{
  "label": "乌丘乡",
  "value": 3710 }],

[{
  "label": "南竿乡",
  "value": 3712 },
{
  "label": "北竿乡",
  "value": 3713 },
{
  "label": "莒光乡",
  "value": 3714 },
{
  "label": "东引乡",
  "value": 3715 }]],


[
[{
  "label": "中西区",
  "value": 3718 },
{
  "label": "湾仔区",
  "value": 3719 },
{
  "label": "东区",
  "value": 3720 },
{
  "label": "南区",
  "value": 3721 }],

[{
  "label": "油尖旺区",
  "value": 3723 },
{
  "label": "深水埗区",
  "value": 3724 },
{
  "label": "九龙城区",
  "value": 3725 },
{
  "label": "黄大仙区",
  "value": 3726 },
{
  "label": "观塘区",
  "value": 3727 }],

[{
  "label": "荃湾区",
  "value": 3729 },
{
  "label": "屯门区",
  "value": 3730 },
{
  "label": "元朗区",
  "value": 3731 },
{
  "label": "北区",
  "value": 3732 },
{
  "label": "大埔区",
  "value": 3733 },
{
  "label": "西贡区",
  "value": 3734 },
{
  "label": "沙田区",
  "value": 3735 },
{
  "label": "葵青区",
  "value": 3736 },
{
  "label": "离岛区",
  "value": 3737 }]],


[
[{
  "label": "花地玛堂区",
  "value": 3740 },
{
  "label": "圣安多尼堂区",
  "value": 3741 },
{
  "label": "大堂区",
  "value": 3742 },
{
  "label": "望德堂区",
  "value": 3743 },
{
  "label": "风顺堂区",
  "value": 3744 }],

[{
  "label": "嘉模堂区",
  "value": 3746 }],

[{
  "label": "圣方济各堂区",
  "value": 3748 }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_NAME":"点餐系统","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"点餐系统","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_NAME":"点餐系统","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_NAME":"点餐系统","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 4:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 64:
/*!*****************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/pay.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.pay = void 0; /*
                                                                                                  * 支付
                                                                                                  */
var pay = function pay(result, self, _success, _fail) {
  if (result.code === -10) {
    self.showError(result.msg);
    return false;
  }

  // 发起微信支付
  if (result.data.pay_type == 20) {
    //小程序支付

    uni.requestPayment({
      provider: 'wxpay',
      timeStamp: result.data.payment.timeStamp,
      nonceStr: result.data.payment.nonceStr,
      package: 'prepay_id=' + result.data.payment.prepay_id,
      signType: 'MD5',
      paySign: result.data.payment.paySign,
      success: function success(res) {
        paySuccess(result, self, _success);
      },
      fail: function fail(res) {
        self.showError('订单未支付成功', function () {
          payError(result, _fail);
        });
      } });


    //公众号支付






























  }
  // 余额支付
  if (result.data.pay_type == 10) {
    paySuccess(result, self, _success);
  }
  // 支付宝支付
  if (result.data.pay_type == 30) {








  }
};

/*跳到支付成功页*/exports.pay = pay;
function paySuccess(result, self, success) {
  if (success) {
    success(result);
    return;
  }
  gotoSuccess(result);
}
/*跳到支付成功页*/
function gotoSuccess(result) {
  uni.reLaunch({
    url: '/pages/order/pay-success/pay-success?order_id=' + result.data.order_id });

}

/*支付失败跳订单详情*/
function payError(result, fail) {
  if (fail) {
    fail(result);
    return;
  }
  uni.redirectTo({
    url: '/pages/order/order-detail?order_id=' + result.data.order_id });

}

function wxAppPay(result, self, _success2, _fail2) {
  // 获取支付通道  
  plus.payment.getChannels(function (channels) {
    self.channel = channels[0];
    console.log(self.channel);
    uni.requestPayment({
      provider: 'wxpay',
      orderInfo: result.data.payment,
      success: function success(res) {
        paySuccess(result, self, _success2);
      },
      fail: function fail(error) {
        console.log(error);
        self.showError('订单未支付成功', function () {
          payError(result, _fail2);
        });
      } });

  }, function (e) {
    console.log("获取支付通道失败：" + e.message);
  });
}

function aliAppPay(result, self, _success3, _fail3) {
  console.log(result.data.payment);
  uni.requestPayment({
    provider: 'alipay',
    orderInfo: result.data.payment,
    success: function success(res) {
      paySuccess(result, self, _success3);
    },
    fail: function fail(error) {
      console.log(error);
      self.showError('订单未支付成功', function () {
        payError(result, _fail3);
      });
    } });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 9:
/*!*******************************************************************!*\
  !*** E:/code/jjj-code/jjjfood/jjj_food_chain_app/common/utils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 工具类
                                                                                                      */
var utils = {
  /**
               * scene解码
               */
  scene_decode: function scene_decode(e) {
    if (e === undefined)
    return {};
    var scene = decodeURIComponent(e),
    params = scene.split(','),
    data = {};
    for (var i in params) {
      var val = params[i].split(':');
      val.length > 0 && val[0] && (data[val[0]] = val[1] || null);
    }
    return data;
  },

  /**
      * 格式化日期格式 (用于兼容ios Date对象)
      */
  format_date: function format_date(time) {
    // 将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
    return time.replace(/\-/g, "/");
  },

  /**
      * 格式化详情内容,去除图片之间的间隙，图片宽度最大100%
      */
  format_content: function format_content(str) {
    return str.replace(/\<img/gi, '<img style="display:block; margin:0 auto; max-width:100%;" ');
  },

  /**
      * 对象转URL
      */
  urlEncode: function urlEncode(data) {
    var _result = [];
    for (var key in data) {
      var value = data[key];
      if (value.constructor == Array) {
        value.forEach(function (_value) {
          _result.push(key + "=" + _value);
        });
      } else {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
  },

  /**
      * 遍历对象
      */
  objForEach: function objForEach(obj, callback) {
    Object.keys(obj).forEach(function (key) {
      callback(obj[key], key);
    });
  },

  /**
      * 是否在数组内
      */
  inArray: function inArray(search, array) {
    for (var i in array) {
      if (array[i] == search) {
        return true;
      }
    }
    return false;
  },

  /**
      * 判断是否为正整数
      */
  isPositiveInteger: function isPositiveInteger(value) {
    return /(^[0-9]\d*$)/.test(value);
  },

  /**
      * 获取场景值(scene)
      */
  getSceneData: function getSceneData(query) {
    return query.scene ? this.scene_decode(query.scene) : {};
  },
  /* 获取中间菜单 */
  getMebutype: function getMebutype() {

  } };var _default =

utils;exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map