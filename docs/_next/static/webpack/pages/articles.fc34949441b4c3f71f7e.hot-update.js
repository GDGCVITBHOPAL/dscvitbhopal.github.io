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
})(["background:", ";color:", ";width:45rem;font-size:25px;outline:none;border:1px solid ", ";border-radius:5px;box-shadow:0px 2px 12px 0px rgba(0,0,0,0.03);margin-bottom:2rem;line-height:35px;padding:20px;font-weight:500;&::placeholder{color:", ";}"], function (p) {
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
})([""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMudHN4Il0sIm5hbWVzIjpbIkFydGljbGUiLCJ1c2VTdGF0ZSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtZWRpdW1VUkwiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIml0ZW1zIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyIiwidGl0bGUiLCJhdXRob3IiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwiYXJ0aWNsZSIsInB1YkRhdGUiLCJTZWFyY2giLCJzdHlsZWQiLCJpbnB1dCIsInAiLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsInRleHQiLCJib3JkZXIiLCJwbGFjZWhvbGRlciIsIkNvbnRhaW5lclN0eWxlZCIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBOztBQVlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDWUMsc0RBQVEsQ0FBZ0IsRUFBaEIsQ0FEcEI7QUFBQSxNQUNiQyxRQURhO0FBQUEsTUFDSEMsV0FERzs7QUFBQSxtQkFFUUYsc0RBQVEsQ0FBQyxFQUFELENBRmhCO0FBQUEsTUFFYkcsTUFGYTtBQUFBLE1BRUxDLFNBRks7O0FBSXBCLE1BQU1DLFNBQVMsR0FDYixxRkFERjtBQUdBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDRixTQUFELENBQUwsQ0FDR0csSUFESCxDQUNRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkVCxpQkFBVyxDQUFDUyxJQUFJLENBQUNDLEtBQU4sQ0FBWDtBQUNELEtBSkg7QUFLRCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsc0JBQ0UscUVBQUMsZUFBRDtBQUFBLDRCQUNFLHFFQUFDLE1BQUQ7QUFDRSxpQkFBVyxFQUFDLDBCQURkO0FBRUUsV0FBSyxFQUFFVCxNQUZUO0FBR0UsY0FBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsZUFBT1QsU0FBUyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBTUdkLFFBQVEsQ0FDTmUsTUFERixDQUNTO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsVUFBVUMsTUFBVixRQUFVQSxNQUFWO0FBQUEsYUFDTmYsTUFBTSxLQUFLLEVBQVgsR0FDSWMsS0FBSyxDQUFDRSxXQUFOLEdBQW9CQyxRQUFwQixDQUE2QmpCLE1BQU0sQ0FBQ2dCLFdBQVAsRUFBN0IsS0FDQUQsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFyQixDQUE4QmpCLE1BQU0sQ0FBQ2dCLFdBQVAsRUFBOUIsQ0FGSixHQUdJLElBSkU7QUFBQSxLQURULEVBT0VFLEdBUEYsQ0FPTSxVQUFDQyxPQUFEO0FBQUEsMEJBQ0gscUVBQUMsbUVBQUQsb0JBQXNDQSxPQUF0QyxHQUFpQkEsT0FBTyxDQUFDQyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREc7QUFBQSxLQVBOLENBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FsQ0Q7O0dBQU14QixPOztLQUFBQSxPO0FBb0NOLElBQU15QixNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsNlBBQ0ksVUFBQ0MsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNDLFVBQXJCO0FBQUEsQ0FESixFQUVELFVBQUNILENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjRSxJQUFyQjtBQUFBLENBRkMsRUFNVSxVQUFDSixDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0csTUFBckI7QUFBQSxDQU5WLEVBY0MsVUFBQ0wsQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNJLFdBQXJCO0FBQUEsQ0FkRCxDQUFaO01BQU1ULE07QUFrQk4sSUFBTVUsZUFBZSxHQUFHVCxpRUFBTSxDQUFDVSw0REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLFFBQXJCO01BQU1ELGU7QUFFU25DLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGVzLmZjMzQ5NDk0NDFiNGMzZjcxZjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvTWVkaXVtQ2FyZFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsXCI7XG5cbnR5cGUgQXJ0aWNsZVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHB1YkRhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICB0aHVtYm5haWw6IHN0cmluZztcbn07XG5cbmNvbnN0IEFydGljbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0aWNsZVR5cGVbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgbWVkaXVtVVJMID1cbiAgICBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPWh0dHBzOi8vbWVkaXVtLmNvbS9mZWVkL2RzYy12aXQtYmhvcGFsXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChtZWRpdW1VUkwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YS5pdGVtcyk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclN0eWxlZD5cbiAgICAgIDxTZWFyY2hcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYXJ0aWNsZSBvciBhdXRob3JcIlxuICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAge2FydGljbGVzXG4gICAgICAgIC5maWx0ZXIoKHsgdGl0bGUsIGF1dGhvciB9KSA9PlxuICAgICAgICAgIHNlYXJjaCAhPT0gXCJcIlxuICAgICAgICAgICAgPyB0aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgICBhdXRob3IudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICApXG4gICAgICAgIC5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICA8TWVkaXVtQ2FyZCBrZXk9e2FydGljbGUucHViRGF0ZX0gey4uLmFydGljbGV9IC8+XG4gICAgICAgICkpfVxuICAgIDwvQ29udGFpbmVyU3R5bGVkPlxuICApO1xufTtcblxuY29uc3QgU2VhcmNoID0gc3R5bGVkLmlucHV0YFxuICBiYWNrZ3JvdW5kOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xuICBjb2xvcjogJHsocCkgPT4gcC50aGVtZS5jb2xvci50ZXh0fTtcbiAgd2lkdGg6IDQ1cmVtO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7KHApID0+IHAudGhlbWUuY29sb3IuYm9yZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3IucGxhY2Vob2xkZXJ9O1xuICB9XG5gO1xuXG5jb25zdCBDb250YWluZXJTdHlsZWQgPSBzdHlsZWQoQ29udGFpbmVyKWBgO1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==