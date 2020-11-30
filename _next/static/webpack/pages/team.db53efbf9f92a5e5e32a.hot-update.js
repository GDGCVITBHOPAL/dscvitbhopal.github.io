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


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/components/card/MemberCard.tsx",
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
      children: member.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
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
})(["width:90px;height:90px;border-radius:50%;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL01lbWJlckNhcmQudHN4Il0sIm5hbWVzIjpbIk1lbWJlckNhcmQiLCJtZW1iZXIiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsInByb2ZpbGUiLCJuYW1lIiwidGl0bGUiLCJDYXJkIiwic3R5bGVkIiwiZGl2IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiSW1hZ2UiLCJpbWciLCJJbWFnZVdyYXBwZXIiLCJOYW1lIiwiVGl0bGUiLCJzdWJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTBDO0FBQUEsTUFBdkNDLE1BQXVDLFFBQXZDQSxNQUF1QztBQUFBLG1DQUEvQkMsaUJBQStCO0FBQUEsTUFBL0JBLGlCQUErQixzQ0FBWCxJQUFXO0FBQzNELHNCQUNFLHFFQUFDLElBQUQ7QUFBTSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxpQkFBaUIsQ0FBQ0QsTUFBRCxDQUF2QjtBQUFBLEtBQWY7QUFBQSw0QkFDRSxxRUFBQyxZQUFEO0FBQUEsNkJBQ0UscUVBQUMsS0FBRDtBQUFPLFdBQUcsRUFBRUEsTUFBTSxDQUFDRTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUscUVBQUMsSUFBRDtBQUFBLGdCQUFPRixNQUFNLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBS0UscUVBQUMsS0FBRDtBQUFBLGdCQUFRSCxNQUFNLENBQUNJO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7S0FBTUwsVTtBQVlOLElBQU1NLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrTEFDTSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0MsVUFBckI7QUFBQSxDQUROLEVBRVksVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNFLE1BQXJCO0FBQUEsQ0FGWixDQUFWO01BQU1QLEk7QUFVTixJQUFNUSxLQUFLLEdBQUdQLHlEQUFNLENBQUNRLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBQVg7TUFBTUQsSztBQU1OLElBQU1FLFlBQVksR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBbEI7TUFBTVEsWTtBQU1OLElBQU1DLElBQUksR0FBR1YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBVjtNQUFNUyxJO0FBT04sSUFBTUMsS0FBSyxHQUFHWCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUNBLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjUSxPQUFyQjtBQUFBLENBREEsQ0FBWDtNQUFNRCxLO0FBTVNsQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLmRiNTNlZmJmOWY5MmE1ZTVlMzJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNZW1iZXJDYXJkID0gKHsgbWVtYmVyLCBoYW5kbGVNb2RhbFRvZ2dsZSA9IG51bGwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1vZGFsVG9nZ2xlKG1lbWJlcil9PlxuICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgPEltYWdlIHNyYz17bWVtYmVyLnByb2ZpbGV9IC8+XG4gICAgICA8L0ltYWdlV3JhcHBlcj5cbiAgICAgIDxOYW1lPnttZW1iZXIubmFtZX08L05hbWU+XG4gICAgICA8VGl0bGU+e21lbWJlci50aXRsZX08L1RpdGxlPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbmA7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG5gO1xuXG5jb25zdCBOYW1lID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnN1YlRleHR9O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9