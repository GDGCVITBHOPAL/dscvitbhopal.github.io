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



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/components/modal/MemberModal.tsx",
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
        children: member.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Bio, {
        children: member.bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
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
})(["width:140px;height:140px;border-radius:50%;@media (max-width:", "){width:100px;height:100px;}"], function (props) {
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
})(["background:#ffffff;box-shadow:0px 0px 15px 0px rgba(0,0,0,0.2);padding:1rem;border-radius:50%;font-size:25px;margin:1rem;display:flex;justify-content:center;align-items:center;&:hover{cursor:pointer;}@media (max-width:", "){font-size:20px;}"], function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbC50c3giXSwibmFtZXMiOlsiTWVtYmVyTW9kYWwiLCJtZW1iZXIiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsInByb2ZpbGUiLCJuYW1lIiwidGl0bGUiLCJiaW8iLCJzb2NpYWwiLCJtZWRpdW0iLCJ0d2l0dGVyIiwiZ2l0aHViIiwibGlua2VkaW4iLCJPdmVybGF5Iiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlciIsIkltYWdlIiwiaW1nIiwicHJvcHMiLCJzY3JlZW4iLCJzbSIsIkltYWdlV3JhcHBlciIsIk5hbWUiLCJUaXRsZSIsInN1YlRleHQiLCJCaW8iLCJGbGV4IiwiSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBbUM7QUFBQSxNQUFoQ0MsTUFBZ0MsUUFBaENBLE1BQWdDO0FBQUEsTUFBeEJDLGlCQUF3QixRQUF4QkEsaUJBQXdCO0FBQ3JELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsT0FBRDtBQUFTLGFBQU8sRUFBRTtBQUFBLGVBQU1BLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxJQUFEO0FBQUEsOEJBQ0UscUVBQUMsWUFBRDtBQUFBLCtCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFHLEVBQUVELE1BQU0sQ0FBQ0U7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLHFFQUFDLElBQUQ7QUFBQSxrQkFBT0YsTUFBTSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQUtFLHFFQUFDLEtBQUQ7QUFBQSxrQkFBUUgsTUFBTSxDQUFDSTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FLHFFQUFDLEdBQUQ7QUFBQSxrQkFBTUosTUFBTSxDQUFDSztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FLHFFQUFDLElBQUQ7QUFBQSxtQkFDR0wsTUFBTSxDQUFDTSxNQUFQLENBQWNDLE1BQWQsaUJBQ0M7QUFBRyxjQUFJLEVBQUVQLE1BQU0sQ0FBQ00sTUFBUCxDQUFjQyxNQUF2QjtBQUErQixnQkFBTSxFQUFDLFFBQXRDO0FBQUEsaUNBQ0UscUVBQUMsSUFBRDtBQUFBLG1DQUNFLHFFQUFDLHVEQUFEO0FBQVUsbUJBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosRUFRR1AsTUFBTSxDQUFDTSxNQUFQLENBQWNFLE9BQWQsaUJBQ0M7QUFBRyxjQUFJLEVBQUVSLE1BQU0sQ0FBQ00sTUFBUCxDQUFjRSxPQUF2QjtBQUFnQyxnQkFBTSxFQUFDLFFBQXZDO0FBQUEsaUNBQ0UscUVBQUMsSUFBRDtBQUFBLG1DQUNFLHFFQUFDLHdEQUFEO0FBQVcsbUJBQUssRUFBQztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEosRUFlR1IsTUFBTSxDQUFDTSxNQUFQLENBQWNHLE1BQWQsaUJBQ0M7QUFBRyxjQUFJLEVBQUVULE1BQU0sQ0FBQ00sTUFBUCxDQUFjRyxNQUF2QjtBQUErQixnQkFBTSxFQUFDLFFBQXRDO0FBQUEsaUNBQ0UscUVBQUMsSUFBRDtBQUFBLG1DQUNFLHFFQUFDLHVEQUFEO0FBQVUsbUJBQUssRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJKLEVBc0JHVCxNQUFNLENBQUNNLE1BQVAsQ0FBY0ksUUFBZCxpQkFDQztBQUFHLGNBQUksRUFBRVYsTUFBTSxDQUFDTSxNQUFQLENBQWNJLFFBQXZCO0FBQWlDLGdCQUFNLEVBQUMsUUFBeEM7QUFBQSxpQ0FDRSxxRUFBQyxJQUFEO0FBQUEsbUNBQ0UscUVBQUMseURBQUQ7QUFBWSxtQkFBSyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQSxrQkFERjtBQTJDRCxDQTVDRDs7S0FBTVgsVztBQThDTixJQUFNWSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscUdBQWI7TUFBTUYsTztBQVVOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTkFDTSxVQUFDRSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0MsVUFBckI7QUFBQSxDQUROLEVBRVksVUFBQ0gsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNFLE1BQXJCO0FBQUEsQ0FGWixDQUFWO01BQU1MLEk7QUFnQk4sSUFBTU0sS0FBSyxHQUFHUix5REFBTSxDQUFDUyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNHQUtZLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNOLEtBQU4sQ0FBWU8sTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxaLENBQVg7TUFBTUosSztBQVdOLElBQU1LLFlBQVksR0FBR2IseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4REFBbEI7TUFBTVksWTtBQU1OLElBQU1DLElBQUksR0FBR2QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw0RUFBVjtNQUFNYSxJO0FBT04sSUFBTUMsS0FBSyxHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFEQUNBLFVBQUNFLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjVyxPQUFyQjtBQUFBLENBREEsQ0FBWDtNQUFNRCxLO0FBTU4sSUFBTUUsR0FBRyxHQUFHakIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtQ0FDRSxVQUFDRSxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY1csT0FBckI7QUFBQSxDQURGLENBQVQ7TUFBTUMsRztBQUtOLElBQU1DLElBQUksR0FBR2xCLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQVY7TUFBTWlCLEk7QUFNTixJQUFNQyxJQUFJLEdBQUduQix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlQQWNhLFVBQUNTLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNOLEtBQU4sQ0FBWU8sTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQWRiLENBQVY7T0FBTU8sSTtBQW1CU2hDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uMWI4MmRiYTI2OGRhMzgyNDM3NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTaUdpdGh1YiwgU2lMaW5rZWRpbiwgU2lNZWRpdW0sIFNpVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9zaVwiO1xuXG5jb25zdCBNZW1iZXJNb2RhbCA9ICh7IG1lbWJlciwgaGFuZGxlTW9kYWxUb2dnbGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3ZlcmxheSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNb2RhbFRvZ2dsZShudWxsKX0gLz5cbiAgICAgIDxDYXJkPlxuICAgICAgICA8SW1hZ2VXcmFwcGVyPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e21lbWJlci5wcm9maWxlfSAvPlxuICAgICAgICA8L0ltYWdlV3JhcHBlcj5cbiAgICAgICAgPE5hbWU+e21lbWJlci5uYW1lfTwvTmFtZT5cbiAgICAgICAgPFRpdGxlPnttZW1iZXIudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgPEJpbz57bWVtYmVyLmJpb308L0Jpbz5cbiAgICAgICAgPEZsZXg+XG4gICAgICAgICAge21lbWJlci5zb2NpYWwubWVkaXVtICYmIChcbiAgICAgICAgICAgIDxhIGhyZWY9e21lbWJlci5zb2NpYWwubWVkaXVtfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPFNpTWVkaXVtIGNvbG9yPVwiIzAwMDAwMFwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHttZW1iZXIuc29jaWFsLnR3aXR0ZXIgJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC50d2l0dGVyfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEljb24+XG4gICAgICAgICAgICAgICAgPFNpVHdpdHRlciBjb2xvcj1cIiM1NWFjZWVcIiAvPlxuICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bWVtYmVyLnNvY2lhbC5naXRodWIgJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICA8U2lHaXRodWIgY29sb3I9XCIjMzMzXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgICAge21lbWJlci5zb2NpYWwubGlua2VkaW4gJiYgKFxuICAgICAgICAgICAgPGEgaHJlZj17bWVtYmVyLnNvY2lhbC5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uPlxuICAgICAgICAgICAgICAgIDxTaUxpbmtlZGluIGNvbG9yPVwiIzAwNzdiNVwiIC8+XG4gICAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAxO1xuYDtcblxuY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7KHApID0+IHAudGhlbWUuY29sb3IuYmFja2dyb3VuZH07XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAxMDAyO1xuXG4gIG1heC13aWR0aDogMzByZW07XG5gO1xuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnNtfSkge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5gO1xuXG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xuYDtcblxuY29uc3QgTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5zdWJUZXh0fTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBCaW8gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci5zdWJUZXh0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY29uc3QgRmxleCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuYDtcblxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBNZW1iZXJNb2RhbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=