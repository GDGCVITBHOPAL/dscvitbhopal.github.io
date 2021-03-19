webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/sponsors.tsx":
/*!***************************************!*\
  !*** ./components/index/sponsors.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./components/global.tsx");


var _jsxFileName = "/home/smitbarmase/projects/dscvitbhopal.github.io/components/index/sponsors.tsx",
    _this = undefined;





var Sponsors = function Sponsors() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    id: "sponsors",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextGroup, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: "Our Sponsors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContainer, {
          children: sponsors.map(function (sponsor, id) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                src: sponsor.image,
                alt: sponsor.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
                children: sponsor.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 15
              }, _this)]
            }, id, true, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = Sponsors;
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__CardContainer",
  componentId: "sc-51f1ov-0"
})(["display:flex;flex-direction:row;"]);
_c2 = CardContainer;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__Card",
  componentId: "sc-51f1ov-1"
})(["margin:1rem 1rem;padding:1rem 1rem;flex:1;background:#fff;height:200px;width:250px;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c3 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "sponsors__Image",
  componentId: "sc-51f1ov-2"
})(["height:50%;flex:1;"]);
_c4 = Image;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "sponsors__Name",
  componentId: "sc-51f1ov-3"
})(["color:black;"]);
_c5 = Name;
var TextGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__TextGroup",
  componentId: "sc-51f1ov-4"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:", "){align-items:flex-start;}a{text-decoration:none;}"], function (props) {
  return props.theme.screen.md;
});
_c6 = TextGroup;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "sponsors__Title",
  componentId: "sc-51f1ov-5"
})(["font-size:45px;font-weight:bolder;margin-bottom:2rem;@media (max-width:", "){font-size:38px;}"], function (props) {
  return props.theme.screen.md;
});
_c7 = Title;
/* harmony default export */ __webpack_exports__["default"] = (Sponsors);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Sponsors");
$RefreshReg$(_c2, "CardContainer");
$RefreshReg$(_c3, "Card");
$RefreshReg$(_c4, "Image");
$RefreshReg$(_c5, "Name");
$RefreshReg$(_c6, "TextGroup");
$RefreshReg$(_c7, "Title");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./data/community-partners.json":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9zcG9uc29ycy50c3giXSwibmFtZXMiOlsiU3BvbnNvcnMiLCJzcG9uc29ycyIsIm1hcCIsInNwb25zb3IiLCJpZCIsImltYWdlIiwibmFtZSIsIkNhcmRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDYXJkIiwiSW1hZ2UiLCJpbWciLCJOYW1lIiwiaDMiLCJUZXh0R3JvdXAiLCJwcm9wcyIsInRoZW1lIiwic2NyZWVuIiwibWQiLCJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLHFFQUFDLCtDQUFEO0FBQVMsTUFBRSxFQUFDLFVBQVo7QUFBQSwyQkFDRSxxRUFBQyxpREFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsYUFBRDtBQUFBLG9CQUNHQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxnQ0FDWixxRUFBQyxJQUFEO0FBQUEsc0NBQ0UscUVBQUMsS0FBRDtBQUFPLG1CQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBcEI7QUFBMkIsbUJBQUcsRUFBRUYsT0FBTyxDQUFDRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLDBCQUFPSCxPQUFPLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQVdGLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQUFBLFdBQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUosUTtBQWtCTixJQUFNTyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQW5CO01BQU1GLGE7QUFLTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkxBQVY7TUFBTUMsSTtBQWNOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0ksR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBWDtNQUFNRCxLO0FBS04sSUFBTUUsSUFBSSxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLG9CQUFWO01BQU1ELEk7QUFJTixJQUFNRSxTQUFTLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEpBS1EsVUFBQ08sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBTFIsQ0FBZjtNQUFNSixTO0FBY04sSUFBTUssS0FBSyxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNHQUlZLFVBQUNPLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUpaLENBQVg7TUFBTUMsSztBQWFTcEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDUxNmVhNTAxZGJiMjExNGY2OWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY29tbXVuaXR5UGFydG5lcnMgZnJvbSBcIi4uLy4uL2RhdGEvY29tbXVuaXR5LXBhcnRuZXJzLmpzb25cIjtcblxuaW1wb3J0IHsgU2VjdGlvbiwgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuXG5jb25zdCBTcG9uc29ycyA9ICgpID0+IChcbiAgPFNlY3Rpb24gaWQ9XCJzcG9uc29yc1wiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8VGV4dEdyb3VwPlxuICAgICAgICA8VGl0bGU+T3VyIFNwb25zb3JzPC9UaXRsZT5cbiAgICAgICAgPENhcmRDb250YWluZXI+XG4gICAgICAgICAge3Nwb25zb3JzLm1hcCgoc3BvbnNvciwgaWQpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17aWR9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzcG9uc29yLmltYWdlfSBhbHQ9e3Nwb25zb3IubmFtZX0+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPE5hbWU+e3Nwb25zb3IubmFtZX08L05hbWU+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvVGV4dEdyb3VwPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L1NlY3Rpb24+XG4pO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBoZWlnaHQ6IDUwJTtcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiBibGFjaztcbmA7XG5cbmNvbnN0IFRleHRHcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAvLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAvLyAgICAgZm9udC1zaXplOiAzMHB4O1xuICAvLyAgIH1cbiAgLy9cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNwb25zb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==