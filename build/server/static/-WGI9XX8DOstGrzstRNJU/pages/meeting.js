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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6V6y");


/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "240i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("hDBU");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./svgs/index.js
var svgs = __webpack_require__("L2VZ");

// CONCATENATED MODULE: ./hooks/useOnClickOutside.ts

function useOnClickOutside(ref, handler) {
  external_react_default.a.useEffect(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
// CONCATENATED MODULE: ./components/MoreDropdown.tsx






var MoreDropdown_MoreDropdown = function MoreDropdown(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var ref = external_react_default.a.useRef(null);

  var _React$useState = external_react_default.a.useState(false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      isMenuOpen = _React$useState2[0],
      updateIsMenuOpen = _React$useState2[1];

  useOnClickOutside(ref, function () {
    return updateIsMenuOpen(false);
  });
  return external_react_default.a.createElement("div", {
    className: external_classnames_default()('relative z-10 ', className),
    ref: ref
  }, external_react_default.a.createElement("button", {
    type: "button",
    className: external_classnames_default()({
      'btn-fab': true,
      'btn--grey': !isMenuOpen,
      'btn--grey-active': isMenuOpen
    }),
    onClick: function onClick() {
      return updateIsMenuOpen(!isMenuOpen);
    }
  }, external_react_default.a.createElement(svgs["f" /* MoreVertical */], {
    className: "w-4 h-4"
  })), isMenuOpen && external_react_default.a.createElement("div", {
    className: "absolute pin-r py-4 w-48 rounded-sm bg-white shadow-lg"
  }, children));
};

/* harmony default export */ var components_MoreDropdown = __webpack_exports__["a"] = (MoreDropdown_MoreDropdown);

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

/***/ "2xrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Krf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var services_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YOUh");
/* harmony import */ var components_AvatarList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("M6oQ");
/* harmony import */ var components_labelCSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pAnI");





var EditObserverList = function EditObserverList(_ref) {
  var meeting = _ref.meeting,
      addUserToObserverList = _ref.addUserToObserverList,
      removeUserFromObserverList = _ref.removeUserFromObserverList;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "mb-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: components_labelCSS__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  }, "Voters:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AvatarList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    userList: Object(services_utils__WEBPACK_IMPORTED_MODULE_1__[/* getVotersFromMeeting */ "c"])(meeting),
    onClick: addUserToObserverList,
    imgSize: "medium",
    showPlaceholder: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: components_labelCSS__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  }, "Observers:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AvatarList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    userList: Object(services_utils__WEBPACK_IMPORTED_MODULE_1__[/* getObserversFromMeeting */ "a"])(meeting),
    onClick: removeUserFromObserverList,
    imgSize: "medium",
    showPlaceholder: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (EditObserverList);

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

/***/ "6V6y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("hDBU");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("s20r");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./services/fservice.ts + 2 modules
var fservice = __webpack_require__("vPok");

// EXTERNAL MODULE: ./containers/Auth.tsx
var Auth = __webpack_require__("BLhF");

// EXTERNAL MODULE: ./containers/Gatekeeper.tsx + 1 modules
var Gatekeeper = __webpack_require__("izUW");

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__("8xkj");
var external_querystring_default = /*#__PURE__*/__webpack_require__.n(external_querystring_);

// CONCATENATED MODULE: ./hooks/useQuerystring.ts



/* harmony default export */ var useQuerystring = (function () {
  var _useState = Object(external_react_["useState"])(null),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  Object(external_react_["useEffect"])(function () {
    var q = external_querystring_default.a.parse(window.location.search.replace(/^\?/, ''));
    setQuery(q);
  }, []);
  return query;
});
// EXTERNAL MODULE: ./schema/index.ts
var schema = __webpack_require__("8ER4");

// CONCATENATED MODULE: ./hooks/useMeeting.ts






function useMeeting(mid) {
  var userState = Object(external_react_["useContext"])(Auth["b" /* default */]);
  var uid = userState.user.uid; // Fetching the meeting

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isFetchingMeeting = _useState2[0],
      updateIsFetching = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(Object(schema["a" /* meetingFromSnap */])({
    id: mid,
    data: function data() {
      return {};
    }
  })),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      meeting = _useState4[0],
      updateMeeting = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    return fservice["a" /* default */].onMeeting(mid, function (meetingData) {
      // No meeting, redirect
      if (meetingData === false) {
        console.warn("Request for meetings?mid=".concat(mid, " dne in db"));
        router_default.a.push('/dashboard');
        return;
      } // Have a meeting, update state


      updateIsFetching(false);
      updateMeeting(meetingData); // meeting.status is 'public' so add ourselves to the participant list

      if (meetingData.participantIDs[uid] === undefined) {
        fservice["a" /* default */].addSelfToMeeting(mid);
      }
    });
  }, [mid, uid]);
  return {
    meeting: meeting,
    isFetchingMeeting: isFetchingMeeting,
    updateMeeting: updateMeeting
  };
}
// CONCATENATED MODULE: ./hooks/useTickets.ts



