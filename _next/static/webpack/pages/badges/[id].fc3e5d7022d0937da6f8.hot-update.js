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
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");



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
        lineNumber: 65,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        async: true,
        src: "https://platform.twitter.com/widgets.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/badges",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Close, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiCloseFill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
        src: img,
        alt: "Badge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
            lineNumber: 79,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 93,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LinkedInButton, {
          href: "https://www.linkedin.com/sharing/share-offsite/?url=https://dscvitbhopal.github.io/badges/".concat(router.query.id),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiLinkedinFill"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, _this), "Share"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
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
})(["font-size:16px;border:none;outline:none;cursor:pointer;"]);
_c4 = Close;
var ButtonsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__ButtonsWrapper",
  componentId: "sc-1hgrc1u-3"
})(["display:flex;gap:1rem;"]);
_c5 = ButtonsWrapper;
var LinkedInButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "id__LinkedInButton",
  componentId: "sc-1hgrc1u-4"
})(["text-decoration:none;color:white;width:77px;height:28px;background:#0e76a8;display:flex;justify-content:center;align-items:center;border-radius:4px;font-size:13px;font-weight:bold;"]);
_c6 = LinkedInButton;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "id__Icon",
  componentId: "sc-1hgrc1u-5"
})(["margin-right:4px;font-size:16px;"]);
_c7 = Icon;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Badge);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Badge");
$RefreshReg$(_c2, "Card");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "Close");
$RefreshReg$(_c5, "ButtonsWrapper");
$RefreshReg$(_c6, "LinkedInButton");
$RefreshReg$(_c7, "Icon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJiYWRnZXMiLCJ1c2VTdGF0ZSIsImltZyIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiYmFkZ2UiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FyZCIsInN0eWxlZCIsImRpdiIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInByb3BzIiwic2NyZWVuIiwieHMiLCJJbWFnZSIsIkNsb3NlIiwiYnV0dG9uIiwiQnV0dG9uc1dyYXBwZXIiLCJMaW5rZWRJbkJ1dHRvbiIsImEiLCJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQTZDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFnQjtBQUFBOztBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFBQSxrQkFDSkMsc0RBQVEsQ0FBUyxJQUFULENBREo7QUFBQSxNQUNyQkMsR0FEcUI7QUFBQSxNQUNoQkMsUUFEZ0I7O0FBRTVCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDSSxLQUFQLENBQWFGLEVBQWQsQ0FBbkI7QUFFQUcseURBQVMsQ0FBQyxZQUFNO0FBQ2ROLFlBQVEsQ0FBQ0gsTUFBTSxDQUFDTSxFQUFFLEdBQUcsQ0FBTixDQUFOLENBQWVJLEtBQWhCLENBQVI7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsbURBQWtDSixFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEs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TSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhCQUFwQjtNQUFNVyxjO0FBS04sSUFBTUMsY0FBYyxHQUFHYix5REFBTSxDQUFDYyxDQUFWO0FBQUE7QUFBQTtBQUFBLDRMQUFwQjtNQUFNRCxjO0FBY04sSUFBTUUsSUFBSSxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdDQUFWO01BQU1jLEk7O0FBS1NoQyxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9iYWRnZXMvW2lkXS5mYzNlNWQ3MDIyZDA5MzdkYTZmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBSaUxpbmtlZGluRmlsbCwgUmlDbG9zZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxudHlwZSBCYWRnZVR5cGUgPSB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbn07XG5cbnR5cGUgQmFkZ2VzRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGJhZGdlczogQmFkZ2VUeXBlW107XG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBkYXRhOiBCYWRnZXNEYXRhID0gYXdhaXQgaW1wb3J0KFwiLi4vLi4vZGF0YS9iYWRnZXMtZGF0YS5qc29uXCIpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmFkZ2VzOiBkYXRhLmRlZmF1bHQuYmFkZ2VzLFxuICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzXG4gIGNvbnN0IGRhdGE6IEJhZGdlc0RhdGEgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9kYXRhL2JhZGdlcy1kYXRhLmpzb25cIik7XG5cbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcbiAgY29uc3QgcGF0aHMgPSBkYXRhLmRlZmF1bHQuYmFkZ2VzLm1hcCgoYmFkZ2UpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBiYWRnZS5pZCB9LFxuICB9KSk7XG5cbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuY29uc3QgQmFkZ2UgPSAoeyBiYWRnZXMgfSkgPT4ge1xuICBjb25zdCBbaW1nLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBpZCA9IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCBhcyBzdHJpbmcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SW1hZ2UoYmFkZ2VzW2lkIC0gMV0uYmFkZ2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57YERTQyBWSVQgQmhvcGFsIC0gQmFkZ2UgJHtpZH1gfTwvdGl0bGU+XG4gICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS50d2l0dGVyLmNvbS93aWRnZXRzLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2JhZGdlc1wiPlxuICAgICAgICAgICAgPENsb3NlPlxuICAgICAgICAgICAgICA8UmlDbG9zZUZpbGwgLz5cbiAgICAgICAgICAgIDwvQ2xvc2U+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9XCJCYWRnZVwiIC8+XG4gICAgICAgIDxCdXR0b25zV3JhcHBlcj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/cmVmX3NyYz10d3NyYyU1RXRmd1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJKdXN0IGVhcm5lZCBteSBEU0MgVklUIEJob3BhbCBCYWRnZSEhIFwiXG4gICAgICAgICAgICAgIGRhdGEtdXJsPXtgaHR0cHM6Ly9kc2N2aXRiaG9wYWwuZ2l0aHViLmlvL2JhZGdlcy8ke3JvdXRlci5xdWVyeS5pZH1gfVxuICAgICAgICAgICAgICBkYXRhLXZpYT1cImRzY3ZpdGJob3BhbFwiXG4gICAgICAgICAgICAgIGRhdGEtaGFzaHRhZ3M9XCIjZHNjXCJcbiAgICAgICAgICAgICAgZGF0YS1kbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZGF0YS1zaG93LWNvdW50PVwiZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUd2VldFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3NoYXJlX2J1dHRvbi5waHA/aHJlZj1odHRwcyUzQSUyRiUyRmRzY3ZpdGJob3BhbC5naXRodWIuaW8lMkZiYWRnZXMlMkYke3JvdXRlci5xdWVyeS5pZH0mbGF5b3V0PWJ1dHRvbiZzaXplPWxhcmdlJndpZHRoPTc3JmhlaWdodD0yOCZhcHBJZGB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IDc3LFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICA8TGlua2VkSW5CdXR0b25cbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmluZy9zaGFyZS1vZmZzaXRlLz91cmw9aHR0cHM6Ly9kc2N2aXRiaG9wYWwuZ2l0aHViLmlvL2JhZGdlcy8ke3JvdXRlci5xdWVyeS5pZH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICA8UmlMaW5rZWRpbkZpbGwgLz5cbiAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIFNoYXJlXG4gICAgICAgICAgPC9MaW5rZWRJbkJ1dHRvbj5cbiAgICAgICAgPC9CdXR0b25zV3JhcHBlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzVyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgcGFkZGluZzogMnJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIHdpZHRoOiAyMnJlbTtcbiAgICBoZWlnaHQ6IDI4cmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAyNHJlbTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICB3aWR0aDogMTdyZW07XG4gICAgaGVpZ2h0OiAxN3JlbTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvc2UgPSBzdHlsZWQuYnV0dG9uYFxuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgQnV0dG9uc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG5gO1xuXG5jb25zdCBMaW5rZWRJbkJ1dHRvbiA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogIzBlNzZhODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmNvbnN0IEljb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9