/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/krissydo/git/rpt21-mini-apps-1/challenge_4/client/src/app.jsx: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (13:25)\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  render(){\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m}\\u001b[35m/><Square x={1} y={0}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m}\\u001b[35m/><Square x={3} y={0}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m4\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m}\\u001b[35m/><Square x={5} y={0}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m6\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                         \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m1\\u001b[39m}\\u001b[35m/><Square x={1} y={1}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m1\\u001b[39m}\\u001b[35m/><Square x={3} y={1}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m4\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m1\\u001b[39m}\\u001b[35m/><Square x={5} y={1}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m6\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m1\\u001b[39m}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m}\\u001b[35m/><Square x={1} y={2}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m}\\u001b[35m/><Square x={3} y={2}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m4\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m}\\u001b[35m/><Square x={5} y={2}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m6\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m0\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m3\\u001b[39m}\\u001b[35m/><Square x={1} y={3}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m2\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m3\\u001b[39m}\\u001b[35m/><Square x={3} y={3}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m4\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m3\\u001b[39m}\\u001b[35m/><Square x={5} y={3}/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mSquare\\u001b[39m x\\u001b[33m=\\u001b[39m{\\u001b[35m6\\u001b[39m} y\\u001b[33m=\\u001b[39m{\\u001b[35m3\\u001b[39m}\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:746:17)\\n    at Object.raiseWithData (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:739:17)\\n    at Object.raise (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:733:17)\\n    at Object.jsxParseElementAt (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:4616:18)\\n    at Object.jsxParseElement (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:4626:17)\\n    at Object.parseExprAtom (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:4633:19)\\n    at Object.parseExprSubscripts (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9656:23)\\n    at Object.parseMaybeUnary (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9636:21)\\n    at Object.parseExprOps (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9506:23)\\n    at Object.parseMaybeConditional (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9479:23)\\n    at Object.parseMaybeAssign (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9434:21)\\n    at Object.parseExpression (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:9386:23)\\n    at Object.parseStatementContent (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11285:23)\\n    at Object.parseStatement (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11156:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11731:25)\\n    at Object.parseBlockBody (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11717:10)\\n    at Object.parseBlock (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11701:10)\\n    at Object.parseFunctionBody (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10708:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10691:10)\\n    at Object.parseMethod (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:10653:10)\\n    at Object.pushClassMethod (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:12156:30)\\n    at Object.parseClassMemberWithIsStatic (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:12073:12)\\n    at Object.parseClassMember (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:12015:10)\\n    at /Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11960:14\\n    at Object.withTopicForbiddingContext (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11031:14)\\n    at Object.parseClassBody (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11937:10)\\n    at Object.parseClass (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11911:22)\\n    at Object.parseStatementContent (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11198:21)\\n    at Object.parseStatement (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11156:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/krissydo/git/rpt21-mini-apps-1/challenge_4/node_modules/@babel/parser/lib/index.js:11731:25)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2FwcC5qc3guanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/app.jsx\n");

/***/ })

/******/ });