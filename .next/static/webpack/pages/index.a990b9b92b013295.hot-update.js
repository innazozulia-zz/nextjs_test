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

/***/ "./components/SliderMain.js":
/*!**********************************!*\
  !*** ./components/SliderMain.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/slider_first.module.css */ \"./styles/slider_first.module.css\");\n/* harmony import */ var _styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _this = undefined;\n\n\n\n\n\nvar SliderMain = function() {\n    var SampleNextArrow = function SampleNextArrow(props) {\n        var className = props.className, _$style = props.style, onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: className,\n            style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, _$style), {\n                display: \"block\",\n                background: \"red\"\n            }),\n            onClick: onClick\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    };\n    var SamplePrevArrow = function SamplePrevArrow(props) {\n        var className = props.className, _$style = props.style, onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: className,\n            style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, _$style), {\n                display: \"block\",\n                background: \"green\"\n            }),\n            onClick: onClick\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this);\n    };\n    var settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        // arrows: true,\n        autoplay: true,\n        autoplaySpeed: 2000,\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 39,\n            columnNumber: 16\n        }, _this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 40,\n            columnNumber: 16\n        }, _this),\n        responsive: [\n            {\n                breakpoint: 1100,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1\n                }\n            },\n            //   {\n            //     breakpoint: 620,\n            //     settings: {\n            //       slidesToShow: 2,\n            //       slidesToScroll: 1,\n            //     },\n            //   },\n            {\n                breakpoint: 400,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, settings), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-1.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, _this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-2.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-3.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }), void 0, true, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, _this);\n};\n_c = SliderMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderMain);\nvar _c;\n$RefreshReg$(_c, \"SliderMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXJNYWluLmpzPzA2ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5cbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3NsaWRlcl9maXJzdC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFNsaWRlck1haW4gPSAoKSA9PiB7XG4gIGZ1bmN0aW9uIFNhbXBsZU5leHRBcnJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwicmVkXCIgfX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNhbXBsZVByZXZBcnJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBkaXNwbGF5OiBcImJsb2NrXCIsIGJhY2tncm91bmQ6IFwiZ3JlZW5cIiB9fVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAvLyBhcnJvd3M6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICBuZXh0QXJyb3c6IDxTYW1wbGVOZXh0QXJyb3cgLz4sXG4gICAgcHJldkFycm93OiA8U2FtcGxlUHJldkFycm93IC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTEwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgYnJlYWtwb2ludDogNjIwLFxuICAgICAgLy8gICAgIHNldHRpbmdzOiB7XG4gICAgICAvLyAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAvLyAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA0MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2NvbnRhaW5lcn0+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2l0ZW19PlxuICAgICAgICAgIDxpbWcgc3JjPVwiY29ubmVjdC9pdGVtLTEuanBnXCIgLz5cbiAgICAgICAgPC9kaXY+e1wiIFwifVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPVwiY29ubmVjdC9pdGVtLTIuanBnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJjb25uZWN0L2l0ZW0tMy5qcGdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyTWFpbjtcbiJdLCJuYW1lcyI6WyJTbGlkZXIiLCJzdHlsZSIsIlNsaWRlck1haW4iLCJTYW1wbGVOZXh0QXJyb3ciLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJkaXNwbGF5IiwiYmFja2dyb3VuZCIsIlNhbXBsZVByZXZBcnJvdyIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2xpZGVyX19jb250YWluZXIiLCJzbGlkZXJfX2l0ZW0iLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SliderMain.js\n"));

/***/ })

});