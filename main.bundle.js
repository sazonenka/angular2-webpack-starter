var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(2);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__(30);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(31);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_service__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__breadcrumbs_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__courses_service__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__courses_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__http_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_block_service__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__loader_block_service__["a"]; });








/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(443);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_course_component__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__edit_course_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authors_field_authors_field_component__ = __webpack_require__(99);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authors_field_authors_field_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_field_date_field_component__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__date_field_date_field_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__duration_field_duration_field_component__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__duration_field_duration_field_component__["a"]; });






/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(77);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumbs_breadcrumbs_component__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__breadcrumbs_breadcrumbs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_logo_component__ = __webpack_require__(78);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__logo_logo_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logoff_logoff_component__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__logoff_logoff_component__["a"]; });






/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(440);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__duration__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__duration__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__filter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_by__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__order_by__["a"]; });





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });



var BASE_URL = 'https://sazonenka-angular2.herokuapp.com';
var HttpService = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](HttpService, _super);
    function HttpService(backend, options) {
        var _this = this;
        var token = localStorage.getItem('token');
        options.headers.set('Authorization', token);
        _this = _super.call(this, backend, options) || this;
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var token = localStorage.getItem('token');
        if (typeof url === 'string') {
            url = BASE_URL + url;
            if (!options) {
                options = {
                    headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"](),
                };
            }
            options.headers.set('Authorization', token);
        }
        else {
            url.url = BASE_URL + url.url;
            url.headers.set('Authorization', token);
        }
        return _super.prototype.request.call(this, url, options);
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]));
HttpService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]])
], HttpService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__courses_component__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__courses_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_item_course_item_component__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__course_item_course_item_component__["a"]; });




/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(136);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(441);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(446);

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(444);

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__author__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__author__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course__ = __webpack_require__(87);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__course__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_courses_response__ = __webpack_require__(88);
/* unused harmony namespace reexport */





/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__author_reducer__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__author_reducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_reducer__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__course_reducer__["a"]; });




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });




var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthSubject
            .asObservable()
            .map(function (isAuth) {
            if (!isAuth) {
                _this.router.navigateByUrl('/login');
            }
            return isAuth;
        });
    };
    return AuthGuard;
}());
AuthGuard = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], AuthGuard);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });




var AuthService = (function () {
    function AuthService(httpService) {
        this.httpService = httpService;
        this.isAuthSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
        this.loginSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
    }
    AuthService.prototype.getUserInfo = function () {
        return this.loginSubject.asObservable();
    };
    AuthService.prototype.login = function (login, password) {
        var _this = this;
        return this.httpService.post('/auth/login', { login: login, password: password })
            .map(function (resp) {
            localStorage.setItem('token', resp.json().token);
            _this.isAuthSubject.next(true);
            _this.loginSubject.next(login);
            return true;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.isAuthSubject.next(false);
        this.loginSubject.next(undefined);
    };
    return AuthService;
}());
AuthService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]])
], AuthService);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(103);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(143);

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(3);

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(442);

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

/*
 * Angular 2 decorators and services
 */

/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(153)],
        template: __webpack_require__(122)
    })
], AppComponent);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routes__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_courses__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_course__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_no_content__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_components_header__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_components_footer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_components_loader_block__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_components_toolbox__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_directives__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_pipes__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_reducers__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__styles_styles_scss__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__styles_headings_css__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__styles_headings_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });








/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component

// Pages




// Common Components







// Page Components




// Directives

// Pipes



// Services






// Reducers




// Application wide providers
var APP_PROVIDERS = [];
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        this.appRef.tick();
        delete store.state;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_courses__["a" /* CoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_edit_course__["a" /* EditCourseComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_no_content__["a" /* NoContentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__core_components_header__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__core_components_footer__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__core_components_header__["b" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_17__core_components_loader_block__["a" /* LoaderBlockComponent */],
            __WEBPACK_IMPORTED_MODULE_15__core_components_header__["c" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_15__core_components_header__["d" /* LogoffComponent */],
            __WEBPACK_IMPORTED_MODULE_18__core_components_toolbox__["a" /* ToolboxComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_courses__["b" /* CourseItemComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_edit_course__["b" /* AuthorsFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_edit_course__["c" /* DateFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_edit_course__["d" /* DurationFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_19__core_directives__["a" /* BorderColoredByDirective */],
            __WEBPACK_IMPORTED_MODULE_20__core_pipes__["a" /* DurationPipe */],
            __WEBPACK_IMPORTED_MODULE_20__core_pipes__["b" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_20__core_pipes__["c" /* OrderByPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] }),
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* StoreModule */].provideStore({
                authors: __WEBPACK_IMPORTED_MODULE_22__core_reducers__["a" /* authorReducer */],
                courses: __WEBPACK_IMPORTED_MODULE_22__core_reducers__["b" /* courseReducer */],
            }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_20__core_pipes__["b" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["c" /* BreadcrumbsService */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["d" /* CoursesService */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["e" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_21__core_services__["f" /* LoaderBlockService */],
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"]])
], AppModule);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_courses__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_edit_course__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_no_content__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_auth_guard__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });





var ROUTES = [
    { path: '', redirectTo: 'courses', pathMatch: 'full' },
    {
        path: 'courses',
        component: __WEBPACK_IMPORTED_MODULE_0__pages_courses__["a" /* CoursesComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__core_services_auth_guard__["a" /* AuthGuard */]],
    },
    {
        path: 'courses/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_edit_course__["a" /* EditCourseComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__core_services_auth_guard__["a" /* AuthGuard */]],
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_login__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__pages_no_content__["a" /* NoContentComponent */] },
];


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });



var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main-footer',
        template: __webpack_require__(123),
        styles: [__webpack_require__(139)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], FooterComponent);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(breadcrumbsService) {
        this.breadcrumbsService = breadcrumbsService;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        this.courseTitle = this.breadcrumbsService.getCourseTitle();
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'breadcrumbs',
        template: __webpack_require__(124),
        styles: [__webpack_require__(140)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* BreadcrumbsService */]])
], BreadcrumbsComponent);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });



var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.login = this.authService.getUserInfo();
    };
    return HeaderComponent;
}());
HeaderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main-header',
        template: __webpack_require__(125),
        styles: [__webpack_require__(141)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthService */]])
], HeaderComponent);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });


var LogoComponent = (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'main-logo',
        template: __webpack_require__(126),
        styles: [__webpack_require__(142)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], LogoComponent);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoffComponent; });




var LogoffComponent = (function () {
    function LogoffComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoffComponent.prototype.ngOnInit = function () {
        this.login = this.authService.getUserInfo();
    };
    LogoffComponent.prototype.logoff = function () {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    };
    return LogoffComponent;
}());
LogoffComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'logoff',
        template: __webpack_require__(127),
        styles: [__webpack_require__(143)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services__["b" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], LogoffComponent);



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_block_component__ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loader_block_component__["a"]; });



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderBlockComponent; });



var LoaderBlockComponent = (function () {
    function LoaderBlockComponent(loaderBlockService) {
        this.loaderBlockService = loaderBlockService;
    }
    return LoaderBlockComponent;
}());
LoaderBlockComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'loader-block',
        styles: [__webpack_require__(144)],
        template: __webpack_require__(128)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["f" /* LoaderBlockService */]])
], LoaderBlockComponent);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbox_component__ = __webpack_require__(83);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toolbox_component__["a"]; });



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxComponent; });



var ToolboxComponent = (function () {
    function ToolboxComponent(router) {
        this.router = router;
        this.coursesFiltered = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.searchTerm = '';
    }
    ToolboxComponent.prototype.findCourses = function () {
        this.coursesFiltered.emit(this.searchTerm);
    };
    ToolboxComponent.prototype.addCourse = function () {
        this.router.navigateByUrl('/courses/new');
    };
    return ToolboxComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], ToolboxComponent.prototype, "coursesFiltered", void 0);
ToolboxComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'toolbox',
        template: __webpack_require__(129),
        styles: [__webpack_require__(145)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], ToolboxComponent);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorderColoredByDirective; });


var BorderColoredByDirective = (function () {
    function BorderColoredByDirective(el) {
        this.el = el;
    }
    BorderColoredByDirective.prototype.ngOnInit = function () {
        var now = new Date();
        var diffDays = (now.getTime() - this.date.getTime()) / (1000 * 60 * 60 * 24);
        if (diffDays < 0) {
            // Upcoming
            this.el.nativeElement.style.borderColor = 'blue';
        }
        else if (diffDays < 14) {
            // Fresh
            this.el.nativeElement.style.borderColor = 'green';
        }
    };
    return BorderColoredByDirective;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('borderColoredBy'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Date)
], BorderColoredByDirective.prototype, "date", void 0);
BorderColoredByDirective = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[borderColoredBy]'
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], BorderColoredByDirective);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__border_colored_by__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__border_colored_by__["a"]; });



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Author; });
var Author = (function () {
    function Author(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Author;
}());



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Course; });
var Course = (function () {
    function Course(id, title, description, date, durationMin, topRated, authors) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.durationMin = durationMin;
        this.topRated = topRated;
        this.authors = authors;
    }
    return Course;
}());



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListCoursesResponse */
var ListCoursesResponse = (function () {
    function ListCoursesResponse(courses, total) {
        this.courses = courses;
        this.total = total;
    }
    return ListCoursesResponse;
}());



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationPipe; });


