/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["src_AddToCart_js"],{

/***/ "./src/AddToCart.js":
/*!**************************!*\
  !*** ./src/AddToCart.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"webpack/sharing/consume/default/react-bootstrap/react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"webpack/sharing/consume/default/react-redux/react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartService */ \"./src/CartService.js\");\n/* harmony import */ var _CartService__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CartService__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst AddToCart = ({\n  pokemon,\n  addToCart\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n  secondary: true,\n  onClick: () => addToCart(pokemon),\n  style: {\n    width: \"100%\"\n  }\n}, \"Add To Cart\");\n\nconst postAddToCart = pokemon => dispatch => (0,_CartService__WEBPACK_IMPORTED_MODULE_3__.addToCart)(pokemon).then(payload => dispatch({\n  type: \"SET_ITEMS\",\n  payload\n}));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(() => ({}), dispatch => ({\n  addToCart: pokemon => dispatch(postAddToCart(pokemon))\n}))(AddToCart));\n\n//# sourceURL=webpack://checkout/./src/AddToCart.js?");

/***/ }),

/***/ "./src/CartService.js":
/*!****************************!*\
  !*** ./src/CartService.js ***!
  \****************************/
/***/ ((module) => {

eval("const cart = {\n  items: []\n};\n\nconst checkout = async () => {\n  cart.items = [];\n  return cart;\n};\n\nconst addToCart = async pokemon => {\n  let found = false;\n  cart.items.forEach(item => {\n    if (item.pokemon.name.english === pokemon.name.english) {\n      item.count += 1;\n      found = true;\n    }\n  });\n\n  if (!found) {\n    cart.items.push({\n      pokemon,\n      count: 1\n    });\n  }\n\n  return cart;\n};\n\nconst getCartItems = async () => {\n  return cart;\n};\n\nmodule.exports = {\n  checkout,\n  addToCart,\n  getCartItems\n};\n\n//# sourceURL=webpack://checkout/./src/CartService.js?");

/***/ })

}]);