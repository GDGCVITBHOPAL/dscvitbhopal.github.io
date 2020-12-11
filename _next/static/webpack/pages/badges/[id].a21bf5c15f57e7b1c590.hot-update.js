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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
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
            lineNumber: 70,
            columnNumber: 13
          }, _this)
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
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkedInButton, {
          href: "https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/badges/".concat(router.query.id),
          children: "Share"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/badges",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Close, {
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
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
})(["width:77px;font-size:13px;height:28px;border-radius:3px;border:none;outline:none;cursor:pointer;&:hover{background:#e0e0e0;}"]);
_c4 = Close;
var ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__ButtonsWrapper",
  componentId: "sc-1hgrc1u-3"
})(["display:flex;gap:1rem;"]);
_c5 = ButtonsWrapper;
var LinkedInButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "id__LinkedInButton",
  componentId: "sc-1hgrc1u-4"
})(["text-decoration:none;color:white;width:77px;height:28px;background:#0e76a8;display:flex;justify-content:center;align-items:center;"]);
_c6 = LinkedInButton;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Badge);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "Close");
$RefreshReg$(_c5, "ButtonsWrapper");
$RefreshReg$(_c6, "LinkedInButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJiYWRnZXMiLCJ1c2VTdGF0ZSIsImltZyIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiYmFkZ2UiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FyZCIsInN0eWxlZCIsImRpdiIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInByb3BzIiwic2NyZWVuIiwieHMiLCJJbWFnZSIsIkNsb3NlIiwiYnV0dG9uIiwiQnV0dG9uc1dyYXBwZXIiLCJMaW5rZWRJbkJ1dHRvbiIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBNkNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNKQyxzREFBUSxDQUFTLElBQVQsQ0FESjtBQUFBLE1BQ3JCQyxHQURxQjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFFNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUYsRUFBZCxDQUFuQjtBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZE4sWUFBUSxDQUFDSCxNQUFNLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQU4sQ0FBZUksS0FBaEIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxtREFBa0NKLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxhQUFLLE1BQWI7QUFB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MTVmNTdlN2IxYzU5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG50eXBlIEJhZGdlVHlwZSA9IHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhZGdlPzogc3RyaW5nO1xufTtcblxudHlwZSBCYWRnZXNEYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgYmFkZ2VzOiBCYWRnZVR5cGVbXTtcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGRhdGE6IEJhZGdlc0RhdGEgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9kYXRhL2JhZGdlcy1kYXRhLmpzb25cIik7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBiYWRnZXM6IGRhdGEuZGVmYXVsdC5iYWRnZXMsXG4gICAgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcbiAgY29uc3QgZGF0YTogQmFkZ2VzRGF0YSA9IGF3YWl0IGltcG9ydChcIi4uLy4uL2RhdGEvYmFkZ2VzLWRhdGEuanNvblwiKTtcblxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xuICBjb25zdCBwYXRocyA9IGRhdGEuZGVmYXVsdC5iYWRnZXMubWFwKChiYWRnZSkgPT4gKHtcbiAgICBwYXJhbXM6IHsgaWQ6IGJhZGdlLmlkIH0sXG4gIH0pKTtcblxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5jb25zdCBCYWRnZSA9ICh7IGJhZGdlcyB9KSA9PiB7XG4gIGNvbnN0IFtpbWcsIHNldEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbWFnZShiYWRnZXNbaWQgLSAxXS5iYWRnZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgRFNDIFZJVCBCaG9wYWwgLSBCYWRnZSAke2lkfWB9PC90aXRsZT5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIj48L3NjcmlwdD5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGFsdD1cIkJhZGdlXCIgLz5cbiAgICAgICAgPEJ1dHRvbnNXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zaGFyZT9yZWZfc3JjPXR3c3JjJTVFdGZ3XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHdpdHRlci1zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgICBkYXRhLXNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGV4dD1cIkp1c3QgZWFybmVkIG15IERTQyBWSVQgQmhvcGFsIEJhZGdlISEgXCJcbiAgICAgICAgICAgICAgZGF0YS11cmw9e2BodHRwczovL2RzY3ZpdGJob3BhbC5naXRodWIuaW8vYmFkZ2VzLyR7cm91dGVyLnF1ZXJ5LmlkfWB9XG4gICAgICAgICAgICAgIGRhdGEtdmlhPVwiZHNjdml0YmhvcGFsXCJcbiAgICAgICAgICAgICAgZGF0YS1oYXNodGFncz1cIiNkc2NcIlxuICAgICAgICAgICAgICBkYXRhLWRudD1cInRydWVcIlxuICAgICAgICAgICAgICBkYXRhLXNob3ctY291bnQ9XCJmYWxzZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFR3ZWV0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BsdWdpbnMvc2hhcmVfYnV0dG9uLnBocD9ocmVmPWh0dHBzJTNBJTJGJTJGZHNjdml0YmhvcGFsLmdpdGh1Yi5pbyUyRmJhZGdlcyUyRiR7cm91dGVyLnF1ZXJ5LmlkfSZsYXlvdXQ9YnV0dG9uJnNpemU9bGFyZ2Umd2lkdGg9NzcmaGVpZ2h0PTI4JmFwcElkYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgICB3aWR0aDogNzcsXG4gICAgICAgICAgICAgIGhlaWdodDogMjgsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlbj17dHJ1ZX1cbiAgICAgICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgIDxMaW5rZWRJbkJ1dHRvblxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyaW5nL3NoYXJlLW9mZnNpdGUvP3VybD1odHRwczovL2RzY3ZpdGJob3BhbC5naXRodWIuaW8vYmFkZ2VzLyR7cm91dGVyLnF1ZXJ5LmlkfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2hhcmVcbiAgICAgICAgICA8L0xpbmtlZEluQnV0dG9uPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9iYWRnZXNcIj5cbiAgICAgICAgICAgIDxDbG9zZT5CYWNrPC9DbG9zZT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQnV0dG9uc1dyYXBwZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcmVtO1xuICBoZWlnaHQ6IDM1cmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIHBhZGRpbmc6IDJyZW07XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDUlKTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICB3aWR0aDogMjJyZW07XG4gICAgaGVpZ2h0OiAyOHJlbTtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogMjRyZW07XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ueHN9KSB7XG4gICAgd2lkdGg6IDE3cmVtO1xuICAgIGhlaWdodDogMTdyZW07XG4gIH1cbmA7XG5cbmNvbnN0IENsb3NlID0gc3R5bGVkLmJ1dHRvbmBcbiAgd2lkdGg6IDc3cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICB9XG5gO1xuXG5jb25zdCBCdXR0b25zV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbmA7XG5cbmNvbnN0IExpbmtlZEluQnV0dG9uID0gc3R5bGVkLmFgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNzdweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGU3NmE4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==