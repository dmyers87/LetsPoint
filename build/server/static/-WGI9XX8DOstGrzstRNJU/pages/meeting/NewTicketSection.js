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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "2Fjn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("s4hn");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "6B+P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hDBU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_fservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vPok");



var ProfileContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["b"] = (ProfileContext);
function ProfileProvider(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      profile = _React$useState2[0],
      setProfile = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    return services_fservice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].onProfile(function (data) {
      return setProfile(data);
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileContext.Provider, {
    value: profile,
    children: props.children
  });
}

/***/ }),

/***/ "8ER4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meetingFromSnap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ticketFromSnap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return profileFromSnap; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Rbzu");

// EntityNew        - The expected creation shape from the user
// EntityShapeToDB  - The doc as it exists in Firebase
// EntityShape      - The doc with the id as a property

/**
 * Meetings
 */
function meetingFromSnap(snap) {
  var data = snap.data();
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: snap.id,
    title: '',
    focus: null,
    participantIDs: {},
    observerIDs: {},
    participantData: {}
  }, data, {
    // @ts-ignore
    createdAt: data.createdAt || {
      seconds: 0,
      nanoseconds: 0
    }
  });
}
/**
 * Tickets
 */

function ticketFromSnap(snap) {
  var data = snap.data() || {};
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    id: snap.id,
    title: '',
    link: '',
    description: '',
    votes: {},
    isRevealed: false,
    source: 'form'
  }, data, {
    // @ts-ignore
    createdAt: data.createdAt || {
      seconds: 0,
      nanoseconds: 0
    }
  });
}
/**
 * Credentials
 */

function profileFromSnap(snap) {
  var data = snap.data();
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    hasCreds: false
  }, data);
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cdJb");


/***/ }),

/***/ "A0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("UrUy");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("ZOIa");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("hDBU");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./utils/parseJiraTicketKey.ts
var ticketRegex = /((?<!([A-Z]{1,10})-?)[A-Z]+-\d+)/;
function parseTicketKey(some) {
  var result = ticketRegex.exec(some);
  if (result == null) return null;
  return result[0];
}
// EXTERNAL MODULE: ./svgs/index.js
var svgs = __webpack_require__("L2VZ");

// EXTERNAL MODULE: ./components/Input.tsx
var Input = __webpack_require__("pG0O");

// EXTERNAL MODULE: ./components/Buttons.tsx
var Buttons = __webpack_require__("zprC");

// EXTERNAL MODULE: ./components/CredentialForm.tsx + 1 modules
var CredentialForm = __webpack_require__("DZwE");

// EXTERNAL MODULE: ./components/ErrorBox.tsx
var ErrorBox = __webpack_require__("ELYA");

// EXTERNAL MODULE: ./containers/Profile.tsx
var Profile = __webpack_require__("6B+P");

// CONCATENATED MODULE: ./pages/meeting/JiraForm.tsx












