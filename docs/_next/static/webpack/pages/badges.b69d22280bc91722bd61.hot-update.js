webpackHotUpdate_N_E("pages/badges",{

/***/ "./pages/badges.tsx":
/*!**************************!*\
  !*** ./pages/badges.tsx ***!
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
/* harmony import */ var _components_card_BadgeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/card/BadgeCard */ "./components/card/BadgeCard.tsx");



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/badges.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Components




var Badges = function Badges() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      badges = _useState[0],
      setBadges = _useState[1];

  __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../data/badges.json */ "./data/badges.json", 3)).then(function (data) {
    setBadges(data["default"].badges);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContainerStyled, {
    children: badges.map(function (badge) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_card_BadgeCard__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({}, badge), badge.id, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Badges, "O6fgl22RtTvWqNSMQ8inapNYuXQ=");

_c = Badges;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_4__["Container"]).withConfig({
  displayName: "badges__ContainerStyled",
  componentId: "agh3qm-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;padding:2.5rem 0rem;@media (max-width:", "){grid-template-columns:1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr;}@media (max-width:", "){grid-template-columns:1fr;padding:2.5rem 3rem;}"], function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.xs;
});
_c2 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Badges);

var _c, _c2;

$RefreshReg$(_c, "Badges");
$RefreshReg$(_c2, "ContainerStyled");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLnRzeCJdLCJuYW1lcyI6WyJCYWRnZXMiLCJ1c2VTdGF0ZSIsImJhZGdlcyIsInNldEJhZGdlcyIsInRoZW4iLCJkYXRhIiwibWFwIiwiYmFkZ2UiLCJpZCIsIkNvbnRhaW5lclN0eWxlZCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJzY3JlZW4iLCJtZCIsInNtIiwieHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBQ0E7QUFDQTs7QUFjQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQVUsRUFBVixDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJOztBQUduQixzSUFBOEJDLElBQTlCLENBQW1DLFVBQUNDLElBQUQsRUFBc0I7QUFDdkRGLGFBQVMsQ0FBQ0UsSUFBSSxXQUFKLENBQWFILE1BQWQsQ0FBVDtBQUNELEdBRkQ7QUFJQSxzQkFDRSxxRUFBQyxlQUFEO0FBQUEsY0FDR0EsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQ0MsS0FBRDtBQUFBLDBCQUNWLHFFQUFDLGtFQUFELG9CQUE4QkEsS0FBOUIsR0FBZ0JBLEtBQUssQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBZEQ7O0dBQU1SLE07O0tBQUFBLE07QUFnQk4sSUFBTVMsZUFBZSxHQUFHQyxpRUFBTSxDQUFDQyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHNRQU1FLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQU5GLEVBVUUsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxFQUE5QjtBQUFBLENBVkYsRUFjRSxVQUFDSixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJHLEVBQTlCO0FBQUEsQ0FkRixDQUFyQjtNQUFNUixlO0FBb0JTVCxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYWRnZXMuYjY5ZDIyMjgwYmM5MTcyMmJkNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWxcIjtcbmltcG9ydCBCYWRnZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9CYWRnZUNhcmRcIjtcblxudHlwZSBCYWRnZSA9IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xufTtcblxudHlwZSBCYWRnZXNEYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgYmFkZ2VzOiBCYWRnZVtdO1xuICB9O1xufTtcblxuY29uc3QgQmFkZ2VzID0gKCkgPT4ge1xuICBjb25zdCBbYmFkZ2VzLCBzZXRCYWRnZXNdID0gdXNlU3RhdGU8QmFkZ2VbXT4oW10pO1xuXG4gIGltcG9ydChcIi4uL2RhdGEvYmFkZ2VzLmpzb25cIikudGhlbigoZGF0YTogQmFkZ2VzRGF0YSkgPT4ge1xuICAgIHNldEJhZGdlcyhkYXRhLmRlZmF1bHQuYmFkZ2VzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyU3R5bGVkPlxuICAgICAge2JhZGdlcy5tYXAoKGJhZGdlKSA9PiAoXG4gICAgICAgIDxCYWRnZUNhcmQga2V5PXtiYWRnZS5pZH0gey4uLmJhZGdlfSAvPlxuICAgICAgKSl9XG4gICAgPC9Db250YWluZXJTdHlsZWQ+XG4gICk7XG59O1xuXG5jb25zdCBDb250YWluZXJTdHlsZWQgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAyLjVyZW0gMHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5zbX0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCYWRnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9