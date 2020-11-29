webpackHotUpdate_N_E("pages/articles",{

/***/ "./components/card/MediumCard.tsx":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/articles.tsx":
/*!****************************!*\
  !*** ./pages/articles.tsx ***!
  \****************************/
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


var _jsxFileName = "/home/smitbarmase/projects/dsc-web-next/pages/articles.tsx",
    _this = undefined,
    _s = $RefreshSig$();


 // Components



var Article = function Article() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      articles = _useState[0],
      setArticles = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      search = _useState2[0],
      setSearch = _useState2[1];

  var mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dsc-vit-bhopal";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch(mediumURL).then(function (res) {
      return res.json();
    }).then(function (data) {
      setArticles(data.items);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ContainerStyled, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 10
  }, _this);
};

_s(Article, "Q6N2YgmUdb45Ldq3fATlKEpCPC4=");

_c = Article;
var Search = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
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
var ContainerStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_global__WEBPACK_IMPORTED_MODULE_3__["Container"]).withConfig({
  displayName: "articles__ContainerStyled",
  componentId: "rbt8ph-1"
})(["padding-top:2.5rem;"]);
_c2 = ContainerStyled;
/* harmony default export */ __webpack_exports__["default"] = (Article);

var _c, _c2;

$RefreshReg$(_c, "Article");
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

/***/ }),

/***/ "./utils/ShortenText.ts":
false,

/***/ "./utils/ToText.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMudHN4Il0sIm5hbWVzIjpbIkFydGljbGUiLCJ1c2VTdGF0ZSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtZWRpdW1VUkwiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIml0ZW1zIiwiU2VhcmNoIiwic3R5bGVkIiwiaW5wdXQiLCJwIiwidGhlbWUiLCJjb2xvciIsImJhY2tncm91bmQiLCJ0ZXh0IiwiYm9yZGVyIiwicGxhY2Vob2xkZXIiLCJDb250YWluZXJTdHlsZWQiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFFQTs7QUFZQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLHNEQUFRLENBQWdCLEVBQWhCLENBRHBCO0FBQUEsTUFDYkMsUUFEYTtBQUFBLE1BQ0hDLFdBREc7O0FBQUEsbUJBRVFGLHNEQUFRLENBQUMsRUFBRCxDQUZoQjtBQUFBLE1BRWJHLE1BRmE7QUFBQSxNQUVMQyxTQUZLOztBQUlwQixNQUFNQyxTQUFTLEdBQ2IscUZBREY7QUFHQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQ0YsU0FBRCxDQUFMLENBQ0dHLElBREgsQ0FDUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFQsaUJBQVcsQ0FBQ1MsSUFBSSxDQUFDQyxLQUFOLENBQVg7QUFDRCxLQUpIO0FBS0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLHNCQUFPLHFFQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FoQkQ7O0dBQU1iLE87O0tBQUFBLE87QUFrQk4sSUFBTWMsTUFBTSxHQUFHQyx5REFBTSxDQUFDQyxLQUFWO0FBQUE7QUFBQTtBQUFBLDZQQUNJLFVBQUNDLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjQyxVQUFyQjtBQUFBLENBREosRUFFRCxVQUFDSCxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVFDLEtBQVIsQ0FBY0UsSUFBckI7QUFBQSxDQUZDLEVBTVUsVUFBQ0osQ0FBRDtBQUFBLFNBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRQyxLQUFSLENBQWNHLE1BQXJCO0FBQUEsQ0FOVixFQWNDLFVBQUNMLENBQUQ7QUFBQSxTQUFPQSxDQUFDLENBQUNDLEtBQUYsQ0FBUUMsS0FBUixDQUFjSSxXQUFyQjtBQUFBLENBZEQsQ0FBWjtBQWtCQSxJQUFNQyxlQUFlLEdBQUdULGlFQUFNLENBQUNVLDREQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMkJBQXJCO01BQU1ELGU7QUFJU3hCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FydGljbGVzLmZhNWEyYTc1OTcyM2RlMmJhODUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBNZWRpdW1DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmQvTWVkaXVtQ2FyZFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsXCI7XG5cbnR5cGUgQXJ0aWNsZVR5cGUgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHB1YkRhdGU6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xuICBhdXRob3I6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xuICB0aHVtYm5haWw6IHN0cmluZztcbn07XG5cbmNvbnN0IEFydGljbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0aWNsZVR5cGVbXT4oW10pO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgbWVkaXVtVVJMID1cbiAgICBcImh0dHBzOi8vYXBpLnJzczJqc29uLmNvbS92MS9hcGkuanNvbj9yc3NfdXJsPWh0dHBzOi8vbWVkaXVtLmNvbS9mZWVkL2RzYy12aXQtYmhvcGFsXCI7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChtZWRpdW1VUkwpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0QXJ0aWNsZXMoZGF0YS5pdGVtcyk7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Q29udGFpbmVyU3R5bGVkPjwvQ29udGFpbmVyU3R5bGVkPjtcbn07XG5cbmNvbnN0IFNlYXJjaCA9IHN0eWxlZC5pbnB1dGBcbiAgYmFja2dyb3VuZDogJHsocCkgPT4gcC50aGVtZS5jb2xvci5iYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7KHApID0+IHAudGhlbWUuY29sb3IudGV4dH07XG4gIHdpZHRoOiA0NXJlbTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLmJvcmRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkeyhwKSA9PiBwLnRoZW1lLmNvbG9yLnBsYWNlaG9sZGVyfTtcbiAgfVxuYDtcblxuY29uc3QgQ29udGFpbmVyU3R5bGVkID0gc3R5bGVkKENvbnRhaW5lcilgXG4gIHBhZGRpbmctdG9wOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==