function useTickets(mid) {
  var _useState = Object(external_react_["useState"])(true),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isFetching = _useState2[0],
      setIsFetching = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      tickets = _useState4[0],
      setTickets = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    return fservice["a" /* default */].onTicketList(mid, function (tickets) {
      setIsFetching(false);
      setTickets(tickets);
    });
  }, [mid]);
  return [tickets, isFetching];
}
// EXTERNAL MODULE: ./services/utils.ts
var utils = __webpack_require__("YOUh");

// EXTERNAL MODULE: ./svgs/index.js
var svgs = __webpack_require__("L2VZ");

// EXTERNAL MODULE: ./components/Layout.tsx
var Layout = __webpack_require__("apO0");

// EXTERNAL MODULE: ./pages/meeting/MeetingIntroAlert.tsx
var MeetingIntroAlert = __webpack_require__("ht/f");

// EXTERNAL MODULE: ./pages/meeting/Ticket.tsx + 1 modules
var Ticket = __webpack_require__("O4b9");

// EXTERNAL MODULE: ./pages/meeting/EditObserverList.tsx
var EditObserverList = __webpack_require__("5Krf");

// EXTERNAL MODULE: ./pages/meeting/NewTicketSection.tsx
var NewTicketSection = __webpack_require__("cdJb");

// CONCATENATED MODULE: ./components/ProgressBar.tsx


var ProgressBar_ProgressBar = function ProgressBar(_ref) {
  var children = _ref.children,
      percent = _ref.percent;
  return external_react_default.a.createElement("div", {
    className: "flex items-center"
  }, external_react_default.a.createElement("label", {
    className: "text-grey-6 text-sm mr-3"
  }, children), external_react_default.a.createElement("div", {
    className: "flex-1 bg-grey-3 rounded-full relative h-1"
  }, external_react_default.a.createElement("div", {
    className: "bg-violet-5 rounded-full absolute h-1 shadow",
    style: {
      width: "".concat(percent, "%")
    }
  })));
};

/* harmony default export */ var components_ProgressBar = (ProgressBar_ProgressBar);
// EXTERNAL MODULE: ./containers/Profile.tsx
var Profile = __webpack_require__("6B+P");

// CONCATENATED MODULE: ./pages/meeting/index.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MeetingScreen; });






















function MeetingScreen() {
  var query = useQuerystring(); // Waiting to read from url

  if (query === null) return null; // Not valid

  if (query.mid === undefined || is_array_default()(query.mid) || query.mid === '') {
    console.warn('Landed on meeting page with invalid mid in querystring', query);
    router_default.a.push('/');
    return null;
  }

  return external_react_default.a.createElement(Gatekeeper["a" /* default */], null, external_react_default.a.createElement(Profile["a" /* ProfileProvider */], null, external_react_default.a.createElement(MeetingPage, {
    mid: query.mid
  })));
}

