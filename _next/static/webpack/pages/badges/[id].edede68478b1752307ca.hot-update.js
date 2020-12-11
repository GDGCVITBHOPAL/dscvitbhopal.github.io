webpackHotUpdate_N_E("pages/badges/[id]",{

/***/ "./pages/badges/[id].tsx":
/*!*******************************!*\
  !*** ./pages/badges/[id].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/badges/[id].tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Badge = function Badge(_ref) {
  _s();

  var badges = _ref.badges;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      img = _useState[0],
      setImage = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = parseInt(router.query.id);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setImage(badges[id - 1].badge);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "DSC VIT Bhopal - Badge ".concat(id)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
        src: img,
        alt: "Badge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonsWrapper, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://twitter.com/share?ref_src=twsrc%5Etfw",
          className: "twitter-share-button",
          "data-size": "large",
          "data-text": "Just earned my DSC VIT Bhopal Badge!! ",
          "data-url": "https://dscvitbhopal.github.io/badges/".concat(router.query.id),
          "data-via": "dscvitbhopal",
          "data-hashtags": "#dsc",
          "data-dnt": "true",
          "data-show-count": "false",
          children: "Tweet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("iframe", {
          src: "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdscvitbhopal.github.io%2Fbadges%2F".concat(router.query.id, "&layout=button&size=large&width=77&height=28&appId"),
          style: {
            border: "none",
            overflow: "hidden",
            width: 77,
            height: 28
          },
          scrolling: "no",
          frameBorder: "0",
          allowFullScreen: true,
          allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/badges",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Close, {
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Badge, "9h2ngG5LxMBOzcH7cUge+prrcX0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Badge;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__Card",
  componentId: "sc-1hgrc1u-0"
})(["background:", ";border:1px solid ", ";border-radius:5px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:30rem;height:35rem;box-shadow:0px 0px 10px 0px rgba(0,0,0,0.02);padding:2rem;position:absolute;left:50%;top:50%;transform:translate(-50%,-45%);@media (max-width:", "){width:22rem;height:28rem;}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
}, function (props) {
  return props.theme.screen.xs;
});
_c2 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "id__Image",
  componentId: "sc-1hgrc1u-1"
})(["width:24rem;height:24rem;object-fit:contain;@media (max-width:", "){width:17rem;height:17rem;}"], function (props) {
  return props.theme.screen.xs;
});
_c3 = Image;
var Close = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "id__Close",
  componentId: "sc-1hgrc1u-2"
})(["width:76px;font-size:13px;height:26px;border-radius:3px;border:none;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.2);outline:none;cursor:pointer;&:hover{background:#e0e0e0;}"]);
_c4 = Close;
var ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__ButtonsWrapper",
  componentId: "sc-1hgrc1u-3"
})(["display:flex;gap:1rem;"]);
_c5 = ButtonsWrapper;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Badge);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "Close");
$RefreshReg$(_c5, "ButtonsWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJiYWRnZXMiLCJ1c2VTdGF0ZSIsImltZyIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiYmFkZ2UiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FyZCIsInN0eWxlZCIsImRpdiIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInByb3BzIiwic2NyZWVuIiwieHMiLCJJbWFnZSIsIkNsb3NlIiwiYnV0dG9uIiwiQnV0dG9uc1dyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBNkNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNKQyxzREFBUSxDQUFTLElBQVQsQ0FESjtBQUFBLE1BQ3JCQyxHQURxQjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFFNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUYsRUFBZCxDQUFuQjtBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZE4sWUFBUSxDQUFDSCxNQUFNLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQU4sQ0FBZUksS0FBaEIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxtREFBa0NKLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxhQUFLLE1BQWI7QUFBYyxXQUFHLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UscUVBQUMsSUFBRDtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxXQUFHLEVBQUVKLEdBQVo7QUFBaUIsV0FBRyxFQUFDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLGNBQUQ7QUFBQSxnQ0FDRTtBQUNFLGNBQUksRUFBQywrQ0FEUDtBQUVFLG1CQUFTLEVBQUMsc0JBRlo7QUFHRSx1QkFBVSxPQUhaO0FBSUUsdUJBQVUsd0NBSlo7QUFLRSxzRUFBbURFLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRixFQUFoRSxDQUxGO0FBTUUsc0JBQVMsY0FOWDtBQU9FLDJCQUFjLE1BUGhCO0FBUUUsc0JBQVMsTUFSWDtBQVNFLDZCQUFnQixPQVRsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQWNFO0FBQ0UsYUFBRyxtSEFBNEdGLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRixFQUF6SCx1REFETDtBQUVFLGVBQUssRUFBRTtBQUNMSyxrQkFBTSxFQUFFLE1BREg7QUFFTEMsb0JBQVEsRUFBRSxRQUZMO0FBR0xDLGlCQUFLLEVBQUUsRUFIRjtBQUlMQyxrQkFBTSxFQUFFO0FBSkgsV0FGVDtBQVFFLG1CQUFTLEVBQUMsSUFSWjtBQVNFLHFCQUFXLEVBQUMsR0FUZDtBQVVFLHlCQUFlLEVBQUUsSUFWbkI7QUFXRSxlQUFLLEVBQUM7QUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRGLGVBMkJFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDRSxxRUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQSxrQkFERjtBQTBDRCxDQXBERDs7R0FBTWYsSztVQUVXTSxxRDs7O0tBRlhOLEs7QUFzRE4sSUFBTWdCLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0VkFDTSxVQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0MsVUFBckI7QUFBQSxDQUROLEVBRVksVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNULE1BQXJCO0FBQUEsQ0FGWixFQWtCYSxVQUFDVyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDSCxLQUFOLENBQVlJLE1BQVosQ0FBbUJDLEVBQTlCO0FBQUEsQ0FsQmIsQ0FBVjtNQUFNVCxJO0FBd0JOLElBQU1VLEtBQUssR0FBR1QseURBQU0sQ0FBQ2QsR0FBVjtBQUFBO0FBQUE7QUFBQSx1R0FLWSxVQUFDb0IsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBTFosQ0FBWDtNQUFNQyxLO0FBV04sSUFBTUMsS0FBSyxHQUFHVix5REFBTSxDQUFDVyxNQUFWO0FBQUE7QUFBQTtBQUFBLCtLQUFYO01BQU1ELEs7QUFjTixJQUFNRSxjQUFjLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEJBQXBCO01BQU1XLGM7O0FBS1M3QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYWRnZXMvW2lkXS5lZGVkZTY4NDc4YjE3NTIzMDdjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIEJhZGdlVHlwZSA9IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xufTtcblxudHlwZSBCYWRnZXNEYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgYmFkZ2VzOiBCYWRnZVR5cGVbXTtcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRhdGE6IEJhZGdlc0RhdGEgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9kYXRhL2JhZGdlcy1kYXRhLmpzb25cIik7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBiYWRnZXM6IGRhdGEuZGVmYXVsdC5iYWRnZXMsXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcbiAgY29uc3QgZGF0YTogQmFkZ2VzRGF0YSA9IGF3YWl0IGltcG9ydChcIi4uLy4uL2RhdGEvYmFkZ2VzLWRhdGEuanNvblwiKTtcblxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xuICBjb25zdCBwYXRocyA9IGRhdGEuZGVmYXVsdC5iYWRnZXMubWFwKChiYWRnZSwgaWR4KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogKGlkeCArIDEpLnRvU3RyaW5nKCkgfSxcbiAgfSkpO1xuXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmNvbnN0IEJhZGdlID0gKHsgYmFkZ2VzIH0pID0+IHtcbiAgY29uc3QgW2ltZywgc2V0SW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaWQgPSBwYXJzZUludChyb3V0ZXIucXVlcnkuaWQgYXMgc3RyaW5nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEltYWdlKGJhZGdlc1tpZCAtIDFdLmJhZGdlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2BEU0MgVklUIEJob3BhbCAtIEJhZGdlICR7aWR9YH08L3RpdGxlPlxuICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PVwiQmFkZ2VcIiAvPlxuICAgICAgICA8QnV0dG9uc1dyYXBwZXI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NoYXJlP3JlZl9zcmM9dHdzcmMlNUV0ZndcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlci1zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgZGF0YS10ZXh0PVwiSnVzdCBlYXJuZWQgbXkgRFNDIFZJVCBCaG9wYWwgQmFkZ2UhISBcIlxuICAgICAgICAgICAgZGF0YS11cmw9e2BodHRwczovL2RzY3ZpdGJob3BhbC5naXRodWIuaW8vYmFkZ2VzLyR7cm91dGVyLnF1ZXJ5LmlkfWB9XG4gICAgICAgICAgICBkYXRhLXZpYT1cImRzY3ZpdGJob3BhbFwiXG4gICAgICAgICAgICBkYXRhLWhhc2h0YWdzPVwiI2RzY1wiXG4gICAgICAgICAgICBkYXRhLWRudD1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1zaG93LWNvdW50PVwiZmFsc2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFR3ZWV0XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3NoYXJlX2J1dHRvbi5waHA/aHJlZj1odHRwcyUzQSUyRiUyRmRzY3ZpdGJob3BhbC5naXRodWIuaW8lMkZiYWRnZXMlMkYke3JvdXRlci5xdWVyeS5pZH0mbGF5b3V0PWJ1dHRvbiZzaXplPWxhcmdlJndpZHRoPTc3JmhlaWdodD0yOCZhcHBJZGB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IDc3LFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2JhZGdlc1wiPlxuICAgICAgICAgICAgPENsb3NlPkJhY2s8L0Nsb3NlPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b25zV3JhcHBlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzVyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgcGFkZGluZzogMnJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIHdpZHRoOiAyMnJlbTtcbiAgICBoZWlnaHQ6IDI4cmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAyNHJlbTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICB3aWR0aDogMTdyZW07XG4gICAgaGVpZ2h0OiAxN3JlbTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvc2UgPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNzZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbnNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9