webpackHotUpdate_N_E("pages/team",{

/***/ "./components/modal/MemberModal.tsx":
/*!******************************************!*\
  !*** ./components/modal/MemberModal.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");



var _jsxFileName = "/home/smitbarmase/projects/dscvitbhopal.github.io/components/modal/MemberModal.tsx",
    _this = undefined;





var MemberModal = function MemberModal(_ref) {
  var member = _ref.member,
      handleModalToggle = _ref.handleModalToggle;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Overlay, {
      onClick: function onClick() {
        return handleModalToggle(null);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Card, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ImageWrapper, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Image, {
          src: member.profile
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Name, {
        children: member.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), member.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        children: member.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 26
      }, _this), member.bio && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bio, {
        children: member.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 24
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flex, {
        children: [member.social.medium && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.medium,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiMedium"], {
              color: "#000000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, _this), member.social.twitter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.twitter,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiTwitter"], {
              color: "#55acee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, _this), member.social.github && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.github,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiGithub"], {
              color: "#333"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), member.social.linkedin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.linkedin,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiLinkedin"], {
              color: "#0077b5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = MemberModal;
var Overlay = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Overlay",
  componentId: "sc-1dic6q1-0"
})(["background:rgba(0,0,0,0.8);width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:1001;"]);
_c2 = Overlay;
var Card = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Card",
  componentId: "sc-1dic6q1-1"
})(["background:", ";border:1px solid ", ";border-radius:5px;padding:2rem;box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2);position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1002;max-width:30rem;"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.border;
});
_c3 = Card;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "MemberModal__Image",
  componentId: "sc-1dic6q1-2"
})(["width:140px;height:140px;border-radius:50%;object-fit:cover;@media (max-width:", "){width:100px;height:100px;}"], function (props) {
  return props.theme.screen.sm;
});
_c4 = Image;
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__ImageWrapper",
  componentId: "sc-1dic6q1-3"
})(["display:flex;justify-content:center;margin-bottom:2em;"]);
_c5 = ImageWrapper;
var Name = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Name",
  componentId: "sc-1dic6q1-4"
})(["font-weight:700;font-size:25px;text-align:center;margin-bottom:1rem;"]);
_c6 = Name;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Title",
  componentId: "sc-1dic6q1-5"
})(["color:", ";font-size:20px;text-align:center;"], function (p) {
  return p.theme.color.subText;
});
_c7 = Title;
var Bio = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Bio",
  componentId: "sc-1dic6q1-6"
})(["color:", ";font-size:16px;"], function (p) {
  return p.theme.color.subText;
});
_c8 = Bio;
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Flex",
  componentId: "sc-1dic6q1-7"
})(["display:flex;justify-content:space-around;margin-top:3rem;"]);
_c9 = Flex;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "MemberModal__Icon",
  componentId: "sc-1dic6q1-8"
})(["background:#ffffff;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.2);padding:1rem;border-radius:50%;font-size:25px;margin:1rem;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;}@media (max-width:", "){font-size:20px;margin:0.6rem;}"], function (props) {
  return props.theme.screen.sm;
});
_c10 = Icon;
/* harmony default export */ __webpack_exports__["default"] = (MemberModal);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "MemberModal");
$RefreshReg$(_c2, "Overlay");
$RefreshReg$(_c3, "Card");
$RefreshReg$(_c4, "Image");
$RefreshReg$(_c5, "ImageWrapper");
$RefreshReg$(_c6, "Name");
$RefreshReg$(_c7, "Title");
$RefreshReg$(_c8, "Bio");
$RefreshReg$(_c9, "Flex");
$RefreshReg$(_c10, "Icon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbC50c3giXSwibmFtZXMiOlsiTWVtYmVyTW9kYWwiLCJtZW1iZXIiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsInByb2ZpbGUiLCJuYW1lIiwidGl0bGUiLCJiaW8iLCJzb2NpYWwiLCJtZWRpdW0iLCJ0d2l0dGVyIiwiZ2l0aHViIiwibGlua2VkaW4iLCJPdmVybGF5Iiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIkltYWdlIiwiaW1nIiwicHJvcHMiLCJzY3JlZW4iLCJzbSIsIkltYWdlV3JhcHBlciIsIk5hbWUiLCJUaXRsZSIsInN1YlRleHQiLCJCaW8iLCJGbGV4IiwiSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBQ3JELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsOEJBQ0UscUVBQUMsWUFBRDtBQUFBLCtCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVELE1BQU0sQ0FBQ0U7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLElBQUQ7QUFBQSxrQkFBT0YsTUFBTSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtHSCxNQUFNLENBQUNJLEtBQVAsaUJBQWdCLHFFQUFDLEtB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LEdBQVY7QUFBQTtBQUFBO0FBQUEsNEVBQVY7TUFBTWEsSTtBQU9OLElBQU1DLEtBQUssR0FBR2YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFDQSxVQUFDRSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY1csT0FBckI7QUFBQSxDQURBLENBQVg7TUFBTUQsSztBQU1OLElBQU1FLEdBQUcsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUNBQ0UsVUFBQ0UsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNXLE9BQXJCO0FBQUEsQ0FERixDQUFUO01BQU1DLEc7QUFLTixJQUFNQyxJQUFJLEdBQUdsQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFWO01BQU1pQixJO0FBTU4sSUFBTUMsSUFBSSxHQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1UUFjYSxVQUFDUyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTixLQUFOLENBQVlPLE1BQVosQ0FBbUJDLEVBQTlCO0FBQUEsQ0FkYixDQUFWO09BQU1PLEk7QUFvQlNoQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLjQ2Nzk3MjQ3NGMwMjJkMGYwYWU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2lHaXRodWIsIFNpTGlua2VkaW4sIFNpTWVkaXVtLCBTaVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcblxuY29uc3QgTWVtYmVyTW9kYWwgPSAoeyBtZW1iZXIsIGhhbmRsZU1vZGFsVG9nZ2xlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE92ZXJsYXkgb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWxUb2dnbGUobnVsbCl9IC8+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXttZW1iZXIucHJvZmlsZX0gLz5cbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgICAgIDxOYW1lPnttZW1iZXIubmFtZX08L05hbWU+XG4gICAgICAgIHttZW1iZXIudGl0bGUgJiYgPFRpdGxlPnttZW1iZXIudGl0bGV9PC9UaXRsZT59XG4gICAgICAgIHttZW1iZXIuYmlvICYmIDxCaW8+e21lbWJlci5iaW99PC9CaW8+fVxuICAgICAgICA8RmxleD5cbiAgICAgICAgICB7bWVtYmVyLnNvY2lhbC5tZWRpdW0gJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC5tZWRpdW19IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICA8U2lNZWRpdW0gY29sb3I9XCIjMDAwMDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21lbWJlci5zb2NpYWwudHdpdHRlciAmJiAoXG4gICAgICAgICAgICA8YSBocmVmPXttZW1iZXIuc29jaWFsLnR3aXR0ZXJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICA8U2lUd2l0dGVyIGNvbG9yPVwiIzU1YWNlZVwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttZW1iZXIuc29jaWFsLmdpdGh1YiAmJiAoXG4gICAgICAgICAgICA8YSBocmVmPXttZW1iZXIuc29jaWFsLmdpdGh1Yn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICAgIDxTaUdpdGh1YiBjb2xvcj1cIiMzMzNcIiAvPlxuICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bWVtYmVyLnNvY2lhbC5saW5rZWRpbiAmJiAoXG4gICAgICAgICAgICA8YSBocmVmPXttZW1iZXIuc29jaWFsLmxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPFNpTGlua2VkaW4gY29sb3I9XCIjMDA3N2I1XCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDE7XG5gO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHsocCkgPT4gcC50aGVtZS5jb2xvci5ib3JkZXJ9O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDEwMDI7XG5cbiAgbWF4LXdpZHRoOiAzMHJlbTtcbmA7XG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDE0MHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnNtfSkge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5zdWJUZXh0fTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBCaW8gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5zdWJUZXh0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuYDtcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbjogMC42cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=