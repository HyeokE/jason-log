"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-notion-x/src/styles.css */ \"./node_modules/react-notion-x/src/styles.css\");\n/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/notion.css */ \"./src/styles/notion.css\");\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_notion_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hooks/useThemeEffect */ \"./src/hooks/useThemeEffect.ts\");\n/* harmony import */ var _hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useGtagEffect */ \"./src/hooks/useGtagEffect.ts\");\n/* harmony import */ var _components_Scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Scripts */ \"./src/components/Scripts.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @hooks/useStorage */ \"./src/hooks/useStorage.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n// import 'prismjs/themes/prism-tomorrow.css';\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var getLayout = Component.getLayout || function(page) {\n        return page;\n    };\n    (0,_hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function() {\n        // 로컬 스토리지 감시\n        var unsubscribe = (0,_hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__.observeLocalStorage)(\"theme\", function(event) {\n            console.log(\"event\", event);\n        });\n        // 컴포넌트 언마운트 시 리스너 제거\n        return function() {\n            return unsubscribe && unsubscribe();\n        };\n    }, [\n        _hooks_useStorage__WEBPACK_IMPORTED_MODULE_9__.observeLocalStorage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Scripts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/junhyeok/react/hyeok-dev/src/pages/_app.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                fileName: \"/Users/junhyeok/react/hyeok-dev/src/pages/_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 18\n            }, this))\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"eAILmadgx4+xJOt3SW+KCwo97hs=\", false, function() {\n    return [\n        _hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQSw4Q0FBOEM7QUFDUDtBQUNMO0FBQ0w7QUFDRDtBQUN1QjtBQUNGO0FBQ1A7QUFHUjtBQUVzQjs7QUFVeEQsU0FBU0ssS0FBSyxDQUFDLEtBQTRDLEVBQUU7UUFBNUNDLFNBQVMsR0FBWCxLQUE0QyxDQUExQ0EsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQTRDLENBQS9CQSxTQUFTOztJQUNuQyxJQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0UsU0FBUyxJQUFLLFNBQUNDLElBQUk7ZUFBS0EsSUFBSTtLQUFBO0lBQ3hEVCxpRUFBYyxFQUFFLENBQUM7SUFDakJDLGdFQUFhLEVBQUUsQ0FBQztJQUVoQkUsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2Q7UUFDZ0IsSUFBVk8sV0FBVyxHQUFHTixzRUFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBQ08sS0FBSyxFQUFLO1lBQzFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVGLEtBQUssQ0FBQyxDQUFDO1NBQzdCLENBQUM7UUFFRjtRQUNBLE9BQU87bUJBQU1ELFdBQVcsSUFBSUEsV0FBVyxFQUFFO1NBQUEsQ0FBRTtLQUM1QyxFQUFFO1FBQUNOLGtFQUFtQjtLQUFDLENBQUMsQ0FBQztJQUUxQixxQkFDRTs7MEJBQ0UsOERBQUNGLDJEQUFPOzs7O29CQUFHO1lBQ1ZNLFNBQVMsZUFBQyw4REFBQ0YsU0FBUyxvQkFBS0MsU0FBUzs7OztvQkFBSSxDQUFDOztvQkFDdkMsQ0FDSDtDQUNIO0dBckJRRixLQUFLOztRQUVaTCw2REFBYztRQUNkQyw0REFBYTs7O0FBSE5JLEtBQUFBLEtBQUs7QUF1QmQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLXRvbW9ycm93LmNzcyc7XG5pbXBvcnQgJ3JlYWN0LW5vdGlvbi14L3NyYy9zdHlsZXMuY3NzJztcbmltcG9ydCAna2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzJztcbmltcG9ydCAnQHN0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJ0BzdHlsZXMvbm90aW9uLmNzcyc7XG5pbXBvcnQgdXNlVGhlbWVFZmZlY3QgZnJvbSAnQGhvb2tzL3VzZVRoZW1lRWZmZWN0JztcbmltcG9ydCB1c2VHdGFnRWZmZWN0IGZyb20gJ0Bob29rcy91c2VHdGFnRWZmZWN0JztcbmltcG9ydCBTY3JpcHRzIGZyb20gJ0Bjb21wb25lbnRzL1NjcmlwdHMnO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHR5cGUgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgeyBvYnNlcnZlTG9jYWxTdG9yYWdlIH0gZnJvbSAnQGhvb2tzL3VzZVN0b3JhZ2UnO1xuXG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UGFnZVByb3BzID0ge30+ID0gTmV4dFBhZ2U8UGFnZVByb3BzPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xufTtcblxudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0IHx8ICgocGFnZSkgPT4gcGFnZSk7XG4gIHVzZVRoZW1lRWZmZWN0KCk7XG4gIHVzZUd0YWdFZmZlY3QoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIOuhnOy7rCDsiqTthqDrpqzsp4Ag6rCQ7IucXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvYnNlcnZlTG9jYWxTdG9yYWdlKCd0aGVtZScsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8g7Lu07Y+s64SM7Yq4IOyWuOuniOyatO2KuCDsi5wg66as7Iqk64SIIOygnOqxsFxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSAmJiB1bnN1YnNjcmliZSgpIDtcbiAgfSwgW29ic2VydmVMb2NhbFN0b3JhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlVGhlbWVFZmZlY3QiLCJ1c2VHdGFnRWZmZWN0IiwiU2NyaXB0cyIsInVzZUVmZmVjdCIsIm9ic2VydmVMb2NhbFN0b3JhZ2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiLCJ1bnN1YnNjcmliZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});