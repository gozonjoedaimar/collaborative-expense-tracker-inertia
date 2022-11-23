"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_New_Index_tsx"],{

/***/ "./resources/js/Pages/New/Index.tsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/New/Index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Shared/Layout.tsx");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");



function Index(_a) {
  var types = _a.types;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_1__.DistractFreeLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
    title: "Add"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Add ", JSON.stringify(types)));
}

/***/ }),

/***/ "./resources/js/Shared/Layout.tsx":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistractFreeLayout": () => (/* binding */ DistractFreeLayout),
/* harmony export */   "SummaryLayout": () => (/* binding */ SummaryLayout)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./resources/js/Shared/Navigation.tsx");



function SummaryLayout(_a) {
  var children = _a.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "summary-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "content p-5"
  }, children));
}
function DistractFreeLayout(_a) {
  var children = _a.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "distract-free-layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "text-red-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: "/",
    className: "",
    as: "button",
    type: "button"
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "content p-5"
  }, children));
}

/***/ }),

/***/ "./resources/js/Shared/NavLinks.tsx":
/*!******************************************!*\
  !*** ./resources/js/Shared/NavLinks.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavLinks)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};


function NavLinks(_a) {
  var menu = _a.menu,
    items = _a.items;
  var active_route = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.usePage)().props.active_route;
  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      show: false
    }),
    nav = _b[0],
    setNav = _b[1];
  var toggleNav = function toggleNav() {
    setNav(__assign(__assign({}, nav), {
      show: !nav.show
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleNav,
    className: "sm:hidden"
  }, menu), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-red-500 absolute h-full w-full -m-3 flex flex-col justify-center\n        ".concat(nav.show ? "" : "hidden", "\n        sm:static sm:flex sm:flex-row sm:h-auto sm:w-auto sm:m-0 sm:bg-transparent\n        ").cn()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleNav,
    className: "absolute right-2 top-2 sm:hidden"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "w-1/2 mx-auto space-y-5 text-center sm:w-auto sm:flex sm:space-x-2 sm:space-y-0"
  }, items.map(function (item) {
    var text = item[0],
      href = item[1],
      key = item[2];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
      href: href,
      className: "\n                    nav-link-item\n                    some-class-item\n                    ".concat(active_route === href ? "font-bold" : "", "\n                  ").cn()
    }, text));
  }))));
}

/***/ }),

/***/ "./resources/js/Shared/Navigation.tsx":
/*!********************************************!*\
  !*** ./resources/js/Shared/Navigation.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLinks */ "./resources/js/Shared/NavLinks.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


function Navigation(_a) {
  var children = _a.children,
    className = _a.className;
  function getNavLinks(children) {
    if (_typeof(children) === 'object') {
      return children;
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NavLinks__WEBPACK_IMPORTED_MODULE_1__["default"], {
        menu: "Menu",
        items: [["+Income", "/add/income", 1], ["+Expense", "/add/expense", 2]]
      });
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "flex justify-between p-3 bg-blue-500 shadow-md text-white ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app-name"
  }, "Collaborative Expense Tracker"), getNavLinks(children));
}

/***/ })

}]);