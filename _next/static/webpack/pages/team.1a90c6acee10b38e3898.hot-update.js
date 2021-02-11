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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global */ "./components/global.tsx");
/* harmony import */ var _components_card_MemberCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/card/MemberCard */ "./components/card/MemberCard.tsx");
/* harmony import */ var _components_modal_MemberModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/modal/MemberModal */ "./components/modal/MemberModal.tsx");
/* harmony import */ var _components_index_CommonFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index/CommonFooter */ "./components/index/CommonFooter.tsx");



var _jsxFileName = "/home/smitbarmase/projects/dscvitbhopal.github.io/pages/team.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




 // Components






var Team = function Team() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      modalMember = _useState[0],
      setModalMember = _useState[1];

  var handleModalToggle = function handleModalToggle(member) {
    setModalMember(member);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_global__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "DSC VIT Bhopal - Team"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), modalMember && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_modal_MemberModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        member: modalMember,
        handleModalToggle: handleModalToggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Core Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Web Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/web-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_index_CommonFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Team, "DDK68pxzWsLmr4DZu34nacuzNtM=");

_c = Team;

var TeamSection = function TeamSection(_ref) {
  _s2();

  var title = _ref.title,
      handleModalToggle = _ref.handleModalToggle,
      relativeLocation = _ref.relativeLocation;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      team = _useState2[0],
      setTeam = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      expanded = _useState3[0],
      setExpanded = _useState3[1];

  __webpack_require__("./data lazy recursive ^\\.\\/.*$")("./".concat(relativeLocation)).then(function (data) {
    setTeam(data["default"].team);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SectionStyled, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeaderStyled, {
      onClick: function onClick() {
        return setExpanded(!expanded);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TitleStyled, {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this), expanded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiArrowDownSLine"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiArrowRightSLine"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 44
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, _this), expanded && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GridStyled, {
      children: team.map(function (member, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card_MemberCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          member: member,
          handleModalToggle: handleModalToggle
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s2(TeamSection, "f+HM2QnhO5nuqsuU6tXpg4dKrRI=");

_c2 = TeamSection;
var SectionStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "team__SectionStyled",
  componentId: "sc-1ccjr8u-0"
})(["padding-top:2.5rem;display:flex;flex-direction:column;gap:2rem;"]);
_c3 = SectionStyled;
var HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "team__HeaderStyled",
  componentId: "sc-1ccjr8u-1"
})(["display:flex;font-size:2.2rem;justify-content:space-between;cursor:pointer;"]);
_c4 = HeaderStyled;
var TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "team__TitleStyled",
  componentId: "sc-1ccjr8u-2"
})(["font-size:1.7rem;font-weight:bold;"]);
_c5 = TitleStyled;
var GridStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "team__GridStyled",
  componentId: "sc-1ccjr8u-3"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:2rem;@media (max-width:", "){grid-template-columns:1fr 1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr 1fr;}@media (max-width:", "){grid-template-columns:1fr;padding:2.5rem 3rem;}"], function (props) {
  return props.theme.screen.md;
}, function (props) {
  return props.theme.screen.sm;
}, function (props) {
  return props.theme.screen.xs;
});
_c6 = GridStyled;
/* harmony default export */ __webpack_exports__["default"] = (Team);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Team");
$RefreshReg$(_c2, "TeamSection");
$RefreshReg$(_c3, "SectionStyled");
$RefreshReg$(_c4, "HeaderStyled");
$RefreshReg$(_c5, "TitleStyled");
$RefreshReg$(_c6, "GridStyled");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS50c3giXSwibmFtZXMiOlsiVGVhbSIsInVzZVN0YXRlIiwibW9kYWxNZW1iZXIiLCJzZXRNb2RhbE1lbWJlciIsImhhbmRsZU1vZGFsVG9nZ2xlIiwibWVtYmVyIiwiVGVhbVNlY3Rpb24iLCJ0aXRsZSIsInJlbGF0aXZlTG9jYXRpb24iLCJ0ZWFtIiwic2V0VGVhbSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ0aGVuIiwiZGF0YSIsIm1hcCIsImlkeCIsIlNlY3Rpb25TdHlsZWQiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXJTdHlsZWQiLCJUaXRsZVN0eWxlZCIsIkdyaWRTdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwic2NyZWVuIiwibWQiLCJzbSIsInhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFHakIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQTJCO0FBQ25ERixrQkFBYyxDQUFDRSxNQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUdILFdBQVcsaUJBQ1YscUVBQUMscUVBQUQ7QUFDRSxjQUFNLEVBQUVBLFdBRFY7QUFFRSx5QkFBaUIsRUFBRUU7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBVUUscUVBQUMs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QUFBLENBYlAsQ0FBaEI7TUFBTU4sVTtBQW1CU3RCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uMWE5MGM2YWNlZTEwYjM4ZTM4OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUmlBcnJvd0Rvd25TTGluZSwgUmlBcnJvd1JpZ2h0U0xpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsXCI7XG5pbXBvcnQgTWVtYmVyQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL01lbWJlckNhcmRcIjtcbmltcG9ydCBNZW1iZXJNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbFwiO1xuaW1wb3J0IENvbW1vbkZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleC9Db21tb25Gb290ZXJcIjtcblxudHlwZSBNZW1iZXIgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xuICBwcm9maWxlPzogc3RyaW5nO1xufTtcblxudHlwZSBUZWFtRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIHRlYW06IE1lbWJlcltdO1xuICB9O1xufTtcblxuY29uc3QgVGVhbSA9ICgpID0+IHtcbiAgY29uc3QgW21vZGFsTWVtYmVyLCBzZXRNb2RhbE1lbWJlcl0gPSB1c2VTdGF0ZTxNZW1iZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbFRvZ2dsZSA9IChtZW1iZXI6IE1lbWJlciB8IG51bGwpID0+IHtcbiAgICBzZXRNb2RhbE1lbWJlcihtZW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5EU0MgVklUIEJob3BhbCAtIFRlYW08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHttb2RhbE1lbWJlciAmJiAoXG4gICAgICAgICAgPE1lbWJlck1vZGFsXG4gICAgICAgICAgICBtZW1iZXI9e21vZGFsTWVtYmVyfVxuICAgICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiQ29yZSBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgcmVsYXRpdmVMb2NhdGlvbj1cInRlYW0uanNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiV2ViIFRlYW1cIlxuICAgICAgICAgIGhhbmRsZU1vZGFsVG9nZ2xlPXtoYW5kbGVNb2RhbFRvZ2dsZX1cbiAgICAgICAgICByZWxhdGl2ZUxvY2F0aW9uPVwidGVhbS93ZWItdGVhbS5qc29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbW1vbkZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgVGVhbVNlY3Rpb24gPSAoeyB0aXRsZSwgaGFuZGxlTW9kYWxUb2dnbGUsIHJlbGF0aXZlTG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZTxNZW1iZXJbXT4oW10pO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGltcG9ydChgLi4vZGF0YS8ke3JlbGF0aXZlTG9jYXRpb259YCkudGhlbigoZGF0YTogVGVhbURhdGEpID0+IHtcbiAgICBzZXRUZWFtKGRhdGEuZGVmYXVsdC50ZWFtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblN0eWxlZD5cbiAgICAgIDxIZWFkZXJTdHlsZWQgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0+XG4gICAgICAgIDxUaXRsZVN0eWxlZD57dGl0bGV9PC9UaXRsZVN0eWxlZD5cbiAgICAgICAge2V4cGFuZGVkID8gPFJpQXJyb3dEb3duU0xpbmUgLz4gOiA8UmlBcnJvd1JpZ2h0U0xpbmUgLz59XG4gICAgICA8L0hlYWRlclN0eWxlZD5cbiAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgIDxHcmlkU3R5bGVkPlxuICAgICAgICAgIHt0ZWFtLm1hcCgobWVtYmVyLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxNZW1iZXJDYXJkXG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkU3R5bGVkPlxuICAgICAgKX1cbiAgICA8L1NlY3Rpb25TdHlsZWQ+XG4gICk7XG59O1xuXG5jb25zdCBTZWN0aW9uU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuYDtcblxuY29uc3QgSGVhZGVyU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgVGl0bGVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBHcmlkU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMnJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ueHN9KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07XG4iXSwic291cmNlUm9vdCI6IiJ9