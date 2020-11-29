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
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2rem;padding:2.5rem 0rem;@media (max-width:", "){grid-template-columns:1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr 1fr 1fr;}"], function (props) {
  return props.theme.screen.xs;
}, function (props) {
  return props.theme.screen.md;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS50c3giXSwibmFtZXMiOlsiVGVhbSIsInVzZVN0YXRlIiwidGVhbSIsInNldFRlYW0iLCJtb2RhbE1lbWJlciIsInNldE1vZGFsTWVtYmVyIiwidGhlbiIsImRhdGEiLCJoYW5kbGVNb2RhbFRvZ2dsZSIsIm1lbWJlciIsIm1hcCIsImlkeCIsIkNvbnRhaW5lclN0eWxlZCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJzY3JlZW4iLCJ4cyIsIm1kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFZLEVBQVosQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUdxQkYsc0RBQVEsQ0FBaUIsSUFBakIsQ0FIN0I7QUFBQSxNQUdWRyxXQUhVO0FBQUEsTUFHR0MsY0FISDs7QUFLakIsa0lBQTRCQyxJQUE1QixDQUFpQyxVQUFDQyxJQUFELEVBQW9CO0FBQ25ESixXQUFPLENBQUNJLElBQUksV0FBSixDQUFhTCxJQUFkLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1NLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsTUFBRCxFQUE0QjtBQUNwREosa0JBQWMsQ0FBQ0ksTUFBRCxDQUFkO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxlQUFEO0FBQUEsZUFDR0wsV0FBVyxpQkFDVixxRUFBQyxxRUFBRDtBQUNFLFlBQU0sRUFBRUEsV0FEVjtBQUVFLHVCQUFpQixFQUFFSTtBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosRUFPR04sSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0QsTUFBRCxFQUFTRSxHQUFUO0FBQUEsMEJBQ1IscUVBQUMsbUVBQUQ7QUFFRSxjQUFNLEVBQUVGLE1BRlY7QUFHRSx5QkFBaUIsRUFBRUQ7QUFIckIsU0FDT0csR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFULENBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0E5QkQ7O0dBQU1YLEk7O0tBQUFBLEk7QUFnQ04sSUFBTVksZUFBZSxHQUFHQyxpRUFBTSxDQUFDQyw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDJNQU1FLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsRUFBOUI7QUFBQSxDQU5GLEVBVUUsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxFQUE5QjtBQUFBLENBVkYsQ0FBckI7TUFBTVAsZTtBQWVTWixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLmYxMjdmNDFjYzEwYzliMzY0MjI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsXCI7XG5pbXBvcnQgTWVtYmVyQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL01lbWJlckNhcmRcIjtcbmltcG9ydCBNZW1iZXJNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbFwiO1xuXG50eXBlIE1lbWViZXIgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xuICBwcm9maWxlPzogc3RyaW5nO1xufTtcblxudHlwZSBUZWFtRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIHRlYW06IE1lbWViZXJbXTtcbiAgfTtcbn07XG5cbmNvbnN0IFRlYW0gPSAoKSA9PiB7XG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlPE1lbWViZXJbXT4oW10pO1xuXG4gIGNvbnN0IFttb2RhbE1lbWJlciwgc2V0TW9kYWxNZW1iZXJdID0gdXNlU3RhdGU8TWVtZWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGltcG9ydChcIi4uL2RhdGEvdGVhbS5qc29uXCIpLnRoZW4oKGRhdGE6IFRlYW1EYXRhKSA9PiB7XG4gICAgc2V0VGVhbShkYXRhLmRlZmF1bHQudGVhbSk7XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsVG9nZ2xlID0gKG1lbWJlcjogTWVtZWJlciB8IG51bGwpID0+IHtcbiAgICBzZXRNb2RhbE1lbWJlcihtZW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclN0eWxlZD5cbiAgICAgIHttb2RhbE1lbWJlciAmJiAoXG4gICAgICAgIDxNZW1iZXJNb2RhbFxuICAgICAgICAgIG1lbWJlcj17bW9kYWxNZW1iZXJ9XG4gICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHt0ZWFtLm1hcCgobWVtYmVyLCBpZHgpID0+IChcbiAgICAgICAgPE1lbWJlckNhcmRcbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0NvbnRhaW5lclN0eWxlZD5cbiAgKTtcbn07XG5cbmNvbnN0IENvbnRhaW5lclN0eWxlZCA9IHN0eWxlZChDb250YWluZXIpYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAyLjVyZW0gMHJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi54c30pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==