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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/slider_first.module.css */ \"./styles/slider_first.module.css\");\n/* harmony import */ var _styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar SliderMain = function() {\n    var SampleNextArrow = function SampleNextArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: onClick,\n            className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4___default().next__arrow),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineChevronRight, {}, void 0, false, {\n                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this);\n    };\n    var SamplePrevArrow = function SamplePrevArrow(props) {\n        var onClick = props.onClick;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onClick: onClick,\n            className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4___default().prev__arrow),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineChevronLeft, {}, void 0, false, {\n                fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    };\n    var settings = {\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: true,\n        // autoplay: true,\n        autoplaySpeed: 2000,\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, _this),\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 36,\n            columnNumber: 16\n        }, _this),\n        responsive: [\n            {\n                breakpoint: 1100,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 1\n                }\n            },\n            //   {\n            //     breakpoint: 620,\n            //     settings: {\n            //       slidesToShow: 2,\n            //       slidesToScroll: 1,\n            //     },\n            //   },\n            {\n                breakpoint: 400,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4___default().slider__container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_1__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_slider_first_module_css__WEBPACK_IMPORTED_MODULE_4___default().slider__item),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-1.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-2.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"connect/item-3.jpg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }), void 0, true, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/SliderMain.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_c = SliderMain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SliderMain);\nvar _c;\n$RefreshReg$(_c, \"SliderMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlck1haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQWlDO0FBQ087QUFDTTtBQUMrQjtBQUV2QjtBQUV0RCxJQUFNSSxVQUFVLEdBQUcsV0FBTTtRQUNkQyxlQUFlLEdBQXhCLFNBQVNBLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFO1FBQzlCLElBQU0sT0FBUyxHQUFLQSxLQUFLLENBQWpCQyxPQUFPO1FBQ2YscUJBQ0UsOERBQUNDLEtBQUc7WUFBQ0QsT0FBTyxFQUFFQSxPQUFPO1lBQUVFLFNBQVMsRUFBRU4sb0ZBQWlCO3NCQUNqRCw0RUFBQ0YsaUVBQXFCOzs7O29CQUFHOzs7OztnQkFDckIsQ0FDTjtLQUNIO1FBRVFVLGVBQWUsR0FBeEIsU0FBU0EsZUFBZSxDQUFDTCxLQUFLLEVBQUU7UUFDOUIsSUFBTSxPQUFTLEdBQUtBLEtBQUssQ0FBakJDLE9BQU87UUFDZixxQkFDRSw4REFBQ0MsS0FBRztZQUFDRCxPQUFPLEVBQUVBLE9BQU87WUFBRUUsU0FBUyxFQUFFTixvRkFBaUI7c0JBQ2pELDRFQUFDRCxnRUFBb0I7Ozs7b0JBQUc7Ozs7O2dCQUNwQixDQUNOO0tBQ0g7SUFFRCxJQUFNVyxRQUFRLEdBQUc7UUFDZkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsWUFBWSxFQUFFLENBQUM7UUFDZkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLE1BQU0sRUFBRSxJQUFJO1FBQ1osa0JBQWtCO1FBQ2xCQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsU0FBUyxnQkFBRSw4REFBQ2YsZUFBZTs7OztpQkFBRztRQUM5QmdCLFNBQVMsZ0JBQUUsOERBQUNWLGVBQWU7Ozs7aUJBQUc7UUFDOUJXLFVBQVUsRUFBRTtZQUNWO2dCQUNFQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJWLFFBQVEsRUFBRTtvQkFDUkcsWUFBWSxFQUFFLENBQUM7b0JBQ2ZDLGNBQWMsRUFBRSxDQUFDO2lCQUNsQjthQUNGO1lBQ0QsTUFBTTtZQUNOLHVCQUF1QjtZQUN2QixrQkFBa0I7WUFDbEIseUJBQXlCO1lBQ3pCLDJCQUEyQjtZQUMzQixTQUFTO1lBQ1QsT0FBTztZQUNQO2dCQUNFTSxVQUFVLEVBQUUsR0FBRztnQkFDZlYsUUFBUSxFQUFFO29CQUNSRyxZQUFZLEVBQUUsQ0FBQztvQkFDZkMsY0FBYyxFQUFFLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNULEtBQUc7UUFBQ0MsU0FBUyxFQUFFTiwwRkFBdUI7a0JBQ3JDLDRFQUFDSCxtREFBTSwwS0FBS2EsUUFBUTs7OEJBQ2xCLDhEQUFDTCxLQUFHO29CQUFDQyxTQUFTLEVBQUVOLHFGQUFrQjs4QkFDaEMsNEVBQUN1QixLQUFHO3dCQUFDQyxHQUFHLEVBQUMsb0JBQW9COzs7Ozs2QkFBRzs7Ozs7eUJBQzVCO2dCQUFDLEdBQUc7OEJBQ1YsOERBQUNuQixLQUFHOzhCQUNGLDRFQUFDa0IsS0FBRzt3QkFBQ0MsR0FBRyxFQUFDLG9CQUFvQjs7Ozs7NkJBQUc7Ozs7O3lCQUM1Qjs4QkFDTiw4REFBQ25CLEtBQUc7OEJBQ0YsNEVBQUNrQixLQUFHO3dCQUFDQyxHQUFHLEVBQUMsb0JBQW9COzs7Ozs2QkFBRzs7Ozs7eUJBQzVCOzs7Ozs7aUJBQ0M7Ozs7O2FBQ0wsQ0FDTjtDQUNIO0FBcEVLdkIsS0FBQUEsVUFBVTtBQXNFaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRlck1haW4uanM/MDZkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzXCI7XG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcbmltcG9ydCB7IEhpT3V0bGluZUNoZXZyb25SaWdodCwgSGlPdXRsaW5lQ2hldnJvbkxlZnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcblxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvc2xpZGVyX2ZpcnN0Lm1vZHVsZS5jc3NcIjtcblxuY29uc3QgU2xpZGVyTWFpbiA9ICgpID0+IHtcbiAgZnVuY3Rpb24gU2FtcGxlTmV4dEFycm93KHByb3BzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e3N0eWxlLm5leHRfX2Fycm93fT5cbiAgICAgICAgPEhpT3V0bGluZUNoZXZyb25SaWdodCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFNhbXBsZVByZXZBcnJvdyhwcm9wcykge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzdHlsZS5wcmV2X19hcnJvd30+XG4gICAgICAgIDxIaU91dGxpbmVDaGV2cm9uTGVmdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGFycm93czogdHJ1ZSxcbiAgICAvLyBhdXRvcGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIG5leHRBcnJvdzogPFNhbXBsZU5leHRBcnJvdyAvPixcbiAgICBwcmV2QXJyb3c6IDxTYW1wbGVQcmV2QXJyb3cgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMTAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBicmVha3BvaW50OiA2MjAsXG4gICAgICAvLyAgICAgc2V0dGluZ3M6IHtcbiAgICAgIC8vICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgIC8vICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9fY29udGFpbmVyfT5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnNsaWRlcl9faXRlbX0+XG4gICAgICAgICAgPGltZyBzcmM9XCJjb25uZWN0L2l0ZW0tMS5qcGdcIiAvPlxuICAgICAgICA8L2Rpdj57XCIgXCJ9XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCJjb25uZWN0L2l0ZW0tMi5qcGdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz1cImNvbm5lY3QvaXRlbS0zLmpwZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TbGlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJNYWluO1xuIl0sIm5hbWVzIjpbIlNsaWRlciIsIkhpT3V0bGluZUNoZXZyb25SaWdodCIsIkhpT3V0bGluZUNoZXZyb25MZWZ0Iiwic3R5bGUiLCJTbGlkZXJNYWluIiwiU2FtcGxlTmV4dEFycm93IiwicHJvcHMiLCJvbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibmV4dF9fYXJyb3ciLCJTYW1wbGVQcmV2QXJyb3ciLCJwcmV2X19hcnJvdyIsInNldHRpbmdzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiYXV0b3BsYXlTcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2xpZGVyX19jb250YWluZXIiLCJzbGlkZXJfX2l0ZW0iLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SliderMain.js\n"));

/***/ })

});