var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (durationMin) {
        if (!durationMin) {
            return '';
        }
        var hours = Math.floor(durationMin / 60);
        var minutes = durationMin % 60;
        if (hours > 0) {
            return hours + "h " + minutes + "min";
        }
        return !isNaN(minutes) ? minutes + "min" : '';
    };
    return DurationPipe;
}());
DurationPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'duration'
    })
], DurationPipe);



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });


var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (array, value) {
        if (value) {
            return array.slice().filter(function (course) { return course.title.includes(value); });
        }
        return array;
    };
    return FilterPipe;
}());
FilterPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });


var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, field) {
        return array.slice().sort(function (c1, c2) { return c1[field] > c2[field] ? 1 : c1[field] < c2[field] ? -1 : 0; });
    };
    return OrderByPipe;
}());
OrderByPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
        name: 'orderBy'
    })
], OrderByPipe);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authorReducer; });
var authorReducer = function (store, action) {
    if (store === void 0) { store = []; }
    switch (action.type) {
        case 'LOAD_AUTHORS':
            return action.payload;
        default:
            return store;
    }
};


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courseReducer; });
var courseReducer = function (store, action) {
    if (store === void 0) { store = []; }
    switch (action.type) {
        case 'LOAD_COURSES':
            return action.payload;
        default:
            return store;
    }
};


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsService; });



var BreadcrumbsService = (function () {
    function BreadcrumbsService() {
        this.courseTitleSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](undefined);
    }
    BreadcrumbsService.prototype.getCourseTitle = function () {
        return this.courseTitleSubject.asObservable();
    };
    BreadcrumbsService.prototype.setCourseTitle = function (title) {
        this.courseTitleSubject.next(title);
    };
    return BreadcrumbsService;
}());
BreadcrumbsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], BreadcrumbsService);



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesService; });







var CoursesService = (function () {
    function CoursesService(httpService, store) {
        this.httpService = httpService;
        this.store = store;
        this.courses = store.select(function (st) { return st.courses; });
        this.authors = store.select(function (st) { return st.authors; });
    }
    CoursesService.prototype.listCourses = function (searchTerm, start, count) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.set('query', searchTerm);
        params.set('start', start.toString());
        params.set('count', count.toString());
        return this.httpService.get('/courses', { search: params })
            .map(function (resp) {
            var result = resp.json();
            return result.courses.map(function (course) { return new __WEBPACK_IMPORTED_MODULE_5__entities__["a" /* Course */](course.id, course.name, course.description, new Date(course.date), course.length, course.isTopRated, course.authors); });
        })
            .map(function (payload) {
            return { type: 'LOAD_COURSES', payload: payload };
        })
            .subscribe(function (action) {
            _this.store.dispatch(action);
        });
    };
    CoursesService.prototype.listAuthors = function () {
        var _this = this;
        return this.httpService.get('/courses/authors')
            .map(function (resp) {
            var result = resp.json();
            // Remove duplicates.
            var authorsObj = result.reduce(function (obj, author) {
                obj[author.id] = author;
                return obj;
            }, {});
            // Sort for stability.
            var authorIds = Object.keys(authorsObj).sort();
            return authorIds.map(function (authorId) {
                var author = authorsObj[authorId];
                return new __WEBPACK_IMPORTED_MODULE_5__entities__["b" /* Author */](author.id, author.firstName, author.lastName);
            });
        })
            .map(function (payload) {
            return { type: 'LOAD_AUTHORS', payload: payload };
        })
            .subscribe(function (action) {
            _this.store.dispatch(action);
        });
    };
    CoursesService.prototype.getCourse = function (courseId) {
        return this.httpService.get("/courses/" + courseId)
            .map(function (resp) {
            var result = resp.json();
            return new __WEBPACK_IMPORTED_MODULE_5__entities__["a" /* Course */](result.id, result.name, result.description, new Date(result.date), result.length, result.isTopRated, result.authors);
        });
    };
    CoursesService.prototype.createCourse = function (course) {
        var requestBody = {
            name: course.title,
            description: course.description,
            isTopRated: course.topRated,
            date: course.date.toUTCString(),
            length: course.durationMin,
            authors: course.authors
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.httpService.post('/courses', requestBody, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    CoursesService.prototype.updateCourse = function (course) {
        var requestBody = {
            id: course.id,
            name: course.title,
            description: course.description,
            isTopRated: course.topRated,
            date: course.date.toUTCString(),
            length: course.durationMin,
            authors: course.authors
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.httpService.put("/courses/" + course.id, requestBody, { headers: headers })
            .map(function (resp) { return resp.json(); });
    };
    CoursesService.prototype.deleteCourse = function (courseId) {
        return this.httpService.delete("/courses/" + courseId)
            .map(function (resp) { return resp.json(); });
    };
    return CoursesService;
}());
CoursesService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__http_service__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]])
], CoursesService);



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderBlockService; });



