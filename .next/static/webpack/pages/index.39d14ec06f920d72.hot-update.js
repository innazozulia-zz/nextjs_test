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

/***/ "./components/SliderFooter.js":
/*!************************************!*\
  !*** ./components/SliderFooter.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/sliderFooter.module.css */ \"./styles/sliderFooter.module.css\");\n/* harmony import */ var _styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar SliderFooter = function() {\n    var SampleNextArrow = // const componentDidMount = () => {\n    //   console.log(this.refSlider.current);\n    //   console.log(this.refSlider.current.props.children);\n    // };\n    function SampleNextArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: onClick,\n            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().next__arrow),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronRight, {}, void 0, false, {\n                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    };\n    var SamplePrevArrow = function SamplePrevArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: onClick,\n            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().prev__arrow),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronLeft, {}, void 0, false, {\n                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    };\n    var refSlider = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n    var settings = {\n        centerMode: true,\n        className: \"center\",\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        arrows: true,\n        beforeChange: function beforeChange(currentSlide1, nextSlide) {\n            console.log(\"before change\", currentSlide1, nextSlide);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().numbers),\n                children: currentSlide1\n            }, void 0, false, {\n                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                lineNumber: 46,\n                columnNumber: 14\n            }, this);\n        },\n        afterChange: function afterChange(currentSlide1) {\n            console.log(\"after change\", currentSlide1);\n        },\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n            lineNumber: 52,\n            columnNumber: 16\n        }, _this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n            lineNumber: 53,\n            columnNumber: 16\n        }, _this),\n        responsive: [\n            {\n                breakpoint: 1185,\n                settings: {\n                    initialSlide: 0,\n                    slidesToShow: 2,\n                    slidesToScroll: 1\n                }\n            },\n            {\n                breakpoint: 780,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    initialSlide: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, settings), {\n            ref: refSlider,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img),\n                            src: \"slider/slider-1.png\",\n                            alt: \"slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img__bg),\n                            src: \"slider/bg.png\",\n                            alt: \"background\"\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__text_one),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Save watter\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Taking on the issue of ensuring access to safe water requires workdwide effort.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().numbers),\n                    children: currentSlide\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, _this),\n                \";\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item_two),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img_slider_two),\n                                src: \"slider/slider-2.png\",\n                                alt: \"slider\"\n                            }, void 0, false, {\n                                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__text_two),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Plant trees\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img_slider__three),\n                            src: \"slider/slider-3.png\",\n                            alt: \"slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__text_three),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Save energy\"\n                            }, void 0, false, {\n                                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img_slider__four),\n                            src: \"slider/slider-4.png\",\n                            alt: \"slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__text_four),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Avoid plastic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__item),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().img_slider__five),\n                            src: \"slider/slider-5.png\",\n                            alt: \"slider\"\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_sliderFooter_module_css__WEBPACK_IMPORTED_MODULE_6___default().slider__text_five),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Choose organic\"\n                            }, void 0, false, {\n                                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }), void 0, true, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n            lineNumber: 75,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderFooter.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, _this);\n};\n_c = SliderFooter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderFooter);\nvar _c;\n$RefreshReg$(_c, \"SliderFooter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjVCLFNBQVMsRUFBRVAseUZBQXNCOzRCQUNqQ29DLEdBQUcsRUFBQyxxQkFBcUI7NEJBQ3pCQyxHQUFHLEVBQUMsUUFBUTs7Ozs7aUNBQ1o7c0NBQ0YsOERBQUMvQixLQUFHOzRCQUFDQyxTQUFTLEVBQUVQLDBGQUF1QjtzQ0FDckMsNEVBQUN3QyxJQUFFOzBDQUFDLGVBQWE7Ozs7O3FDQUFLOzs7OztpQ0FDbEI7Ozs7Ozt5QkFDRjs4QkFDTiw4REFBQ2xDLEtBQUc7b0JBQUNDLFNBQVMsRUFBRVAscUZBQWtCOztzQ0FDaEMsOERBQUNtQyxLQUFHOzRCQUNGNUIsU0FBUyxFQUFFUCx5RkFBc0I7NEJBQ2pDb0MsR0FBRyxFQUFDLHFCQUFxQjs0QkFDekJDLEdBQUcsRUFBQyxRQUFROzs7OztpQ0FDWjtzQ0FDRiw4REFBQy9CLEtBQUc7NEJBQUNDLFNBQVMsRUFBRVAsMEZBQXVCO3NDQUNyQyw0RUFBQ3dDLElBQUU7MENBQUMsZ0JBQWM7Ozs7O3FDQUFLOzs7OztpQ0FDbkI7Ozs7Ozt5QkFDRjs7Ozs7O2lCQUNDOzs7OzthQUNMLENBQ047Q0FDSDtBQTNIS3RDLEtBQUFBLFlBQVk7QUE0SGxCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXJGb290ZXIuanM/MjhjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCwgSGlPdXRsaW5lQ2hldnJvbkxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyRm9vdGVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcblxuY29uc3QgU2xpZGVyRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCByZWZTbGlkZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvLyBjb25zdCBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnJlZlNsaWRlci5jdXJyZW50KTtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnJlZlNsaWRlci5jdXJyZW50LnByb3BzLmNoaWxkcmVuKTtcbiAgLy8gfTtcblxuICBmdW5jdGlvbiBTYW1wbGVOZXh0QXJyb3cocHJvcHMpIHtcbiAgICBjb25zdCB7IG9uQ2xpY2sgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGUubmV4dF9fYXJyb3d9PlxuICAgICAgICA8SGlPdXRsaW5lQ2hldnJvblJpZ2h0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gU2FtcGxlUHJldkFycm93KHByb3BzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e3N0eWxlLnByZXZfX2Fycm93fT5cbiAgICAgICAgPEhpT3V0bGluZUNoZXZyb25MZWZ0IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgY2xhc3NOYW1lOiBcImNlbnRlclwiLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGFycm93czogdHJ1ZSxcblxuICAgIGJlZm9yZUNoYW5nZTogZnVuY3Rpb24gKGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImJlZm9yZSBjaGFuZ2VcIiwgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5udW1iZXJzfT57Y3VycmVudFNsaWRlfTwvZGl2PjtcbiAgICB9LFxuICAgIGFmdGVyQ2hhbmdlOiBmdW5jdGlvbiAoY3VycmVudFNsaWRlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGNoYW5nZVwiLCBjdXJyZW50U2xpZGUpO1xuICAgIH0sXG5cbiAgICBuZXh0QXJyb3c6IDxTYW1wbGVOZXh0QXJyb3cgLz4sXG4gICAgcHJldkFycm93OiA8U2FtcGxlUHJldkFycm93IC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTE4NSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogNzgwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fY29udGFpbmVyfT5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSByZWY9e3JlZlNsaWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2l0ZW19PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWd9IHNyYz1cInNsaWRlci9zbGlkZXItMS5wbmdcIiBhbHQ9XCJzbGlkZXJcIiAvPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWdfX2JnfSBzcmM9XCJzbGlkZXIvYmcucG5nXCIgYWx0PVwiYmFja2dyb3VuZFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fdGV4dF9vbmV9PlxuICAgICAgICAgICAgPGg1PlNhdmUgd2F0dGVyPC9oNT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUYWtpbmcgb24gdGhlIGlzc3VlIG9mIGVuc3VyaW5nIGFjY2VzcyB0byBzYWZlIHdhdGVyIHJlcXVpcmVzXG4gICAgICAgICAgICAgIHdvcmtkd2lkZSBlZmZvcnQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubnVtYmVyc30+e2N1cnJlbnRTbGlkZX08L2Rpdj47XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2l0ZW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2l0ZW1fdHdvfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWdfc2xpZGVyX3R3b31cbiAgICAgICAgICAgICAgc3JjPVwic2xpZGVyL3NsaWRlci0yLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInNsaWRlclwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fdGV4dF90d299PlxuICAgICAgICAgICAgICA8aDU+UGxhbnQgdHJlZXM8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuc2xpZGVyX19pdGVtfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmltZ19zbGlkZXJfX3RocmVlfVxuICAgICAgICAgICAgc3JjPVwic2xpZGVyL3NsaWRlci0zLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJzbGlkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fdGV4dF90aHJlZX0+XG4gICAgICAgICAgICA8aDU+U2F2ZSBlbmVyZ3k8L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9faXRlbX0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbWdfc2xpZGVyX19mb3VyfVxuICAgICAgICAgICAgc3JjPVwic2xpZGVyL3NsaWRlci00LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJzbGlkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fdGV4dF9mb3VyfT5cbiAgICAgICAgICAgIDxoNT5Bdm9pZCBwbGFzdGljPC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX2l0ZW19PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuaW1nX3NsaWRlcl9fZml2ZX1cbiAgICAgICAgICAgIHNyYz1cInNsaWRlci9zbGlkZXItNS5wbmdcIlxuICAgICAgICAgICAgYWx0PVwic2xpZGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5zbGlkZXJfX3RleHRfZml2ZX0+XG4gICAgICAgICAgICA8aDU+Q2hvb3NlIG9yZ2FuaWM8L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNsaWRlckZvb3RlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlciIsIkhpT3V0bGluZUNoZXZyb25SaWdodCIsIkhpT3V0bGluZUNoZXZyb25MZWZ0Iiwic3R5bGUiLCJyZW5kZXIiLCJTbGlkZXJGb290ZXIiLCJTYW1wbGVOZXh0QXJyb3ciLCJwcm9wcyIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJuZXh0X19hcnJvdyIsIlNhbXBsZVByZXZBcnJvdyIsInByZXZfX2Fycm93IiwicmVmU2xpZGVyIiwiY3JlYXRlUmVmIiwic2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwiY29uc29sZSIsImxvZyIsIm51bWJlcnMiLCJhZnRlckNoYW5nZSIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5pdGlhbFNsaWRlIiwic2xpZGVyX19jb250YWluZXIiLCJyZWYiLCJzbGlkZXJfX2l0ZW0iLCJpbWciLCJzcmMiLCJhbHQiLCJpbWdfX2JnIiwic2xpZGVyX190ZXh0X29uZSIsImg1IiwicCIsInNsaWRlcl9faXRlbV90d28iLCJpbWdfc2xpZGVyX3R3byIsInNsaWRlcl9fdGV4dF90d28iLCJpbWdfc2xpZGVyX190aHJlZSIsInNsaWRlcl9fdGV4dF90aHJlZSIsImltZ19zbGlkZXJfX2ZvdXIiLCJzbGlkZXJfX3RleHRfZm91ciIsImltZ19zbGlkZXJfX2ZpdmUiLCJzbGlkZXJfX3RleHRfZml2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SliderFooter.js\n"));

/***/ })

});