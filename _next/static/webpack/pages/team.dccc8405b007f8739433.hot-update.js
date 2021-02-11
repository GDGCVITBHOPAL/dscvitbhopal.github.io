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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "ML Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/ml-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Android Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/android-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Design Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/design-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Content Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/content-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Management Team",
        handleModalToggle: handleModalToggle,
        relativeLocation: "team/management-team.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_index_CommonFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
        lineNumber: 96,
        columnNumber: 9
      }, _this), expanded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiArrowDownSLine"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiArrowRightSLine"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 44
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, _this), expanded && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GridStyled, {
      children: team.map(function (member, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card_MemberCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
          member: member,
          handleModalToggle: handleModalToggle
        }, idx, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS50c3giXSwibmFtZXMiOlsiVGVhbSIsInVzZVN0YXRlIiwibW9kYWxNZW1iZXIiLCJzZXRNb2RhbE1lbWJlciIsImhhbmRsZU1vZGFsVG9nZ2xlIiwibWVtYmVyIiwiVGVhbVNlY3Rpb24iLCJ0aXRsZSIsInJlbGF0aXZlTG9jYXRpb24iLCJ0ZWFtIiwic2V0VGVhbSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJ0aGVuIiwiZGF0YSIsIm1hcCIsImlkeCIsIlNlY3Rpb25TdHlsZWQiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXJTdHlsZWQiLCJUaXRsZVN0eWxlZCIsIkdyaWRTdHlsZWQiLCJwcm9wcyIsInRoZW1lIiwic2NyZWVuIiwibWQiLCJzbSIsInhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNxQkMsc0RBQVEsQ0FBZ0IsSUFBaEIsQ0FEN0I7QUFBQSxNQUNWQyxXQURVO0FBQUEsTUFDR0MsY0FESDs7QUFHakIsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxNQUFELEVBQTJCO0FBQ25ERixrQkFBYyxDQUFDRSxNQUFELENBQWQ7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsNERBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUdILFdBQVcsaUJBQ1YscUVBQUMscUVBQUQ7QUFDRSxjQUFNLEVBQUVBLFdBRFY7QUFFRSx5QkFBaUIsRUFBRUU7QUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLGVBVUUscUVBQUMs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O0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQTNCRDs7SUFBTVYsVzs7TUFBQUEsVztBQTZCTixJQUFNVyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUVBQW5CO01BQU1GLGE7QUFPTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUZBQWxCO01BQU1DLFk7QUFPTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQWpCO01BQU1FLFc7QUFLTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOFBBS08sVUFBQ0ksS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBTFAsRUFTTyxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEVBQTlCO0FBQUEsQ0FUUCxFQWFPLFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsRUFBOUI7QUFBQSxDQWJQLENBQWhCO01BQU1OLFU7QUFtQlN0QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLmRjY2M4NDA1YjAwN2Y4NzM5NDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFJpQXJyb3dEb3duU0xpbmUsIFJpQXJyb3dSaWdodFNMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbFwiO1xuaW1wb3J0IE1lbWJlckNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZC9NZW1iZXJDYXJkXCI7XG5pbXBvcnQgTWVtYmVyTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW9kYWwvTWVtYmVyTW9kYWxcIjtcbmltcG9ydCBDb21tb25Gb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5kZXgvQ29tbW9uRm9vdGVyXCI7XG5cbnR5cGUgTWVtYmVyID0ge1xuICB0aXRsZT86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgbGluaz86IHN0cmluZztcbiAgcHJvZmlsZT86IHN0cmluZztcbn07XG5cbnR5cGUgVGVhbURhdGEgPSB7XG4gIGRlZmF1bHQ6IHtcbiAgICB0ZWFtOiBNZW1iZXJbXTtcbiAgfTtcbn07XG5cbmNvbnN0IFRlYW0gPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RhbE1lbWJlciwgc2V0TW9kYWxNZW1iZXJdID0gdXNlU3RhdGU8TWVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTW9kYWxUb2dnbGUgPSAobWVtYmVyOiBNZW1iZXIgfCBudWxsKSA9PiB7XG4gICAgc2V0TW9kYWxNZW1iZXIobWVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+RFNDIFZJVCBCaG9wYWwgLSBUZWFtPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7bW9kYWxNZW1iZXIgJiYgKFxuICAgICAgICAgIDxNZW1iZXJNb2RhbFxuICAgICAgICAgICAgbWVtYmVyPXttb2RhbE1lbWJlcn1cbiAgICAgICAgICAgIGhhbmRsZU1vZGFsVG9nZ2xlPXtoYW5kbGVNb2RhbFRvZ2dsZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8VGVhbVNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIkNvcmUgVGVhbVwiXG4gICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgIHJlbGF0aXZlTG9jYXRpb249XCJ0ZWFtLmpzb25cIlxuICAgICAgICAvPlxuICAgICAgICA8VGVhbVNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIldlYiBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgcmVsYXRpdmVMb2NhdGlvbj1cInRlYW0vd2ViLXRlYW0uanNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiTUwgVGVhbVwiXG4gICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgIHJlbGF0aXZlTG9jYXRpb249XCJ0ZWFtL21sLXRlYW0uanNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiQW5kcm9pZCBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgcmVsYXRpdmVMb2NhdGlvbj1cInRlYW0vYW5kcm9pZC10ZWFtLmpzb25cIlxuICAgICAgICAvPlxuICAgICAgICA8VGVhbVNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIkRlc2lnbiBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgcmVsYXRpdmVMb2NhdGlvbj1cInRlYW0vZGVzaWduLXRlYW0uanNvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiQ29udGVudCBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgcmVsYXRpdmVMb2NhdGlvbj1cInRlYW0vY29udGVudC10ZWFtLmpzb25cIlxuICAgICAgICAvPlxuICAgICAgICA8VGVhbVNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIk1hbmFnZW1lbnQgVGVhbVwiXG4gICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgIHJlbGF0aXZlTG9jYXRpb249XCJ0ZWFtL21hbmFnZW1lbnQtdGVhbS5qc29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbW1vbkZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgVGVhbVNlY3Rpb24gPSAoeyB0aXRsZSwgaGFuZGxlTW9kYWxUb2dnbGUsIHJlbGF0aXZlTG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZTxNZW1iZXJbXT4oW10pO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGltcG9ydChgLi4vZGF0YS8ke3JlbGF0aXZlTG9jYXRpb259YCkudGhlbigoZGF0YTogVGVhbURhdGEpID0+IHtcbiAgICBzZXRUZWFtKGRhdGEuZGVmYXVsdC50ZWFtKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblN0eWxlZD5cbiAgICAgIDxIZWFkZXJTdHlsZWQgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0+XG4gICAgICAgIDxUaXRsZVN0eWxlZD57dGl0bGV9PC9UaXRsZVN0eWxlZD5cbiAgICAgICAge2V4cGFuZGVkID8gPFJpQXJyb3dEb3duU0xpbmUgLz4gOiA8UmlBcnJvd1JpZ2h0U0xpbmUgLz59XG4gICAgICA8L0hlYWRlclN0eWxlZD5cbiAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgIDxHcmlkU3R5bGVkPlxuICAgICAgICAgIHt0ZWFtLm1hcCgobWVtYmVyLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxNZW1iZXJDYXJkXG4gICAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkU3R5bGVkPlxuICAgICAgKX1cbiAgICA8L1NlY3Rpb25TdHlsZWQ+XG4gICk7XG59O1xuXG5jb25zdCBTZWN0aW9uU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuYDtcblxuY29uc3QgSGVhZGVyU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgVGl0bGVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG5jb25zdCBHcmlkU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMnJlbTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLnNjcmVlbi5tZH0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4uc219KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ueHN9KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgcGFkZGluZzogMi41cmVtIDNyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07XG4iXSwic291cmNlUm9vdCI6IiJ9