var LoaderBlockService = (function () {
    function LoaderBlockService() {
        this.showSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
    }
    LoaderBlockService.prototype.show = function () {
        this.showSubject.next(true);
    };
    LoaderBlockService.prototype.hide = function () {
        this.showSubject.next(false);
    };
    return LoaderBlockService;
}());
LoaderBlockService = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], LoaderBlockService);



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseItemComponent; });



var CourseItemComponent = (function () {
    function CourseItemComponent(router) {
        this.router = router;
        this.courseDeleted = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    CourseItemComponent.prototype.editCourse = function () {
        this.router.navigateByUrl("/courses/" + this.item.id);
    };
    CourseItemComponent.prototype.deleteCourse = function () {
        this.courseDeleted.emit(this.item.id);
    };
    return CourseItemComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], CourseItemComponent.prototype, "item", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Number)
], CourseItemComponent.prototype, "index", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Object)
], CourseItemComponent.prototype, "courseDeleted", void 0);
CourseItemComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'course-item',
        template: __webpack_require__(130),
        styles: [__webpack_require__(146)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], CourseItemComponent);



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });



var CoursesComponent = (function () {
    function CoursesComponent(coursesService, loaderService, cd, ngZone) {
        this.coursesService = coursesService;
        this.loaderService = loaderService;
        this.cd = cd;
        this.ngZone = ngZone;
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.titleFragment = '';
        this.listCourses();
        this.onUnstableSubscription =
            this.ngZone.onUnstable.subscribe(this.onZoneUnstable.bind(this));
        this.onStableSubscription =
            this.ngZone.onStable.subscribe(this.onZoneStable.bind(this));
    };
    CoursesComponent.prototype.setSearchTerm = function (searchTerm) {
        this.titleFragment = searchTerm;
        this.listCourses();
    };
    CoursesComponent.prototype.deleteCourse = function (id) {
        var _this = this;
        if (window.confirm('Do you really want to delete the course?')) {
            this.loaderService.show();
            setTimeout(function () {
                _this.coursesService.deleteCourse(id)
                    .toPromise()
                    .then(function () { return _this.listCourses(); });
                _this.loaderService.hide();
            }, 3000);
        }
    };
    CoursesComponent.prototype.ngOnDestroy = function () {
        this.onUnstableSubscription.unsubscribe();
        this.onStableSubscription.unsubscribe();
    };
    CoursesComponent.prototype.listCourses = function () {
        this.courseItems = this.coursesService.courses;
        this.coursesService.listCourses(this.titleFragment, 0, 20);
    };
    CoursesComponent.prototype.filterOutdatedCourses = function (courses) {
        return courses.filter(function (course) {
            var now = new Date();
            var diffDays = (now.getTime() - course.date.getTime()) / (1000 * 60 * 60 * 24);
            return diffDays < 14;
        });
    };
    CoursesComponent.prototype.onZoneUnstable = function () {
        this.startTime = new Date();
    };
    CoursesComponent.prototype.onZoneStable = function () {
        var endTime = new Date();
        if (this.startTime) {
            var processTime = endTime.getMilliseconds() - this.startTime.getMilliseconds();
            console.log("Process time (ms): " + processTime);
        }
    };
    return CoursesComponent;
}());
CoursesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'courses',
        template: __webpack_require__(131),
        styles: [__webpack_require__(147)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services__["d" /* CoursesService */],
        __WEBPACK_IMPORTED_MODULE_2__core_services__["f" /* LoaderBlockService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
], CoursesComponent);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorsFieldComponent; });



var AuthorsFieldComponent = AuthorsFieldComponent_1 = (function () {
    function AuthorsFieldComponent() {
        this.selectedIdsObject = {};
        this.selectedAuthors = [];
        this.touched = false;
        this.propagateChange = function (_) { };
        this.propagateTouch = function () { };
    }
    AuthorsFieldComponent.prototype.writeValue = function (obj) {
        var _this = this;
        if (obj != null) {
            obj.forEach(function (a) {
                _this.selectedIdsObject[a.id] = true;
            });
            this.selectedAuthors = obj;
            this.propagateChange(obj);
        }
    };
    AuthorsFieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AuthorsFieldComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    AuthorsFieldComponent.prototype.onChange = function (author, checked) {
        this.touched = true;
        this.propagateTouch();
        if (checked) {
            this.selectedAuthors.push(author);
        }
        else {
            var indexToDelete = this.selectedAuthors.findIndex(function (a) { return a.id === author.id; });
            this.selectedAuthors.splice(indexToDelete, 1);
        }
        this.propagateChange(this.selectedAuthors);
    };
    AuthorsFieldComponent.prototype.validate = function (c) {
        return this.selectedAuthors.length === 0 ?
            { invalidAuthors: true } :
            null;
    };
    return AuthorsFieldComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:type", Array)
], AuthorsFieldComponent.prototype, "authors", void 0);
AuthorsFieldComponent = AuthorsFieldComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'authors-field',
        template: __webpack_require__(132),
        styles: [__webpack_require__(148)],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return AuthorsFieldComponent_1; }),
                multi: true,
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALIDATORS"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return AuthorsFieldComponent_1; }),
                multi: true,
            },
        ],
    })
], AuthorsFieldComponent);

var AuthorsFieldComponent_1;


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFieldComponent; });



var DATE_REGEXP = new RegExp('^\\d{1,2}\\/\\d{1,2}\\/\\d{4}$');
var DateFieldComponent = DateFieldComponent_1 = (function () {
    function DateFieldComponent() {
        this.propagateChange = function (_) { };
        this.propagateTouch = function () { };
    }
    DateFieldComponent.prototype.writeValue = function (obj) {
        if (obj != null) {
            this.dateString = obj.getDate() + "/" + (obj.getMonth() + 1) + "/" + obj.getFullYear();
            this.propagateChange(obj);
        }
    };
    DateFieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DateFieldComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    DateFieldComponent.prototype.onChange = function (value) {
        if (!DATE_REGEXP.test(value)) {
            this.propagateChange(null);
        }
        else {
            var dateParts = value.split('/');
            this.propagateChange(new Date(dateParts[2], dateParts[1] - 1, dateParts[0]));
        }
    };
    DateFieldComponent.prototype.onBlur = function () {
        this.propagateTouch();
    };
    DateFieldComponent.prototype.validate = function (c) {
        return c.value != null ? null : { invalidDate: true };
    };
    return DateFieldComponent;
}());
DateFieldComponent = DateFieldComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'date-field',
        template: __webpack_require__(133),
        styles: [__webpack_require__(149)],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DateFieldComponent_1; }),
                multi: true,
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALIDATORS"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DateFieldComponent_1; }),
                multi: true,
            },
        ],
    })
], DateFieldComponent);

var DateFieldComponent_1;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationFieldComponent; });



var DURATION_REGEXP = new RegExp('^\\d+$');
var DurationFieldComponent = DurationFieldComponent_1 = (function () {
    function DurationFieldComponent() {
        this.propagateChange = function (_) { };
        this.propagateTouch = function () { } /* tslint:disable */ /* tslint:enable */;
    }
    DurationFieldComponent.prototype.writeValue = function (obj) {
        if (obj != null) {
            this.duration = obj;
            this.propagateChange(obj);
        }
    };
    DurationFieldComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    DurationFieldComponent.prototype.registerOnTouched = function (fn) {
        this.propagateTouch = fn;
    };
    DurationFieldComponent.prototype.onChange = function (value) {
        this.propagateChange(DURATION_REGEXP.test(value) ? parseInt(value, 10) : null);
    };
    DurationFieldComponent.prototype.onBlur = function () {
        this.propagateTouch();
    };
    DurationFieldComponent.prototype.validate = function (c) {
        return c.value != null ? null : { invalidDuration: true };
    };
    return DurationFieldComponent;
}());
DurationFieldComponent = DurationFieldComponent_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'duration-field',
        template: __webpack_require__(134),
        styles: [__webpack_require__(150)],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DurationFieldComponent_1; }),
                multi: true,
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["NG_VALIDATORS"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return DurationFieldComponent_1; }),
                multi: true,
            },
        ],
    })
], DurationFieldComponent);

