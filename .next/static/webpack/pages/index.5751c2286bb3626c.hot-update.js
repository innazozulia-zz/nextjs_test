"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Accordion = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(null), 2), selected = ref[0], setSelected = ref[1];\n    var data = [\n        {\n            question: \"What can i do to protect our planet?\",\n            answer: \"Not to make an open fire in nature and to clean up letter, not to pollute open water bodies, to switch to alternative energy sourse\"\n        },\n        {\n            question: \"How to save nature ecologe?\",\n            answer: \"lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck\"\n        },\n        {\n            question: \"What is nature convertation?\",\n            answer: \"lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck\"\n        }, \n    ];\n    var toggle = function(i) {\n        if (selected === i) {\n            return setSelected(null);\n        }\n        setSelected(i);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"accordion\",\n            children: data.map(function(item, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            onClick: function() {\n                                return toggle(i);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: item.question\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: selected === i ? \"-\" : \"+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: selected === i ? \"content__show\" : \"content\",\n                            children: item.answer\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(Accordion, \"PVKrpNrydW4BpnDEq9OT3cVmCk4=\");\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUEwQjtBQUUxQixJQUFNQyxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBZ0NELEdBQW9CLG9GQUFwQkEscURBQWMsQ0FBQyxJQUFJLENBQUMsTUFBN0NHLFFBQVEsR0FBaUJILEdBQW9CLEdBQXJDLEVBQUVJLFdBQVcsR0FBSUosR0FBb0IsR0FBeEI7SUFFNUIsSUFBTUssSUFBSSxHQUFHO1FBQ1g7WUFDRUMsUUFBUSxFQUFFLHNDQUFzQztZQUNoREMsTUFBTSxFQUNKLHFJQUFxSTtTQUN4STtRQUNEO1lBQ0VELFFBQVEsRUFBRSw2QkFBNkI7WUFDdkNDLE1BQU0sRUFBRSxvREFBb0Q7U0FDN0Q7UUFDRDtZQUNFRCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDQyxNQUFNLEVBQUUsb0RBQW9EO1NBQzdEO0tBQ0Y7SUFFRCxJQUFNQyxNQUFNLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3BCLElBQUlOLFFBQVEsS0FBS00sQ0FBQyxFQUFFO1lBQ2xCLE9BQU9MLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNEQSxXQUFXLENBQUNLLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXO3NCQUN2Qk4sSUFBSSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFSixDQUFDO3FDQUNoQiw4REFBQ0MsS0FBRztvQkFBU0MsU0FBUyxFQUFDLE1BQU07O3NDQUMzQiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE9BQU87NEJBQUNHLE9BQU8sRUFBRTt1Q0FBTU4sTUFBTSxDQUFDQyxDQUFDLENBQUM7NkJBQUE7OzhDQUM3Qyw4REFBQ00sSUFBRTs4Q0FBRUYsSUFBSSxDQUFDUCxRQUFROzs7Ozt5Q0FBTTs4Q0FDeEIsOERBQUNVLE1BQUk7OENBQUViLFFBQVEsS0FBS00sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHOzs7Ozt5Q0FBUTs7Ozs7O2lDQUNyQztzQ0FFTiw4REFBQ0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFUixRQUFRLEtBQUtNLENBQUMsR0FBRyxlQUFlLEdBQUcsU0FBUztzQ0FDekRJLElBQUksQ0FBQ04sTUFBTTs7Ozs7aUNBQ1I7O21CQVJFRSxDQUFDOzs7O3lCQVNMO2FBQ1AsQ0FBQzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBM0NLUixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUE0Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FjY29yZGlvbi5qcz85YTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWNjb3JkaW9uID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBjYW4gaSBkbyB0byBwcm90ZWN0IG91ciBwbGFuZXQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiTm90IHRvIG1ha2UgYW4gb3BlbiBmaXJlIGluIG5hdHVyZSBhbmQgdG8gY2xlYW4gdXAgbGV0dGVyLCBub3QgdG8gcG9sbHV0ZSBvcGVuIHdhdGVyIGJvZGllcywgdG8gc3dpdGNoIHRvIGFsdGVybmF0aXZlIGVuZXJneSBzb3Vyc2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBzYXZlIG5hdHVyZSBlY29sb2dlP1wiLFxuICAgICAgYW5zd2VyOiBcImxpaG5rc2RqbmMgc2Jjc2t1YmMgaHZiZHMga2pzYmRjIGtqc2Ric2RjIGtzamRic2NrXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIG5hdHVyZSBjb252ZXJ0YXRpb24/XCIsXG4gICAgICBhbnN3ZXI6IFwibGlobmtzZGpuYyBzYmNza3ViYyBodmJkcyBranNiZGMga2pzZGJzZGMga3NqZGJzY2tcIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHRvZ2dsZSA9IChpKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkID09PSBpKSB7XG4gICAgICByZXR1cm4gc2V0U2VsZWN0ZWQobnVsbCk7XG4gICAgfVxuICAgIHNldFNlbGVjdGVkKGkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiPlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZShpKX0+XG4gICAgICAgICAgICAgIDxoMj57aXRlbS5xdWVzdGlvbn08L2gyPlxuICAgICAgICAgICAgICA8c3Bhbj57c2VsZWN0ZWQgPT09IGkgPyBcIi1cIiA6IFwiK1wifTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VsZWN0ZWQgPT09IGkgPyBcImNvbnRlbnRfX3Nob3dcIiA6IFwiY29udGVudFwifT5cbiAgICAgICAgICAgICAge2l0ZW0uYW5zd2VyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWNjb3JkaW9uIiwidXNlU3RhdGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGF0YSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwidG9nZ2xlIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJvbkNsaWNrIiwiaDIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Accordion.js\n"));

/***/ })

});