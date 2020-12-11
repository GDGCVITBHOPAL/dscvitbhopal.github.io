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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        async: true,
        src: "https://platform.linkedin.com/in.js",
        type: "text/javascript",
        children: "lang: en_US"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 74,
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
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/badges",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Close, {
            children: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmFkZ2VzLy50c3giXSwibmFtZXMiOlsiQmFkZ2UiLCJiYWRnZXMiLCJ1c2VTdGF0ZSIsImltZyIsInNldEltYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJwYXJzZUludCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiYmFkZ2UiLCJib3JkZXIiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwiQ2FyZCIsInN0eWxlZCIsImRpdiIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInByb3BzIiwic2NyZWVuIiwieHMiLCJJbWFnZSIsIkNsb3NlIiwiYnV0dG9uIiwiQnV0dG9uc1dyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBNkNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNKQyxzREFBUSxDQUFTLElBQVQsQ0FESjtBQUFBLE1BQ3JCQyxHQURxQjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFFNUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLE1BQU1DLEVBQUUsR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUYsRUFBZCxDQUFuQjtBQUVBRyx5REFBUyxDQUFDLFlBQU07QUFDZE4sWUFBUSxDQUFDSCxNQUFNLENBQUNNLEVBQUUsR0FBRyxDQUFOLENBQU4sQ0FBZUksS0FBaEIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQSxtREFBa0NKLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBUSxhQUFLLE1BQWI7QUFBYyxXQUFHLEVBQUM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFDRSxhQUFLLE1BRFA7QUFFRSxXQUFHLEVBQUMscUNBRk47QUFHRSxZQUFJLEVBQUMsaUJBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVlFLHFFQUFDLElBQUQ7QUFBQSw4QkFDRSxxRUFBQyxLQUFEO0FBQU8sV0FBRyxFQUFFSixHQUFaO0FBQWlCLFdBQUcsRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxjQUFEO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUNFLGdCQUFJLEVBQUMsK0NBRFA7QUFFRSxxQkFBUyxFQUFDLHNCQUZaO0FBR0UseUJBQVUsT0FIWjtBQUlFLHlCQUFVLHdDQUpaO0FBS0Usd0VBQW1ERSxNQUFNLENBQUNJLEtBQVAsQ0FBYUYsRUFBaEUsQ0FMRjtBQU1FLHdCQUFTLGNBTlg7QUFPRSw2QkFBYyxNQVBoQjtBQVFFLHdCQUFTLE1BUlg7QUFTRSwrQkFBZ0IsT0FUbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBZ0JFO0FBQ0UsYUFBRyxtSEFBNEdGLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRixFQUF6SCx1REFETDtBQUVFLGVBQUssRUFBRTtBQUNMSyxrQkFBTSxFQUFFLE1BREg7QUFFTEMsb0JBQVEsRUFBRSxRQUZMO0FBR0xDLGlCQUFLLEVBQUUsRUFIRjtBQUlMQyxrQkFBTSxFQUFFO0FBSkgsV0FGVDtBQVFFLG1CQUFTLEVBQUMsSUFSWjtBQVNFLHFCQUFXLEVBQUMsR0FUZDtBQVVFLHlCQUFlLEVBQUUsSUFWbkI7QUFXRSxlQUFLLEVBQUM7QUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQTZCRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0UscUVBQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGO0FBQUEsa0JBREY7QUFtREQsQ0E3REQ7O0dBQU1mLEs7VUFFV00scUQ7OztLQUZYTixLO0FBK0ROLElBQU1nQixJQUFJLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNFZBQ00sVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FETixFQUVZLFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjVCxNQUFyQjtBQUFBLENBRlosRUFrQmEsVUFBQ1csS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBbEJiLENBQVY7TUFBTVQsSTtBQXdCTixJQUFNVSxLQUFLLEdBQUdULHlEQUFNLENBQUNkLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUdBS1ksVUFBQ29CLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNILEtBQU4sQ0FBWUksTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxaLENBQVg7TUFBTUMsSztBQVdOLElBQU1DLEtBQUssR0FBR1YseURBQU0sQ0FBQ1csTUFBVjtBQUFBO0FBQUE7QUFBQSwrS0FBWDtNQUFNRCxLO0FBY04sSUFBTUUsY0FBYyxHQUFHWix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhCQUFwQjtNQUFNVyxjOztBQUtTN0Isb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmFkZ2VzL1tpZF0uYTU2Y2JhMjg5NzAwYzEwZTZmOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxudHlwZSBCYWRnZVR5cGUgPSB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbn07XG5cbnR5cGUgQmFkZ2VzRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIGJhZGdlczogQmFkZ2VUeXBlW107XG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBkYXRhOiBCYWRnZXNEYXRhID0gYXdhaXQgaW1wb3J0KFwiLi4vLi4vZGF0YS9iYWRnZXMtZGF0YS5qc29uXCIpO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYmFkZ2VzOiBkYXRhLmRlZmF1bHQuYmFkZ2VzLFxuICAgIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzXG4gIGNvbnN0IGRhdGE6IEJhZGdlc0RhdGEgPSBhd2FpdCBpbXBvcnQoXCIuLi8uLi9kYXRhL2JhZGdlcy1kYXRhLmpzb25cIik7XG5cbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcbiAgY29uc3QgcGF0aHMgPSBkYXRhLmRlZmF1bHQuYmFkZ2VzLm1hcCgoYmFkZ2UsIGlkeCkgPT4gKHtcbiAgICBwYXJhbXM6IHsgaWQ6IChpZHggKyAxKS50b1N0cmluZygpIH0sXG4gIH0pKTtcblxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5jb25zdCBCYWRnZSA9ICh7IGJhZGdlcyB9KSA9PiB7XG4gIGNvbnN0IFtpbWcsIHNldEltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4obnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRJbWFnZShiYWRnZXNbaWQgLSAxXS5iYWRnZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntgRFNDIFZJVCBCaG9wYWwgLSBCYWRnZSAke2lkfWB9PC90aXRsZT5cbiAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGFzeW5jXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9wbGF0Zm9ybS5saW5rZWRpbi5jb20vaW4uanNcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICA+XG4gICAgICAgICAgbGFuZzogZW5fVVNcbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9XCJCYWRnZVwiIC8+XG4gICAgICAgIDxCdXR0b25zV3JhcHBlcj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/cmVmX3NyYz10d3NyYyU1RXRmd1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR3aXR0ZXItc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBkYXRhLXRleHQ9XCJKdXN0IGVhcm5lZCBteSBEU0MgVklUIEJob3BhbCBCYWRnZSEhIFwiXG4gICAgICAgICAgICAgIGRhdGEtdXJsPXtgaHR0cHM6Ly9kc2N2aXRiaG9wYWwuZ2l0aHViLmlvL2JhZGdlcy8ke3JvdXRlci5xdWVyeS5pZH1gfVxuICAgICAgICAgICAgICBkYXRhLXZpYT1cImRzY3ZpdGJob3BhbFwiXG4gICAgICAgICAgICAgIGRhdGEtaGFzaHRhZ3M9XCIjZHNjXCJcbiAgICAgICAgICAgICAgZGF0YS1kbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZGF0YS1zaG93LWNvdW50PVwiZmFsc2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUd2VldFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3NoYXJlX2J1dHRvbi5waHA/aHJlZj1odHRwcyUzQSUyRiUyRmRzY3ZpdGJob3BhbC5naXRodWIuaW8lMkZiYWRnZXMlMkYke3JvdXRlci5xdWVyeS5pZH0mbGF5b3V0PWJ1dHRvbiZzaXplPWxhcmdlJndpZHRoPTc3JmhlaWdodD0yOCZhcHBJZGB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgd2lkdGg6IDc3LFxuICAgICAgICAgICAgICBoZWlnaHQ6IDI4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHNjcm9sbGluZz1cIm5vXCJcbiAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XG4gICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2JhZGdlc1wiPlxuICAgICAgICAgICAgPENsb3NlPkJhY2s8L0Nsb3NlPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9CdXR0b25zV3JhcHBlcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMzByZW07XG4gIGhlaWdodDogMzVyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgcGFkZGluZzogMnJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00NSUpO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIHdpZHRoOiAyMnJlbTtcbiAgICBoZWlnaHQ6IDI4cmVtO1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAyNHJlbTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICB3aWR0aDogMTdyZW07XG4gICAgaGVpZ2h0OiAxN3JlbTtcbiAgfVxuYDtcblxuY29uc3QgQ2xvc2UgPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogNzZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIH1cbmA7XG5cbmNvbnN0IEJ1dHRvbnNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9