var JiraForm_JiraForm = function JiraForm(_ref) {
  var onSubmit = _ref.onSubmit;
  // See if the user hasCreds
  var profile = external_react_default.a.useContext(Profile["b" /* default */]);

  var _React$useState = external_react_default.a.useState(''),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      tid = _React$useState2[0],
      updateTID = _React$useState2[1];

  var _React$useState3 = external_react_default.a.useState(''),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      formErrors = _React$useState4[0],
      updateErrors = _React$useState4[1];

  var _React$useState5 = external_react_default.a.useState(false),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      isSubmitting = _React$useState6[0],
      updateIsSubmitting = _React$useState6[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    submitManager();
  };

  var submitManager =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var parsedTID;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              parsedTID = parseTicketKey(tid);

              if (!(parsedTID === null)) {
                _context.next = 4;
                break;
              }

              updateErrors('The Jira Key entered was not valid.');
              return _context.abrupt("return");

            case 4:
              updateIsSubmitting(true);
              _context.prev = 5;
              _context.next = 8;
              return onSubmit(parsedTID);

            case 8:
              updateTID('');
              updateErrors('');
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              updateErrors(_context.t0.message);

            case 15:
              updateIsSubmitting(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12]]);
    }));

    return function submitManager() {
      return _ref2.apply(this, arguments);
    };
  }();

  if (profile === null) {
    return external_react_default.a.createElement("div", {
      className: "text-center text-teal-7"
    }, external_react_default.a.createElement(svgs["e" /* Loader */], {
      className: "animate-spin w-6 h-6"
    }));
  }

  if (!profile.hasCreds) {
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("p", {
      className: "mb-3 leading-normal"
    }, "Please enter your Jira credentials below to start importing tickets."), external_react_default.a.createElement(CredentialForm["a" /* default */], null), external_react_default.a.createElement("div", {
      className: "mb-6"
    }), external_react_default.a.createElement("p", {
      className: "mb-3 leading-tight text-sm"
    }, "Credentials are stored in a write only database for your security. These credentials are only transmitted directly to the Jira server over an https connection."));
  }

  return external_react_default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, formErrors && external_react_default.a.createElement(ErrorBox["a" /* default */], {
    className: "mb-6"
  }, formErrors), external_react_default.a.createElement("div", {
    className: "mb-6"
  }, external_react_default.a.createElement(Input["a" /* default */], {
    "data-lpignore": "true",
    id: "jira-tid",
    label: "Jira Ticket Key",
    value: tid,
    onChange: function onChange(e) {
      updateErrors('');
      updateTID(e.target.value);
    },
    required: true
  }), external_react_default.a.createElement("div", {
    className: "mb-3"
  }, external_react_default.a.createElement("p", {
    className: "text-sm text-grey-7 italic"
  }, "ie. AWK-1234 or the URL to the ticket"))), external_react_default.a.createElement(Buttons["a" /* default */], {
    type: "submit",
    disabled: isSubmitting
  }, isSubmitting ? external_react_default.a.createElement(svgs["e" /* Loader */], {
    className: "animate-spin w-5 h-5 mr-2"
  }) : external_react_default.a.createElement(svgs["g" /* PlusCircle */], {
    className: "w-5 h-5 mr-2"
  }), "Import from Jira"));
};

/* harmony default export */ var meeting_JiraForm = __webpack_exports__["default"] = (JiraForm_JiraForm);

/***/ }),

/***/ "DZwE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("hDBU");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./services/fservice.ts + 2 modules
var fservice = __webpack_require__("vPok");

// EXTERNAL MODULE: ./components/Input.tsx
var Input = __webpack_require__("pG0O");

// EXTERNAL MODULE: ./components/Buttons.tsx
var Buttons = __webpack_require__("zprC");

// EXTERNAL MODULE: ./components/ErrorBox.tsx
var ErrorBox = __webpack_require__("ELYA");

// CONCATENATED MODULE: ./components/CredentialForm.tsx










