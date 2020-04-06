define(["@grafana/data","@grafana/ui","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./panels/PredictionPanel/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./panels/PredictionPanel/editorView.tsx":
/*!***********************************************!*\
  !*** ./panels/PredictionPanel/editorView.tsx ***!
  \***********************************************/
/*! exports provided: EditorView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorView", function() { return EditorView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");






var EditorView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EditorView, _super);

  function EditorView() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  EditorView.prototype.render = function () {
    var Config = _strategies_strategies__WEBPACK_IMPORTED_MODULE_3__["configs"][this.props.options.predictor.algorithm];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGrid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Config, {
      data: this.props.data,
      options: this.props.options
    })));
  };

  return EditorView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/model.ts":
/*!*****************************************!*\
  !*** ./panels/PredictionPanel/model.ts ***!
  \*****************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _strategies_strategies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategies/strategies */ "./panels/PredictionPanel/strategies/strategies.ts");



var Model =
/** @class */
function () {
  function Model() {}

  Model.prototype.setData = function (data) {
    this.data = data;
  };

  Model.prototype.setPredictor = function (predictor) {
    this.predictor = predictor;

    try {
      this.strategy = _strategies_strategies__WEBPACK_IMPORTED_MODULE_1__["strategies"][predictor.algorithm];
    } catch (e) {
      throw new Error('Wrong algorithm');
    }
  };

  Model.prototype.setOpt = function (opt) {
    this.opt = opt;
  };

  Model.prototype.predict = function () {
    var _a;

    if (!this.data || !this.predictor) {
      throw new Error('predictor not found');
    }

    this.data.predicted = (_a = this.strategy) === null || _a === void 0 ? void 0 : _a.predict(this.data, this.predictor, this.opt);

    if (this.data.predicted) {
      return this.data.predicted[this.data.predicted.length - 1][1];
    } else {
      return;
    }
  };

  Model.prototype.saveToInflux = function () {
    var _a;

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        if (!((_a = this.data) === null || _a === void 0 ? void 0 : _a.predicted)) {
          throw new Error('data.predicted not found');
        }

        this.data.predicted.forEach(function (meas) {
          $.post({
            url: 'http://localhost:8086/write?db=telegraf',
            data: 'prediction value=' + meas[1] + ' ' + meas[0] + '000000'
          });
        });
        return [2
        /*return*/
        ];
      });
    });
  };

  return Model;
}();



/***/ }),

/***/ "./panels/PredictionPanel/module.ts":
/*!******************************************!*\
  !*** ./panels/PredictionPanel/module.ts ***!
  \******************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panelController */ "./panels/PredictionPanel/panelController.tsx");
/* harmony import */ var _editorView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editorView */ "./panels/PredictionPanel/editorView.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_panelController__WEBPACK_IMPORTED_MODULE_1__["PanelController"]).setDefaults({
  predictor: {
    algorithm: '',
    coefficients: []
  }
}).setEditor(_editorView__WEBPACK_IMPORTED_MODULE_2__["EditorView"]);

/***/ }),

/***/ "./panels/PredictionPanel/panelController.tsx":
/*!****************************************************!*\
  !*** ./panels/PredictionPanel/panelController.tsx ***!
  \****************************************************/
/*! exports provided: PanelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelController", function() { return PanelController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_dataTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/dataTypes */ "./utils/dataTypes.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./panels/PredictionPanel/model.ts");
/* harmony import */ var _panelView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panelView */ "./panels/PredictionPanel/panelView.tsx");






var PanelController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelController, _super);

  function PanelController(props) {
    var _this = _super.call(this, props) || this;

    _this.paused = false;
    _this.model = new _model__WEBPACK_IMPORTED_MODULE_3__["Model"]();
    return _this;
  }

  PanelController.prototype.setData = function () {
    this.model.setData(utils_dataTypes__WEBPACK_IMPORTED_MODULE_2__["Data"].fromSeries(this.props.data.series));
  };

  PanelController.prototype.setPredictor = function () {
    //TODO: controlli e eccezioni
    this.model.setPredictor(this.props.options.predictor || 0);
  };

  PanelController.prototype.setOpt = function () {
    //TODO: controlli e eccezioni
    this.model.setOpt(this.props.options.predictor.opt);
  };

  PanelController.prototype.predict = function () {
    //TODO: controlli e eccezioni
    this.lastValue = this.model.predict();
  };

  PanelController.prototype.saveToInflux = function () {
    //TODO: controlli e eccezioni
    this.model.saveToInflux();
  };

  PanelController.prototype.pause = function () {
    this.paused = true;
  };

  PanelController.prototype.start = function () {
    this.paused = false;
  };

  PanelController.prototype.updatePrediction = function () {
    if (!this.paused) {
      this.setData();
      this.setPredictor();
      this.setOpt();
      this.predict();
      this.saveToInflux();
    }
  };

  PanelController.prototype.render = function () {
    var _this = this;

    this.updatePrediction();
    var predictor = this.props.options.predictor;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_panelView__WEBPACK_IMPORTED_MODULE_4__["PanelView"], {
      algorithm: predictor.algorithm,
      coefficients: predictor.coefficients,
      opt: predictor.opt,
      lastValue: this.lastValue,
      pause: function pause() {
        return _this.pause();
      },
      start: function start() {
        return _this.start();
      }
    });
  };

  return PanelController;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/panelView.tsx":