function MeetingPage(_ref) {
  var mid = _ref.mid;
  // Data
  var userState = Object(external_react_["useContext"])(Auth["b" /* default */]);
  var uid = userState.user.uid;

  var _useMeeting = useMeeting(mid),
      meeting = _useMeeting.meeting,
      updateMeeting = _useMeeting.updateMeeting;

  var _useTickets = useTickets(mid),
      _useTickets2 = Object(slicedToArray["a" /* default */])(_useTickets, 2),
      tickets = _useTickets2[0],
      isFetchingTickets = _useTickets2[1]; // UI state


  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isEditingMeeting = _useState2[0],
      setEditingMeeting = _useState2[1]; // Edit Form


  var formTitleRef = Object(external_react_["useRef"])(null);

  var _useState3 = Object(external_react_["useState"])(meeting.title),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      formTitle = _useState4[0],
      updateFormTitle = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    return updateFormTitle(meeting.title);
  }, [meeting]); // Focus on entering edit mode

  Object(external_react_["useEffect"])(function () {
    if (isEditingMeeting && formTitleRef.current) {
      formTitleRef.current.focus();
    }
  }, [isEditingMeeting]); // Validate, update meeting and exit edit mode

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (formTitle.trim() === '') {
      // add error
      return;
    }

    if (formTitle.trim() !== meeting.title) {
      // Optimistically update our state to avoid a flash
      updateMeeting(function (s) {
        return Object(objectSpread["a" /* default */])({}, s, {
          title: formTitle
        });
      });
      fservice["a" /* default */].updateMeeting({
        title: formTitle,
        id: meeting.id
      });
    }

    setEditingMeeting(false);
  }; // Reset form fields, and exit edit mode


  var handleReset = function handleReset() {
    setEditingMeeting(false);
    updateFormTitle(meeting.title);
  };

  var percTicketsCompleted = tickets.length ? Math.round(tickets.filter(function (t) {
    return t.isRevealed;
  }).length / tickets.length * 100) : 0;
  return external_react_default.a.createElement(Layout["c" /* default */], null, external_react_default.a.createElement("nav", {
    className: "mb-3"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/dashboard"
  }, external_react_default.a.createElement("a", {
    className: "inline-flex items-center py-2 text-teal-7 hover:text-teal-8 no-underline font-header text-base"
  }, external_react_default.a.createElement(svgs["b" /* ArrowLeft */], {
    className: "w-6 h-6 mr-1"
  }), external_react_default.a.createElement("div", null, "dashboard")))), !isEditingMeeting && external_react_default.a.createElement("div", {
    className: "mb-6"
  }, external_react_default.a.createElement("div", {
    className: "flex items-start mb-6"
  }, external_react_default.a.createElement("h1", {
    className: "flex-1 py-2 text-xl leading-tight border-b border-transparent"
  }, meeting.title), external_react_default.a.createElement("button", {
    title: "Edit meeting details",
    type: "button",
    className: "ml-3 btn-fab btn--grey",
    onClick: function onClick() {
      return setEditingMeeting(function (v) {
        return !v;
      });
    }
  }, external_react_default.a.createElement(svgs["d" /* Edit */], {
    className: "w-4 h-4"
  }))), external_react_default.a.createElement(components_ProgressBar, {
    percent: percTicketsCompleted
  }, "Tickets Pointed ", percTicketsCompleted, "%")), isEditingMeeting && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("form", {
    className: "flex items-start mb-6",
    onSubmit: handleSubmit,
    autoComplete: "off"
  }, external_react_default.a.createElement("input", {
    ref: formTitleRef,
    className: external_classnames_default()('flex-1 font-header text-xl leading-tight', 'py-2 block w-full placeholder:text-grey-8', 'border-b border-gray-3', 'outline-none focus:border-teal-7'),
    placeholder: "Meeting title",
    value: formTitle,
    onChange: function onChange(e) {
      return updateFormTitle(e.target.value);
    },
    required: true,
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Escape' && handleReset();
    }
  }), external_react_default.a.createElement("button", {
    type: "submit",
    className: "ml-3 btn btn--violet"
  }, external_react_default.a.createElement(svgs["h" /* Save */], {
    className: "w-4 h-4 mr-3"
  }), "Save")), external_react_default.a.createElement("section", {
    className: "mb-6"
  }, external_react_default.a.createElement("h1", {
    className: "text-lg mb-2"
  }, "Move users between roles"), external_react_default.a.createElement(EditObserverList["default"], {
    meeting: meeting,
    addUserToObserverList: function addUserToObserverList(anyUID) {
      return fservice["a" /* default */].addUserToObserverList(mid, anyUID);
    },
    removeUserFromObserverList: function removeUserFromObserverList(anyUID) {
      return fservice["a" /* default */].removeUserFromObserverList(mid, anyUID);
    }
  }))), !isFetchingTickets && external_react_default.a.createElement(external_react_default.a.Fragment, null, tickets.length === 0 && external_react_default.a.createElement(MeetingIntroAlert["default"], null), tickets.length > 0 && external_react_default.a.createElement("ol", {
    className: "mb-6 list-reset -mx-3 md:-mx-6 lg:-mx-8"
  }, tickets.map(function (t, i) {
    return external_react_default.a.createElement("li", {
      key: t.id,
      className: external_classnames_default()({
        'relative py-3': true,
        'px-3 md:px-6 lg:px-8': true,
        // match layout
        'border-b': true,
        'border-t': !i,
        'bg-violet-0': t.id === meeting.focus
      })
    }, meeting.focus === t.id && external_react_default.a.createElement("div", {
      className: "w-1 bg-violet-5 absolute pin-t pin-l pin-b"
    }), external_react_default.a.createElement(Ticket["default"], {
      mid: mid,
      ticket: t,
      onFocusClick: function onFocusClick() {
        return fservice["a" /* default */].updateMeeting({
          id: mid,
          focus: t.id === meeting.focus ? null : t.id
        });
      },
      disableVoting: Boolean(meeting.observerIDs[uid]),
      currentVote: t.votes[uid],
      voterList: Object(utils["c" /* getVotersFromMeeting */])(meeting)
    }));
  })), external_react_default.a.createElement(NewTicketSection["default"], {
    mid: mid,
    className: "mb-6"
  })));
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

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

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

