webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/community-partners.tsx":
/*!*************************************************!*\
  !*** ./components/index/community-partners.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _data_community_partners_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/community-partners.json */ "./data/community-partners.json");
var _data_community_partners_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/community-partners.json */ "./data/community-partners.json", 1);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global */ "./components/global.tsx");


var _jsxFileName = "/home/smitbarmase/projects/dscvitbhopal.github.io/components/index/community-partners.tsx",
    _this = undefined;






var CommunityPartners = function CommunityPartners() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
    id: "communitypartners",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_global__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TextGroup, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
          children: "Community Partners"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CardContainer, {
          children: _data_community_partners_json__WEBPACK_IMPORTED_MODULE_3__.map(function (partner, id) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
                src: partner.image,
                alt: partner.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
                children: partner.name
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

_c = CommunityPartners;
var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_global__WEBPACK_IMPORTED_MODULE_4__["Section"]).withConfig({
  displayName: "community-partners__Wrapper",
  componentId: "sc-97ceu3-0"
})(["background-color:", ";clip-path:polygon(0 3vw,100% 0,100% 100%,0 100%);padding:10rem 0;"], function (props) {
  return props.theme.color.background;
});
_c2 = Wrapper;
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__CardContainer",
  componentId: "sc-97ceu3-1"
})(["display:flex;flex-direction:row;"]);
_c3 = CardContainer;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__Card",
  componentId: "sc-97ceu3-2"
})(["margin:1rem 1rem;padding:1rem 1rem;flex:1;background:#fff;height:200px;width:250px;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c4 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "community-partners__Image",
  componentId: "sc-97ceu3-3"
})(["height:50%;flex:1;"]);
_c5 = Image;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "community-partners__Name",
  componentId: "sc-97ceu3-4"
})(["color:black;"]);
_c6 = Name;
var TextGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__TextGroup",
  componentId: "sc-97ceu3-5"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:", "){align-items:flex-start;}a{text-decoration:none;}"], function (props) {
  return props.theme.screen.md;
});
_c7 = TextGroup;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__Title",
  componentId: "sc-97ceu3-6"
})(["font-size:45px;font-weight:bolder;margin-bottom:2rem;@media (max-width:", "){font-size:38px;}"], function (props) {
  return props.theme.screen.md;
});
_c8 = Title;
/* harmony default export */ __webpack_exports__["default"] = (CommunityPartners);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "CommunityPartners");
$RefreshReg$(_c2, "Wrapper");
$RefreshReg$(_c3, "CardContainer");
$RefreshReg$(_c4, "Card");
$RefreshReg$(_c5, "Image");
$RefreshReg$(_c6, "Name");
$RefreshReg$(_c7, "TextGroup");
$RefreshReg$(_c8, "Title");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9jb21tdW5pdHktcGFydG5lcnMudHN4Il0sIm5hbWVzIjpbIkNvbW11bml0eVBhcnRuZXJzIiwiY29tbXVuaXR5UGFydG5lcnMiLCJtYXAiLCJwYXJ0bmVyIiwiaWQiLCJpbWFnZSIsIm5hbWUiLCJXcmFwcGVyIiwic3R5bGVkIiwiU2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJDYXJkQ29udGFpbmVyIiwiZGl2IiwiQ2FyZCIsIkltYWdlIiwiaW1nIiwiTmFtZSIsImgzIiwiVGV4dEdyb3VwIiwic2NyZWVuIiwibWQiLCJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHNCQUN4QixxRUFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLG1CQUFaO0FBQUEsMkJBQ0UscUVBQUMsaURBQUQ7QUFBQSw2QkFDRSxxRUFBQyxTQUFEO0FBQUEsZ0NBQ0UscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLGFBQUQ7QUFBQSxvQkFDR0MsMERBQWlCLENBQUNDLEdBQWxCLENBQXNCLFVBQUNDLE9BQUQsRUFBVUMsRUFBVjtBQUFBLGdDQUNyQixxRUFBQyxJQUFEO0FBQUEsc0NBQ0UscUVBQUMsS0FBRDtBQUFPLG1CQUFHLEVBQUVELE9BQU8sQ0FBQ0UsS0FBcEI7QUFBMkIsbUJBQUcsRUFBRUYsT0FBTyxDQUFDRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsSUFBRDtBQUFBLDBCQUFPSCxPQUFPLENBQUNHO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQVdGLEVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEcUI7QUFBQSxXQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUExQjs7S0FBTUosaUI7QUFrQk4sSUFBTU8sT0FBTyxHQUFHQyxpRUFBTSxDQUFDQywrQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdHQUNTLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQkMsVUFBN0I7QUFBQSxDQURULENBQWI7TUFBTU4sTztBQU1OLElBQU1PLGFBQWEsR0FBR04seURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FBbkI7TUFBTUQsYTtBQUtOLElBQU1FLElBQUksR0FBR1IseURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSwyTEFBVjtNQUFNQyxJO0FBY04sSUFBTUMsS0FBSyxHQUFHVCx5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFYO01BQU1ELEs7QUFLTixJQUFNRSxJQUFJLEdBQUdYLHlEQUFNLENBQUNZLEVBQVY7QUFBQTtBQUFBO0FBQUEsb0JBQVY7TUFBTUQsSTtBQUlOLElBQU1FLFNBQVMsR0FBR2IseURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSw4SkFLUSxVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BQVosQ0FBbUJDLEVBQTlCO0FBQUEsQ0FMUixDQUFmO01BQU1GLFM7QUFjTixJQUFNRyxLQUFLLEdBQUdoQix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNHQUlZLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVcsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUpaLENBQVg7TUFBTUMsSztBQVNTeEIsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTY0MzhhNzZiOTYxYTg5ODEyZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgY29tbXVuaXR5UGFydG5lcnMgZnJvbSBcIi4uLy4uL2RhdGEvY29tbXVuaXR5LXBhcnRuZXJzLmpzb25cIjtcblxuaW1wb3J0IHsgU2VjdGlvbiwgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuXG5jb25zdCBDb21tdW5pdHlQYXJ0bmVycyA9ICgpID0+IChcbiAgPFdyYXBwZXIgaWQ9XCJjb21tdW5pdHlwYXJ0bmVyc1wiPlxuICAgIDxDb250YWluZXI+XG4gICAgICA8VGV4dEdyb3VwPlxuICAgICAgICA8VGl0bGU+Q29tbXVuaXR5IFBhcnRuZXJzPC9UaXRsZT5cbiAgICAgICAgPENhcmRDb250YWluZXI+XG4gICAgICAgICAge2NvbW11bml0eVBhcnRuZXJzLm1hcCgocGFydG5lciwgaWQpID0+IChcbiAgICAgICAgICAgIDxDYXJkIGtleT17aWR9PlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwYXJ0bmVyLmltYWdlfSBhbHQ9e3BhcnRuZXIubmFtZX0+PC9JbWFnZT5cbiAgICAgICAgICAgICAgPE5hbWU+e3BhcnRuZXIubmFtZX08L05hbWU+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgIDwvVGV4dEdyb3VwPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L1dyYXBwZXI+XG4pO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKFNlY3Rpb24pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDN2dywgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XG4gIHBhZGRpbmc6IDEwcmVtIDA7XG5gO1xuXG5jb25zdCBDYXJkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBoZWlnaHQ6IDUwJTtcbiAgZmxleDogMTtcbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuaDNgXG4gIGNvbG9yOiBibGFjaztcbmA7XG5cbmNvbnN0IFRleHRHcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29tbXVuaXR5UGFydG5lcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9