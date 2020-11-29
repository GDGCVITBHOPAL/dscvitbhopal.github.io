webpackHotUpdate_N_E("pages/events",{

/***/ "./components/card/EventCard.tsx":
/*!***************************************!*\
  !*** ./components/card/EventCard.tsx ***!
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
/* harmony import */ var _utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ShortenText */ "./utils/ShortenText.ts");
/* harmony import */ var _utils_ToText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ToText */ "./utils/ToText.ts");


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/components/card/EventCard.tsx",
    _this = undefined;






var EventCard = function EventCard(_ref) {
  var _ref$date = _ref.date,
      date = _ref$date === void 0 ? "" : _ref$date,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? "" : _ref$link,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? "" : _ref$content;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: link,
      rel: "noreferrer",
      target: "_blank",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        children: Object(_utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__["default"])(title, 0, 50)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
        children: Object(_utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_utils_ToText__WEBPACK_IMPORTED_MODULE_4__["default"])(content), 0, 120) + "..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Author, {
        children: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
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
  }, _this);
};

_c = EventCard;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EventCard__Card",
  componentId: "sc-1b0w68f-0"
})(["background:", ";border:1px solid ", ";border-radius:5px;max-width:45rem;padding:2rem;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:2rem;a{text-decoration:none;color:", ";}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
}, function (p) {
  return p.theme.color.text;
});
_c2 = Card;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EventCard__Title",
  componentId: "sc-1b0w68f-1"
})(["font-weight:700;font-size:28px;margin-bottom:15px;"]);
_c3 = Title;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EventCard__SubTitle",
  componentId: "sc-1b0w68f-2"
})(["color:", ";font-size:18px;margin-bottom:25px;"], function (p) {
  return p.theme.color.subText;
});
_c4 = SubTitle;
var Author = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "EventCard__Author",
  componentId: "sc-1b0w68f-3"
})(["font-weight:600;font-size:17px;margin-bottom:8px;"]);
_c5 = Author;
/* harmony default export */ __webpack_exports__["default"] = (EventCard);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "EventCard");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Title");
$RefreshReg$(_c4, "SubTitle");
$RefreshReg$(_c5, "Author");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL0V2ZW50Q2FyZC50c3giXSwibmFtZXMiOlsiRXZlbnRDYXJkIiwiZGF0ZSIsImxpbmsiLCJ0aXRsZSIsImNvbnRlbnQiLCJTaG9ydGVuVGV4dCIsIlRvVGV4dCIsIkNhcmQiLCJzdHlsZWQiLCJkaXYiLCJwIiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0ZXh0IiwiVGl0bGUiLCJTdWJUaXRsZSIsInN1YlRleHQiLCJBdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBd0Q7QUFBQSx1QkFBckRDLElBQXFEO0FBQUEsTUFBckRBLElBQXFELDBCQUE5QyxFQUE4QztBQUFBLHVCQUExQ0MsSUFBMEM7QUFBQSxNQUExQ0EsSUFBMEMsMEJBQW5DLEVBQW1DO0FBQUEsd0JBQS9CQyxLQUErQjtBQUFBLE1BQS9CQSxLQUErQiwyQkFBdkIsRUFBdUI7QUFBQSwwQkFBbkJDLE9BQW1CO0FBQUEsTUFBbkJBLE9BQW1CLDZCQUFULEVBQVM7QUFDeEUsc0JBQ0UscUVBQUMsSUFBRDtBQUFBLDJCQUNFO0FBQUcsVUFBSSxFQUFFRixJQUFUO0FBQWUsU0FBRyxFQUFDLFlBQW5CO0FBQWdDLFlBQU0sRUFBQyxRQUF2QztBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBQSxrQkFBUUcsa0VBQVcsQ0FBQ0YsS0FBRCxFQUFRLENBQVIsRUFBVyxFQUFYO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLFFBQUQ7QUFBQSxrQkFBV0Usa0VBQVcsQ0FBQ0MsNkRBQU0sQ0FBQ0YsT0FBRCxDQUFQLEVBQWtCLENBQWxCLEVBQXFCLEdBQXJCLENBQVgsR0FBdUM7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0UscUVBQUMsTUFBRDtBQUFBLGtCQUFTSDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZEOztLQUFNRCxTO0FBWU4sSUFBTU8sSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlNQUNNLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjQyxVQUFyQjtBQUFBLENBRE4sRUFFWSxVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0UsTUFBckI7QUFBQSxDQUZaLEVBVUcsVUFBQ0osQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNHLElBQXJCO0FBQUEsQ0FWSCxDQUFWO01BQU1SLEk7QUFjTixJQUFNUyxLQUFLLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMERBQVg7TUFBTU8sSztBQU1OLElBQU1DLFFBQVEsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzREFDSCxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY00sT0FBckI7QUFBQSxDQURHLENBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLE1BQU0sR0FBR1gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5REFBWjtNQUFNVSxNO0FBTVNuQix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ldmVudHMuYjE4N2NkYjRkZWJmMjA0NWY1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBTaG9ydGVuVGV4dCBmcm9tIFwiLi4vLi4vdXRpbHMvU2hvcnRlblRleHRcIjtcbmltcG9ydCBUb1RleHQgZnJvbSBcIi4uLy4uL3V0aWxzL1RvVGV4dFwiO1xuXG5jb25zdCBFdmVudENhcmQgPSAoeyBkYXRlID0gXCJcIiwgbGluayA9IFwiXCIsIHRpdGxlID0gXCJcIiwgY29udGVudCA9IFwiXCIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPGEgaHJlZj17bGlua30gcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8VGl0bGU+e1Nob3J0ZW5UZXh0KHRpdGxlLCAwLCA1MCl9PC9UaXRsZT5cbiAgICAgICAgPFN1YlRpdGxlPntTaG9ydGVuVGV4dChUb1RleHQoY29udGVudCksIDAsIDEyMCkgKyBcIi4uLlwifTwvU3ViVGl0bGU+XG4gICAgICAgIDxBdXRob3I+e2RhdGV9PC9BdXRob3I+XG4gICAgICA8L2E+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHApID0+IHAudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXgtd2lkdGg6IDQ1cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci50ZXh0fTtcbiAgfVxuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5gO1xuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnN1YlRleHR9O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG5gO1xuXG5jb25zdCBBdXRob3IgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=