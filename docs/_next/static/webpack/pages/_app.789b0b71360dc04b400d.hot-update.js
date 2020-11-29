webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/common/navigation/navigation.tsx":
/*!*****************************************************!*\
  !*** ./components/common/navigation/navigation.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/theme */ "./styles/theme.ts");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/common/navigation/style.tsx");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo */ "./components/common/navigation/logo.tsx");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../global */ "./components/global.tsx");



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/components/common/navigation/navigation.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var NAV_ITEMS = [{
  title: "Home",
  link: "/"
}, {
  title: "Team",
  link: "/team"
}, {
  title: "Articles",
  link: "/articles"
}, {
  title: "Events",
  link: "/events"
}, {
  title: "Badges",
  link: "/badges"
}];

var Navbar = function Navbar(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mobileMenuOpen = _useState[0],
      setMobileMenuOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      hasScrolled = _useState2[0],
      setHasScrolled = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var handleScroll = function handleScroll(event) {
    var scrollTop = window.pageYOffset;

    if (scrollTop > 32) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
  }, []);

  var toggleMobileMenu = function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  var closeMobileMenu = function closeMobileMenu() {
    setMobileMenuOpen(false);
  };

  var getNavList = function getNavList(_ref) {
    var _ref$mobile = _ref.mobile,
        mobile = _ref$mobile === void 0 ? false : _ref$mobile;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["NavListWrapper"], {
      mobile: mobile,
      children: NAV_ITEMS.map(function (_ref2) {
        var title = _ref2.title,
            link = _ref2.link;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["NavItem"], {
          onClick: closeMobileMenu,
          className: router.pathname == link ? "active" : "",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: link,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, _this)
        }, title, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["Nav"], _objectSpread(_objectSpread({}, props), {}, {
    scrolled: hasScrolled,
    mobile: mobileMenuOpen,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContainerStyled, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["Brand"], {
        onClick: closeMobileMenu,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
              theme: props.theme
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["Mobile"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          onClick: toggleMobileMenu,
          style: {
            color: props.theme.color.text,
            background: "none",
            outline: "none",
            border: "none",
            margin: "0px",
            padding: "0px",
            fontSize: "24px"
          },
          children: mobileMenuOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiX"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 31
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMenu"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 41
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["Mobile"], {
        hide: true,
        children: getNavList({})
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["ActionsContainer"], {
        onClick: props.toggleTheme,
        children: props.theme === _styles_theme__WEBPACK_IMPORTED_MODULE_7__["lightTheme"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiMoon"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 41
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__["FiSun"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 54
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["Mobile"], {
      children: mobileMenuOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_8__["MobileMenu"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_global__WEBPACK_IMPORTED_MODULE_10__["Container"], {
          children: getNavList({
            mobile: true
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(Navbar, "16NhmT547uSbn8oJHOciOfczFJE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Navbar;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_global__WEBPACK_IMPORTED_MODULE_10__["Container"]).withConfig({
  displayName: "navigation__ContainerStyled",
  componentId: "zbv60r-0"
})(["display:flex;justify-content:space-between;align-items:center;padding:1rem 0rem;@media (max-width:", "){padding:1rem 1rem;}"], function (props) {
  return props.theme.screen.xs;
});
_c2 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "ContainerStyled");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnRzeCJdLCJuYW1lcyI6WyJOQVZfSVRFTVMiLCJ0aXRsZSIsImxpbmsiLCJOYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibW9iaWxlTWVudU9wZW4iLCJzZXRNb2JpbGVNZW51T3BlbiIsImhhc1Njcm9sbGVkIiwic2V0SGFzU2Nyb2xsZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsInNjcm9sbFRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJnZXROYXZMaXN0IiwibW9iaWxlIiwibWFwIiwicGF0aG5hbWUiLCJ0aGVtZSIsImNvbG9yIiwidGV4dCIsImJhY2tncm91bmQiLCJvdXRsaW5lIiwiYm9yZGVyIiwibWFyZ2luIiwicGFkZGluZyIsImZvbnRTaXplIiwidG9nZ2xlVGhlbWUiLCJsaWdodFRoZW1lIiwiQ29udGFpbmVyU3R5bGVkIiwic3R5bGVkIiwiQ29udGFpbmVyIiwic2NyZWVuIiwieHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQVVBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFBRUMsT0FBSyxFQUFFLE1BQVQ7QUFBaUJDLE1BQUksRUFBRTtBQUF2QixDQURnQixFQUVoQjtBQUFFRCxPQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBSSxFQUFFO0FBQXZCLENBRmdCLEVBR2hCO0FBQUVELE9BQUssRUFBRSxVQUFUO0FBQXFCQyxNQUFJLEVBQUU7QUFBM0IsQ0FIZ0IsRUFJaEI7QUFBRUQsT0FBSyxFQUFFLFFBQVQ7QUFBbUJDLE1BQUksRUFBRTtB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R0FBR0MsaUVBQU0sQ0FBQ0Msa0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxvSUFLRSxVQUFDbEMsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWWMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQUxGLENBQXJCO01BQU1KLGU7QUFVU2pDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzg5YjBiNzEzNjBkYzA0YjQwMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBGaU1vb24sIEZpU3VuLCBGaU1lbnUsIEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG5pbXBvcnQgeyBsaWdodFRoZW1lIH0gZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy90aGVtZVwiO1xuXG5pbXBvcnQge1xuICBOYXYsXG4gIE5hdkl0ZW0sXG4gIEJyYW5kLFxuICBOYXZMaXN0V3JhcHBlcixcbiAgTW9iaWxlTWVudSxcbiAgTW9iaWxlLFxuICBBY3Rpb25zQ29udGFpbmVyLFxufSBmcm9tIFwiLi9zdHlsZVwiO1xuXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsXCI7XG5cbmNvbnN0IE5BVl9JVEVNUyA9IFtcbiAgeyB0aXRsZTogXCJIb21lXCIsIGxpbms6IFwiL1wiIH0sXG4gIHsgdGl0bGU6IFwiVGVhbVwiLCBsaW5rOiBcIi90ZWFtXCIgfSxcbiAgeyB0aXRsZTogXCJBcnRpY2xlc1wiLCBsaW5rOiBcIi9hcnRpY2xlc1wiIH0sXG4gIHsgdGl0bGU6IFwiRXZlbnRzXCIsIGxpbms6IFwiL2V2ZW50c1wiIH0sXG4gIHsgdGl0bGU6IFwiQmFkZ2VzXCIsIGxpbms6IFwiL2JhZGdlc1wiIH0sXG5dO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW21vYmlsZU1lbnVPcGVuLCBzZXRNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNTY3JvbGxlZCwgc2V0SGFzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAoc2Nyb2xsVG9wID4gMzIpIHtcbiAgICAgIHNldEhhc1Njcm9sbGVkKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRIYXNTY3JvbGxlZChmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudU9wZW4oIW1vYmlsZU1lbnVPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU1vYmlsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGdldE5hdkxpc3QgPSAoeyBtb2JpbGUgPSBmYWxzZSB9KSA9PiAoXG4gICAgPE5hdkxpc3RXcmFwcGVyIG1vYmlsZT17bW9iaWxlfT5cbiAgICAgIHtOQVZfSVRFTVMubWFwKCh7IHRpdGxlLCBsaW5rIH0pID0+IChcbiAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICBrZXk9e3RpdGxlfVxuICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9iaWxlTWVudX1cbiAgICAgICAgICBjbGFzc05hbWU9e3JvdXRlci5wYXRobmFtZSA9PSBsaW5rID8gXCJhY3RpdmVcIiA6IFwiXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPXtsaW5rfT57dGl0bGV9PC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApKX1cbiAgICA8L05hdkxpc3RXcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdiB7Li4ucHJvcHN9IHNjcm9sbGVkPXtoYXNTY3JvbGxlZH0gbW9iaWxlPXttb2JpbGVNZW51T3Blbn0+XG4gICAgICA8Q29udGFpbmVyU3R5bGVkPlxuICAgICAgICA8QnJhbmQgb25DbGljaz17Y2xvc2VNb2JpbGVNZW51fT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxMb2dvIHRoZW1lPXtwcm9wcy50aGVtZX0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQnJhbmQ+XG4gICAgICAgIDxNb2JpbGU+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy50aGVtZS5jb2xvci50ZXh0LFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwcHhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjRweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bW9iaWxlTWVudU9wZW4gPyA8RmlYIC8+IDogPEZpTWVudSAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Nb2JpbGU+XG4gICAgICAgIDxNb2JpbGUgaGlkZT57Z2V0TmF2TGlzdCh7fSl9PC9Nb2JpbGU+XG4gICAgICAgIDxBY3Rpb25zQ29udGFpbmVyIG9uQ2xpY2s9e3Byb3BzLnRvZ2dsZVRoZW1lfT5cbiAgICAgICAgICB7cHJvcHMudGhlbWUgPT09IGxpZ2h0VGhlbWUgPyA8RmlNb29uIC8+IDogPEZpU3VuIC8+fVxuICAgICAgICA8L0FjdGlvbnNDb250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lclN0eWxlZD5cbiAgICAgIDxNb2JpbGU+XG4gICAgICAgIHttb2JpbGVNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPE1vYmlsZU1lbnU+XG4gICAgICAgICAgICA8Q29udGFpbmVyPntnZXROYXZMaXN0KHsgbW9iaWxlOiB0cnVlIH0pfTwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvTW9iaWxlTWVudT5cbiAgICAgICAgKX1cbiAgICAgIDwvTW9iaWxlPlxuICAgIDwvTmF2PlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyU3R5bGVkID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwcmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=