var DurationFieldComponent_1;


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCourseComponent; });




var EditCourseComponent = (function () {
    function EditCourseComponent(coursesService, breadcrumbsService, cd, route, router) {
        this.coursesService = coursesService;
        this.breadcrumbsService = breadcrumbsService;
        this.cd = cd;
        this.route = route;
        this.router = router;
        this.isNew = true;
        this.course = {};
    }
    EditCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeParamsSubscription = this.route.params.subscribe(function (params) {
            var courseId = params['id'];
            if (courseId !== 'new') {
                _this.isNew = false;
                _this.coursesService.getCourse(courseId)
                    .toPromise()
                    .then(function (course) {
                    _this.course = course;
                    _this.titleChanged(course.title);
                    _this.cd.markForCheck();
                });
            }
        });
        this.authors = this.coursesService.authors;
        this.coursesService.listAuthors();
    };
    EditCourseComponent.prototype.titleChanged = function (newTitle) {
        this.breadcrumbsService.setCourseTitle(newTitle);
    };
    EditCourseComponent.prototype.submit = function () {
        var _this = this;
        console.log('submit', this.course);
        if (this.isNew) {
            this.coursesService.createCourse(this.course)
                .toPromise()
                .then(function () { return _this.router.navigateByUrl('/courses'); });
        }
        else {
            this.coursesService.updateCourse(this.course)
                .toPromise()
                .then(function () { return _this.router.navigateByUrl('/courses'); });
        }
    };
    EditCourseComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/courses');
    };
    EditCourseComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbsService.setCourseTitle(undefined);
        this.routeParamsSubscription.unsubscribe();
    };
    return EditCourseComponent;
}());
EditCourseComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'edit-course',
        template: __webpack_require__(135),
        styles: [__webpack_require__(151)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services__["d" /* CoursesService */],
        __WEBPACK_IMPORTED_MODULE_3__core_services__["c" /* BreadcrumbsService */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], EditCourseComponent);



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });




var LoginComponent = (function () {
    function LoginComponent(authService, loaderService, router) {
        this.authService = authService;
        this.loaderService = loaderService;
        this.router = router;
    }
    LoginComponent.prototype.tryLogin = function () {
        var _this = this;
        this.loaderService.show();
        setTimeout(function () {
            _this.authService.login(_this.login, _this.password)
                .toPromise()
                .then(function (success) {
                _this.loaderService.hide();
                _this.router.navigateByUrl('/courses');
            })
                .catch(function (e) {
                _this.loaderService.hide();
                console.log(e.statusText);
            });
        }, 1000);
    };
    return LoginComponent;
}());
LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(136),
        styles: [__webpack_require__(152)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__core_services__["b" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_3__core_services__["f" /* LoaderBlockService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], LoginComponent);



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });


var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".main-footer {\n  background-color: #26628A;\n  color: white;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50px;\n  text-align: center;\n  line-height: 50px; }\n", ""]);

// exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".breadcrumbs {\n  line-height: 50px; }\n\na, a:hover {\n  color: white;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".main-navbar {\n  height: 70px;\n  background-color: #26628A;\n  color: white; }\n\n.container {\n  display: flex; }\n\n.container > * {\n  padding: 10px; }\n\n.container > breadcrumbs {\n  flex: 1; }\n", ""]);

// exports


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".logo-img {\n  height: 50px;\n  position: absolute; }\n\n.logo-caption {\n  line-height: 50px;\n  margin-left: 90px; }\n", ""]);

// exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".logoff {\n  text-align: center; }\n\n.logoff-link {\n  color: white;\n  cursor: pointer;\n  text-decoration: underline; }\n", ""]);

// exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  -moz-animation: spinner 1500ms infinite linear;\n  -ms-animation: spinner 1500ms infinite linear;\n  -o-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0; }\n\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-moz-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@-o-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    -moz-transform: rotate(0deg);\n    -ms-transform: rotate(0deg);\n    -o-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    -moz-transform: rotate(360deg);\n    -ms-transform: rotate(360deg);\n    -o-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  display: flex;\n  margin-top: 10px;\n  max-width: 100%; }\n\n.search-box {\n  margin: 5px;\n  width: 300px; }\n\n.search-button {\n  margin: 5px;\n  width: 100px; }\n\n.add-course-button {\n  margin: 5px;\n  width: 100px; }\n", ""]);

// exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  border: 2px solid black;\n  display: flex;\n  margin-top: 10px;\n  max-width: 100%;\n  padding: 10px; }\n\n.container.starred {\n  background-color: #fad6a5; }\n\n.details {\n  flex: 1;\n  padding: 10px; }\n\n.details-header {\n  display: flex;\n  max-width: 100%; }\n\n.title {\n  font-weight: bold; }\n\n.duration {\n  margin-left: 10px; }\n\n.top-rated {\n  margin-left: 10px; }\n\n.spacer {\n  flex: 1; }\n\n.create-date {\n  font-style: italic; }\n\n.description {\n  font-size: 12px; }\n\n.actions {\n  display: flex;\n  flex-direction: column; }\n", ""]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  margin-bottom: 60px; }\n\n.no-courses-panel {\n  border: 1px solid black;\n  background-color: #ddd;\n  margin: 10px;\n  padding: 10px; }\n", ""]);

// exports


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".authors-list {\n  border: 1px solid #ccc;\n  margin: 5px 0;\n  max-height: 200px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 5px; }\n", ""]);

// exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "input {\n  width: 200px; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n", ""]);

// exports


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".duration-row {\n  display: flex;\n  line-height: 34px; }\n\ninput {\n  width: 80px;\n  margin-right: 20px; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n", ""]);

// exports


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  margin-bottom: 50px;\n  padding: 30px;\n  width: 500px; }\n\n.error-messages {\n  color: red;\n  font-size: 12px; }\n\ninput.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border: 1px solid red; }\n", ""]);

// exports


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".container {\n  padding: 30px;\n  width: 500px; }\n\n.error-messages {\n  color: red;\n  font-size: 12px; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #26628A;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n", ""]);

// exports


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\na.active {\n  background-color: gray;\n}\n", ""]);

// exports


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "h1 {\n  color: #00BCD4;\n}", ""]);

// exports


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "<main-header></main-header>\n\n<main class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n\n<loader-block></loader-block>\n\n<main-footer></main-footer>\n"

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <span>copyright 2014</span>\n</footer>\n"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "<div class=\"breadcrumbs\">\n  <i>\n    <a routerLink=\"/courses\">Courses</a>\n    <span *ngIf=\"courseTitle | async\">> {{ courseTitle | async }}</span>\n  </i>\n</div>\n"

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-navbar\">\n  <div class=\"container\">\n    <main-logo></main-logo>\n    <breadcrumbs *ngIf=\"login | async\"></breadcrumbs>\n    <logoff *ngIf=\"login | async\"></logoff>\n  </div>\n</div>\n"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<span>\n  <img src=\"http://www.nyan.cat/cats/original.gif\" class=\"logo-img\">\n  <span class=\"logo-caption\">COURSES CATALOG</span>\n</span>\n"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logoff\">\n  <div *ngIf=\"login | async\">{{login | async}}</div>\n  <div (click)=\"logoff();\" class=\"logoff-link\">logoff</div>\n</div>\n"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "<span class=\"loading\" *ngIf=\"this.loaderBlockService.showSubject | async\"></span>\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <input [(ngModel)]=\"searchTerm\"\n         class=\"search-box\"\n         placeholder=\"name fragment or date\">\n  <button (click)=\"findCourses()\"\n          class=\"search-button\">Find</button>\n\n  <span style=\"flex: 1;\"></span>\n\n  <button (click)=\"addCourse()\"\n          class=\"add-course-button\">Add Course</button>\n</div>\n"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    [ngClass]=\"{'starred': item.topRated}\"\n    [borderColoredBy]=\"item.date\">\n  <div class=\"details\">\n    <div class=\"details-header\">\n      <span class=\"title\">{{item.title | uppercase}}</span>\n      <span class=\"duration\">{{item.durationMin | duration}}</span>\n      <span *ngIf=\"item.topRated\" class=\"top-rated\">&#9734;</span>\n      <span class=\"spacer\"></span>\n      <span class=\"create-date\">{{item.date | date}}</span>\n    </div>\n    <div class=\"description\">\n      {{item.description}}\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button (click)=\"editCourse();\">Edit Course</button>\n    <button (click)=\"deleteCourse();\">Delete</button>\n  </div>\n</div>\n"

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <toolbox (coursesFiltered)=\"setSearchTerm($event)\"></toolbox>\n  <course-item\n      *ngFor=\"let courseItem of courseItems | async | orderBy:'date'; let idx = index\"\n      [item]=\"courseItem\"\n      [index]=\"idx\"\n      (courseDeleted)=\"deleteCourse($event)\"></course-item>\n\n  <div *ngIf=\"(courseItems | async).length == 0\" class=\"no-courses-panel\">\n    No data. Feel free to add a new course.\n  </div>\n</div>"

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "<div class=\"authors-list\">\n  <div *ngFor=\"let author of authors\">\n    <label>\n      <input\n          type=\"checkbox\"\n          [(ngModel)]=\"selectedIdsObject[author.id]\"\n          (change)=\"onChange(author, $event.target.checked)\">\n      {{author.firstName}} {{author.lastName}}\n    </label>\n  </div>\n</div>\n"

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "<input\n    type=\"text\"\n    class=\"form-control\"\n    [(ngModel)]=\"dateString\"\n    (ngModelChange)=\"onChange($event)\"\n    (blur)=\"onBlur()\"\n    required>\n"

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "<div class=\"duration-row\">\n  <input\n      type=\"text\"\n      class=\"form-control\"\n      [(ngModel)]=\"duration\"\n      (ngModelChange)=\"onChange($event)\"\n      (blur)=\"onBlur()\"\n      required>\n  {{ duration | duration }}\n</div>"

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #form=\"ngForm\" (submit)=\"submit(form)\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input\n          name=\"title\"\n          #title=\"ngModel\"\n          [(ngModel)]=\"course.title\"\n          (ngModelChange)=\"titleChanged($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          required\n          maxlength=\"50\">\n      <div *ngIf=\"title.invalid && title.touched\" class=\"error-messages\">\n        <div [hidden]=\"!title.errors.required\">\n          Title is required\n        </div>\n        <div [hidden]=\"!title.errors.maxlength\">\n          Title cannot be more than 50 characters long\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea\n          name=\"description\"\n          #description=\"ngModel\"\n          [(ngModel)]=\"course.description\"\n          class=\"form-control\"\n          required\n          maxlength=\"500\"></textarea>\n      <div *ngIf=\"description.invalid && description.touched\" class=\"error-messages\">\n        <div [hidden]=\"!description.errors.required\">\n          Description is required\n        </div>\n        <div [hidden]=\"!description.errors.maxlength\">\n          Description cannot be more than 500 characters long\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"date\">Date</label>\n      <date-field name=\"date\" #date=\"ngModel\" [(ngModel)]=\"course.date\"></date-field>\n      <div *ngIf=\"date.invalid && date.touched\" class=\"error-messages\">\n        <div [hidden]=\"!date.errors.invalidDate\">\n          Date must be in 'dd/MM/yyyy' format\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"duration\">Duration</label>\n      <duration-field name=\"duration\" #duration=\"ngModel\" [(ngModel)]=\"course.durationMin\"></duration-field>\n      <div *ngIf=\"duration.invalid && duration.touched\" class=\"error-messages\">\n        <div [hidden]=\"!duration.errors.invalidDuration\">\n          Duration is required and must contain digits only\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"authors\">Authors</label>\n      <authors-field\n          name=\"authors\"\n          #authorsWidget=\"ngModel\"\n          [(ngModel)]=\"course.authors\"\n          [authors]=\"authors | async\"></authors-field>\n      <div *ngIf=\"authorsWidget.invalid && authorsWidget.touched\" class=\"error-messages\">\n        <div [hidden]=\"!authorsWidget.errors.invalidAuthors\">\n          At least one author must be selected\n        </div>\n      </div>\n    </div>\n\n    <button\n        type=\"submit\"\n        [disabled]=\"form.pristine || form.invalid\"\n        class=\"btn btn-success\">Save</button>\n    <button\n        (click)=\"cancel()\"\n        class=\"btn\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #form=\"ngForm\" (submit)=\"tryLogin()\">\n    <div class=\"form-group\">\n      <label for=\"login\">Login (use Warner)</label>\n      <input\n          id=\"login\"\n          name=\"login\"\n          #loginInput=\"ngModel\"\n          [(ngModel)]=\"login\"\n          type=\"text\"\n          class=\"form-control\"\n          required>\n      <div *ngIf=\"loginInput.invalid && loginInput.touched\" class=\"error-messages\">\n        <div [hidden]=\"!loginInput.errors.required\">\n          Login is required\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password (use ea)</label>\n      <input\n          id=\"password\"\n          name=\"password\"\n          #passwordInput=\"ngModel\"\n          [(ngModel)]=\"password\"\n          type=\"password\"\n          class=\"form-control\"\n          required>\n      <div *ngIf=\"passwordInput.invalid && passwordInput.touched\" class=\"error-messages\">\n        <div [hidden]=\"!passwordInput.errors.required\">\n          Password is required\n        </div>\n      </div>\n    </div>\n    <button\n        type=\"submit\"\n        [disabled]=\"form.pristine || form.invalid\"\n        class=\"btn btn-success\">Enter</button>\n  </form>\n</div>\n"

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(34)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(34)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(105);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(106);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(107);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(108);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(109);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(110);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(111);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(112);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(113);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(114);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(115);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(116);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(117);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(118);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(120);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(0);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(294);

/***/ }),
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(419);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(431);

/***/ }),
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(955);

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(96);

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(966);

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(3))(992);

/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(43);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ })
],[299]);
//# sourceMappingURL=main.bundle.js.map