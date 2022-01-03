/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["src_store_js"],{

/***/ "./src/CartService.js":
/*!****************************!*\
  !*** ./src/CartService.js ***!
  \****************************/
/***/ ((module) => {

eval("const cart = {\n  items: []\n};\n\nconst checkout = async () => {\n  cart.items = [];\n  return cart;\n};\n\nconst addToCart = async pokemon => {\n  let found = false;\n  cart.items.forEach(item => {\n    if (item.pokemon.name.english === pokemon.name.english) {\n      item.count += 1;\n      found = true;\n    }\n  });\n\n  if (!found) {\n    cart.items.push({\n      pokemon,\n      count: 1\n    });\n  }\n\n  return cart;\n};\n\nconst getCartItems = async () => {\n  return cart;\n};\n\nmodule.exports = {\n  checkout,\n  addToCart,\n  getCartItems\n};\n\n//# sourceURL=webpack://checkout/./src/CartService.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"webpack/sharing/consume/default/redux/redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"webpack/sharing/consume/default/redux-thunk/redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CartService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartService */ \"./src/CartService.js\");\n/* harmony import */ var _CartService__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CartService__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst reducer = (state = {\n  items: []\n}, {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case \"SET_ITEMS\":\n      return {\n        state,\n        ...payload\n      };\n\n    default:\n      return state;\n  }\n};\n\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\nstore.dispatch(dispatch => (0,_CartService__WEBPACK_IMPORTED_MODULE_2__.getCartItems)().then(({\n  items\n}) => dispatch({\n  type: \"SET_ITEMS\",\n  payload: {\n    items\n  }\n})));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://checkout/./src/store.js?");

/***/ })

}]);