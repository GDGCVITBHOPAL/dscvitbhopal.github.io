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
  return props.theme.screen.md;
}, function (props) {
  return props.hide && "\n    display: block;\n\n    @media (max-width: ".concat(props.theme.screen.md, ") {\n      display: none;\n    }\n  ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9zdHlsZS50c3giXSwibmFtZXMiOlsiTmF2Iiwic3R5bGVkIiwibmF2IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiTmF2TGlzdFdyYXBwZXIiLCJkaXYiLCJtb2JpbGUiLCJOYXZJdGVtIiwidGV4dCIsIk1vYmlsZU1lbnUiLCJCcmFuZCIsIkFjdGlvbnNDb250YWluZXIiLCJNb2JpbGUiLCJwcm9wcyIsInNjcmVlbiIsIm1kIiwiaGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlKQUtBLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjQyxVQUFyQjtBQUFBLENBTEEsRUFNYSxVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0UsTUFBckI7QUFBQSxDQU5iLENBQVQ7QUFjQSxJQUFNQyxjQUFjLEdBQUdQLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsOENBSXZCO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsU0FDQUEsTUFBTSx1RkFLRUMsT0FMRiwrRUFETjtBQUFBLENBSnVCLENBQXBCO0FBaUJBLElBQU1BLE9BQU8sR0FBR1YseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSw4S0FJUCxVQUFDTixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY08sSUFBckI7QUFBQSxDQUpPLENBQWI7QUFrQkEsSUFBTUMsVUFBVSxHQUFHWix5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLDZDQUFoQjtBQU1BLElBQU1LLEtBQUssR0FBR2IseURBQU0sQ0FBQ1EsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFYO0FBRUEsSUFBTU0sZ0JBQWdCLEdBQUdkLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0VBQXRCO0FBYUEsSUFBTU8sTUFBTSxHQUFHZix5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLDBFQUdJLFVBQUNRLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNiLEtBQU4sQ0FBWWMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUhKLEVBUWYsVUFBQ0YsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ0csSUFBTiw4REFJcUJILEtBQUssQ0FBQ2IsS0FBTixDQUFZYyxNQUFaLENBQW1CQyxFQUp4Qyx5Q0FEQTtBQUFBLENBUmUsQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFiYTYzMGZmYTEzZTcwNGJiOGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLm5hdmBcbiAgcGFkZGluZzogMXJlbSAwcmVtO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG5gO1xuXG50eXBlIE5hdkxpc3RXcmFwcGVyUHJvcHMgPSB7XG4gIG1vYmlsZTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBOYXZMaXN0V3JhcHBlciA9IHN0eWxlZC5kaXY8TmF2TGlzdFdyYXBwZXJQcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgJHsoeyBtb2JpbGUgfSkgPT5cbiAgICBtb2JpbGUgJiZcbiAgICBgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcblxuICAgICAgICA+ICR7TmF2SXRlbX0ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjc1ZW07XG4gICAgICAgIH1cbiAgICAgIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDByZW0gMC43NXJlbTtcbiAgYSB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnRleHR9O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIGEge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb2JpbGVNZW51ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwMDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnJhbmQgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbnR5cGUgTW9iaWxlUHJvcHMgPSB7XG4gIGhpZGU/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IE1vYmlsZSA9IHN0eWxlZC5kaXY8TW9iaWxlUHJvcHM+YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9yZGVyOiAtMTtcbiAgfVxuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmhpZGUgJiZcbiAgICBgXG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogJHtwcm9wcy50aGVtZS5zY3JlZW4ubWR9KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9