var CredentialForm_CredentialForm = function CredentialForm(_ref) {
  _objectDestructuringEmpty(_ref);

  // Credential Form
  var initialState = {
    url: '',
    username: '',
    password: ''
  };

  var _React$useState = external_react_default.a.useState(initialState),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      values = _React$useState2[0],
      updateValues = _React$useState2[1];

  var _React$useState3 = external_react_default.a.useState(false),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      isSubmitting = _React$useState4[0],
      updateIsSubmitting = _React$useState4[1];

  var _React$useState5 = external_react_default.a.useState(''),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      urlValidation = _React$useState6[0],
      updateUrlValidation = _React$useState6[1];

  var _React$useState7 = external_react_default.a.useState(''),
      _React$useState8 = Object(slicedToArray["a" /* default */])(_React$useState7, 2),
      error = _React$useState8[0],
      updateError = _React$useState8[1];

  var handleChange = function handleChange(e) {
    e.persist();
    updateValues(function (s) {
      return Object(objectSpread["a" /* default */])({}, s, Object(defineProperty["a" /* default */])({}, e.target.name, e.target.value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var urlError = isValidURL(values.url);

    if (urlError) {
      updateUrlValidation(urlError);
      return;
    }

    updateIsSubmitting(true);
    fservice["a" /* default */].createCredentials(values).then(function () {
      updateIsSubmitting(false);
      updateValues({
        url: '',
        username: '',
        password: ''
      });
    }, function (err) {
      updateIsSubmitting(false);

      if (err.code === 'permission-denied') {
        updateError('Error: Missing or insufficient permissions.');
      } else {
        console.error(err);
        updateError('Error: Something went wrong.');
      }
    });
  };

  return external_react_default.a.createElement("form", {
    onSubmit: handleSubmit,
    method: "POST"
  }, error && external_react_default.a.createElement(ErrorBox["a" /* default */], {
    className: "mb-3"
  }, error), external_react_default.a.createElement("div", {
    className: "mb-6"
  }, external_react_default.a.createElement(Input["a" /* default */], {
    type: "url",
    id: "url",
    label: "Jira URL",
    value: values.url,
    onChange: handleChange,
    required: true
  }), external_react_default.a.createElement("div", {
    className: "mb-3"
  }, external_react_default.a.createElement("p", {
    className: "text-sm text-grey-7 italic"
  }, "ie. https://jira.company.com"), urlValidation && external_react_default.a.createElement(ErrorBox["a" /* default */], null, urlValidation)), external_react_default.a.createElement(Input["a" /* default */], {
    type: "string",
    id: "username",
    label: "Jira Username",
    value: values.username,
    onChange: handleChange,
    required: true
  }), external_react_default.a.createElement(Input["a" /* default */], {
    type: "password",
    id: "password",
    label: "Jira Password",
    value: values.password,
    onChange: handleChange,
    required: true
  })), external_react_default.a.createElement(Buttons["a" /* default */], {
    type: "submit",
    disabled: isSubmitting
  }, "Store Credentials"));
};

function isValidURL(url) {
  if (url.substr(0, 'https'.length) !== 'https') return 'URL must start with https';
  if (url.substr(-1, 1) === '/') return 'No trailing slashes';
  return '';
}

/* harmony default export */ var components_CredentialForm = __webpack_exports__["a"] = (CredentialForm_CredentialForm);

/***/ }),

/***/ "ELYA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var ErrorBox = function ErrorBox(_ref) {
  var className = _ref.className,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'text-red-9 bg-red-2 border-red-6 border-b border-t p-3')
  }, rest));
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorBox);

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "L2VZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Archive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MoreVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PlusCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Target; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Trash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Unarchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Zap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // @ts-nocheck

var Archive = function Archive(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "21 8 21 21 3 21 3 8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "1",
    y: "3",
    width: "22",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "12"
  }));
};

Archive.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-archive"
};

var ArrowLeft = function ArrowLeft(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "12 19 5 12 12 5"
  }));
};

ArrowLeft.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-arrow-left"
};

var Check = function Check(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
};

Check.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-check"
};

var Edit = function Edit(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "16 3 21 8 8 21 3 21 3 16 16 3"
  }));
};

Edit.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-edit-2"
};

var Loader = function Loader(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "22"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "7.76",
    y2: "7.76"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "16.24",
    y1: "16.24",
    x2: "19.07",
    y2: "19.07"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "6",
    y2: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "18",
    y1: "12",
    x2: "22",
    y2: "12"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "4.93",
    y1: "19.07",
    x2: "7.76",
    y2: "16.24"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "16.24",
    y1: "7.76",
    x2: "19.07",
    y2: "4.93"
  }));
};

Loader.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-loader"
};

var MoreVertical = function MoreVertical(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
};

MoreVertical.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-more-vertical"
};

var PlusCircle = function PlusCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
};

PlusCircle.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-plus-circle"
};

var Save = function Save(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
};

Save.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-save"
};

var Target = function Target(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }));
};

Target.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-target"
};

var Trash = function Trash(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }));
};

Trash.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-trash"
};

var Unarchive = function Unarchive(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17,12.6363446 L9.22281339,9 L1,9 L1,21 L17,21 L17,12.6363446 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7,13 L11,13",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    transform: "translate(11.000000, 7.000000) rotate(20.000000) translate(-11.000000, -7.000000) ",
    x: "1.99999964",
    y: "5",
    width: "18",
    height: "4"
  }))));
};

