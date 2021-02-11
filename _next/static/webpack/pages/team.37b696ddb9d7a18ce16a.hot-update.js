webpackHotUpdate_N_E("pages/team",{

/***/ "./data lazy recursive ^\\.\\/.*$":
/*!*********************************************!*\
  !*** ./data lazy ^\.\/.*$ namespace object ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./badges-data": [
		"./data/badges-data.json",
		2
	],
	"./badges-data.json": [
		"./data/badges-data.json",
		2
	],
	"./events": [
		"./data/events.json",
		3
	],
	"./events.json": [
		"./data/events.json",
		3
	],
	"./team": [
		"./data/team.json",
		4
	],
	"./team.json": [
		"./data/team.json",
		4
	],
	"./team/android-team": [
		"./data/team/android-team.json",
		5
	],
	"./team/android-team.json": [
		"./data/team/android-team.json",
		5
	],
	"./team/content-team": [
		"./data/team/content-team.json",
		6
	],
	"./team/content-team.json": [
		"./data/team/content-team.json",
		6
	],
	"./team/design-team": [
		"./data/team/design-team.json",
		7
	],
	"./team/design-team.json": [
		"./data/team/design-team.json",
		7
	],
	"./team/management-team": [
		"./data/team/management-team.json",
		8
	],
	"./team/management-team.json": [
		"./data/team/management-team.json",
		8
	],
	"./team/ml-team": [
		"./data/team/ml-team.json",
		9
	],
	"./team/ml-team.json": [
		"./data/team/ml-team.json",
		9
	],
	"./team/web-team": [
		"./data/team/web-team.json",
		10
	],
	"./team/web-team.json": [
		"./data/team/web-team.json",
		10
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./data lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

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
        location: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TeamSection, {
        title: "Web Team",
        handleModalToggle: handleModalToggle,
        location: ""
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
      location = _ref.location;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      team = _useState2[0],
      setTeam = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      expanded = _useState3[0],
      setExpanded = _useState3[1];

  __webpack_require__("./data lazy recursive ^\\.\\/.*$")("./".concat(location)).then(function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YSBsYXp5IF5cXC5cXC8uKiQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS50c3giXSwibmFtZXMiOlsiVGVhbSIsInVzZVN0YXRlIiwibW9kYWxNZW1iZXIiLCJzZXRNb2RhbE1lbWJlciIsImhhbmRsZU1vZGFsVG9nZ2xlIiwibWVtYmVyIiwiVGVhbVNlY3Rpb24iLCJ0aXRsZSIsImxvY2F0aW9uIiwidGVhbSIsInNldFRlYW0iLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwidGhlbiIsImRhdGEiLCJtYXAiLCJpZHgiLCJTZWN0aW9uU3R5bGVkIiwic3R5bGVkIiwiZGl2IiwiSGVhZGVyU3R5bGVkIiwiVGl0bGVTdHlsZWQiLCJHcmlkU3R5bGVkIiwicHJvcHMiLCJ0aGVtZSIsInNjcmVlbiIsIm1kIiwic20iLCJ4cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7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QUEsV0FERjtBQW1CRCxDQTNCRDs7SUFBTVYsVzs7TUFBQUEsVztBQTZCTixJQUFNVyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdUVBQW5CO01BQU1GLGE7QUFPTixJQUFNRyxZQUFZLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUZBQWxCO01BQU1DLFk7QUFPTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQWpCO01BQU1FLFc7QUFLTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOFBBS08sVUFBQ0ksS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxFQUE5QjtBQUFBLENBTFAsRUFTTyxVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLEVBQTlCO0FBQUEsQ0FUUCxFQWFPLFVBQUNKLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkcsRUFBOUI7QUFBQSxDQWJQLENBQWhCO01BQU1OLFU7QUFtQlN0QixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90ZWFtLjM3YjY5NmRkYjlkN2ExOGNlMTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYmFkZ2VzLWRhdGFcIjogW1xuXHRcdFwiLi9kYXRhL2JhZGdlcy1kYXRhLmpzb25cIixcblx0XHQyXG5cdF0sXG5cdFwiLi9iYWRnZXMtZGF0YS5qc29uXCI6IFtcblx0XHRcIi4vZGF0YS9iYWRnZXMtZGF0YS5qc29uXCIsXG5cdFx0MlxuXHRdLFxuXHRcIi4vZXZlbnRzXCI6IFtcblx0XHRcIi4vZGF0YS9ldmVudHMuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL2V2ZW50cy5qc29uXCI6IFtcblx0XHRcIi4vZGF0YS9ldmVudHMuanNvblwiLFxuXHRcdDNcblx0XSxcblx0XCIuL3RlYW1cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0uanNvblwiLFxuXHRcdDRcblx0XSxcblx0XCIuL3RlYW0uanNvblwiOiBbXG5cdFx0XCIuL2RhdGEvdGVhbS5qc29uXCIsXG5cdFx0NFxuXHRdLFxuXHRcIi4vdGVhbS9hbmRyb2lkLXRlYW1cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0vYW5kcm9pZC10ZWFtLmpzb25cIixcblx0XHQ1XG5cdF0sXG5cdFwiLi90ZWFtL2FuZHJvaWQtdGVhbS5qc29uXCI6IFtcblx0XHRcIi4vZGF0YS90ZWFtL2FuZHJvaWQtdGVhbS5qc29uXCIsXG5cdFx0NVxuXHRdLFxuXHRcIi4vdGVhbS9jb250ZW50LXRlYW1cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0vY29udGVudC10ZWFtLmpzb25cIixcblx0XHQ2XG5cdF0sXG5cdFwiLi90ZWFtL2NvbnRlbnQtdGVhbS5qc29uXCI6IFtcblx0XHRcIi4vZGF0YS90ZWFtL2NvbnRlbnQtdGVhbS5qc29uXCIsXG5cdFx0NlxuXHRdLFxuXHRcIi4vdGVhbS9kZXNpZ24tdGVhbVwiOiBbXG5cdFx0XCIuL2RhdGEvdGVhbS9kZXNpZ24tdGVhbS5qc29uXCIsXG5cdFx0N1xuXHRdLFxuXHRcIi4vdGVhbS9kZXNpZ24tdGVhbS5qc29uXCI6IFtcblx0XHRcIi4vZGF0YS90ZWFtL2Rlc2lnbi10ZWFtLmpzb25cIixcblx0XHQ3XG5cdF0sXG5cdFwiLi90ZWFtL21hbmFnZW1lbnQtdGVhbVwiOiBbXG5cdFx0XCIuL2RhdGEvdGVhbS9tYW5hZ2VtZW50LXRlYW0uanNvblwiLFxuXHRcdDhcblx0XSxcblx0XCIuL3RlYW0vbWFuYWdlbWVudC10ZWFtLmpzb25cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0vbWFuYWdlbWVudC10ZWFtLmpzb25cIixcblx0XHQ4XG5cdF0sXG5cdFwiLi90ZWFtL21sLXRlYW1cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0vbWwtdGVhbS5qc29uXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vdGVhbS9tbC10ZWFtLmpzb25cIjogW1xuXHRcdFwiLi9kYXRhL3RlYW0vbWwtdGVhbS5qc29uXCIsXG5cdFx0OVxuXHRdLFxuXHRcIi4vdGVhbS93ZWItdGVhbVwiOiBbXG5cdFx0XCIuL2RhdGEvdGVhbS93ZWItdGVhbS5qc29uXCIsXG5cdFx0MTBcblx0XSxcblx0XCIuL3RlYW0vd2ViLXRlYW0uanNvblwiOiBbXG5cdFx0XCIuL2RhdGEvdGVhbS93ZWItdGVhbS5qc29uXCIsXG5cdFx0MTBcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMyk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vZGF0YSBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgUmlBcnJvd0Rvd25TTGluZSwgUmlBcnJvd1JpZ2h0U0xpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsXCI7XG5pbXBvcnQgTWVtYmVyQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL01lbWJlckNhcmRcIjtcbmltcG9ydCBNZW1iZXJNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9tb2RhbC9NZW1iZXJNb2RhbFwiO1xuaW1wb3J0IENvbW1vbkZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleC9Db21tb25Gb290ZXJcIjtcblxudHlwZSBNZW1iZXIgPSB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nO1xuICBwcm9maWxlPzogc3RyaW5nO1xufTtcblxudHlwZSBUZWFtRGF0YSA9IHtcbiAgZGVmYXVsdDoge1xuICAgIHRlYW06IE1lbWJlcltdO1xuICB9O1xufTtcblxuY29uc3QgVGVhbSA9ICgpID0+IHtcbiAgY29uc3QgW21vZGFsTWVtYmVyLCBzZXRNb2RhbE1lbWJlcl0gPSB1c2VTdGF0ZTxNZW1iZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb2RhbFRvZ2dsZSA9IChtZW1iZXI6IE1lbWJlciB8IG51bGwpID0+IHtcbiAgICBzZXRNb2RhbE1lbWJlcihtZW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5EU0MgVklUIEJob3BhbCAtIFRlYW08L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHttb2RhbE1lbWJlciAmJiAoXG4gICAgICAgICAgPE1lbWJlck1vZGFsXG4gICAgICAgICAgICBtZW1iZXI9e21vZGFsTWVtYmVyfVxuICAgICAgICAgICAgaGFuZGxlTW9kYWxUb2dnbGU9e2hhbmRsZU1vZGFsVG9nZ2xlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZWFtU2VjdGlvblxuICAgICAgICAgIHRpdGxlPVwiQ29yZSBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgbG9jYXRpb249XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8VGVhbVNlY3Rpb25cbiAgICAgICAgICB0aXRsZT1cIldlYiBUZWFtXCJcbiAgICAgICAgICBoYW5kbGVNb2RhbFRvZ2dsZT17aGFuZGxlTW9kYWxUb2dnbGV9XG4gICAgICAgICAgbG9jYXRpb249XCJcIlxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29tbW9uRm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBUZWFtU2VjdGlvbiA9ICh7IHRpdGxlLCBoYW5kbGVNb2RhbFRvZ2dsZSwgbG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCBbdGVhbSwgc2V0VGVhbV0gPSB1c2VTdGF0ZTxNZW1iZXJbXT4oW10pO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGltcG9ydChgLi4vZGF0YS8ke2xvY2F0aW9ufWApLnRoZW4oKGRhdGE6IFRlYW1EYXRhKSA9PiB7XG4gICAgc2V0VGVhbShkYXRhLmRlZmF1bHQudGVhbSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25TdHlsZWQ+XG4gICAgICA8SGVhZGVyU3R5bGVkIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCl9PlxuICAgICAgICA8VGl0bGVTdHlsZWQ+e3RpdGxlfTwvVGl0bGVTdHlsZWQ+XG4gICAgICAgIHtleHBhbmRlZCA/IDxSaUFycm93RG93blNMaW5lIC8+IDogPFJpQXJyb3dSaWdodFNMaW5lIC8+fVxuICAgICAgPC9IZWFkZXJTdHlsZWQ+XG4gICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICA8R3JpZFN0eWxlZD5cbiAgICAgICAgICB7dGVhbS5tYXAoKG1lbWJlciwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8TWVtYmVyQ2FyZFxuICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgbWVtYmVyPXttZW1iZXJ9XG4gICAgICAgICAgICAgIGhhbmRsZU1vZGFsVG9nZ2xlPXtoYW5kbGVNb2RhbFRvZ2dsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZFN0eWxlZD5cbiAgICAgICl9XG4gICAgPC9TZWN0aW9uU3R5bGVkPlxuICApO1xufTtcblxuY29uc3QgU2VjdGlvblN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbmA7XG5cbmNvbnN0IEhlYWRlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmNvbnN0IFRpdGxlU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYDtcblxuY29uc3QgR3JpZFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBnYXA6IDJyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5zY3JlZW4ubWR9KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnNtfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuc2NyZWVuLnhzfSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIHBhZGRpbmc6IDIuNXJlbSAzcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==