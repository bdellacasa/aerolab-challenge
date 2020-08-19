module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store/store */ \"./redux/store/store.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/belen/Documentos/Portafolio/aerolab-challenge/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_redux_store_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsUUFBTUMsS0FBSyxHQUFHQyxtRUFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBRUEsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFRixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZShwYWdlUHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: GET_USER_START, GET_USER_SUCCESS, GET_USER_ERROR, GET_PRODUCTS_START, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR, ADD_POINTS, ADD_POINTS_ERROR, REDEEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_START\", function() { return GET_USER_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_SUCCESS\", function() { return GET_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_USER_ERROR\", function() { return GET_USER_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCTS_START\", function() { return GET_PRODUCTS_START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCTS_SUCCESS\", function() { return GET_PRODUCTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCTS_ERROR\", function() { return GET_PRODUCTS_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POINTS\", function() { return ADD_POINTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POINTS_ERROR\", function() { return ADD_POINTS_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REDEEM\", function() { return REDEEM; });\nconst GET_USER_START = \"GET_USER_START\";\nconst GET_USER_SUCCESS = \"GET_USER_SUCCESS\";\nconst GET_USER_ERROR = \"GET_USER_ERROR\";\nconst GET_PRODUCTS_START = \"GET_PRODUCTS_START\";\nconst GET_PRODUCTS_SUCCESS = \"GET_PRODUCTS_SUCCESS\";\nconst GET_PRODUCTS_ERROR = \"GET_PRODUCTS_ERROR\";\nconst ADD_POINTS = \"ADD_POINTS\";\nconst ADD_POINTS_ERROR = \"ADD_POINTS\";\nconst REDEEM = \"REDEEM\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzP2JiNDkiXSwibmFtZXMiOlsiR0VUX1VTRVJfU1RBUlQiLCJHRVRfVVNFUl9TVUNDRVNTIiwiR0VUX1VTRVJfRVJST1IiLCJHRVRfUFJPRFVDVFNfU1RBUlQiLCJHRVRfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9QUk9EVUNUU19FUlJPUiIsIkFERF9QT0lOVFMiLCJBRERfUE9JTlRTX0VSUk9SIiwiUkVERUVNIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsb0JBQW9CLEdBQUcsc0JBQTdCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsWUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsUUFBZiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvdHlwZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0VUX1VTRVJfU1RBUlQgPSBcIkdFVF9VU0VSX1NUQVJUXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfU1VDQ0VTUyA9IFwiR0VUX1VTRVJfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0VSUk9SID0gXCJHRVRfVVNFUl9FUlJPUlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUU19TVEFSVCA9IFwiR0VUX1BST0RVQ1RTX1NUQVJUXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX1NVQ0NFU1MgPSBcIkdFVF9QUk9EVUNUU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RTX0VSUk9SID0gXCJHRVRfUFJPRFVDVFNfRVJST1JcIjtcbmV4cG9ydCBjb25zdCBBRERfUE9JTlRTID0gXCJBRERfUE9JTlRTXCI7XG5leHBvcnQgY29uc3QgQUREX1BPSU5UU19FUlJPUiA9IFwiQUREX1BPSU5UU1wiO1xuZXhwb3J0IGNvbnN0IFJFREVFTSA9IFwiUkVERUVNXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/types.js\n");

/***/ }),

