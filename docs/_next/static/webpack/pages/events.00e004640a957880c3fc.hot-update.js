webpackHotUpdate_N_E("pages/events",{

/***/ "./pages/events.tsx":
/*!**************************!*\
  !*** ./pages/events.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global */ "./components/global.tsx");
/* harmony import */ var _components_card_EventCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card/EventCard */ "./components/card/EventCard.tsx");



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/events.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Components




var Event = function Event() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      events = _useState[0],
      setEvents = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../data/events.json */ "./data/events.json", 3)).then(function (data) {
    setEvents(data["default"].events);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContainerStyled, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Search, {
      placeholder: "Search event",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), events.filter(function (_ref) {
      var _ref$title = _ref.title,
          title = _ref$title === void 0 ? "" : _ref$title;
      return search !== "" ? title.toLowerCase().includes(search.toLowerCase()) : true;
    }).map(function (event, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_card_EventCard__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, event), idx, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Event, "BjZy+zU1Ds1AC0MDblRdENJgOGs=");

_c = Event;
var Search = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "events__Search",
  componentId: "sc-18qu22-0"
})(["background:", ";color:", ";width:100%;font-size:25px;outline:none;border:1px solid ", ";border-radius:5px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:2rem;line-height:35px;padding:20px;font-weight:500;&::placeholder{color:", ";}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.text;
}, function (p) {
  return p.theme.color.border;
}, function (p) {
  return p.theme.color.placeholder;
});
_c2 = Search;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_4__["Container"]).withConfig({
  displayName: "events__ContainerStyled",
  componentId: "sc-18qu22-1"
})(["display:flex;flex-direction:column;align-items:center;padding-top:2.5rem;"]);
_c3 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Event);

var _c, _c2, _c3;

$RefreshReg$(_c, "Event");
$RefreshReg$(_c2, "Search");
$RefreshReg$(_c3, "ContainerStyled");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLnRzeCJdLCJuYW1lcyI6WyJFdmVudCIsInVzZVN0YXRlIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidGhlbiIsImRhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJldmVudCIsImlkeCIsIlNlYXJjaCIsInN0eWxlZCIsImlucHV0IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImJvcmRlciIsInBsYWNlaG9sZGVyIiwiQ29udGFpbmVyU3R5bGVkIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFVLEVBQVYsQ0FEbEI7QUFBQSxNQUNYQyxNQURXO0FBQUEsTUFDSEMsU0FERzs7QUFBQSxtQkFFVUYsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFWEcsTUFGVztBQUFBLE1BRUhDLFNBRkc7O0FBSWxCLHNJQUE4QkMsSUFBOUIsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFxQjtBQUN0REosYUFBUyxDQUFDSSxJQUFJLFdBQUosQ0FBYUwsTUFBZCxDQUFUO0FBQ0QsR0FGRDtBQUlBLHNCQUNFLHFFQUFDLGVBQUQ7QUFBQSw0QkFDRSxxRUFBQyxNQUFEO0FBQ0UsaUJBQVcsRUFBQyxjQURkO0FBRUUsV0FBSyxFQUFFRSxNQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFDSSxDQUFEO0FBQUEsZUFBT0gsU0FBUyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdSLE1BQU0sQ0FDSlMsTUFERixDQUNTO0FBQUEsNEJBQUdDLEtBQUg7QUFBQSxVQUFHQSxLQUFILDJCQUFXLEVBQVg7QUFBQSxhQUNOUixNQUFNLEtBQUssRUFBWCxHQUNJUSxLQUFLLENBQUNDLFdBQU4sR0FBb0JDLFFBQXBCLENBQTZCVixNQUFNLENBQUNTLFdBQVAsRUFBN0IsQ0FESixHQUVJLElBSEU7QUFBQSxLQURULEVBTUVFLEdBTkYsQ0FNTSxVQUFDQyxLQUFELEVBQVFDLEdBQVI7QUFBQSwwQkFDSCxxRUFBQyxrRUFBRCxvQkFBeUJELEtBQXpCLEdBQWdCQyxHQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREc7QUFBQSxLQU5OLENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0ExQkQ7O0dBQU1qQixLOztLQUFBQSxLO0FBNEJOLElBQU1rQixNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsNFBBQ0ksVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FESixFQUVELFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRSxJQUFyQjtBQUFBLENBRkMsRUFNVSxVQUFDSixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0csTUFBckI7QUFBQSxDQU5WLEVBY0MsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNJLFdBQXJCO0FBQUEsQ0FkRCxDQUFaO01BQU1ULE07QUFrQk4sSUFBTVUsZUFBZSxHQUFHVCxpRUFBTSxDQUFDVSw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGlGQUFyQjtNQUFNRCxlO0FBT1M1QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMuMDBlMDA0NjQwYTk1Nzg4MGMzZmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWxcIjtcbmltcG9ydCBFdmVudENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9FdmVudENhcmRcIjtcblxudHlwZSBFdmVudCA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmc7XG4gIGRhdGU/OiBzdHJpbmc7XG59O1xuXG50eXBlIEV2ZW50RGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGV2ZW50czogRXZlbnRbXTtcbiAgfTtcbn07XG5cbmNvbnN0IEV2ZW50ID0gKCkgPT4ge1xuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGU8RXZlbnRbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgaW1wb3J0KFwiLi4vZGF0YS9ldmVudHMuanNvblwiKS50aGVuKChkYXRhOiBFdmVudERhdGEpID0+IHtcbiAgICBzZXRFdmVudHMoZGF0YS5kZWZhdWx0LmV2ZW50cyk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclN0eWxlZD5cbiAgICAgIDxTZWFyY2hcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZXZlbnRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAge2V2ZW50c1xuICAgICAgICAuZmlsdGVyKCh7IHRpdGxlID0gXCJcIiB9KSA9PlxuICAgICAgICAgIHNlYXJjaCAhPT0gXCJcIlxuICAgICAgICAgICAgPyB0aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgIClcbiAgICAgICAgLm1hcCgoZXZlbnQsIGlkeCkgPT4gKFxuICAgICAgICAgIDxFdmVudENhcmQga2V5PXtpZHh9IHsuLi5ldmVudH0gLz5cbiAgICAgICAgKSl9XG4gICAgPC9Db250YWluZXJTdHlsZWQ+XG4gICk7XG59O1xuXG5jb25zdCBTZWFyY2ggPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQ6ICR7KHApID0+IHAudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnRleHR9O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnBsYWNlaG9sZGVyfTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGFpbmVyU3R5bGVkID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=