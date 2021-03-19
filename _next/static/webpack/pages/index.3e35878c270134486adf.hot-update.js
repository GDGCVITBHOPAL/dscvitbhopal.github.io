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
var CardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__CardContainer",
  componentId: "sc-97ceu3-0"
})(["display:flex;flex-direction:row;"]);
_c2 = CardContainer;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__Card",
  componentId: "sc-97ceu3-1"
})(["margin:1rem 1rem;padding:1rem 1rem;flex:1;background:#fff;height:200px;width:250px;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c3 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "community-partners__Image",
  componentId: "sc-97ceu3-2"
})(["height:50%;flex:1;"]);
_c4 = Image;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h3.withConfig({
  displayName: "community-partners__Name",
  componentId: "sc-97ceu3-3"
})(["color:black;"]);
_c5 = Name;
var TextGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__TextGroup",
  componentId: "sc-97ceu3-4"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:", "){align-items:flex-start;}a{text-decoration:none;}"], function (props) {
  return props.theme.screen.md;
});
_c6 = TextGroup;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "community-partners__Title",
  componentId: "sc-97ceu3-5"
})(["font-size:45px;font-weight:bolder;margin-bottom:2rem;@media (max-width:", "){font-size:38px;}"], function (props) {
  return props.theme.screen.md;
});
_c7 = Title;
/* harmony default export */ __webpack_exports__["default"] = (CommunityPartners);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "CommunityPartners");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9jb21tdW5pdHktcGFydG5lcnMudHN4Il0sIm5hbWVzIjpbIkNvbW11bml0eVBhcnRuZXJzIiwiY29tbXVuaXR5UGFydG5lcnMiLCJtYXAiLCJwYXJ0bmVyIiwiaWQiLCJpbWFnZSIsIm5hbWUiLCJDYXJkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIkltYWdlIiwiaW1nIiwiTmFtZSIsImgzIiwiVGV4dEdyb3VwIiwicHJvcHMiLCJ0aGVtZSIsInNjcmVlbiIsIm1kIiwiVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxzQkFDeEIscUVBQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxtQkFBWjtBQUFBLDJCQUNFLHFFQUFDLGlEQUFEO0FBQUEsNkJBQ0UscUVBQUMsU0FBRDtBQUFBLGdDQUNFLHFFQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxhQUFEO0FBQUEsb0JBQ0dDLDBEQUFpQixDQUFDQyxHQUFsQixDQUFzQixVQUFDQyxPQUFELEVBQVVDLEVBQVY7QUFBQSxnQ0FDckIscUVBQUMsSUFBRDtBQUFBLHNDQUNFLHFFQUFDLEtBQUQ7QUFBTyxtQkFBRyxFQUFFRCxPQUFPLENBQUNFLEtBQXBCO0FBQTJCLG1CQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLHFFQUFDLElBQUQ7QUFBQSwwQkFBT0gsT0FBTyxDQUFDRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSxlQUFXRixFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRHFCO0FBQUEsV0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHdCO0FBQUEsQ0FBMUI7O0tBQU1KLGlCO0FBa0JOLElBQU1PLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FBbkI7TUFBTUYsYTtBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyTEFBVjtNQUFNQyxJO0FBY04sSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDSSxHQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFYO01BQU1ELEs7QUFLTixJQUFNRSxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEsb0JBQVY7TUFBTUQsSTtBQUlOLElBQU1FLFNBQVMsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4SkFLUSxVQUFDTyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLEVBQTlCO0FBQUEsQ0FMUixDQUFmO01BQU1KLFM7QUFjTixJQUFNSyxLQUFLLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0dBSVksVUFBQ08sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBSlosQ0FBWDtNQUFNQyxLO0FBU1NwQixnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zZTM1ODc4YzI3MDEzNDQ4NmFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBjb21tdW5pdHlQYXJ0bmVycyBmcm9tIFwiLi4vLi4vZGF0YS9jb21tdW5pdHktcGFydG5lcnMuanNvblwiO1xuXG5pbXBvcnQgeyBTZWN0aW9uLCBDb250YWluZXIgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5cbmNvbnN0IENvbW11bml0eVBhcnRuZXJzID0gKCkgPT4gKFxuICA8V3JhcHBlciBpZD1cImNvbW11bml0eXBhcnRuZXJzXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUZXh0R3JvdXA+XG4gICAgICAgIDxUaXRsZT5Db21tdW5pdHkgUGFydG5lcnM8L1RpdGxlPlxuICAgICAgICA8Q2FyZENvbnRhaW5lcj5cbiAgICAgICAgICB7Y29tbXVuaXR5UGFydG5lcnMubWFwKChwYXJ0bmVyLCBpZCkgPT4gKFxuICAgICAgICAgICAgPENhcmQga2V5PXtpZH0+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BhcnRuZXIuaW1hZ2V9IGFsdD17cGFydG5lci5uYW1lfT48L0ltYWdlPlxuICAgICAgICAgICAgICA8TmFtZT57cGFydG5lci5uYW1lfTwvTmFtZT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJkQ29udGFpbmVyPlxuICAgICAgPC9UZXh0R3JvdXA+XG4gICAgPC9Db250YWluZXI+XG4gIDwvV3JhcHBlcj5cbik7XG5cbmNvbnN0IENhcmRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMXJlbSAxcmVtO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIGhlaWdodDogNTAlO1xuICBmbGV4OiAxO1xuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5oM2BcbiAgY29sb3I6IGJsYWNrO1xuYDtcblxuY29uc3QgVGV4dEdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ubWR9KSB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDb21tdW5pdHlQYXJ0bmVycztcbiJdLCJzb3VyY2VSb290IjoiIn0=