Unarchive.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};

var Zap = function Zap(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  }));
};

Zap.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-zap"
};


/***/ }),

/***/ "LkAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "Rbzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tvLF");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s4hn");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1qCV");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("azxR");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "SY1S":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UrUy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cdJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hDBU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_fservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vPok");
/* harmony import */ var _NewTicketForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("clzX");
/* harmony import */ var _JiraForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("A0oO");
/* harmony import */ var components_Buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zprC");
/* harmony import */ var svgs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("L2VZ");









var NewTicketSection = function NewTicketSection(_ref) {
  var mid = _ref.mid,
      className = _ref.className;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('form'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      visibleForm = _React$useState2[0],
      updateVisibleForm = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex items-baseline mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-lg mr-2"
  }, "Add a ticket: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tab, {
    isActive: visibleForm === 'form',
    onClick: function onClick() {
      return updateVisibleForm('form');
    }
  }, "Form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Tab, {
    isActive: visibleForm === 'jira-tid',
    onClick: function onClick() {
      return updateVisibleForm('jira-tid');
    }
  }, "Jira")), visibleForm === 'form' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NewTicketForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSubmit: function onSubmit(newTicket, _ref2) {
      var resetForm = _ref2.resetForm;
      return services_fservice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].createTicket(mid, newTicket).then(function () {
        resetForm();
      });
    },
    formButtons: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Buttons__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      type: "submit"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(svgs__WEBPACK_IMPORTED_MODULE_7__[/* PlusCircle */ "g"], {
      className: "w-5 h-5 mr-2"
    }), "Add Ticket")
  }), visibleForm === 'jira-tid' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JiraForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: function onSubmit(tid) {
      return services_fservice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].importTicketFromJiraTID(mid, tid);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NewTicketSection);

var Tab = function Tab(_ref3) {
  var isActive = _ref3.isActive,
      children = _ref3.children,
      _onClick = _ref3.onClick;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'px-6 py-2 border-b-2': true,
      'border-violet-5 cursor-default': isActive,
      'border-transparent hover:border-violet-5': !isActive
    }),
    type: "button",
    onClick: function onClick() {
      return !isActive && _onClick();
    }
  }, children);
};

/***/ }),

/***/ "clzX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("azxR");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Rbzu");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hDBU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pG0O");






var TicketForm = function TicketForm(_ref) {
  var formButtons = _ref.formButtons,
      onSubmit = _ref.onSubmit,
      ticket = _ref.ticket;
  var emptyState = {
    title: '',
    link: '',
    description: '',
    source: 'form'
  };
  var initialState = ticket || emptyState;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(initialState),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_React$useState, 2),
      newTicket = _React$useState2[0],
      updateTicket = _React$useState2[1];

  var onChange = function onChange(e) {
    e.persist();
    updateTicket(function (s) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, s, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, e.target.name, e.target.value));
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if ('' === newTicket.title.trim()) return;
    onSubmit(newTicket, {
      resetForm: function resetForm() {
        return updateTicket(emptyState);
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "ticket__title",
    name: "title",
    label: "Title",
    value: newTicket.title,
    onChange: onChange,
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "ticket__link",
    name: "link",
    label: "Link",
    value: newTicket.link,
    onChange: onChange,
    type: "url"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(components_Input__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "ticket__description",
    name: "description",
    label: "Description",
    value: newTicket.description,
    onChange: onChange
  })), formButtons);
};

/* harmony default export */ __webpack_exports__["default"] = (TicketForm);

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dCoW":
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hDBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("SY1S");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "pAnI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var labelCSS = 'block leading-tight text-grey-6';
/* harmony default export */ __webpack_exports__["a"] = (labelCSS);

/***/ }),

/***/ "pG0O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hDBU");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _labelCSS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pAnI");






var Input = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
  var id = props.id,
      label = props.label,
      className = props.className,
      passthrough = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["id", "label", "className"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  if (passthrough.onFocus || passthrough.onBlur || passthrough.placeholder || passthrough.defaultValue) {
    console.warn('TODO');
    return null;
  }

  var showLabel = passthrough.value || hasFocus;
  var placeholder = showLabel ? '' : label;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('mb-3', className)
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_labelCSS__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      'animate-fade': true,
      'animate-fade--hidden': !showLabel,
      'animate-fade--visible': showLabel
    })
  }, label), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    type: "text",
    name: id
  }, passthrough, {
    placeholder: placeholder,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('py-2 block w-full placeholder:text-grey-8', 'border-b border-gray-3', 'outline-none focus:border-teal-7'),
    ref: ref,
    onFocus: function onFocus() {
      return setHasFocus(true);
    },
    onBlur: function onBlur() {
      return setHasFocus(false);
    }
  })));
});
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "vPok":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("2Fjn");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("ZOIa");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "firebase/firestore"
var firestore_ = __webpack_require__("bnmT");

// EXTERNAL MODULE: external "firebase/functions"
var functions_ = __webpack_require__("dCoW");

// CONCATENATED MODULE: ./utils/sorting.ts
function alpha(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
function byTimestamp(a, b) {
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'DESC';
  var order = dir === 'DESC' ? 1 : -1;
  if (typeof a !== 'object' || typeof b !== 'object') return 0;
  if (a.seconds < b.seconds) return 1 * order;
  if (a.seconds > b.seconds) return -1 * order;
  if (a.nanoseconds < b.nanoseconds) return 1 * order;
  if (a.nanoseconds > b.nanoseconds) return -1 * order;
  return 0;
}
// CONCATENATED MODULE: ./services/env.ts
/* harmony default export */ var env = ({
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  authDomain: '',
  messagingSenderId: '',
  projectId: ''
});
// EXTERNAL MODULE: ./schema/index.ts
var schema = __webpack_require__("8ER4");

// CONCATENATED MODULE: ./services/fservice.ts














var fservice_FirebaseService =
/*#__PURE__*/
function () {
  function FirebaseService() {
    Object(classCallCheck["a" /* default */])(this, FirebaseService);

    try {
      app_default.a.initializeApp(env);
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
      }
    }

    this.auth = app_default.a.auth();
    this.db = app_default.a.firestore();
    this.functions = app_default.a.functions();
  }

  Object(createClass["a" /* default */])(FirebaseService, [{
    key: "_getTimestamp",
    value: function _getTimestamp() {
      return app_default.a.firestore.FieldValue.serverTimestamp();
    }
  }, {
    key: "signInWithGoogle",
    value: function signInWithGoogle() {
      var provider = new app_default.a.auth.GoogleAuthProvider();
      return this.auth.signInWithPopup(provider);
    }
  }, {
    key: "signInWithEmailAndPassword",
    value: function signInWithEmailAndPassword(email, password) {
      var _this = this;

      return this.auth.createUserWithEmailAndPassword(email, password).catch(function (err) {
        if (err.code === 'auth/email-already-in-use') {
          console.log('email in use, trying to sign in');
          return _this.auth.signInWithEmailAndPassword(email, password).catch(function (reason) {
            return console.warn(reason);
          });
        } else {
          console.error('trouble creating a user', err);
          throw err;
        }
      });
    }
  }, {
    key: "signOut",
    value: function signOut() {
      return this.auth.signOut().catch(function (err) {
        return console.error('error related to signing out', err);
      });
    }
    /**
     * Get a subscription to the user's list of meetings
     * NOTE: OrderBy is applied client side to avoid needing an index for over specificity
     */

  }, {
    key: "onMeetingList",
    value: function onMeetingList(cb) {
      var user = this.auth.currentUser;

      if (user == null) {
        console.error('Tried to call onMeetingList with no user');
        return function noop() {};
      }

      return this.db.collection("/meetings").where("participantIDs.".concat(user.uid), '==', true).onSnapshot(function (querySnapshot) {
        cb(querySnapshot.docs.map(schema["a" /* meetingFromSnap */]).sort(function (a, b) {
          return byTimestamp(a.createdAt, b.createdAt);
        }));
      });
    }
  }, {
    key: "onMeeting",
    value: function onMeeting(mid, cb) {
      return this.db.doc("/meetings/".concat(mid)).onSnapshot(function (snap) {
        if (false === snap.exists) return cb(false);
        cb(Object(schema["a" /* meetingFromSnap */])(snap));
      });
    }
  }, {
    key: "createMeeting",
    value: function createMeeting(meeting) {
      var user = this.auth.currentUser;

      if (user == null) {
        return promise_default.a.reject('Tried to call createMeeting with no user');
      }

      var m = Object(objectSpread["a" /* default */])({}, meeting, {
        participantIDs: Object(defineProperty["a" /* default */])({}, user.uid, true),
        participantData: Object(defineProperty["a" /* default */])({}, user.uid, {
          displayName: user.displayName || '',
          photoURL: user.photoURL || ''
        }),
        // @ts-ignore
        createdAt: this._getTimestamp()
      });

      return this.db.collection("/meetings").add(m);
    }
  }, {
    key: "updateMeeting",
    value: function updateMeeting(_ref) {
      var id = _ref.id,
          rest = Object(objectWithoutProperties["a" /* default */])(_ref, ["id"]);

      var user = this.auth.currentUser;

      if (user == null) {
        return promise_default.a.reject('Tried to call createMeeting with no user');
      }

      if (!id) return promise_default.a.reject('Tried updating a meeting without an id');
      return this.db.doc("/meetings/".concat(id)).update(Object(objectSpread["a" /* default */])({}, rest));
    }
  }, {
    key: "getArchivedMeetingList",
    value: function getArchivedMeetingList() {
      var user = this.auth.currentUser;

      if (user == null) {
        return promise_default.a.reject('User noth authorized');
      }

      return this.db.collection("/archivedMeetings").where("participantIDs.".concat(user.uid), '==', true).get().then(function (data) {
        return data.docs.map(schema["a" /* meetingFromSnap */]).sort(function (a, b) {
          return byTimestamp(a.createdAt, b.createdAt);
        });
      });
    }
  }, {
    key: "archiveMeeting",
    value: function archiveMeeting(mid, to) {
      var user = this.auth.currentUser;

      if (user == null) {
        return promise_default.a.reject('Tried to call createMeeting with no user');
      }

      return this.functions.httpsCallable('archiveMeeting')({
        mid: mid,
        to: to
      });
    }
  }, {
    key: "addSelfToMeeting",
    value: function addSelfToMeeting(mid) {
      var _this$db$doc$update;

      var user = this.auth.currentUser;

      if (user == null) {
        console.error('Tried to call addSelfToMeeting with no user');
        return;
      }

      return this.db.doc("/meetings/".concat(mid)).update((_this$db$doc$update = {}, Object(defineProperty["a" /* default */])(_this$db$doc$update, "participantIDs.".concat(user.uid), true), Object(defineProperty["a" /* default */])(_this$db$doc$update, "participantData.".concat(user.uid), {
        displayName: user.displayName,
        photoURL: user.photoURL
      }), _this$db$doc$update));
    }
  }, {
    key: "addUserToObserverList",
    value: function addUserToObserverList(mid, uid) {
      return this._updateUserInObserverList(mid, uid, true);
    }
  }, {
    key: "removeUserFromObserverList",
    value: function removeUserFromObserverList(mid, uid) {
      return this._updateUserInObserverList(mid, uid, app_default.a.firestore.FieldValue.delete());
    }
  }, {
    key: "_updateUserInObserverList",
    value: function _updateUserInObserverList(mid, uid, value) {
      return this.db.doc("/meetings/".concat(mid)).update(Object(defineProperty["a" /* default */])({}, "observerIDs.".concat(uid), value));
    }
    /**
     * Ordering is done on the server
     */

  }, {
    key: "onTicketList",
    value: function onTicketList(mid, cb) {
      return this.db.collection("/meetings/".concat(mid, "/tickets")).orderBy('createdAt').onSnapshot(function (querySnapshot) {
        cb(querySnapshot.docs.map(schema["c" /* ticketFromSnap */]));
      });
    }
  }, {
    key: "createTicket",
    value: function createTicket(mid, ticket) {
      var t = {
        title: ticket.title,
        link: ticket.link || '',
        description: ticket.description || '',
        votes: {},
        isRevealed: false,
        // @ts-ignore
        createdAt: this._getTimestamp()
      };
      return this.db.collection("/meetings/".concat(mid, "/tickets")).add(t);
    }
  }, {
    key: "updateTicket",
    value: function updateTicket(mid, ticket) {
      var id = ticket.id,
          rest = Object(objectWithoutProperties["a" /* default */])(ticket, ["id"]);

      if (!id) {
        return promise_default.a.reject('Must provide ticket id');
      }

      return this.db.doc("/meetings/".concat(mid, "/tickets/").concat(id)).update(rest);
    }
  }, {
    key: "voteOnTicket",
    value: function voteOnTicket(mid, tid, vote) {
      var user = this.auth.currentUser;
      if (user === null) return promise_default.a.reject('User not logged in');
      return this._ticket(mid, tid).update(Object(defineProperty["a" /* default */])({}, "votes.".concat(user.uid), vote));
    }
  }, {
    key: "revealTicket",
    value: function revealTicket(mid, tid) {
      return this._ticket(mid, tid).update({
        isRevealed: true
      });
    }
  }, {
    key: "deleteTicket",
    value: function deleteTicket(mid, tid) {
      return this._ticket(mid, tid).delete();
    }
  }, {
    key: "_ticket",
    value: function _ticket(mid, tid) {
      return this.db.doc("/meetings/".concat(mid, "/tickets/").concat(tid));
    }
  }, {
    key: "createCredentials",
    value: function createCredentials(_ref2) {
      var url = _ref2.url,
          username = _ref2.username,
          password = _ref2.password;
      var user = this.auth.currentUser;
      if (user === null) return promise_default.a.reject('User not logged in');
      var credForDB = {
        url: url,
        token: btoa("".concat(username, ":").concat(password)),
        storyPointField: '' // TODO: Automate this

      }; // Setting a fixed doc ID for now, if we want to add more credentials then
      // it makes sense to do more here

      var profileRef = this.db.doc("/profiles/".concat(user.uid));
      var jiraRef = this.db.doc("/profiles/".concat(user.uid, "/secure/jira"));
      var b = this.db.batch();
      b.set(profileRef, {
        hasCreds: true
      }, {
        merge: true
      });
      b.set(jiraRef, credForDB);
      return b.commit();
    }
  }, {
    key: "onProfile",
    value: function onProfile(cb) {
      var user = this.auth.currentUser;

      if (user === null) {
        console.error('trying to call onProfile with no user');
        return function noop() {};
      }

      return this._profile(user.uid).onSnapshot(function (snap) {
        cb(Object(schema["b" /* profileFromSnap */])(snap));
      });
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      var user = this.auth.currentUser;
      if (user === null) return promise_default.a.reject('User not logged in');
      return this._profile(user.uid).get().then(schema["b" /* profileFromSnap */]);
    }
  }, {
    key: "_profile",
    value: function _profile(uid) {
      return this.db.doc("/profiles/".concat(uid));
    }
  }, {
    key: "importTicketFromJiraTID",
    value: function importTicketFromJiraTID(mid, tid) {
      return this.functions.httpsCallable('fetchTickets')({
        tid: tid,
        mid: mid
      });
    }
  }, {
    key: "pushPointsToJira",
    value: function pushPointsToJira(ticketUpdates) {
      return this.functions.httpsCallable('pushPointsToJira')({
        ticketUpdates: ticketUpdates
      });
    }
  }]);

  return FirebaseService;
}();

/* harmony default export */ var fservice = __webpack_exports__["a"] = (new fservice_FirebaseService());

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "z3IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U8Yc");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "zprC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var Button = function Button(_ref) {
  var className = _ref.className,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('btn btn--violet', className),
    type: "button"
  }, rest));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ })

/******/ });