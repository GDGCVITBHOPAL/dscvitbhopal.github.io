webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/navigation/style.tsx":
/*!************************************************!*\
  !*** ./components/common/navigation/style.tsx ***!
  \************************************************/
/*! exports provided: Nav, NavListWrapper, NavItem, MobileMenu, Brand, ActionsContainer, Mobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListWrapper", function() { return NavListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenu", function() { return MobileMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Brand", function() { return Brand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsContainer", function() { return ActionsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mobile", function() { return Mobile; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "style__Nav",
  componentId: "sc-1rjhaz5-0"
})(["padding:1rem 0rem;position:sticky;top:0px;z-index:1000;background:", ";border-bottom:1px solid ", ";transition:0.4s cubic-bezier(0.2,0.8,0.2,1);"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
});
var NavListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__NavListWrapper",
  componentId: "sc-1rjhaz5-1"
})(["display:flex;flex-direction:row;", ";"], function (_ref) {
  var mobile = _ref.mobile;
  return mobile && "\n        flex-direction: column;\n        margin-top: 1em;\n\n        > ".concat(NavItem, " {\n          margin: 0;\n          margin-top: 0.75em;\n        }\n      ");
});
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__NavItem",
  componentId: "sc-1rjhaz5-2"
})(["margin:0rem 0.75rem;a{opacity:0.6;color:", ";font-weight:600;font-size:14px;letter-spacing:1px;text-transform:uppercase;text-decoration:none;}&.active{a{opacity:1;}}"], function (p) {
  return p.theme.color.text;
});
var MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MobileMenu",
  componentId: "sc-1rjhaz5-3"
})(["width:100%;height:100vh;z-index:1000;"]);
var Brand = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Brand",
  componentId: "sc-1rjhaz5-4"
})([""]);
var ActionsContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ActionsContainer",
  componentId: "sc-1rjhaz5-5"
})(["display:flex;align-items:center;font-size:24px;&:hover{cursor:pointer;}"]);
var Mobile = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Mobile",
  componentId: "sc-1rjhaz5-6"
})(["display:none;@media (max-width:", "){display:block;order:-1;}", ""], function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.hide && "\n    display: block;\n\n    @media (max-width: ".concat(props.theme.screen.xs, ") {\n      display: none;\n    }\n  ");
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9zdHlsZS50c3giXSwibmFtZXMiOlsiTmF2Iiwic3R5bGVkIiwibmF2IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiTmF2TGlzdFdyYXBwZXIiLCJkaXYiLCJtb2JpbGUiLCJOYXZJdGVtIiwidGV4dCIsIk1vYmlsZU1lbnUiLCJCcmFuZCIsIkFjdGlvbnNDb250YWluZXIiLCJNb2JpbGUiLCJwcm9wcyIsInNjcmVlbiIsInNtIiwiaGlkZSIsInhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUpBS0EsVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FMQSxFQU1hLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRSxNQUFyQjtBQUFBLENBTmIsQ0FBVDtBQWNBLElBQU1DLGNBQWMsR0FBR1AseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FJdkI7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUNBQSxNQUFNLHVGQUtFQyxPQUxGLCtFQUROO0FBQUEsQ0FKdUIsQ0FBcEI7QUFpQkEsSUFBTUEsT0FBTyxHQUFHVix5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLDhLQUlQLFVBQUNOLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjTyxJQUFyQjtBQUFBLENBSk8sQ0FBYjtBQWtCQSxJQUFNQyxVQUFVLEdBQUdaLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQWhCO0FBTUEsSUFBTUssS0FBSyxHQUFHYix5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVg7QUFFQSxJQUFNTSxnQkFBZ0IsR0FBR2QseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSwrRUFBdEI7QUFhQSxJQUFNTyxNQUFNLEdBQUdmLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEVBR0ksVUFBQ1EsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ2IsS0FBTixDQUFZYyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBSEosRUFRZixVQUFDRixLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDRyxJQUFOLDhEQUlxQkgsS0FBSyxDQUFDYixLQUFOLENBQVljLE1BQVosQ0FBbUJHLEVBSnhDLHlDQURBO0FBQUEsQ0FSZSxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZmEyYzUyN2I4ZWMyYjIwODUxZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2YFxuICBwYWRkaW5nOiAxcmVtIDByZW07XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjIsIDAuOCwgMC4yLCAxKTtcbmA7XG5cbnR5cGUgTmF2TGlzdFdyYXBwZXJQcm9wcyA9IHtcbiAgbW9iaWxlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IE5hdkxpc3RXcmFwcGVyID0gc3R5bGVkLmRpdjxOYXZMaXN0V3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAkeyh7IG1vYmlsZSB9KSA9PlxuICAgIG1vYmlsZSAmJlxuICAgIGBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuXG4gICAgICAgID4gJHtOYXZJdGVtfSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNzVlbTtcbiAgICAgICAgfVxuICAgICAgYH07XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMHJlbSAwLjc1cmVtO1xuICBhIHtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3IudGV4dH07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgYSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnUgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCcmFuZCA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxudHlwZSBNb2JpbGVQcm9wcyA9IHtcbiAgaGlkZT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgTW9iaWxlID0gc3R5bGVkLmRpdjxNb2JpbGVQcm9wcz5gXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3JkZXI6IC0xO1xuICB9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuaGlkZSAmJlxuICAgIGBcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke3Byb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICBgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=