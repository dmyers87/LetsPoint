module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

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

/***/ "3esu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("NluH");

var assertThisInitialized = __webpack_require__("oS/Z");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("btdU");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


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

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

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

/***/ "8m4E":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("jDdP");

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("PL1w");

var _stringify = _interopRequireDefault(__webpack_require__("JYC+"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("KBEF"));

var _createClass2 = _interopRequireDefault(__webpack_require__("J/q3"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("3esu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("8m4E"));

var _inherits2 = _interopRequireDefault(__webpack_require__("Od8a"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "BLhF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Rbzu");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("hDBU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var services_fservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vPok");




var AuthState = {
  isStatusReported: false,
  isLoggedIn: false,
  user: {
    displayName: '',
    email: '',
    photoURL: '',
    uid: ''
  }
};
var AuthContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(AuthState);
/* harmony default export */ __webpack_exports__["b"] = (AuthContext);
function AuthProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(AuthState),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return services_fservice__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].auth.onAuthStateChanged(function (user) {
      if (user) {
        setState({
          isStatusReported: true,
          isLoggedIn: true,
          user: {
            displayName: user.displayName || '',
            email: user.email || '',
            photoURL: user.photoURL || '',
            uid: user.uid
          }
        });
      } else {
        setState({
          isStatusReported: true,
          isLoggedIn: false,
          user: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, AuthState.user)
        });
      }
    });
  }, [] // Never re-run this effect
  );
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AuthContext.Provider, {
    value: state,
    children: props.children
  });
}

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

/***/ "J/q3":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hHgk");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "JYC+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KBEF":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

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

/***/ "NluH":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("t+lh");

var _Symbol = __webpack_require__("XzKa");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "Od8a":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("6Ndq");

var setPrototypeOf = __webpack_require__("g9SA");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

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

/***/ "apO0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: "py-4 px-3 md:px-6 lg:px-8 bg-white border-l border-r m-auto max-w-lg min-h-screen"
  }, props));
};

/* harmony default export */ __webpack_exports__["c"] = (Layout);
var FooterBar = function FooterBar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "bg-grey-9 text-grey-1"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex justify-center py-8 text-sm max-w-2xl mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "mx-3"
  }, "Let's Point ", new Date().getFullYear())));
};
var HeaderBar = function HeaderBar(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "py-4 px-3 bg-violet-5 bg-circles"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "flex items-center max-w-2xl mx-auto"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "inline-flex items-center font-header text-white no-underline"
  }, "Let's Point")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "bg-teal-7 hover:bg-teal-8 font-bold font-header leading-none ml-auto px-3 py-2 rounded-sm shadow-md text-teal-1 hover:text-teal-2"
  }, "Sign Up")), children);
};

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

/***/ "btdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hDBU");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_Gatekeeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("izUW");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var services_fservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("vPok");
/* harmony import */ var svgs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("L2VZ");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("apO0");
/* harmony import */ var components_Buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zprC");
/* harmony import */ var components_CredentialForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("DZwE");
/* harmony import */ var containers_Profile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("6B+P");











/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(containers_Gatekeeper__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(containers_Profile__WEBPACK_IMPORTED_MODULE_10__[/* ProfileProvider */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfilePage, null)));
});

function ProfilePage() {
  // UI State
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_React$useState, 2),
      isFormVisible = _React$useState2[0],
      setIsFormVisible = _React$useState2[1];

  var profile = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(containers_Profile__WEBPACK_IMPORTED_MODULE_10__[/* default */ "b"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_7__[/* default */ "c"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "inline-flex items-center py-2 text-teal-7 hover:text-teal-8 no-underline font-header text-base"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(svgs__WEBPACK_IMPORTED_MODULE_6__[/* ArrowLeft */ "b"], {
    className: "w-6 h-6 mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "dashboard")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "text-xl mb-6"
  }, "Profile"), profile !== null && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "text-lg leading-tight mb-2"
  }, "Add Jira Credentials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "mb-3 leading-normal"
  }, "Credentials are stored in a write only database for your security. These credentials are only transmitted directly to the Jira server over an https connection. If you are having trouble with the connection to Jira you may overwrite your credentials with this form."), isFormVisible || !profile.hasCreds ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_CredentialForm__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Buttons__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    onClick: function onClick() {
      return setIsFormVisible(true);
    }
  }, "Update Jira Credentials")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    className: "my-6 border-b border-grey-default"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "bg-grey-1 text-grey-9 border leading-none px-4 py-3 rounded-sm w-full sm:w-1/2 md:w-1/4",
    onClick: function onClick() {
      return services_fservice__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].signOut().then(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
      });
    }
  }, "Log out"));
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dCoW":
/***/ (function(module, exports) {

module.exports = require("firebase/functions");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "g9SA":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("OKNm");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

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

/***/ "izUW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./containers/Auth.tsx
var Auth = __webpack_require__("BLhF");

// EXTERNAL MODULE: ./services/fservice.ts + 2 modules
var fservice = __webpack_require__("vPok");

// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__("apO0");

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./containers/LoginPage.tsx




function LoginPage() {
  return external_react_default.a.createElement("main", {
    className: "h-screen flex flex-col"
  }, external_react_default.a.createElement(Layout["b" /* HeaderBar */], null, external_react_default.a.createElement("h1", {
    className: "mt-8 mb-3 text-xl text-center text-white leading-tight"
  }, "The meeting you are trying to join requires you to log in first"), external_react_default.a.createElement("p", {
    className: "mb-8 text-grey-0 text-center max-w-xs mx-auto leading-normal"
  }, "As soon as you log in you will be redirected to the meeting and added as a participant."), external_react_default.a.createElement("div", {
    className: "flex flex-col items-center"
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: "btn btn--violet shadow-md mb-4",
    onClick: function onClick() {
      return fservice["a" /* default */].signInWithGoogle();
    }
  }, "Log in with Google"))), external_react_default.a.createElement("div", {
    className: "flex-1 text-center py-8"
  }, external_react_default.a.createElement("p", {
    className: "leading-normal"
  }, "Or visit the", ' ', external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "text-grey-8"
  }, "homepage")), ' ', "to learn more.")), external_react_default.a.createElement(Layout["a" /* FooterBar */], null));
}
// CONCATENATED MODULE: ./containers/Gatekeeper.tsx


 // @ts-ignore

var Gatekeeper_Gatekeeper = function Gatekeeper(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children;
  var auth = Object(external_react_["useContext"])(Auth["b" /* default */]); // Wait for info

  if (!auth.isStatusReported) return null; // They aren't logged in

  if (!auth.isLoggedIn) {
    return external_react_default.a.createElement(LoginPage, null);
  } // They are logged in


  return children;
};

/* harmony default export */ var containers_Gatekeeper = __webpack_exports__["a"] = (Gatekeeper_Gatekeeper);

/***/ }),

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oS/Z":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s20r":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

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

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

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