/***/ "./redux/reducers/Reducers.js":
/*!************************************!*\
  !*** ./redux/reducers/Reducers.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ \"./redux/actions/types.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst initialState = {\n  user: undefined,\n  products: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_START\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PRODUCTS_START\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_ERROR\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PRODUCTS_ERROR\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_POINTS\"]:\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"REDEEM\"]:\n      return state;\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_USER_SUCCESS\"]:\n      const user = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user\n      });\n\n    case _actions_types__WEBPACK_IMPORTED_MODULE_0__[\"GET_PRODUCTS_SUCCESS\"]:\n      const products = action.payload;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        products\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9SZWR1Y2Vycy5qcz81YzlmIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJ1bmRlZmluZWQiLCJwcm9kdWN0cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRUMsU0FEYTtBQUVuQkMsVUFBUSxFQUFFO0FBRlMsQ0FBckI7O0FBS0EsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR0wsWUFBVCxFQUF1Qk0sTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsNkRBQUw7QUFDQSxTQUFLQSxpRUFBTDtBQUNBLFNBQUtBLDZEQUFMO0FBQ0EsU0FBS0EsaUVBQUw7QUFDQSxTQUFLQSx5REFBTDtBQUNBLFNBQUtBLHFEQUFMO0FBQ0UsYUFBT0gsS0FBUDs7QUFFRixTQUFLRywrREFBTDtBQUNFLFlBQU1QLElBQUksR0FBR0ssTUFBTSxDQUFDRyxPQUFwQjtBQUNBLDZDQUFZSixLQUFaO0FBQW1CSjtBQUFuQjs7QUFFRixTQUFLTyxtRUFBTDtBQUNFLFlBQU1MLFFBQVEsR0FBR0csTUFBTSxDQUFDRyxPQUF4QjtBQUNBLDZDQUFZSixLQUFaO0FBQW1CRjtBQUFuQjs7QUFFRjtBQUNFLGFBQU9FLEtBQVA7QUFsQko7QUFvQkQsQ0FyQkQ7O0FBdUJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL1JlZHVjZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vYWN0aW9ucy90eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjogdW5kZWZpbmVkLFxuICBwcm9kdWN0czogW10sXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0eXBlcy5HRVRfVVNFUl9TVEFSVDpcbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9EVUNUU19TVEFSVDpcbiAgICBjYXNlIHR5cGVzLkdFVF9VU0VSX0VSUk9SOlxuICAgIGNhc2UgdHlwZXMuR0VUX1BST0RVQ1RTX0VSUk9SOlxuICAgIGNhc2UgdHlwZXMuQUREX1BPSU5UUzpcbiAgICBjYXNlIHR5cGVzLlJFREVFTTpcbiAgICAgIHJldHVybiBzdGF0ZTtcblxuICAgIGNhc2UgdHlwZXMuR0VUX1VTRVJfU1VDQ0VTUzpcbiAgICAgIGNvbnN0IHVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyIH07XG5cbiAgICBjYXNlIHR5cGVzLkdFVF9QUk9EVUNUU19TVUNDRVNTOlxuICAgICAgY29uc3QgcHJvZHVjdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwcm9kdWN0cyB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/Reducers.js\n");

/***/ }),

/***/ "./redux/store/store.js":
/*!******************************!*\
  !*** ./redux/store/store.js ***!
  \******************************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_Reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/Reducers */ \"./redux/reducers/Reducers.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nlet store;\n\nfunction initStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_Reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state\n  // with the current state in the store, and create a new store\n\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store\n\n    store = undefined;\n  } // For SSG and SSR always create a new store\n\n\n  if (true) return _store; // Create the store once in the client\n\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9zdG9yZS5qcz84ODIzIl0sIm5hbWVzIjpbInN0b3JlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsS0FBSjs7QUFFQSxTQUFTQyxTQUFULENBQW1CQyxZQUFuQixFQUFpQztBQUMvQixTQUFPQyx5REFBVyxDQUNoQkMsMERBRGdCLEVBRWhCRixZQUZnQixFQUdoQkcsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FIQyxDQUFsQjtBQUtEOztBQUVNLE1BQU1DLGVBQWUsR0FBSUMsY0FBRCxJQUFvQjtBQUFBOztBQUNqRCxNQUFJQyxNQUFNLGNBQUdULEtBQUgsNkNBQVlDLFNBQVMsQ0FBQ08sY0FBRCxDQUEvQixDQURpRCxDQUdqRDtBQUNBOzs7QUFDQSxNQUFJQSxjQUFjLElBQUlSLEtBQXRCLEVBQTZCO0FBQzNCUyxVQUFNLEdBQUdSLFNBQVMsaUNBQ2JELEtBQUssQ0FBQ1UsUUFBTixFQURhLEdBRWJGLGNBRmEsRUFBbEIsQ0FEMkIsQ0FLM0I7O0FBQ0FSLFNBQUssR0FBR1csU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxZQUFtQyxPQUFPRixNQUFQLENBZmMsQ0FnQmpEOztBQUNBLE1BQUksQ0FBQ1QsS0FBTCxFQUFZQSxLQUFLLEdBQUdTLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQlYsWUFBbEIsRUFBZ0M7QUFDckMsUUFBTUYsS0FBSyxHQUFHYSxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ0wsWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0YsS0FBUDtBQUNEIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvUmVkdWNlcnMnO1xuXG5sZXQgc3RvcmVcblxuZnVuY3Rpb24gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpXG5cbiAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXG4gIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXG4gICAgfSlcbiAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgIHN0b3JlID0gdW5kZWZpbmVkXG4gIH1cblxuICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBzdG9yZVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcbiAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFzdG9yZSkgc3RvcmUgPSBfc3RvcmVcblxuICByZXR1cm4gX3N0b3JlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSlcbiAgcmV0dXJuIHN0b3JlXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/store/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });