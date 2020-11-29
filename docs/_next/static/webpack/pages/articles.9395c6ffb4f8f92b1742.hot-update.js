webpackHotUpdate_N_E("pages/articles",{

/***/ "./components/card/MediumCard.tsx":
/*!****************************************!*\
  !*** ./components/card/MediumCard.tsx ***!
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
/* harmony import */ var _utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ShortenText */ "./utils/ShortenText.ts");
/* harmony import */ var _utils_ToText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/ToText */ "./utils/ToText.ts");


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/components/card/MediumCard.tsx",
    _this = undefined;






var MediumCard = function MediumCard(_ref) {
  var pubDate = _ref.pubDate,
      author = _ref.author,
      thumbnail = _ref.thumbnail,
      link = _ref.link,
      title = _ref.title,
      content = _ref.content;
  var date = new Date(pubDate);
  var publishDate = date.toLocaleString("default", {
    month: "short"
  }) + " " + date.getDate() + "," + " " + date.getFullYear();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: link,
      rel: "noreferrer",
      target: "_blank",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
          src: thumbnail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        children: Object(_utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__["default"])(title, 0, 50)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
        children: Object(_utils_ShortenText__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_utils_ToText__WEBPACK_IMPORTED_MODULE_4__["default"])(content), 0, 120) + "..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Author, {
        children: author
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: publishDate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_c = MediumCard;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediumCard__Card",
  componentId: "sc-6boau8-0"
})(["background:", ";border:1px solid ", ";border-radius:5px;width:100%;padding:2rem;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:4rem;a{text-decoration:none;color:", ";}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
}, function (p) {
  return p.theme.color.text;
});
_c2 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "MediumCard__Image",
  componentId: "sc-6boau8-1"
})(["width:100%;height:120px;object-fit:contain;"]);
_c3 = Image;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediumCard__ImageWrapper",
  componentId: "sc-6boau8-2"
})(["margin-bottom:20px;padding:3rem 0rem;"]);
_c4 = ImageWrapper;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediumCard__Title",
  componentId: "sc-6boau8-3"
})(["font-weight:700;font-size:28px;margin-bottom:15px;"]);
_c5 = Title;
var SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediumCard__SubTitle",
  componentId: "sc-6boau8-4"
})(["color:", ";font-size:18px;margin-bottom:25px;"], function (p) {
  return p.theme.color.subText;
});
_c6 = SubTitle;
var Author = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MediumCard__Author",
  componentId: "sc-6boau8-5"
})(["font-weight:600;font-size:17px;margin-bottom:8px;"]);
_c7 = Author;
/* harmony default export */ __webpack_exports__["default"] = (MediumCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "MediumCard");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "ImageWrapper");
$RefreshReg$(_c5, "Title");
$RefreshReg$(_c6, "SubTitle");
$RefreshReg$(_c7, "Author");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkL01lZGl1bUNhcmQudHN4Il0sIm5hbWVzIjpbIk1lZGl1bUNhcmQiLCJwdWJEYXRlIiwiYXV0aG9yIiwidGh1bWJuYWlsIiwibGluayIsInRpdGxlIiwiY29udGVudCIsImRhdGUiLCJEYXRlIiwicHVibGlzaERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIm1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwiU2hvcnRlblRleHQiLCJUb1RleHQiLCJDYXJkIiwic3R5bGVkIiwiZGl2IiwicCIsInRoZW1lIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwidGV4dCIsIkltYWdlIiwiaW1nIiwiSW1hZ2VXcmFwcGVyIiwiVGl0bGUiLCJTdWJUaXRsZSIsInN1YlRleHQiLCJBdXRob3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMEQ7QUFBQSxNQUF2REMsT0FBdUQsUUFBdkRBLE9BQXVEO0FBQUEsTUFBOUNDLE1BQThDLFFBQTlDQSxNQUE4QztBQUFBLE1BQXRDQyxTQUFzQyxRQUF0Q0EsU0FBc0M7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzRSxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTUCxPQUFULENBQWI7QUFDQSxNQUFNUSxXQUFXLEdBQ2ZGLElBQUksQ0FBQ0csY0FBTCxDQUFvQixTQUFwQixFQUErQjtBQUFFQyxTQUFLLEVBQUU7QUFBVCxHQUEvQixJQUNBLEdBREEsR0FFQUosSUFBSSxDQUFDSyxPQUFMLEVBRkEsR0FHQSxHQUhBLEdBSUEsR0FKQSxHQUtBTCxJQUFJLENBQUNNLFdBQUwsRUFORjtBQVFBLHNCQUNFLHFFQUFDLElBQUQ7QUFBQSwyQkFDRTtBQUFHLFVBQUksRUFBRVQsSUFBVDtBQUFlLFNBQUcsRUFBQyxZQUFuQjtBQUFnQyxZQUFNLEVBQUMsUUFBdkM7QUFBQSw4QkFDRSxxRUFBQyxZQUFEO0FBQUEsK0JBQ0UscUVBQUMsS0FBRDtBQUFPLGFBQUcsRUFBRUQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsS0FBRDtBQUFBLGtCQUFRVyxrRUFBVyxDQUFDVCxLQUFELEVBQVEsQ0FBUixFQUFXLEVBQVg7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBS0UscUVBQUMsUUFBRDtBQUFBLGtCQUFXUyxrRUFBVyxDQUFDQyw2REFBTSxDQUFDVCxPQUFELENBQVAsRUFBa0IsQ0FBbEIsRUFBcUIsR0FBckIsQ0FBWCxHQUF1QztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFNRSxxRUFBQyxNQUFEO0FBQUEsa0JBQVNKO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBT0U7QUFBQSxrQkFBT087QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0F2QkQ7O0tBQU1ULFU7QUF5Qk4sSUFBTWdCLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0TEFDTSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0MsVUFBckI7QUFBQSxDQUROLEVBRVksVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNFLE1BQXJCO0FBQUEsQ0FGWixFQVVHLFVBQUNKLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRyxJQUFyQjtBQUFBLENBVkgsQ0FBVjtNQUFNUixJO0FBY04sSUFBTVMsS0FBSyxHQUFHUix5REFBTSxDQUFDUyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1EQUFYO01BQU1ELEs7QUFNTixJQUFNRSxZQUFZLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkNBQWxCO01BQU1TLFk7QUFLTixJQUFNQyxLQUFLLEdBQUdYLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMERBQVg7TUFBTVUsSztBQU1OLElBQU1DLFFBQVEsR0FBR1oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzREFDSCxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY1MsT0FBckI7QUFBQSxDQURHLENBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLE1BQU0sR0FBR2QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5REFBWjtNQUFNYSxNO0FBTVMvQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlcy45Mzk1YzZmZmI0ZjhmOTJiMTc0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IFNob3J0ZW5UZXh0IGZyb20gXCIuLi8uLi91dGlscy9TaG9ydGVuVGV4dFwiO1xuaW1wb3J0IFRvVGV4dCBmcm9tIFwiLi4vLi4vdXRpbHMvVG9UZXh0XCI7XG5cbmNvbnN0IE1lZGl1bUNhcmQgPSAoeyBwdWJEYXRlLCBhdXRob3IsIHRodW1ibmFpbCwgbGluaywgdGl0bGUsIGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUocHViRGF0ZSk7XG4gIGNvbnN0IHB1Ymxpc2hEYXRlID1cbiAgICBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZGVmYXVsdFwiLCB7IG1vbnRoOiBcInNob3J0XCIgfSkgK1xuICAgIFwiIFwiICtcbiAgICBkYXRlLmdldERhdGUoKSArXG4gICAgXCIsXCIgK1xuICAgIFwiIFwiICtcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxhIGhyZWY9e2xpbmt9IHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXt0aHVtYm5haWx9IC8+XG4gICAgICAgIDwvSW1hZ2VXcmFwcGVyPlxuICAgICAgICA8VGl0bGU+e1Nob3J0ZW5UZXh0KHRpdGxlLCAwLCA1MCl9PC9UaXRsZT5cbiAgICAgICAgPFN1YlRpdGxlPntTaG9ydGVuVGV4dChUb1RleHQoY29udGVudCksIDAsIDEyMCkgKyBcIi4uLlwifTwvU3ViVGl0bGU+XG4gICAgICAgIDxBdXRob3I+e2F1dGhvcn08L0F1dGhvcj5cbiAgICAgICAgPHNwYW4+e3B1Ymxpc2hEYXRlfTwvc3Bhbj5cbiAgICAgIDwvYT5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci50ZXh0fTtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbmA7XG5cbmNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDNyZW0gMHJlbTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuYDtcblxuY29uc3QgU3ViVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5zdWJUZXh0fTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuYDtcblxuY29uc3QgQXV0aG9yID0gc3R5bGVkLmRpdmBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBNZWRpdW1DYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==