/***/ "FdmI":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

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

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "M6oQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AvatarImg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("X7Yp");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var AvatarList = function AvatarList(_ref) {
  var userList = _ref.userList,
      getDotColor = _ref.getDotColor,
      _ref$imgSize = _ref.imgSize,
      imgSize = _ref$imgSize === void 0 ? 'small' : _ref$imgSize,
      showPlaceholder = _ref.showPlaceholder,
      _onClick = _ref.onClick;
  if (userList.length === 0 && !showPlaceholder) return null;
  var classNameSizes = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'w-6 h-6 mr-3': imgSize === 'small',
    'w-8 h-8 mr-3': imgSize === 'medium'
  });
  var isPlaceholderVisible = userList.length === 0 && showPlaceholder === true;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset flex flex-wrap"
  }, userList.map(function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: user.id,
      className: "mb-3"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AvatarImg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      alt: user.displayName,
      src: user.photoURL,
      title: user.displayName,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classNameSizes, {
        'cursor-pointer': _onClick !== undefined
      }),
      dotColor: getDotColor && getDotColor(user.id),
      onClick: function onClick() {
        return _onClick && _onClick(user.id);
      }
    }));
  }), isPlaceholderVisible && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: "placeholder",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classNameSizes, 'rounded-full border bg-grey-2')
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (AvatarList);

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

/***/ "O4b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("FdmI");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2xrT");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("hDBU");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("JYC+");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./utils/closestFib.ts


/**
 * Finds the closest average fibonacci number
 * 0 and under are removed
 */
function closestFib(votes) {
  var validVotes = votes.filter(function (v) {
    return v > 0;
  }).filter(function (v) {
    return isFinite(v);
  });
  var average = validVotes.reduce(function (prev, v) {
    return prev + v;
  }, 0) / validVotes.length;
  if (isNaN(average) || average === 0) return 0; // Find two fib number that bound the value

  var fib0 = 0;
  var fib1 = 1;

  while (!isBound(fib0, average, fib1)) {
    var nextFib1 = fib1 + fib0;
    fib0 = fib1;
    fib1 = nextFib1;

    if (nextFib1 > 1000) {
      throw new Error("You are spinning on calculating nextFib: votes: ".concat(stringify_default()(votes)));
    }
  } // Which Fib number are we closer to


  var isCloserToFib0 = average - fib0 < fib1 - average;
  return isCloserToFib0 ? fib0 : fib1;
}

