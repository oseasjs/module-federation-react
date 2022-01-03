/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["src_CartService_js"],{

/***/ "./src/CartService.js":
/*!****************************!*\
  !*** ./src/CartService.js ***!
  \****************************/
/***/ ((module) => {

eval("const cart = {\n  items: []\n};\n\nconst checkout = async () => {\n  cart.items = [];\n  return cart;\n};\n\nconst addToCart = async pokemon => {\n  let found = false;\n  cart.items.forEach(item => {\n    if (item.pokemon.name.english === pokemon.name.english) {\n      item.count += 1;\n      found = true;\n    }\n  });\n\n  if (!found) {\n    cart.items.push({\n      pokemon,\n      count: 1\n    });\n  }\n\n  return cart;\n};\n\nconst getCartItems = async () => {\n  return cart;\n};\n\nmodule.exports = {\n  checkout,\n  addToCart,\n  getCartItems\n};\n\n//# sourceURL=webpack://checkout/./src/CartService.js?");

/***/ })

}]);