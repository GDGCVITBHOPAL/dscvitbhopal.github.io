webpackHotUpdate_N_E("pages/articles",{

/***/ "./pages/articles.tsx":
/*!****************************!*\
  !*** ./pages/articles.tsx ***!
  \****************************/
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
/* harmony import */ var _components_card_MediumCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card/MediumCard */ "./components/card/MediumCard.tsx");
/* harmony import */ var _components_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global */ "./components/global.tsx");



var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/articles.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_smitbarmase_projects_dsc_web_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Components




var Article = function Article() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      articles = _useState[0],
      setArticles = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsc-vit-bhopal";
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    fetch(mediumURL).then(function (res) {
      return res.json();
    }).then(function (data) {
      setArticles(data.items);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ContainerStyled, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Search, {
      placeholder: "Search article or author",
      value: search,
      onChange: function onChange(e) {
        return setSearch(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), articles.filter(function (_ref) {
      var title = _ref.title,
          author = _ref.author;
      return search !== "" ? title.toLowerCase().includes(search.toLowerCase()) || author.toLowerCase().includes(search.toLowerCase()) : true;
    }).map(function (article) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_card_MediumCard__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, article), article.pubDate, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Article, "Q6N2YgmUdb45Ldq3fATlKEpCPC4=");

_c = Article;
var Search = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "articles__Search",
  componentId: "rbt8ph-0"
})(["background:", ";color:", ";width:100%;font-size:25px;outline:none;border:1px solid ", ";border-radius:5px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:2rem;line-height:35px;padding:20px;font-weight:500;&::placeholder{color:", ";}"], function (p) {
  return p.theme.color.background;
}, function (p) {
  return p.theme.color.text;
}, function (p) {
  return p.theme.color.border;
}, function (p) {
  return p.theme.color.placeholder;
});
_c2 = Search;
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_5__["Container"]).withConfig({
  displayName: "articles__ContainerStyled",
  componentId: "rbt8ph-1"
})(["padding-top:2.5rem;"]);
_c3 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c, _c2, _c3;

$RefreshReg$(_c, "Article");
$RefreshReg$(_c2, "Search");
$RefreshReg$(_c3, "ContainerStyled");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMudHN4Il0sIm5hbWVzIjpbIkFydGljbGUiLCJ1c2VTdGF0ZSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtZWRpdW1VUkwiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIml0ZW1zIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidGl0bGUiLCJhdXRob3IiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwiYXJ0aWNsZSIsInB1YkRhdGUiLCJTZWFyY2giLCJzdHlsZWQiLCJpbnB1dCIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInRleHQiLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsIkNvbnRhaW5lclN0eWxlZCIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBOztBQVlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBZ0IsRUFBaEIsQ0FEcEI7QUFBQSxNQUNiQyxRQURhO0FBQUEsTUFDSEMsV0FERzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFYkcsTUFGYTtBQUFBLE1BRUxDLFNBRks7O0FBSXBCLE1BQU1DLFNBQVMsR0FDYixxRkFERjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDRixTQUFELENBQUwsQ0FDR0csSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkVCxpQkFBVyxDQUFDUyxJQUFJLENBQUNDLEtBQU4sQ0FBWDtBQUNELEtBSkg7QUFLRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0UscUVBQUMsZUFBRDtBQUFBLDRCQUNFLHFFQUFDLE1BQUQ7QUFDRSxpQkFBVyxFQUFDLDBCQURkO0FBRUUsV0FBSyxFQUFFVCxNQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsZUFBT1QsU0FBUyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdkLFFBQVEsQ0FDTmUsTUFERixDQUNTO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsVUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsYUFDTmYsTUFBTSxLQUFLLEVBQVgsR0FDSWMsS0FBSyxDQUFDRSxXQUFOLEdBQW9CQyxRQUFwQixDQUE2QmpCLE1BQU0sQ0FBQ2dCLFdBQVAsRUFBN0IsS0FDQUQsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFyQixDQUE4QmpCLE1BQU0sQ0FBQ2dCLFdBQVAsRUFBOUIsQ0FGSixHQUdJLElBSkU7QUFBQSxLQURULEVBT0VFLEdBUEYsQ0FPTSxVQUFDQyxPQUFEO0FBQUEsMEJBQ0gscUVBQUMsbUVBQUQsb0JBQXNDQSxPQUF0QyxHQUFpQkEsT0FBTyxDQUFDQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREc7QUFBQSxLQVBOLENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FsQ0Q7O0dBQU14QixPOztLQUFBQSxPO0FBb0NOLElBQU15QixNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsNFBBQ0ksVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FESixFQUVELFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRSxJQUFyQjtBQUFBLENBRkMsRUFNVSxVQUFDSixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0csTUFBckI7QUFBQSxDQU5WLEVBY0MsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNJLFdBQXJCO0FBQUEsQ0FkRCxDQUFaO01BQU1ULE07QUFrQk4sSUFBTVUsZUFBZSxHQUFHVCxpRUFBTSxDQUFDVSw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDJCQUFyQjtNQUFNRCxlO0FBSVNuQyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcnRpY2xlcy42MWE2NzNlYzEwZTI2YmM5NzIxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgTWVkaXVtQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkL01lZGl1bUNhcmRcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbFwiO1xuXG50eXBlIEFydGljbGVUeXBlID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBwdWJEYXRlOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgdGh1bWJuYWlsOiBzdHJpbmc7XG59O1xuXG5jb25zdCBBcnRpY2xlID0gKCkgPT4ge1xuICBjb25zdCBbYXJ0aWNsZXMsIHNldEFydGljbGVzXSA9IHVzZVN0YXRlPEFydGljbGVUeXBlW10+KFtdKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG1lZGl1bVVSTCA9XG4gICAgXCJodHRwczovL2FwaS5yc3MyanNvbi5jb20vdjEvYXBpLmpzb24/cnNzX3VybD1odHRwczovL21lZGl1bS5jb20vZmVlZC9kc2Mtdml0LWJob3BhbFwiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2gobWVkaXVtVVJMKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEFydGljbGVzKGRhdGEuaXRlbXMpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJTdHlsZWQ+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFydGljbGUgb3IgYXV0aG9yXCJcbiAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIHthcnRpY2xlc1xuICAgICAgICAuZmlsdGVyKCh7IHRpdGxlLCBhdXRob3IgfSkgPT5cbiAgICAgICAgICBzZWFyY2ggIT09IFwiXCJcbiAgICAgICAgICAgID8gdGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgICAgYXV0aG9yLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICA6IHRydWVcbiAgICAgICAgKVxuICAgICAgICAubWFwKChhcnRpY2xlKSA9PiAoXG4gICAgICAgICAgPE1lZGl1bUNhcmQga2V5PXthcnRpY2xlLnB1YkRhdGV9IHsuLi5hcnRpY2xlfSAvPlxuICAgICAgICApKX1cbiAgICA8L0NvbnRhaW5lclN0eWxlZD5cbiAgKTtcbn07XG5cbmNvbnN0IFNlYXJjaCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3IudGV4dH07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3IucGxhY2Vob2xkZXJ9O1xuICB9XG5gO1xuXG5jb25zdCBDb250YWluZXJTdHlsZWQgPSBzdHlsZWQoQ29udGFpbmVyKWBcbiAgcGFkZGluZy10b3A6IDIuNXJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGU7XG4iXSwic291cmNlUm9vdCI6IiJ9