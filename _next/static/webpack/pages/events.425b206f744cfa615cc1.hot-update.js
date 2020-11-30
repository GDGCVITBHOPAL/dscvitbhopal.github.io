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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global */ "./components/global.tsx");
/* harmony import */ var _components_card_EventCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/EventCard */ "./components/card/EventCard.tsx");



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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "DSC VIT Bhopal - Events"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Search, {
      placeholder: "Search event",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), events.filter(function (_ref) {
      var _ref$title = _ref.title,
          title = _ref$title === void 0 ? "" : _ref$title;
      return search !== "" ? title.toLowerCase().includes(search.toLowerCase()) : true;
    }).map(function (event, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_card_EventCard__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({}, event), idx, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Event, "BjZy+zU1Ds1AC0MDblRdENJgOGs=");

_c = Event;
var Search = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "events__Search",
  componentId: "sc-18qu22-0"
})(["background:", ";color:", ";width:100%;max-width:45rem;font-size:25px;outline:none;border:1px solid ", ";border-radius:5px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:2rem;line-height:35px;padding:20px;font-weight:700;&::placeholder{color:", ";font-weight:500;}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.text;
}, function (p) {
  return p.theme.color.border;
}, function (p) {
  return p.theme.color.placeholder;
});
_c2 = Search;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_5__["Container"]).withConfig({
  displayName: "events__ContainerStyled",
  componentId: "sc-18qu22-1"
})(["padding-top:2.5rem;display:flex;flex-direction:column;align-items:center;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXZlbnRzLnRzeCJdLCJuYW1lcyI6WyJFdmVudCIsInVzZVN0YXRlIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwic2VhcmNoIiwic2V0U2VhcmNoIiwidGhlbiIsImRhdGEiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXIiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJtYXAiLCJldmVudCIsImlkeCIsIlNlYXJjaCIsInN0eWxlZCIsImlucHV0IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImJvcmRlciIsInBsYWNlaG9sZGVyIiwiQ29udGFpbmVyU3R5bGVkIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBOztBQWVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsQ0FBVSxFQUFWLENBRGxCO0FBQUEsTUFDWEMsTUFEVztBQUFBLE1BQ0hDLFNBREc7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRVhHLE1BRlc7QUFBQSxNQUVIQyxTQUZHOztBQUlsQixzSUFBOEJDLElBQTlCLENBQW1DLFVBQUNDLElBQUQsRUFBcUI7QUFDdERKLGFBQVMsQ0FBQ0ksSUFBSSxXQUFKLENBQWFMLE1BQWQsQ0FBVDtBQUNELEdBRkQ7QUFJQSxzQkFDRSxxRUFBQyxlQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLE1BQUQ7QUFDRSxpQkFBVyxFQUFDLGNBRGQ7QUFFRSxXQUFLLEVBQUVFLE1BRlQ7QUFHRSxjQUFRLEVBQUUsa0JBQUNJLENBQUQ7QUFBQSxlQUFPSCxTQUFTLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsRUFTR1IsTUFBTSxDQUNKUyxNQURGLENBQ1M7QUFBQSw0QkFBR0MsS0FBSDtBQUFBLFVBQUdBLEtBQUgsMkJBQVcsRUFBWDtBQUFBLGFBQ05SLE1BQU0sS0FBSyxFQUFYLEdBQ0lRLEtBQUssQ0FBQ0MsV0FBTixHQUFvQkMsUUFBcEIsQ0FBNkJWLE1BQU0sQ0FBQ1MsV0FBUCxFQUE3QixDQURKLEdBRUksSUFIRTtBQUFBLEtBRFQsRUFNRUUsR0FORixDQU1NLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLDBCQUNILHFFQUFDLGtFQUFELG9CQUF5QkQsS0FBekIsR0FBZ0JDLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERztBQUFBLEtBTk4sQ0FUSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFCRCxDQTdCRDs7R0FBTWpCLEs7O0tBQUFBLEs7QUErQk4sSUFBTWtCLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSw0UkFDSSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0MsVUFBckI7QUFBQSxDQURKLEVBRUQsVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNFLElBQXJCO0FBQUEsQ0FGQyxFQU9VLFVBQUNKLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRyxNQUFyQjtBQUFBLENBUFYsRUFlQyxVQUFDTCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0ksV0FBckI7QUFBQSxDQWZELENBQVo7TUFBTVQsTTtBQW9CTixJQUFNVSxlQUFlLEdBQUdULGlFQUFNLENBQUNVLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUZBQXJCO01BQU1ELGU7QUFPUzVCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V2ZW50cy40MjViMjA2Zjc0NGNmYTYxNWNjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbFwiO1xuaW1wb3J0IEV2ZW50Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL0V2ZW50Q2FyZFwiO1xuXG50eXBlIEV2ZW50ID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZztcbiAgbGluaz86IHN0cmluZztcbiAgZGF0ZT86IHN0cmluZztcbn07XG5cbnR5cGUgRXZlbnREYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgZXZlbnRzOiBFdmVudFtdO1xuICB9O1xufTtcblxuY29uc3QgRXZlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZTxFdmVudFtdPihbXSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBpbXBvcnQoXCIuLi9kYXRhL2V2ZW50cy5qc29uXCIpLnRoZW4oKGRhdGE6IEV2ZW50RGF0YSkgPT4ge1xuICAgIHNldEV2ZW50cyhkYXRhLmRlZmF1bHQuZXZlbnRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyU3R5bGVkPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EU0MgVklUIEJob3BhbCAtIEV2ZW50czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGV2ZW50XCJcbiAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIHtldmVudHNcbiAgICAgICAgLmZpbHRlcigoeyB0aXRsZSA9IFwiXCIgfSkgPT5cbiAgICAgICAgICBzZWFyY2ggIT09IFwiXCJcbiAgICAgICAgICAgID8gdGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICApXG4gICAgICAgIC5tYXAoKGV2ZW50LCBpZHgpID0+IChcbiAgICAgICAgICA8RXZlbnRDYXJkIGtleT17aWR4fSB7Li4uZXZlbnR9IC8+XG4gICAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyU3R5bGVkPlxuICApO1xufTtcblxuY29uc3QgU2VhcmNoID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci50ZXh0fTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDVyZW07XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5wbGFjZWhvbGRlcn07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuYDtcblxuY29uc3QgQ29udGFpbmVyU3R5bGVkID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=