function isBound(lower, val, upper) {
  return lower <= val && val <= upper;
}
// EXTERNAL MODULE: ./components/AvatarList.tsx
var AvatarList = __webpack_require__("M6oQ");

// EXTERNAL MODULE: ./svgs/index.js
var svgs = __webpack_require__("L2VZ");

// EXTERNAL MODULE: ./pages/meeting/RadioSet.tsx
var RadioSet = __webpack_require__("Cm0q");

// EXTERNAL MODULE: ./components/MoreDropdown.tsx + 1 modules
var MoreDropdown = __webpack_require__("240i");

// EXTERNAL MODULE: ./services/fservice.ts + 2 modules
var fservice = __webpack_require__("vPok");

// EXTERNAL MODULE: ./pages/meeting/NewTicketForm.tsx
var NewTicketForm = __webpack_require__("clzX");

// EXTERNAL MODULE: ./containers/Profile.tsx
var Profile = __webpack_require__("6B+P");

// EXTERNAL MODULE: ./components/Buttons.tsx
var Buttons = __webpack_require__("zprC");

// CONCATENATED MODULE: ./pages/meeting/Ticket.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Ticket_Title; });

















var Ticket_Ticket = function Ticket(_ref) {
  var mid = _ref.mid,
      t = _ref.ticket,
      currentVote = _ref.currentVote,
      disableVoting = _ref.disableVoting,
      onFocusClick = _ref.onFocusClick,
      voterList = _ref.voterList;

  var _React$useState = external_react_default.a.useState(false),
      _React$useState2 = Object(slicedToArray["a" /* default */])(_React$useState, 2),
      isEditMode = _React$useState2[0],
      setIsEditMode = _React$useState2[1];

  var profile = external_react_default.a.useContext(Profile["b" /* default */]);

  if (isEditMode) {
    return external_react_default.a.createElement("article", {
      className: "my-3"
    }, external_react_default.a.createElement(NewTicketForm["default"], {
      ticket: {
        title: t.title,
        link: t.link,
        description: t.description,
        source: t.source
      },
      onSubmit: function onSubmit(updatedFields) {
        return fservice["a" /* default */].updateTicket(mid, Object(objectSpread["a" /* default */])({
          id: t.id
        }, updatedFields)).then(function () {
          setIsEditMode(false);
        });
      },
      formButtons: external_react_default.a.createElement("div", {
        className: "flex"
      }, external_react_default.a.createElement(Buttons["a" /* default */], {
        type: "submit",
        className: "mr-3"
      }, external_react_default.a.createElement(svgs["g" /* PlusCircle */], {
        className: "w-5 h-5 mr-2"
      }), "Update Ticket"), external_react_default.a.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return setIsEditMode(false);
        }
      }, "Cancel"))
    }));
  }

  return external_react_default.a.createElement("article", null, external_react_default.a.createElement("header", {
    className: "flex items-baseline mb-2"
  }, external_react_default.a.createElement("h1", {
    className: "text-lg leading-tight flex-1"
  }, external_react_default.a.createElement(Ticket_Title, {
    title: t.title,
    link: t.link
  })), external_react_default.a.createElement("button", {
    title: "Draw focus to this ticket for all users",
    type: "button",
    onClick: onFocusClick,
    className: "btn-fab btn--grey ml-3"
  }, external_react_default.a.createElement(svgs["i" /* Target */], {
    className: "w-4 h-4"
  })), external_react_default.a.createElement(MoreDropdown["a" /* default */], null, external_react_default.a.createElement("button", {
    type: "button",
    className: external_classnames_default()('flex w-full text-left', 'px-6 py-2', 'hover:bg-grey-1'),
    onClick: function onClick() {
      return setIsEditMode(true);
    }
  }, external_react_default.a.createElement(svgs["d" /* Edit */], {
    className: "w-4 h-4 mr-6"
  }), external_react_default.a.createElement("span", {
    className: "flex-1"
  }, "Edit")), external_react_default.a.createElement("hr", {
    className: "border-b my-2"
  }), external_react_default.a.createElement("button", {
    type: "button",
    className: external_classnames_default()('flex w-full text-left', 'px-6 py-2', 'hover:bg-grey-1'),
    onClick: function onClick() {
      return fservice["a" /* default */].deleteTicket(mid, t.id);
    }
  }, external_react_default.a.createElement(svgs["j" /* Trash */], {
    className: "w-4 h-4 mr-6"
  }), external_react_default.a.createElement("span", {
    className: "flex-1"
  }, "Delete")))), t.description && external_react_default.a.createElement("div", {
    className: "mb-3"
  }, t.description), t.isRevealed && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
    className: "mb-2"
  }, "Average: ", closestFib(values_default()(t.votes))), t.source === 'jira' && profile !== null && profile.hasCreds && external_react_default.a.createElement("div", {
    className: "mb-2"
  }, external_react_default.a.createElement(Ticket_JiraPushForm, {
    ticket: t,
    initialValue: t.committedValue !== undefined ? t.committedValue : closestFib(values_default()(t.votes)),
    onSubmit: function onSubmit(value) {
      return fservice["a" /* default */].pushPointsToJira(Object(defineProperty["a" /* default */])({}, t.id, value)).then(function () {
        fservice["a" /* default */].updateTicket(mid, {
          id: t.id,
          committedValue: value
        });
      });
    }
  }))), external_react_default.a.createElement("div", {
    className: "mb-2"
  }, !t.isRevealed && external_react_default.a.createElement("button", {
    type: "button",
    className: "text-violet-5 underline",
    onClick: function onClick() {
      return fservice["a" /* default */].revealTicket(mid, t.id);
    }
  }, "Reveal votes")), external_react_default.a.createElement("form", {
    className: "mb-2"
  }, external_react_default.a.createElement(RadioSet["default"], {
    id: t.id,
    value: currentVote,
    onChange: function onChange(vote) {
      return fservice["a" /* default */].voteOnTicket(mid, t.id, vote);
    },
    allVotes: t.isRevealed ? summarizeVotes(t.votes) : {},
    disabled: disableVoting
  })), external_react_default.a.createElement("div", {
    className: "mx-1"
  }, external_react_default.a.createElement(AvatarList["a" /* default */], {
    imgSize: "small",
    userList: voterList,
    getDotColor: function getDotColor(id) {
      return t.votes[id] === undefined ? 'bg-red-1' : '';
    }
  })));
};
/**
 * Go from {uid: option} to {option: totalVotes}
 */


