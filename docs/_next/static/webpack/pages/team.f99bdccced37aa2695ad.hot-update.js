webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.tsx":
/*!************************!*\
  !*** ./pages/team.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global */ "./components/global.tsx");
/* harmony import */ var _components_card_MemberCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card/MemberCard */ "./components/card/MemberCard.tsx");
/* harmony import */ var _components_modal_MemberModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modal/MemberModal */ "./components/modal/MemberModal.tsx");


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/team.tsx",
    _this = undefined,
    _s = $RefreshSig$();


 // Components





var Team = function Team() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      team = _useState[0],
      setTeam = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      modalMember = _useState2[0],
      setModalMember = _useState2[1];

  __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../data/team.json */ "./data/team.json", 3)).then(function (data) {
    setTeam(data["default"].team);
  });

  var handleModalToggle = function handleModalToggle(member) {
    setModalMember(member);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContainerStyled, {
    children: [modalMember && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modal_MemberModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      member: modalMember,
      handleModalToggle: handleModalToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, _this), team.map(function (member, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card_MemberCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        member: member,
        handleModalToggle: handleModalToggle
      }, idx, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Team, "+gD+DK49VE3B9MWad3wyiIqk8AI=");

_c = Team;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_3__["Container"]).withConfig({
  displayName: "team__ContainerStyled",
  componentId: "sc-1ccjr8u-0"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2rem;padding:2.5rem 0rem;@media (max-width:", "){grid-template-columns:1fr 1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr;padding:2.5rem 3rem;}"], function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.xs;
});
_c2 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c, _c2;

$RefreshReg$(_c, "Team");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS50c3giXSwibmFtZXMiOlsiVGVhbSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJtb2RhbE1lbWJlciIsInNldE1vZGFsTWVtYmVyIiwidGhlbiIsImRhdGEiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsIm1lbWJlciIsIm1hcCIsImlkeCIsIkNvbnRhaW5lclN0eWxlZCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJzY3JlZW4iLCJtZCIsInNtIiwieHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFlQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQVksRUFBWixDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBR3FCRixzREFBUSxDQUFpQixJQUFqQixDQUg3QjtBQUFBLE1BR1ZHLFdBSFU7QUFBQSxNQUdHQyxjQUhIOztBQUtqQixrSUFBNEJDLElBQTVCLENBQWlDLFVBQUNDLElBQUQsRUFBb0I7QUFDbkRKLFdBQU8sQ0FBQ0ksSUFBSSxXQUFKLENBQWFMLElBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQTRCO0FBQ3BESixrQkFBYyxDQUFDSSxNQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLGVBQUQ7QUFBQSxlQUNHTCxXQUFXLGlCQUNWLHFFQUFDLHFFQUFEO0FBQ0UsWUFBTSxFQUFFQSxXQURWO0FBRUUsdUJBQWlCLEVBQUVJO0FBRnJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixFQU9HTixJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDRCxNQUFELEVBQVNFLEdBQVQ7QUFBQSwwQkFDUixxRUFBQyxtRUFBRDtBQUVFLGNBQU0sRUFBRUYsTUFGVjtBQUdFLHlCQUFpQixFQUFFRDtBQUhyQixTQUNPRyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBLEtBQVQsQ0FQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQTlCRDs7R0FBTVgsSTs7S0FBQUEsSTtBQWdDTixJQUFNWSxlQUFlLEdBQUdDLGlFQUFNLENBQUNDLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsa1JBTUUsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBTkYsRUFVRSxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEVBQTlCO0FBQUEsQ0FWRixFQWNFLFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsRUFBOUI7QUFBQSxDQWRGLENBQXJCO01BQU1SLGU7QUFvQlNaLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uZjk5YmRjY2NlZDM3YWEyNjk1YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWxcIjtcbmltcG9ydCBNZW1iZXJDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvTWVtYmVyQ2FyZFwiO1xuaW1wb3J0IE1lbWJlck1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL21vZGFsL01lbWJlck1vZGFsXCI7XG5cbnR5cGUgTWVtZWJlciA9IHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmc7XG4gIHByb2ZpbGU/OiBzdHJpbmc7XG59O1xuXG50eXBlIFRlYW1EYXRhID0ge1xuICBkZWZhdWx0OiB7XG4gICAgdGVhbTogTWVtZWJlcltdO1xuICB9O1xufTtcblxuY29uc3QgVGVhbSA9ICgpID0+IHtcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGU8TWVtZWJlcltdPihbXSk7XG5cbiAgY29uc3QgW21vZGFsTWVtYmVyLCBzZXRNb2RhbE1lbWJlcl0gPSB1c2VTdGF0ZTxNZW1lYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgaW1wb3J0KFwiLi4vZGF0YS90ZWFtLmpzb25cIikudGhlbigoZGF0YTogVGVhbURhdGEpID0+IHtcbiAgICBzZXRUZWFtKGRhdGEuZGVmYXVsdC50ZWFtKTtcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxUb2dnbGUgPSAobWVtYmVyOiBNZW1lYmVyIHwgbnVsbCkgPT4ge1xuICAgIHNldE1vZGFsTWVtYmVyKG1lbWJlcik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyU3R5bGVkPlxuICAgICAge21vZGFsTWVtYmVyICYmIChcbiAgICAgICAgPE1lbWJlck1vZGFsXG4gICAgICAgICAgbWVtYmVyPXttb2RhbE1lbWJlcn1cbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3RlYW0ubWFwKChtZW1iZXIsIGlkeCkgPT4gKFxuICAgICAgICA8TWVtYmVyQ2FyZFxuICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgIG1lbWJlcj17bWVtYmVyfVxuICAgICAgICAgIGhhbmRsZU1vZGFsVG9nZ2xlPXtoYW5kbGVNb2RhbFRvZ2dsZX1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyU3R5bGVkPlxuICApO1xufTtcblxuY29uc3QgQ29udGFpbmVyU3R5bGVkID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDJyZW07XG4gIHBhZGRpbmc6IDIuNXJlbSAwcmVtO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLm1kfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5zbX0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBwYWRkaW5nOiAyLjVyZW0gM3JlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVGVhbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=