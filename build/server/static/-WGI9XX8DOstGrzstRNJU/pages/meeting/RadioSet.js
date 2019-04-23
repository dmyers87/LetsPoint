module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Cm0q");


/***/ }),

/***/ "Cm0q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_labelCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pAnI");




var RadioSet = function RadioSet(_ref) {
  var id = _ref.id,
      value = _ref.value,
      _onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      allVotes = _ref.allVotes;
  var options = [1, 2, 3, 5, 8, 13, 21, 34];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend", {
    className: components_labelCSS__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, "Your vote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex leading-normal"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex mr-3 bg-grey-0 rounded-sm shadow-md"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioButton, {
    key: 0,
    name: id,
    value: "Abstain",
    totalVotes: allVotes[0],
    label: "?",
    tooltip: "Vote a \"?\" if you want to abstain from voting, or feel the ticket needs more conversation.",
    checked: 0 === value,
    onChange: function onChange() {
      return _onChange(0);
    },
    className: "px-3 sm:px-4 md:px-6",
    disabled: disabled
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-auto flex bg-grey-0 rounded-sm shadow-md"
  }, options.map(function (option) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RadioButton, {
      key: option,
      checked: option === value,
      className: "flex-1",
      label: option.toString(),
      name: id,
      onChange: function onChange() {
        return _onChange(option);
      },
      totalVotes: allVotes[option],
      value: option.toString(),
      disabled: disabled
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RadioSet);

var RadioButton = function RadioButton(_ref2) {
  var checked = _ref2.checked,
      className = _ref2.className,
      label = _ref2.label,
      name = _ref2.name,
      onChange = _ref2.onChange,
      tooltip = _ref2.tooltip,
      totalVotes = _ref2.totalVotes,
      value = _ref2.value,
      disabled = _ref2.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    title: tooltip,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'relative py-2 text-center rounded-sm', {
      'bg-violet-5 text-white shadow ': checked,
      'cursor-pointer bg-white hover:bg-violet-1': !checked && !disabled
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "hidden",
    type: "radio",
    name: name,
    value: value,
    onChange: onChange,
    checked: checked,
    disabled: disabled
  }), label, totalVotes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    title: "This option received ".concat(totalVotes, " votes"),
    className: "absolute w-full pin-b pin-l break-words px-1",
    style: {
      lineHeight: '5px',
      height: '15px'
    }
  }, new Array(totalVotes).fill(0).map(function () {
    return '.';
  })));
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "pAnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var labelCSS = 'block leading-tight text-grey-6';
/* harmony default export */ __webpack_exports__["a"] = (labelCSS);

/***/ })

/******/ });