function summarizeVotes(votes) {
  return values_default()(votes).reduce(function (prev, cur) {
    return Object(objectSpread["a" /* default */])({}, prev, Object(defineProperty["a" /* default */])({}, cur, (prev[cur] || 0) + 1));
  }, {});
}

var Ticket_Title = function Title(_ref2) {
  var title = _ref2.title,
      link = _ref2.link;

  if (link) {
    return external_react_default.a.createElement("a", {
      href: link,
      target: "_blank"
    }, title);
  } // TODO: deprecate turning part of the title into a link


  var URLRegex = /^(http[s]?:\/\/|www\.)+[^\s]+[\w]/;
  var linkPieces = title.match(URLRegex);

  if (linkPieces !== null) {
    var _link = linkPieces[0];
    var restOfTitle = title.replace(linkPieces[0], '');
    return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("a", {
      href: _link,
      target: "_blank"
    }, _link), restOfTitle);
  } // end TODO


  return external_react_default.a.createElement(external_react_default.a.Fragment, null, title);
};

var Ticket_JiraPushForm = function JiraPushForm(_ref3) {
  var ticket = _ref3.ticket,
      initialValue = _ref3.initialValue,
      _onSubmit = _ref3.onSubmit;

  var _React$useState3 = external_react_default.a.useState(initialValue),
      _React$useState4 = Object(slicedToArray["a" /* default */])(_React$useState3, 2),
      committedValue = _React$useState4[0],
      updateValue = _React$useState4[1];

  var _React$useState5 = external_react_default.a.useState(false),
      _React$useState6 = Object(slicedToArray["a" /* default */])(_React$useState5, 2),
      isSubmitting = _React$useState6[0],
      updateSubmit = _React$useState6[1];

  return external_react_default.a.createElement("form", {
    className: "",
    method: "POST",
    onSubmit: function onSubmit(e) {
      e.preventDefault();

      if (committedValue === '') {
        // We could add an error here
        return;
      }

      updateSubmit(true);

      _onSubmit(committedValue).then(function () {
        updateSubmit(false);
      });
    }
  }, external_react_default.a.createElement("div", {
    className: "inline-flex items-center"
  }, external_react_default.a.createElement("label", null, "Committed value:"), external_react_default.a.createElement("input", {
    type: "text",
    required: true,
    disabled: isSubmitting,
    value: committedValue,
    onChange: function onChange(e) {
      var v = parse_int_default()(e.target.value, 10);

      updateValue(isNaN(v) ? '' : v);
    },
    className: external_classnames_default()('mx-2 w-10 text-center', 'py-2 placeholder:text-grey-8', 'border-b border-gray-3', 'outline-none focus:border-teal-7')
  }), external_react_default.a.createElement("button", {
    disabled: isSubmitting,
    className: external_classnames_default()('bg-teal-7 hover:bg-teal-8', 'text-teal-1 hover:text-teal-2 font-bold font-header leading-none', 'px-3 py-2 rounded-sm shadow-md', 'flex items-center'),
    type: "submit"
  }, ticket.committedValue === committedValue && external_react_default.a.createElement(svgs["c" /* Check */], {
    className: "w-4 h-4 mr-2"
  }), isSubmitting && external_react_default.a.createElement(svgs["e" /* Loader */], {
    className: "animate-spin w-4 h-4 mr-2"
  }), "Push to Jira")));
};

