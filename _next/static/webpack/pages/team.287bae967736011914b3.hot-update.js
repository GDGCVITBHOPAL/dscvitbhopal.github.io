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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bio, {
        children: member.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Flex, {
        children: [member.social.medium && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.medium,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiMedium"], {
              color: "#000000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, _this), member.social.twitter && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.twitter,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiTwitter"], {
              color: "#55acee"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }, _this), member.social.github && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.github,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiGithub"], {
              color: "#333"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, _this), member.social.linkedin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: member.social.linkedin,
          target: "_blank",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__["SiLinkedin"], {
              color: "#0077b5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbC50c3giXSwibmFtZXMiOlsiTWVtYmVyTW9kYWwiLCJtZW1iZXIiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsInByb2ZpbGUiLCJuYW1lIiwidGl0bGUiLCJiaW8iLCJzb2NpYWwiLCJtZWRpdW0iLCJ0d2l0dGVyIiwiZ2l0aHViIiwibGlua2VkaW4iLCJPdmVybGF5Iiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIkltYWdlIiwiaW1nIiwicHJvcHMiLCJzY3JlZW4iLCJzbSIsIkltYWdlV3JhcHBlciIsIk5hbWUiLCJUaXRsZSIsInN1YlRleHQiLCJCaW8iLCJGbGV4IiwiSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBQ3JELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsOEJBQ0UscUVBQUMsWUFBRDtBQUFBLCtCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVELE1BQU0sQ0FBQ0U7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLElBQUQ7QUFBQSxrQkFBT0YsTUFBTSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixFQUtHSCxNQUFNLENBQUNJLEtBQVAsaUJBQWdCLHFFQUFDLEtB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QVY7TUFBTWEsSTtBQU9OLElBQU1DLEtBQUssR0FBR2YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFDQSxVQUFDRSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY1csT0FBckI7QUFBQSxDQURBLENBQVg7TUFBTUQsSztBQU1OLElBQU1FLEdBQUcsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUNBQ0UsVUFBQ0UsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNXLE9BQXJCO0FBQUEsQ0FERixDQUFUO01BQU1DLEc7QUFLTixJQUFNQyxJQUFJLEdBQUdsQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFWO01BQU1pQixJO0FBTU4sSUFBTUMsSUFBSSxHQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1UUFjYSxVQUFDUyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTixLQUFOLENBQVlPLE1BQVosQ0FBbUJDLEVBQTlCO0FBQUEsQ0FkYixDQUFWO09BQU1PLEk7QUFvQlNoQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLjI4N2JhZTk2NzczNjAxMTkxNGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU2lHaXRodWIsIFNpTGlua2VkaW4sIFNpTWVkaXVtLCBTaVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcblxuY29uc3QgTWVtYmVyTW9kYWwgPSAoeyBtZW1iZXIsIGhhbmRsZU1vZGFsVG9nZ2xlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE92ZXJsYXkgb25DbGljaz17KCkgPT4gaGFuZGxlTW9kYWxUb2dnbGUobnVsbCl9IC8+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPEltYWdlV3JhcHBlcj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXttZW1iZXIucHJvZmlsZX0gLz5cbiAgICAgICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgICAgIDxOYW1lPnttZW1iZXIubmFtZX08L05hbWU+XG4gICAgICAgIHttZW1iZXIudGl0bGUgJiYgPFRpdGxlPnttZW1iZXIudGl0bGV9PC9UaXRsZT59XG5cbiAgICAgICAgPEJpbz57bWVtYmVyLmJpb308L0Jpbz5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAge21lbWJlci5zb2NpYWwubWVkaXVtICYmIChcbiAgICAgICAgICAgIDxhIGhyZWY9e21lbWJlci5zb2NpYWwubWVkaXVtfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPFNpTWVkaXVtIGNvbG9yPVwiIzAwMDAwMFwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttZW1iZXIuc29jaWFsLnR3aXR0ZXIgJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC50d2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPFNpVHdpdHRlciBjb2xvcj1cIiM1NWFjZWVcIiAvPlxuICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bWVtYmVyLnNvY2lhbC5naXRodWIgJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICA8U2lHaXRodWIgY29sb3I9XCIjMzMzXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21lbWJlci5zb2NpYWwubGlua2VkaW4gJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICAgIDxTaUxpbmtlZGluIGNvbG9yPVwiIzAwNzdiNVwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAxO1xuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHApID0+IHAudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAxMDAyO1xuXG4gIG1heC13aWR0aDogMzByZW07XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5zbX0pIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuYDtcblxuY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbmA7XG5cbmNvbnN0IE5hbWUgPSBzdHlsZWQuZGl2YFxuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3Iuc3ViVGV4dH07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuY29uc3QgQmlvID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3Iuc3ViVGV4dH07XG4gIGZvbnQtc2l6ZTogMTZweDtcbmA7XG5cbmNvbnN0IEZsZXggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbmA7XG5cbmNvbnN0IEljb24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbjogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnNtfSkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW46IDAuNnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTWVtYmVyTW9kYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9