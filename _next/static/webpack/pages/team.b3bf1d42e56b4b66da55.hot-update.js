webpackHotUpdate_N_E("pages/team",{

/***/ "./components/card/MemberCard.tsx":
/*!****************************************!*\
  !*** ./components/card/MemberCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/smitbarmase/projects/dscvitbhopal.github.io/components/card/MemberCard.tsx",
    _this = undefined;




var MemberCard = function MemberCard(_ref) {
  var member = _ref.member,
      _ref$handleModalToggl = _ref.handleModalToggle,
      handleModalToggle = _ref$handleModalToggl === void 0 ? null : _ref$handleModalToggl;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    onClick: function onClick() {
      return handleModalToggle(member);
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageWrapper, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
        src: member.profile
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
      children: member.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), member.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
      children: member.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 24
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = MemberCard;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberCard__Card",
  componentId: "sc-10ofxo8-0"
})(["background:", ";border:1px solid ", ";border-radius:5px;padding:2rem;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);cursor:pointer;-webkit-tap-highlight-color:transparent;"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
});
_c2 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "MemberCard__Image",
  componentId: "sc-10ofxo8-1"
})(["width:90px;height:90px;border-radius:50%;object-fit:cover;"]);
_c3 = Image;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberCard__ImageWrapper",
  componentId: "sc-10ofxo8-2"
})(["display:flex;justify-content:center;margin-bottom:2em;"]);
_c4 = ImageWrapper;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberCard__Name",
  componentId: "sc-10ofxo8-3"
})(["font-weight:700;font-size:18px;text-align:center;margin-bottom:1rem;"]);
_c5 = Name;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberCard__Title",
  componentId: "sc-10ofxo8-4"
})(["color:", ";font-size:18px;text-align:center;"], function (p) {
  return p.theme.color.subText;
});
_c6 = Title;
/* harmony default export */ __webpack_exports__["default"] = (MemberCard);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "MemberCard");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "ImageWrapper");
$RefreshReg$(_c5, "Name");
$RefreshReg$(_c6, "Title");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL01lbWJlckNhcmQudHN4Il0sIm5hbWVzIjpbIk1lbWJlckNhcmQiLCJtZW1iZXIiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsInByb2ZpbGUiLCJuYW1lIiwidGl0bGUiLCJDYXJkIiwic3R5bGVkIiwiZGl2IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiSW1hZ2UiLCJpbWciLCJJbWFnZVdyYXBwZXIiLCJOYW1lIiwiVGl0bGUiLCJzdWJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTBDO0FBQUEsTUFBdkNDLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLG1DQUEvQkMsaUJBQStCO0FBQUEsTUFBL0JBLGlCQUErQixzQ0FBWCxJQUFXO0FBQzNELHNCQUNFLHFFQUFDLElBQUQ7QUFBTSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUF2QjtBQUFBLEtBQWY7QUFBQSw0QkFDRSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0UscUVBQUMsS0FBRDtBQUFPLFdBQUcsRUFBRUEsTUFBTSxDQUFDRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsSUFBRDtBQUFBLGdCQUFPRixNQUFNLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0dILE1BQU0sQ0FBQ0ksS0FBUCxpQkFBZ0IscUVBQUMsS0FBRDtBQUFBLGdCQUFRSixNQUFNLENBQUNJO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBVkQ7O0tBQU1MLFU7QUFZTixJQUFNTSxJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0xBQ00sVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FETixFQUVZLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRSxNQUFyQjtBQUFBLENBRlosQ0FBVjtNQUFNUCxJO0FBVU4sSUFBTVEsS0FBSyxHQUFHUCx5REFBTSxDQUFDUSxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFYO01BQU1ELEs7QUFPTixJQUFNRSxZQUFZLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOERBQWxCO01BQU1RLFk7QUFNTixJQUFNQyxJQUFJLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQVY7TUFBTVMsSTtBQU9OLElBQU1DLEtBQUssR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFDQSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY1EsT0FBckI7QUFBQSxDQURBLENBQVg7TUFBTUQsSztBQU1TbEIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS5iM2JmMWQ0MmU1NmI0YjY2ZGE1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgTWVtYmVyQ2FyZCA9ICh7IG1lbWJlciwgaGFuZGxlTW9kYWxUb2dnbGUgPSBudWxsIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbFRvZ2dsZShtZW1iZXIpfT5cbiAgICAgIDxJbWFnZVdyYXBwZXI+XG4gICAgICAgIDxJbWFnZSBzcmM9e21lbWJlci5wcm9maWxlfSAvPlxuICAgICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgICA8TmFtZT57bWVtYmVyLm5hbWV9PC9OYW1lPlxuICAgICAge21lbWJlci50aXRsZSAmJiA8VGl0bGU+e21lbWJlci50aXRsZX08L1RpdGxlPn1cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuYDtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3Iuc3ViVGV4dH07XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=