/* harmony default export */ var meeting_Ticket = __webpack_exports__["default"] = (Ticket_Ticket);

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

/***/ "SWa5":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

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

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "X7Yp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z3IF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Fjn");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var AvatarImg = function AvatarImg(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      className = _ref.className,
      dotColor = _ref.dotColor,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["src", "alt", "className", "dotColor"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('relative', className)
  }, dotColor && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('absolute z-10 w-3 h-3 -mr-1 -mb-1 pin-b pin-r', 'rounded-full pointer-events-none', dotColor)
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "absolute h-full rounded-full shadow-inner w-full pointer-events-none"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    src: src,
    alt: alt
  }, rest, {
    className: "rounded-full overflow-hidden"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (AvatarImg);

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "YOUh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getObserversFromMeeting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getVotersFromMeeting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getParticipantsFromMeeting; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hDBU");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pL2a");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Rbzu");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);




function getObserversFromMeeting(meeting) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(meeting.observerIDs).map(function (id) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      id: id
    }, meeting.participantData[id]);
  });
}
function getVotersFromMeeting(meeting) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(meeting.participantIDs).filter(function (pid) {
    return !meeting.observerIDs[pid];
  }).map(function (id) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      id: id
    }, meeting.participantData[id]);
  });
}
function getParticipantsFromMeeting(meeting) {
  return _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(meeting.participantData).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, 2),
        id = _ref2[0],
        data = _ref2[1];

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
      id: id
    }, data);
  });
}

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

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

/***/ "ht/f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("L2VZ");



var MeetingIntroAlert = function MeetingIntroAlert() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "text-teal-9 bg-teal-2 border-teal-6 border-t border-b py-5 px-4 mb-6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "leading-tight pb-3 text-teal-8"
  }, "What to know before getting started"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-reset text-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mb-2"
  }, "Invite participants by sharing a link to this page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(svgs__WEBPACK_IMPORTED_MODULE_1__[/* PlusCircle */ "g"], {
    className: "w-4 h-4 mr-2 align-text-bottom"
  }), "Add tickets to the meeting with the form below"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(svgs__WEBPACK_IMPORTED_MODULE_1__[/* Zap */ "l"], {
    className: "w-4 h-4 mr-2 align-text-bottom"
  }), "The meeting is in real time; votes, adding tickets, revealing tickets, etc.")));
};

/* harmony default export */ __webpack_exports__["default"] = (MeetingIntroAlert);

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

/***/ "pL2a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("SWa5");

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

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

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