(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>Agent works</p>\n\n<div class=\"card mt-5\">\n  <div class=\"card-body\">\n    <form #AdForm=\"ngForm\" (ngSubmit)=\"onSubmit(AdForm)\">\n\n\n      <input\n        type=\"hidden\"\n        name=\"$key\"\n        #$key=\"ngModel\"\n        [(ngModel)]=\"handleAdsService.selectedAd.$key\"\n      >\n\n\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"title\"\n          #name=\"ngModel\"\n          [(ngModel)]=\"handleAdsService.selectedAd.title\"\n          placeholder=\"Add Product Title\"\n        >\n      </div>\n      <div class=\"form-group\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"description\"\n            #category=\"ngModel\"\n            [(ngModel)]=\"handleAdsService.selectedAd.description\"\n            placeholder=\"Add Product Category\"\n          >\n        </div>\n\n        <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"price\"\n              #location=\"ngModel\"\n              [(ngModel)]=\"handleAdsService.selectedAd.price\"\n              placeholder=\"Add Product Price\"\n            >\n          </div>\n\n         <!--\n\n         <div class=\"input-group\">\n            <div class=\"custom-file\">\n              <input\n                type=\"file\"\n                class=\"custom-file-input\"\n                name=\"image\"\n                [(ngModel)]=\"handleAdsService.selectedAd.image\"\n                aria-describedby=\"inputGroupFileAddon01\"\n              >\n              <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n            </div>\n          </div>\n           -->\n            <div class=\"form-group\">\n              <button class=\"btn btn-primary\" type=\"submit\">\n                <i class=\"fas fa-plus-circle\"></i> Create Ad\n              </button>\n              <button class=\"btn btn-secondary\" type=\"reset\" (click)=\"resetForm(AdForm)\">\n                <i class=\"fas fa-sync-alt\"></i> Reset\n              </button>\n            </div>\n\n    </form>\n\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<app-header></app-header>\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"big\">\n    <div class=\"alert alert-danger\" *ngIf=\"alertOpenAgent\" role=\"alert\">\n        You are not an Agent. Please try as an Owner.\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"alertOpenOwner\" role=\"alert\">\n        You are not an Owner. Please try as an Agent.\n    </div>\n    <div *ngIf=\"alertOpen\"  class=\"alert alert-danger\" role=\"alert\">\n        Wrong e-mail or Password. Please try again.\n    </div>\n  <div class= \"half1\">\n    <div class =\"agent\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowAgent()\">I am agent</button>\n      <div class=\"containerAgent\" *ngIf=\"showAgent\">\n        <h1>Log In</h1>\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmitAgent(f)\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <div class= \"half2\">\n    <div class =\"owner\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowOwner()\">I am owner</button>\n      <div class=\"containerAgent\" *ngIf=\"showOwner\">\n        <h1>Log In</h1>\n         <form #f=\"ngForm\" (ngSubmit)=\"onSubmitOwner(f)\" novalidate>\n           <div class=\"form-group\">\n              <label for=\"email\">E-mail</label>\n              <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n               <label for=\"password\">Password</label>\n               <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n             </div>\n           <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n         </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!--\n<div class=\"big\">\n\n  <div class= \"half1\">\n\n  <div class =\"agent\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowAgent()\">I am agent</button>\n    <div class=\"containerAgent\" *ngIf=\"showAgent\">\n\n        <form class=\"formAgent\" #f=\"ngForm\" (ngSubmit)=\"onSubmitAgent(f)\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input name=\"name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </form>\n    </div>\n  </div>\n  </div>\n\n  <div class=\"half2\">\n\n  <div class =\"owner\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowOwner()\">I am owner</button>\n      <div class=\"containerAgent\" *ngIf=\"showOwner\">\n\n          <form #f=\"ngForm\" (ngSubmit)=\"onSubmitOwner(f)\" novalidate>\n            <div class=\"form-group\">\n              <label for=\"email\">E-mail</label>\n              <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input name=\"name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n          </form>\n      </div>\n    </div>\n  </div>\n  </div>\n\n\n\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <form ()=\"onSubmit(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"email\">EmailTest</label>\n          <input type=\"email\" name=\"email\" id=\"email\" ngModel class=\"form-control\" required>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" name=\"password\" id=\"password\" ngModel class=\"form-control\" required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n      </form>\n    </div>\n  </div>\n</div>\n-->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"big\">\n\n<div class= \"half1\">\n\n<div class =\"agent\">\n  <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowAgent()\">I am agent</button>\n  <div class=\"containerAgent\" *ngIf=\"showAgent\">\n\n      <form class=\"formAgent\" #f=\"ngForm\" (ngSubmit)=\"onSubmitAgent(f)\" novalidate>\n        <div class=\"form-group\">\n          <label for=\"email\">E-mail</label>\n          <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input name=\"name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n      </form>\n  </div>\n</div>\n</div>\n\n<div class=\"half2\">\n\n<div class =\"owner\">\n    <button type=\"button\" class=\"btn btn-info\" (click)=\"onShowOwner()\">I am owner</button>\n    <div class=\"containerAgent\" *ngIf=\"showOwner\">\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmitOwner(f)\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" ngModel required #email=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input name=\"name\" class=\"form-control\" ngModel required #name=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input name=\"password\" type=\"password\" class=\"form-control\" ngModel required>\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n        </form>\n    </div>\n  </div>\n</div>\n</div>\n<!--\n\n     <div class=\"form-group\">\n      <label for=\"email\">E-mail</label>\n      <input type=\"email\" class=\"form-control\" id=\"email\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" id=\"password\" required>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n\n <input name=\"email\" ngModel required #email=\"ngModel\">\n      <input name=\"password\" ngModel required>\n    <button ng-click=\"onSubmit(f)\">Submit</button>\n  </form>\n\n-->\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"home\">Real Estate App M&A</a>\n  <li routerLinkActive=\"active\" *ngIf=\"isAgent\" class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"agent\">Agent</a>\n  </li>\n  <li routerLinkActive=\"active\" *ngIf=\"isOwner\" class=\"nav-item\">\n    <a class=\"nav-link\" routerLink=\"owner\">Owner</a>\n  </li>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n     <!-- <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Features</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\n      </li>\n      -->\n    </ul>\n    <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"signup\">Sign up</a>\n    </li>\n    <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn\" class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"login\">Login</a>\n    </li>\n    <p *ngIf=\"isLoggedIn\">\n      Welcome {{uid}}\n    </p>\n    <li class=\"nav-item\" *ngIf=\"isLoggedIn\" (click)=\"onLogout()\" >\n      <a class=\"nav-link\" href=\"#\">Logout</a>\n    </li>\n  </div>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/owner/owner.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/owner/owner.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>owner works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/agent/agent.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/agent/agent.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/agent/agent.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/agent/agent.component.ts ***!
          \******************************************/
        /*! exports provided: AgentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function () { return AgentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_handle_ads_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/handle-ads.service */ "./src/app/services/handle-ads.service.ts");
            var AgentComponent = /** @class */ (function () {
                function AgentComponent(handleAdsService) {
                    this.handleAdsService = handleAdsService;
                }
                AgentComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.handleAdsService.getAds()
                        .snapshotChanges()
                        .subscribe(function (item) {
                        _this.ad = [];
                        item.forEach(function (element) {
                            var x = element.payload.toJSON();
                            x["$key"] = element.key;
                            _this.ad.push(x);
                        });
                    });
                };
                AgentComponent.prototype.onSubmit = function (AdForm) {
                    this.handleAdsService.insertAd(AdForm.value);
                };
                AgentComponent.prototype.resetForm = function () { };
                return AgentComponent;
            }());
            AgentComponent.ctorParameters = function () { return [
                { type: _services_handle_ads_service__WEBPACK_IMPORTED_MODULE_2__["HandleAdsService"] }
            ]; };
            AgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-agent',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/agent/agent.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent.component.css */ "./src/app/agent/agent.component.css")).default]
                })
            ], AgentComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
            /* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/agent/agent.component.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            var routes = [
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
                { path: 'owner', component: _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__["OwnerComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
                { path: 'agent', component: _agent_agent_component__WEBPACK_IMPORTED_MODULE_4__["AgentComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
                { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'realestate';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
            /* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
            /* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/agent/agent.component.ts");
            /* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _services_handle_ads_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/handle-ads.service */ "./src/app/services/handle-ads.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./storage.service */ "./src/app/storage.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_19__);
            //import { MatSliderModule } from '@angular/material/slider';
            //import {MatExpansionModule, MatFormFieldModule} from '@angular/material';
            //import { HttpClientModule } from '@angular/common/http';
            //firebase
            //import { AngularFireAuthModule } from 'angularfire2/auth';
            //import { AngularFirestoreModule } from '@angular/fire/firestore';
            //services
            firebase__WEBPACK_IMPORTED_MODULE_19__["initializeApp"](_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                        _agent_agent_component__WEBPACK_IMPORTED_MODULE_9__["AgentComponent"],
                        _owner_owner_component__WEBPACK_IMPORTED_MODULE_10__["OwnerComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebase),
                        angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                        //AngularFirestoreModule,
                        // AngularFireAuthModule,
                        //MatSliderModule,
                        //MatExpansionModule,
                        //MatFormFieldModule,
                        //HttpClientModule,
                    ],
                    providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _services_handle_ads_service__WEBPACK_IMPORTED_MODULE_16__["HandleAdsService"], _user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _storage_service__WEBPACK_IMPORTED_MODULE_18__["StorageService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabase"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard() {
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.css": 
        /*!************************************************!*\
          !*** ./src/app/auth/login/login.component.css ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".containerAgent {align-content: center; justify-content: center; margin-left: 50px; margin-right: 50px; margin-top: 50px;}\n.agent { text-align: center; margin-top: 100px; align-content: center; justify-content: center;}\n.owner { text-align: center; margin-top: 100px;}\n.big {width: 100%}\n.half1 {width: 50%; float: left; text-align: center;}\n.half2 {width: 50%; float: left; text-align: center;}\n.formAgent {text-align: center; align-content: center; justify-content: center;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixxQkFBcUIsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQztBQUN6SCxTQUFTLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDO0FBQy9GLFNBQVMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUM7QUFDL0MsTUFBTSxXQUFXO0FBQ2pCLFFBQVEsVUFBVSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztBQUNwRCxRQUFRLFVBQVUsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLENBQUM7QUFDcEQsWUFBWSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSx1QkFBdUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJBZ2VudCB7YWxpZ24tY29udGVudDogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgbWFyZ2luLWxlZnQ6IDUwcHg7IG1hcmdpbi1yaWdodDogNTBweDsgbWFyZ2luLXRvcDogNTBweDt9XG4uYWdlbnQgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwMHB4OyBhbGlnbi1jb250ZW50OiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO31cbi5vd25lciB7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLXRvcDogMTAwcHg7fVxuLmJpZyB7d2lkdGg6IDEwMCV9XG4uaGFsZjEge3dpZHRoOiA1MCU7IGZsb2F0OiBsZWZ0OyB0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmhhbGYyIHt3aWR0aDogNTAlOyBmbG9hdDogbGVmdDsgdGV4dC1hbGlnbjogY2VudGVyO31cbi5mb3JtQWdlbnQge3RleHQtYWxpZ246IGNlbnRlcjsgYWxpZ24tY29udGVudDogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/login/login.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/auth/login/login.component.ts ***!
          \***********************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../storage.service */ "./src/app/storage.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            //import { DatasharingService } from 'src/app/datasharing.service';
            //import { NotificationService } from 'src/app/notifier.service';
            //import { HttpClient, HttpHeaders } from '@angular/common/http';
            //import { retry, catchError } from 'rxjs/operators';
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(storage, router, userService) {
                    this.storage = storage;
                    this.router = router;
                    this.userService = userService;
                    this.showAgent = false;
                    this.showOwner = false;
                    this.userType = null;
                    this.alertOpenAgent = false;
                    this.alertOpenOwner = false;
                    this.alertOpen = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmitAgent = function (f) {
                    var _this = this;
                    var emailAgent = f.value.email;
                    var passwordAgent = f.value.password;
                    if (emailAgent) {
                        console.log('hay correo');
                    }
                    else {
                        this.alertOpen = true;
                        setTimeout(function () {
                            _this.alertOpen = false;
                        }, 5000);
                    }
                    if (passwordAgent) {
                    }
                    else {
                        this.alertOpen = true;
                        setTimeout(function () {
                            _this.alertOpen = false;
                        }, 5000);
                    }
                    Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signInWithEmailAndPassword(emailAgent, passwordAgent)
                        .then(function (userData) {
                        if (userData.user.emailVerified) {
                            return _this.storage.getAgentFromDatabase(userData.user.uid);
                        }
                        else {
                            _this.alertOpen = true;
                            setTimeout(function () {
                                _this.alertOpen = false;
                            }, 5000);
                            Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signOut();
                        }
                    })
                        .then(function (userDatafromDatabase) {
                        if (userDatafromDatabase && userDatafromDatabase.User === 'agent') {
                            _this.userService.set(userDatafromDatabase);
                            _this.router.navigate(['/agent']);
                        }
                        else {
                            _this.alertOpenAgent = true;
                            setTimeout(function () {
                                console.log('hide');
                                _this.alertOpenAgent = false;
                            }, 5000);
                            Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signOut();
                        }
                    });
                };
                LoginComponent.prototype.onSubmitOwner = function (f) {
                    var _this = this;
                    console.log(f.value);
                    console.log(f.value.email);
                    var emailOwner = f.value.email;
                    var passwordOwner = f.value.password;
                    Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signInWithEmailAndPassword(emailOwner, passwordOwner)
                        .then(function (userData) {
                        if (userData.user.emailVerified) {
                            return _this.storage.getOwnerFromDatabase(userData.user.uid);
                        }
                        else {
                            _this.alertOpen = true;
                            setTimeout(function () {
                                _this.alertOpen = false;
                            }, 5000);
                            Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signOut();
                        }
                    })
                        .then(function (userDatafromDatabase) {
                        if (userDatafromDatabase && userDatafromDatabase.User === 'owner') {
                            _this.userService.set(userDatafromDatabase);
                            _this.router.navigate(['/owner']);
                        }
                        else {
                            _this.alertOpenOwner = true;
                            setTimeout(function () {
                                _this.alertOpenOwner = false;
                            }, 5000);
                            Object(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"])().signOut();
                        }
                    });
                };
                LoginComponent.prototype.onShowAgent = function () {
                    this.showAgent = !this.showAgent;
                };
                LoginComponent.prototype.onShowOwner = function () {
                    this.showOwner = !this.showOwner;
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/auth/signup/signup.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".containerAgent {align-content: center; justify-content: center; margin-left: 50px; margin-right: 50px; margin-top: 50px;}\n.agent { text-align: center; margin-top: 100px; align-content: center; justify-content: center;}\n.owner { text-align: center; margin-top: 100px;}\n.big {width: 100%}\n.half1 {width: 50%; float: left; text-align: center;}\n.half2 {width: 50%; float: left; text-align: center;}\n.formAgent {text-align: center; align-content: center; justify-content: center;}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDO0FBQ3pILFNBQVMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLENBQUM7QUFDL0YsU0FBUyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQztBQUMvQyxNQUFNLFdBQVc7QUFDakIsUUFBUSxVQUFVLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixDQUFDO0FBQ3BELFFBQVEsVUFBVSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztBQUNwRCxZQUFZLGtCQUFrQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyQWdlbnQge2FsaWduLWNvbnRlbnQ6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi1sZWZ0OiA1MHB4OyBtYXJnaW4tcmlnaHQ6IDUwcHg7IG1hcmdpbi10b3A6IDUwcHg7fVxuLmFnZW50IHsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW4tdG9wOiAxMDBweDsgYWxpZ24tY29udGVudDogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XG4ub3duZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbi10b3A6IDEwMHB4O31cbi5iaWcge3dpZHRoOiAxMDAlfVxuLmhhbGYxIHt3aWR0aDogNTAlOyBmbG9hdDogbGVmdDsgdGV4dC1hbGlnbjogY2VudGVyO31cbi5oYWxmMiB7d2lkdGg6IDUwJTsgZmxvYXQ6IGxlZnQ7IHRleHQtYWxpZ246IGNlbnRlcjt9XG4uZm9ybUFnZW50IHt0ZXh0LWFsaWduOiBjZW50ZXI7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7fVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/signup/signup.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/auth/signup/signup.component.ts ***!
          \*************************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            var SignupComponent = /** @class */ (function () {
                function SignupComponent() {
                    this.showAgent = false;
                    this.showOwner = false;
                    this.typeUser = null;
                }
                SignupComponent.prototype.ngOnInit = function () {
                };
                SignupComponent.prototype.onSubmitAgent = function (f) {
                    var _this = this;
                    console.log(f.value);
                    console.log(f.value.email);
                    var agentName = f.value.name;
                    var agentEmail = f.value.email;
                    var agentPassword = f.value.password;
                    this.typeUser = f.value.typeUser = 'agent';
                    Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().createUserWithEmailAndPassword(agentEmail, agentPassword)
                        .then(function (userData) {
                        userData.user.sendEmailVerification();
                        console.log(userData);
                        Object(firebase__WEBPACK_IMPORTED_MODULE_2__["database"])().ref('agents/' + userData.user.uid).set({
                            Email: agentEmail,
                            Name: agentName,
                            uid: userData.user.uid,
                            registrationDate: new Date().toString(),
                            User: _this.typeUser
                        })
                            .then(function () {
                            Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().signOut();
                        });
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                };
                SignupComponent.prototype.onSubmitOwner = function (f) {
                    var _this = this;
                    console.log(f.value);
                    console.log(f.value.email);
                    var ownerName = f.value.name;
                    var ownerEmail = f.value.email;
                    var ownerPassword = f.value.password;
                    this.typeUser = 'owner';
                    Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().createUserWithEmailAndPassword(ownerEmail, ownerPassword)
                        .then(function (userData) {
                        userData.user.sendEmailVerification();
                        console.log(userData);
                        Object(firebase__WEBPACK_IMPORTED_MODULE_2__["database"])().ref('owners/' + userData.user.uid).set({
                            Email: ownerEmail,
                            Name: ownerName,
                            uid: userData.user.uid,
                            registrationDate: new Date().toString(),
                            User: _this.typeUser
                        })
                            .then(function () {
                            Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().signOut();
                        });
                    })
                        .catch(function (err) {
                        console.log(err);
                    });
                };
                SignupComponent.prototype.onShowAgent = function () {
                    this.showAgent = !this.showAgent;
                };
                SignupComponent.prototype.onShowOwner = function () {
                    this.showOwner = !this.showOwner;
                };
                return SignupComponent;
            }());
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            //import { environment } from './../../environments/environment.prod';
            //import { firebase } from '@firebase/app';
            //import { Observable } from 'rxjs';
            //import {DatasharingService} from 'src/app/datasharing.service';
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.isAgent = false;
                    this.isLoggedIn = false;
                    this.isOwner = false;
                    this.typeUser = null;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.statusChange.subscribe(function (userData) {
                        if (userData) {
                            _this.name = userData.name;
                            _this.email = userData.email;
                            _this.uid = userData.uid;
                            _this.typeUser = userData.User;
                            if (userData.User === 'agent') {
                                _this.isAgent = true;
                                _this.isLoggedIn = true;
                            }
                            else if (userData.User === 'owner') {
                                _this.isOwner = true;
                                _this.isLoggedIn = true;
                            }
                            console.log(_this.typeUser + '1');
                        }
                        else {
                            _this.name = null;
                            _this.email = null;
                            _this.uid = null;
                        }
                    });
                    /*
                    auth().onAuthStateChanged(userData => {
                      if (userData && userData.emailVerified) {
                        this.isLoggedIn = true;
                        const userData = this.userService.getProfile();
                        this.name = userData.name;
                        this.email = userData.email;
                        this.uid = userData.uid;
                        this.router.navigate(['home'])
                        }else {
                        this.isLoggedIn = false;
                      }
                    });
                
                */
                    Object(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"])().onAuthStateChanged(function (userData) {
                        if (userData && userData.emailVerified) {
                            var userData_1 = _this.userService.getProfile();
                            // tslint:disable-next-line: align
                            if (userData_1 && userData_1.name && userData_1.User === 'agent') {
                                _this.name = userData_1.name;
                                _this.email = userData_1.email;
                                _this.uid = userData_1.uid;
                                _this.isLoggedIn = true;
                                _this.router.navigate(['home']);
                            }
                            else if (userData_1 && userData_1.name && userData_1.User === 'owner') {
                                _this.name = userData_1.name;
                                _this.email = userData_1.email;
                                _this.uid = userData_1.uid;
                                _this.isOwner = true;
                                _this.isLoggedIn = true;
                                _this.router.navigate(['home']);
                            }
                            else {
                                _this.isLoggedIn = false;
                            }
                        }
                        else {
                            _this.isLoggedIn = false;
                        }
                    });
                };
                HeaderComponent.prototype.onLogout = function () {
                    var _this = this;
                    Object(firebase__WEBPACK_IMPORTED_MODULE_3__["auth"])().signOut()
                        .then(function () {
                        _this.userService.destroy();
                        _this.isLoggedIn = false;
                    });
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/models/ad.ts": 
        /*!******************************!*\
          !*** ./src/app/models/ad.ts ***!
          \******************************/
        /*! exports provided: Ad */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ad", function () { return Ad; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Ad = /** @class */ (function () {
                function Ad() {
                }
                return Ad;
            }());
            /***/ 
        }),
        /***/ "./src/app/owner/owner.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/owner/owner.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL293bmVyL293bmVyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/owner/owner.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/owner/owner.component.ts ***!
          \******************************************/
        /*! exports provided: OwnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function () { return OwnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OwnerComponent = /** @class */ (function () {
                function OwnerComponent() {
                }
                OwnerComponent.prototype.ngOnInit = function () {
                };
                return OwnerComponent;
            }());
            OwnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-owner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./owner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/owner/owner.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./owner.component.css */ "./src/app/owner/owner.component.css")).default]
                })
            ], OwnerComponent);
            /***/ 
        }),
        /***/ "./src/app/services/handle-ads.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/handle-ads.service.ts ***!
          \************************************************/
        /*! exports provided: HandleAdsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleAdsService", function () { return HandleAdsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _models_ad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/ad */ "./src/app/models/ad.ts");
            var HandleAdsService = /** @class */ (function () {
                function HandleAdsService(firebase) {
                    this.firebase = firebase;
                    this.selectedAd = new _models_ad__WEBPACK_IMPORTED_MODULE_3__["Ad"]();
                }
                HandleAdsService.prototype.getAds = function () {
                    return this.AddsList = this.firebase.list('/ads');
                };
                HandleAdsService.prototype.insertAd = function (ad) {
                    this.AddsList.push({
                        title: ad.title,
                        description: ad.description,
                        price: ad.price,
                    });
                };
                return HandleAdsService;
            }());
            HandleAdsService.ctorParameters = function () { return [
                { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
            ]; };
            HandleAdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], HandleAdsService);
            /***/ 
        }),
        /***/ "./src/app/storage.service.ts": 
        /*!************************************!*\
          !*** ./src/app/storage.service.ts ***!
          \************************************/
        /*! exports provided: StorageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function () { return StorageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
            //import { AngularFireDatabaseModule } from 'angularfire2/database';
            //import * as firebase from '@firebase/app';
            var StorageService = /** @class */ (function () {
                function StorageService(database) {
                    this.database = database;
                }
                StorageService.prototype.getUserFromDatabase = function (uid) {
                    var ref = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().currentUser.uid;
                    console.log(ref);
                    return ref;
                };
                StorageService.prototype.getUserFromDatabase2 = function (uid) {
                    var ref2 = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["database"])().ref('users/' + uid);
                    return ref2.once('value')
                        .then(function (snapshot) { return snapshot.val(); });
                };
                StorageService.prototype.getAgentFromDatabase = function (uid) {
                    var ref3 = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["database"])().ref('agents/' + uid);
                    return ref3.once('value')
                        .then(function (snapshot) { return snapshot.val(); });
                };
                StorageService.prototype.getOwnerFromDatabase = function (uid) {
                    var ref4 = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["database"])().ref('owners/' + uid);
                    return ref4.once('value')
                        .then(function (snapshot) { return snapshot.val(); });
                };
                return StorageService;
            }());
            StorageService.ctorParameters = function () { return [
                { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
            ]; };
            StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], StorageService);
            /***/ 
        }),
        /***/ "./src/app/user.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/user.service.ts ***!
          \*********************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
            //import * as firebase from 'firebase';
            var UserService = /** @class */ (function () {
                function UserService() {
                    this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                UserService.prototype.set = function (userFromDatabase) {
                    localStorage.setItem('user', JSON.stringify(userFromDatabase));
                    this.statusChange.emit(userFromDatabase);
                };
                UserService.prototype.getProfile = function () {
                    var user = localStorage.getItem('user');
                    return JSON.parse(user);
                };
                UserService.prototype.getUserFromDatabase = function (uid) {
                    var ref = Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().currentUser.uid;
                    console.log(ref);
                    return ref;
                };
                UserService.prototype.destroy = function () {
                    Object(firebase__WEBPACK_IMPORTED_MODULE_2__["auth"])().currentUser.delete();
                    localStorage.removeItem('user');
                    this.statusChange.emit(null);
                };
                return UserService;
            }());
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebase: {
                    apiKey: 'AIzaSyDGnzViUw_hrhhIPIk3qw_M1r5467XCdUc',
                    authDomain: 'realestateapp-c17b9.firebaseapp.com',
                    databaseURL: 'https://realestateapp-c17b9.firebaseio.com',
                    projectId: 'realestateapp-c17b9',
                    storageBucket: 'realestateapp-c17b9.appspot.com',
                    messagingSenderId: '170820542240',
                    appId: '1:170820542240:web:34f67274fec1f4cb480145'
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/alinlazar/Desktop/Alin/Programming/RealEstate/realestate/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map