/*!**********************************************!*\
  !*** ./panels/PredictionPanel/panelView.tsx ***!
  \**********************************************/
/*! exports provided: PanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelView", function() { return PanelView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PanelView =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelView, _super);

  function PanelView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.pause = function () {
      _this.props.pause();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = true;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = false;
      }
    };

    _this.start = function () {
      _this.props.start();

      if (_this.btn_stop) {
        _this.btn_stop.hidden = false;
      }

      if (_this.btn_start) {
        _this.btn_start.hidden = true;
      }
    };

    return _this;
  }

  PanelView.prototype.componentDidMount = function () {
    this.btn_stop = document.getElementById('btn_stop');
    this.btn_start = document.getElementById('btn_start');
  };

  PanelView.prototype.render = function () {
    var _a = this.props,
        algorithm = _a.algorithm,
        coefficients = _a.coefficients,
        opt = _a.opt,
        lastValue = _a.lastValue;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("pre", null, "Log ", '\n', "- Algorithm: ", algorithm + '\n', "- Coefficients: ", coefficients + '\n', opt != null ? '- Options: ' + JSON.stringify(opt) + '\n' : ''), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, lastValue), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_stop",
      className: "btn btn-danger",
      onClick: this.pause
    }, 'Stop'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      id: "btn_start",
      className: "btn btn-success",
      onClick: this.start,
      hidden: true
    }, 'Strat')));
  };

  return PanelView;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/RL/configRL.tsx":
/*!***********************************************************!*\
  !*** ./panels/PredictionPanel/strategies/RL/configRL.tsx ***!
  \***********************************************************/
/*! exports provided: ConfigRL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRL", function() { return ConfigRL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var ConfigRL =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigRL, _super);

  function ConfigRL() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigRL.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigRL.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var seriesName = this.getSeriesNames();
    var opt = this.props.options.predictor.opt;
    var options = [];

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: opt.toPredict === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigRL.prototype.render = function () {
    var _this = this;

    if (!this.props.options.predictor.opt) {
      this.props.options.predictor.opt = {
        toPredict: 0
      };
    }

    console.log(this.props);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "RL"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " Select value to predict: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      onChange: function onChange(event) {
        return _this.props.options.predictor.opt = {
          toPredict: Number.parseInt(event.target.value, 10)
        };
      }
    }, this.renderQueryOptions()));
  };

  return ConfigRL;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/RL/strategyRL.ts":
/*!************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/RL/strategyRL.ts ***!
  \************************************************************/
/*! exports provided: StrategyRL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyRL", function() { return StrategyRL; });
var StrategyRL =
/** @class */
function () {
  function StrategyRL() {}

  StrategyRL.prototype.predict = function (data, predictor, options) {
    if (!options) {
      options = {
        toPredict: 0
      };
    }

    var base = 1 - options.toPredict; //the other one

    var coeff = predictor.coefficients;

    var f = function f(x) {
      return x ? x * coeff[0] + coeff[1] : 0;
    };

    data.predicted = [];
    data.series.forEach(function (value) {
      var _a;

      if (data && value[base]) {
        (_a = data.predicted) === null || _a === void 0 ? void 0 : _a.push([value[2], f(value[base])]);
      }
    });
    return data.predicted;
  };

  return StrategyRL;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/configSVM.tsx":
/*!*************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/configSVM.tsx ***!
  \*************************************************************/
/*! exports provided: ConfigSVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSVM", function() { return ConfigSVM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var ConfigSVM =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ConfigSVM, _super);

  function ConfigSVM() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ConfigSVM.prototype.getSeriesNames = function () {
    return this.props.data.series.map(function (serie) {
      return serie.name || 'unknown';
    });
  };

  ConfigSVM.prototype.renderQueryOptions = function () {
    var e_1, _a;

    var seriesName = this.getSeriesNames();
    var opt = this.props.options.predictor.opt;
    var options = [];

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(seriesName.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;
        options.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: i,
          selected: opt.firstQuery === i
        }, seriesName[i]));
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    return options;
  };

  ConfigSVM.prototype.render = function () {
    var _this = this;

    if (!this.props.options.predictor.opt) {
      this.props.options.predictor.opt = {
        firstQuery: 0
      };
    }

    console.log(this.props);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelOptionsGroup"], {
      title: "SVM"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, " Select query to use as first paramether (the other one will be the second): "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      onChange: function onChange(event) {
        return _this.props.options.predictor.opt = {
          firstQuery: Number.parseInt(event.target.value, 10)
        };
      }
    }, this.renderQueryOptions()));
  };

  return ConfigSVM;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./panels/PredictionPanel/strategies/SVM/strategySVM.ts":
/*!**************************************************************!*\
  !*** ./panels/PredictionPanel/strategies/SVM/strategySVM.ts ***!
  \**************************************************************/
/*! exports provided: StrategySVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategySVM", function() { return StrategySVM; });
var StrategySVM =
/** @class */
function () {
  function StrategySVM() {}

  StrategySVM.prototype.predict = function (data, predictor, options) {
    if (!options) {
      options = {
        firstQuery: 0
      };
    }

    var coeff = predictor.coefficients;
    var x1 = options.firstQuery;
    var x2 = 1 - options.firstQuery;

    var f = function f(x1, x2) {
      return x1 * coeff[0] + x2 * coeff[1] + coeff[2];
    };

    data.predicted = [];
    data.series.forEach(function (value) {
      var _a;

      var val = f(value[x1], value[x2]);
      var cls = 0; //classification

      if (val > 0) {
        cls = 1;
      } else if (val < 0) {
        cls = -1;
      }

      if (data && (value[0] || value[1])) {
        (_a = data.predicted) === null || _a === void 0 ? void 0 : _a.push([value[2], cls]);
      }
    });
    return data.predicted;
  };

  return StrategySVM;
}();



/***/ }),

/***/ "./panels/PredictionPanel/strategies/strategies.ts":
/*!*********************************************************!*\
  !*** ./panels/PredictionPanel/strategies/strategies.ts ***!
  \*********************************************************/
/*! exports provided: strategies, configs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strategies", function() { return strategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configs", function() { return configs; });
/* harmony import */ var _RL_strategyRL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RL/strategyRL */ "./panels/PredictionPanel/strategies/RL/strategyRL.ts");
/* harmony import */ var _SVM_strategySVM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SVM/strategySVM */ "./panels/PredictionPanel/strategies/SVM/strategySVM.ts");
/* harmony import */ var _RL_configRL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RL/configRL */ "./panels/PredictionPanel/strategies/RL/configRL.tsx");
/* harmony import */ var _SVM_configSVM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVM/configSVM */ "./panels/PredictionPanel/strategies/SVM/configSVM.tsx");




var strategies = {
  RL: new _RL_strategyRL__WEBPACK_IMPORTED_MODULE_0__["StrategyRL"](),
  SVM: new _SVM_strategySVM__WEBPACK_IMPORTED_MODULE_1__["StrategySVM"]()
};
var configs = {
  RL: _RL_configRL__WEBPACK_IMPORTED_MODULE_2__["ConfigRL"],
  SVM: _SVM_configSVM__WEBPACK_IMPORTED_MODULE_3__["ConfigSVM"]
};

/***/ }),

/***/ "./utils/dataTypes.ts":
/*!****************************!*\
  !*** ./utils/dataTypes.ts ***!
  \****************************/
/*! exports provided: Data, Predictor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Predictor", function() { return Predictor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
 // Data representation as array (both measured and predicted)

var Data =
/** @class */
function () {
  function Data() {}

  Data.fromSeries = function (series) {
    var e_1, _a;

    if (!series[0] || !series[1]) {
      throw Error('Set at least 2 query before');
    }

    var time = series[0].fields[1].values.toArray();
    var values = []; // [ [valA, valA ...] [valB, valB ...] ]

    series.forEach(function (serie) {
      values.push(serie.fields[0].values.toArray());
    });
    var _series = [];

    var _loop_1 = function _loop_1(i) {
      var _measure = []; // [ valA, valB, time ]

      values.forEach(function (value) {
        _measure.push(value[i]);
      });

      _measure.push(time[i]);

      _series.push(_measure);
    };

    try {
      for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(time.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var i = _c.value;

        _loop_1(i);
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    var data = new Data();
    data.series = _series;
    return data;
  };

  return Data;
}();

 // Description of predictor and related utilities

var Predictor =
/** @class */
function () {
  function Predictor() {}

  Predictor.fromJSON = function (str) {
    if (!str) {
      throw Error('No file selected');
    }

    var predictor = new Predictor();

    try {
      predictor = JSON.parse(str);
    } catch (e) {
      throw Error('Error reading file'); //TODO: better error system?
    }

    return predictor;
  };

  return Predictor;
}();



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map