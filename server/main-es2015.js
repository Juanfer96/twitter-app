(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings-page/settings-page.component */ "./src/app/components/settings-page/settings-page.component.ts");
/* harmony import */ var _components_tweet_detail_tweet_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tweet-detail/tweet-detail.component */ "./src/app/components/tweet-detail/tweet-detail.component.ts");








const routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: "search", component: _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"] },
    { path: "settings", component: _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__["SettingsPageComponent"] },
    { path: "TweetDetail/:id_str", component: _components_tweet_detail_tweet_detail_component__WEBPACK_IMPORTED_MODULE_5__["TweetDetailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'twitter-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tweet/tweet.component */ "./src/app/components/tweet/tweet.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_tweet_detail_tweet_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tweet-detail/tweet-detail.component */ "./src/app/components/tweet-detail/tweet-detail.component.ts");
/* harmony import */ var _components_trend_trend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/trend/trend.component */ "./src/app/components/trend/trend.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search-page/search-page.component */ "./src/app/components/search-page/search-page.component.ts");
/* harmony import */ var _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/settings-page/settings-page.component */ "./src/app/components/settings-page/settings-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__["InfiniteScrollModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__["TweetComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_tweet_detail_tweet_detail_component__WEBPACK_IMPORTED_MODULE_8__["TweetDetailComponent"],
        _components_trend_trend_component__WEBPACK_IMPORTED_MODULE_9__["TrendComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
        _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_11__["SearchPageComponent"],
        _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_12__["SettingsPageComponent"],
        _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_15__["DateAgoPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__["InfiniteScrollModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_tweet_tweet_component__WEBPACK_IMPORTED_MODULE_4__["TweetComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                    _components_tweet_detail_tweet_detail_component__WEBPACK_IMPORTED_MODULE_8__["TweetDetailComponent"],
                    _components_trend_trend_component__WEBPACK_IMPORTED_MODULE_9__["TrendComponent"],
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
                    _components_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_11__["SearchPageComponent"],
                    _components_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_12__["SettingsPageComponent"],
                    _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_15__["DateAgoPipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_16__["InfiniteScrollModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_18__["NgxSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "footer"], [1, "footer-item"], [1, "footer-list"], ["href", "https://github.com/Juanfer96/twitter-app", 1, "footer-git"], [1, "footer-end"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mauricio Navarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Marcelo Benjamin Benitez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Juan Fernando Pico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Globant UI Bootcamp 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n    background-color: #005c7e;\r\n    padding: 1em .5em 0 1em;\r\n    margin-top: .5em;\r\n}\r\n.footer-item[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    color: white;\r\n    width: 100%;\r\n   text-align: center;\r\n}\r\n.footer-list[_ngcontent-%COMP%]{\r\n    list-style-position: inside;\r\n    text-align: center;\r\n    font-size: 1em;\r\n}\r\n.footer-end[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: .5em 0 .5em 0;\r\n}\r\n.footer-git[_ngcontent-%COMP%] {\r\n    color:white;\r\n    text-decoration: none;\r\n}\r\n.footer-git[_ngcontent-%COMP%]:hover {\r\n    color:#c0deed;\r\n    text-decoration: none;\r\n}\r\n@media only screen and (min-width:500px){\r\n    .footer-list[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n    .footer-item[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\r\n@media only screen and (min-width:700px){\r\n    .footer-item[_ngcontent-%COMP%]{   \r\n        float: left;\r\n        width: 50%;\r\n        height: 150px;\r\n    }\r\n    .footer-git[_ngcontent-%COMP%]{\r\n        line-height: 100px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0dBQ1osa0JBQWtCO0FBQ3JCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWM3ZTtcclxuICAgIHBhZGRpbmc6IDFlbSAuNWVtIDAgMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogLjVlbTtcclxufVxyXG4uZm9vdGVyLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXItbGlzdHtcclxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcbi5mb290ZXItZW5ke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogLjVlbSAwIC41ZW0gMDtcclxufVxyXG4uZm9vdGVyLWdpdCB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9vdGVyLWdpdDpob3ZlciB7XHJcbiAgICBjb2xvcjojYzBkZWVkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpe1xyXG4gICAgLmZvb3Rlci1saXN0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mb290ZXItaXRlbXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCl7XHJcbiAgICAuZm9vdGVyLWl0ZW17ICAgXHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1naXR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");



class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gwitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".title[_ngcontent-%COMP%]{\r\n    margin: .5em;\r\n    color: #0084b4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgY29sb3I6ICMwMDg0YjQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tweet-service.service */ "./src/app/services/tweet-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tweet/tweet.component */ "./src/app/components/tweet/tweet.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");









function HomePageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " you have already seen all the tweets, upload to see new content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomePageComponent {
    constructor(ts, spinner) {
        this.ts = ts;
        this.spinner = spinner;
        this.notscrolly = true;
        this.allTweetsLoaded = false;
        this.initialTimeLineTweets = 50; //the initial tweets that are going to we displayed
        this.index = 1; //the index used to keep displaying tweets in the timeline
    }
    getTweetsTimeLine() {
        this.ts.getTweets(this.initialTimeLineTweets).subscribe(Tweets => {
            this.Tweets = Tweets;
        });
    }
    onScroll() {
        this.spinner.show(); //shows the spinner while the tweets are loading
        if (this.cont >= 200) {
            //when all the maximum number of tweets are loaded,a message is displayed in the html of the component
            this.allTweetsLoaded = true;
        }
        if (this.notscrolly) {
            this.notscrolly = false;
            this.index++;
            this.cont = this.initialTimeLineTweets * this.index;
            this.addNewTeetsTimeLine(this.cont);
        }
    }
    addNewTeetsTimeLine(count) {
        this.ts.getTweets(count).subscribe(Tweets => {
            this.Tweets = Tweets;
            this.notscrolly = true;
            this.spinner.hide(); //hides the spinner when the time line is loaded
        });
    }
    ngOnInit() {
        this.getTweetsTimeLine();
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__["TweetServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 8, vars: 4, consts: [["infiniteScroll", "", 3, "infiniteScrollDistance", "scrolled"], [3, "Tweets"], [4, "ngIf"], [1, "spinnerBottom"], ["type", "line-spin-fade", "size", "medium", "color", "grey", "bdColor", "inherit", 3, "fullScreen"], [1, "allTweetsLoaded"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function HomePageComponent_Template_div_scrolled_2_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tweet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomePageComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngx-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Tweets", ctx.Tweets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allTweetsLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_5__["TweetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n\r\n.spinnerBottom[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.allTweetsLoaded[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 0.7rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNwaW5uZXJCb3R0b20ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uYWxsVHdlZXRzTG9hZGVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home-page",
                templateUrl: "./home-page.component.html",
                styleUrls: ["./home-page.component.css"]
            }]
    }], function () { return [{ type: src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__["TweetServiceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







class NavbarComponent {
    constructor() {
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 6, consts: [[1, "navbar"], ["routerLink", "/home", 1, "navbar-item", "size3x"], ["size", "3x", 3, "icon"], ["routerLink", "/search", 1, "navbar-item", "size3x"], ["routerLink", "/settings", 1, "navbar-item", "size3x"], ["routerLink", "/home", 1, "navbar-item", "size2x"], ["size", "2x", 3, "icon"], [1, "navbar-item-text"], ["routerLink", "/search", 1, "navbar-item", "size2x"], ["routerLink", "/settings", 1, "navbar-item", "size2x"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHome);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCog);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    padding: .5em 0 0 0;\r\n    border-top: 1px solid  rgba(247, 247, 247, 0.794);\r\n    border-bottom:1px solid  rgba(199, 199, 199, 0.794);\r\n    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 1px 0px  rgba(255, 255, 255);\r\n}\r\n.navbar-item[_ngcontent-%COMP%]{\r\n    width: 33.3%;\r\n    text-align: center;\r\n    color: #1dcaff;\r\n    line-height: 2.6em;  \r\n    height: inherit;\r\n}\r\n.size3x[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n}\r\n.size2x[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n.navbar-item[_ngcontent-%COMP%]:hover{\r\n    \r\n    border-bottom: 2px solid;\r\n    border-color: #1dcaff;\r\n    cursor: pointer;\r\n}\r\n.navbar-item[_ngcontent-%COMP%]:focus{\r\n    color:#c0deed;\r\n    outline: none;\r\n}\r\n@media only screen and (min-width:700px){\r\n    .size3x[_ngcontent-%COMP%]{\r\n        display: none;  \r\n    }\r\n    .size2x[_ngcontent-%COMP%]{\r\n        display: inline-block; \r\n    }\r\n    .navbar-item-text[_ngcontent-%COMP%]{\r\n        font-size: 2em;\r\n        padding-left: .5em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELG1EQUFtRDtJQUNuRCw4Q0FBOEM7SUFDOUMsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUdBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcclxuICAgIHBhZGRpbmc6IC41ZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIHJnYmEoMjQ3LCAyNDcsIDI0NywgMC43OTQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIHJnYmEoMTk5LCAxOTksIDE5OSwgMC43OTQpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggIHJnYmEoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLm5hdmJhci1pdGVte1xyXG4gICAgd2lkdGg6IDMzLjMlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxZGNhZmY7XHJcbiAgICBsaW5lLWhlaWdodDogMi42ZW07ICBcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG4uc2l6ZTN4e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zaXplMnh7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXItaXRlbTpob3ZlcntcclxuICAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMWRjYWZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG4ubmF2YmFyLWl0ZW06Zm9jdXN7XHJcbiAgICBjb2xvcjojYzBkZWVkO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufSBcclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpe1xyXG4gICAgLnNpemUzeHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAgXHJcbiAgICB9XHJcbiAgICAuc2l6ZTJ4e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWl0ZW0tdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IC41ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/search-page/search-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-page/search-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/tweet-service.service */ "./src/app/services/tweet-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _trend_trend_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trend/trend.component */ "./src/app/components/trend/trend.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js");
/* harmony import */ var _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tweet/tweet.component */ "./src/app/components/tweet/tweet.component.ts");













function SearchPageComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolled", function SearchPageComponent_ul_11_Template_div_scrolled_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onScroll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-tweet", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r1.searchText, "\" search results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Tweets", ctx_r1.tweets);
} }
class SearchPageComponent {
    constructor(ts, spinner) {
        this.ts = ts;
        this.spinner = spinner;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.searching = false;
        this.notscrolly = true;
        this.allTweetsLoaded = false;
        this.initialTimeLineTweets = 10; //the initial tweets that are going to we displayed
        this.index = 10; //the index used to keep displaying tweets in the timeline
    }
    ngOnInit() { }
    showSearchResults() {
        //To not start an empty search with 3 blanks
        if (this.searchText === "") {
            this.searchText = "";
            this.spinner.hide();
        }
        //Only start searching with 3 characters
        if (this.searchText.length >= 3) {
            this.getTweets(this.initialTimeLineTweets);
            this.searching = true;
            this.spinner.hide();
        }
        else {
            this.searching = false;
            this.spinner.show();
        }
    }
    getTweets(count) {
        this.ts.getSearchTweets(this.searchText, count).subscribe(data => {
            this.tweets = data.statuses;
        });
    }
    onScroll() {
        if (this.notscrolly) {
            this.spinner.show(); //shows the spinner while the tweets are loading
            this.notscrolly = false;
            this.cont = this.initialTimeLineTweets + this.index;
            this.index = this.index + 10;
            this.addNewTeetsTimeLine(this.cont);
        }
    }
    addNewTeetsTimeLine(count) {
        this.getTweets(count);
        this.notscrolly = true;
        setTimeout(() => {
            this.spinner.hide();
        }, 2000); //hides the spinner when the time line is loaded, the setTimeout is used because the search was too fast,soo with that we can simulate more search time
    }
    setSelectedTrend(trendName) {
        if (trendName[0] == "#") {
            trendName = trendName.slice(1);
        }
        this.searchText = trendName;
        this.showSearchResults();
    }
    setQuicklySearch(search) {
        this.searchText = search;
        this.showSearchResults();
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_2__["TweetServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["app-search-page"]], decls: 16, vars: 4, consts: [[1, "search"], ["size", "2x", 1, "icon", 3, "icon"], ["type", "text", "placeholder", "Search...", 1, "input", 3, "ngModel", "ngModelChange", "keyup"], [1, "quickly-search"], [1, "quickly-search-item", 3, "click"], [4, "ngIf"], [1, "spinnerBottom"], ["type", "line-spin-fade", "size", "medium", "color", "#a1becc", "bdColor", "inherit", 3, "fullScreen"], [3, "selectedTrend"], [1, "subtitle"], ["infiniteScroll", "", 3, "infiniteScrollDistance", "scrolled"], [3, "Tweets"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPageComponent_Template_input_ngModelChange_3_listener($event) { return ctx.searchText = $event; })("keyup", function SearchPageComponent_Template_input_keyup_3_listener() { return ctx.showSearchResults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_Template_div_click_5_listener() { return ctx.setQuicklySearch("News"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPageComponent_Template_div_click_8_listener() { return ctx.setQuicklySearch("Events"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchPageComponent_ul_11_Template, 5, 3, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-trend", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTrend", function SearchPageComponent_Template_app_trend_selectedTrend_14_listener($event) { return ctx.setSelectedTrend($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", false);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _trend_trend_component__WEBPACK_IMPORTED_MODULE_8__["TrendComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_10__["InfiniteScrollDirective"], _tweet_tweet_component__WEBPACK_IMPORTED_MODULE_11__["TweetComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  padding: 0;\r\n}\r\n.search[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin: 1em 1em 1em 2em;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 2.7em;\r\n  top: 0.3em;\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  box-sizing: border-box;\r\n  border: 2px solid #c0deed;\r\n  border-radius: 4px;\r\n  font-size: 1.5em;\r\n  background-color: #c0deed;\r\n  padding: 12px 20px 12px 55px;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n.input[_ngcontent-%COMP%]:focus {\r\n  width: 85%;\r\n  background-color: white;\r\n  border-color: #1dcaff;\r\n  outline: none;\r\n}\r\n.input[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]::placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]::-moz-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]:-moz-placeholder {\r\n  color: #1dcaff;\r\n}\r\n.quickly-search[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin: 0 0 0.5em 4em;\r\n}\r\n.quickly-search-item[_ngcontent-%COMP%] {\r\n  color: #a1becc;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  display: inline-block;\r\n  font-size: 1.3em;\r\n  padding: 0.7em;\r\n}\r\n.quickly-search-item[_ngcontent-%COMP%]:hover {\r\n  color: #1dcaff;\r\n  background-color: #f8fcfc;\r\n  cursor: pointer;\r\n  border-bottom: 2px solid;\r\n  border-color: #1dcaff;\r\n}\r\n.subtitle[_ngcontent-%COMP%] {\r\n  margin-left: 0.7em;\r\n  font-size: 1.2em;\r\n  margin-top: 1.2em;\r\n  margin-bottom: 0.9em;\r\n}\r\n.spinnerBottom[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 5px;\r\n  width: 100%;\r\n  margin-top: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBRTVCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRkE7RUFDRSxjQUFjO0FBQ2hCO0FBRkE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uc2VhcmNoIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMWVtIDFlbSAxZW0gMmVtO1xyXG59XHJcbi5pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMi43ZW07XHJcbiAgdG9wOiAwLjNlbTtcclxuICBjb2xvcjogIzFkY2FmZjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2MwZGVlZDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBkZWVkO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDU1cHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNHMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6ICMxZGNhZmY7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMxZGNhZmY7XHJcbn1cclxuXHJcbi5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMxZGNhZmY7XHJcbn1cclxuLmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzFkY2FmZjtcclxufVxyXG4uaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzFkY2FmZjtcclxufVxyXG4uaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMxZGNhZmY7XHJcbn1cclxuXHJcbi5xdWlja2x5LXNlYXJjaCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgMCAwLjVlbSA0ZW07XHJcbn1cclxuLnF1aWNrbHktc2VhcmNoLWl0ZW0ge1xyXG4gIGNvbG9yOiAjYTFiZWNjO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBwYWRkaW5nOiAwLjdlbTtcclxufVxyXG4ucXVpY2tseS1zZWFyY2gtaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICMxZGNhZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmNmYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzFkY2FmZjtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBtYXJnaW4tbGVmdDogMC43ZW07XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBtYXJnaW4tdG9wOiAxLjJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjllbTtcclxufVxyXG5cclxuLnNwaW5uZXJCb3R0b20ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search-page",
                templateUrl: "./search-page.component.html",
                styleUrls: ["./search-page.component.css"]
            }]
    }], function () { return [{ type: src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_2__["TweetServiceService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/settings-page/settings-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/settings-page/settings-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tweet-service.service */ "./src/app/services/tweet-service.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class SettingsPageComponent {
    constructor(ts) {
        this.ts = ts;
    }
    ngOnInit() {
        this.timeLineSetting = this.ts.getRealTimeConfiguration();
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__["TweetServiceService"])); };
SettingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["app-settings-page"]], decls: 26, vars: 5, consts: [[1, "container"], ["type", "checkbox", "checked", "checked", 3, "ngModel", "ngModelChange"], [1, "checkmark"]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Silence notifications from. . .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "People who have not verified the account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.timeLineSetting.hideAccountsNotVerified = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "People who do not follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.timeLineSetting.hidePeopleWhoDontfollow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "People who have default profile information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsPageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.timeLineSetting.hideDefaultProfile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tweets that contains a link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsPageComponent_Template_input_ngModelChange_20_listener($event) { return ctx.timeLineSetting.hideTweetsWhitLinks = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tweets that has text truncated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsPageComponent_Template_input_ngModelChange_24_listener($event) { return ctx.timeLineSetting.hideTweetsTruncated = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeLineSetting.hideAccountsNotVerified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeLineSetting.hidePeopleWhoDontfollow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeLineSetting.hideDefaultProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeLineSetting.hideTweetsWhitLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.timeLineSetting.hideTweetsTruncated);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["header[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0.7rem;\r\n  background-color: #005c7e;\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  width: 100%;\r\n  color: whitesmoke;\r\n  font-size: 1rem;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  display: block;\r\n  position: relative;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1.5rem;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  border-top: 1px solid rgb(230, 230, 230);\r\n  border-bottom: 1px solid rgb(230, 230, 230);\r\n  text-align: left;\r\n  font-size: 0.78rem;\r\n}\r\n.container[_ngcontent-%COMP%]:hover {\r\n  border-top: 1px solid #1dcaff;\r\n  border-bottom: 1px solid #1dcaff;\r\n  background-color: #f8fcfc;\r\n  cursor: pointer;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  height: 25px;\r\n  width: 25px;\r\n  border: 1px solid gray;\r\n  background-color: #eee;\r\n  margin-left: 1rem;\r\n  vertical-align: bottom;\r\n}\r\ninput[_ngcontent-%COMP%]:checked {\r\n  background-color: #1dcaff;\r\n}\r\n.input[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  position: relative;\r\n  display: none;\r\n}\r\ninput[_ngcontent-%COMP%]:checked:after {\r\n  display: block;\r\n}\r\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:after {\r\n  left: 9px;\r\n  top: 5px;\r\n  width: 5px;\r\n  height: 10px;\r\n  border: solid white;\r\n  border-width: 0 3px 3px 0;\r\n  transform: rotate(45deg);\r\n}\r\n@media only screen and (min-width: 500px) {\r\n  .userName[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%], .timeAgoTweet[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 700px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n@media only screen and (min-width: 900px) {\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n  *[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFHekIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRTs7Ozs7SUFLRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUaGUgY29udGFpbmVyICovXHJcbmhlYWRlciB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAuN3JlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1YzdlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMCwgMjMwLCAyMzApO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFkY2FmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFkY2FmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmY2ZjO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkY2FmZjtcclxufVxyXG5cclxuLmlucHV0OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbnB1dDphZnRlciB7XHJcbiAgbGVmdDogOXB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIC51c2VyTmFtZSxcclxuICAuc2NyZWVuTmFtZSxcclxuICAudGltZUFnb1R3ZWV0LFxyXG4gIC50d2VldEZvb3RlciBzcGFuLFxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLnR3ZWV0Qm9keSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAqIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgKiB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgKiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-settings-page",
                templateUrl: "./settings-page.component.html",
                styleUrls: ["./settings-page.component.css"]
            }]
    }], function () { return [{ type: src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_1__["TweetServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/trend/trend.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/trend/trend.component.ts ***!
  \*****************************************************/
/*! exports provided: TrendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendComponent", function() { return TrendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_trend_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/trend-service.service */ "./src/app/services/trend-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TrendComponent_li_3_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TrendComponent_li_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "0 Tweets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendComponent_li_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trend_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", trend_r27.tweet_volume, " Tweets ");
} }
function TrendComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendComponent_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const trend_r27 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onSelectedTrend(trend_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrendComponent_li_3_div_6_Template, 1, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TrendComponent_li_3_ng_template_7_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TrendComponent_li_3_ng_template_9_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trend_r27 = ctx.$implicit;
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trend_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trend_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", trend_r27.tweet_volume == null)("ngIfThen", _r29)("ngIfElse", _r31);
} }
class TrendComponent {
    constructor(trendService) {
        this.trendService = trendService;
        this.cont = 0;
        this.selectedTrend = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.trendService.getTrends().subscribe(data => {
            this.trends = data[0].trends;
            this.generateId();
        });
    }
    generateId() {
        let i = 1;
        this.trends.forEach(item => {
            item.id = i++;
        });
    }
    onSelectedTrend(trend) {
        this.selectedTrend.emit(trend.name);
    }
}
TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trend_service_service__WEBPACK_IMPORTED_MODULE_1__["TrendServiceService"])); };
TrendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendComponent, selectors: [["app-trend"]], outputs: { selectedTrend: "selectedTrend" }, decls: 4, vars: 1, consts: [[1, "subtitle"], [1, "list"], ["class", "list-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "click"], [1, "id-number"], [1, "trend-wrapper"], [1, "name"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "tweet-volume"]], template: function TrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Trends for you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrendComponent_li_3_Template, 11, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trends);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".subtitle[_ngcontent-%COMP%]{\r\n    margin-left: .7em;\r\n    font-size: 1.2em;\r\n}\r\n.list[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n.list-item[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    padding: 1em 0 1em 1.5em;\r\n    border-top: solid 1px;\r\n    border-bottom: solid 1px;\r\n    border-color: rgb(230, 230, 230);\r\n    height: 2.6em;\r\n    position: relative;\r\n}\r\n.list-item[_ngcontent-%COMP%]:hover{\r\n  border-top: 1px solid #1dcaff;\r\n  border-bottom: 1px solid #1dcaff;\r\n  background-color: #f8fcfc;\r\n  cursor: pointer;\r\n}\r\n.id-number[_ngcontent-%COMP%]{ \r\n    font-size: .9em;\r\n    font-weight: 700;\r\n    color: rgb(185, 185, 185);\r\n    width: 2.8em;\r\n    height:inherit;\r\n    line-height: 2.6em;\r\n    float: left;\r\n}\r\n.trend-wrapper[_ngcontent-%COMP%]{    \r\n    font-weight: 500;\r\n    float: left;\r\n}\r\n.name[_ngcontent-%COMP%]{\r\n    font-size: .9em;\r\n    margin-bottom: .5em;\r\n    color: rgb(46, 46, 46);\r\n  \r\n}\r\n.tweet-volume[_ngcontent-%COMP%]{\r\n    font-size: .8em;\r\n    color: rgb(148, 148, 148);\r\n   \r\n\r\n}\r\n@media only screen and (min-width:500px){\r\n    .subtitle[_ngcontent-%COMP%]{\r\n        font-size: 1.3em;\r\n    }\r\n    .id-number[_ngcontent-%COMP%]{\r\n        font-size: 1em;\r\n    }\r\n    .name[_ngcontent-%COMP%]{\r\n        font-size: 1em;\r\n    }\r\n    .tweet-volume[_ngcontent-%COMP%]{\r\n        font-size: .9em;\r\n    }\r\n}\r\n@media only screen and (min-width:700px){\r\n    .subtitle[_ngcontent-%COMP%]{\r\n        font-size: 1.4em;\r\n    }\r\n    .id-number[_ngcontent-%COMP%]{\r\n        font-size: 1.1em;\r\n    }\r\n    .name[_ngcontent-%COMP%]{\r\n        font-size: 1.1em;\r\n    }\r\n    .tweet-volume[_ngcontent-%COMP%]{\r\n        font-size: 1em;\r\n    }\r\n}\r\n@media only screen and (min-width:900px){\r\n    .subtitle[_ngcontent-%COMP%]{\r\n        font-size: 1.5em;\r\n    }\r\n    .id-number[_ngcontent-%COMP%]{\r\n        font-size: 1.2em;\r\n    }\r\n    .name[_ngcontent-%COMP%]{\r\n        font-size: 1.2em;\r\n    }\r\n    .tweet-volume[_ngcontent-%COMP%]{\r\n        font-size: 1.1em;\r\n    }\r\n}\r\n@media only screen and (min-width:1100px){\r\n    .subtitle[_ngcontent-%COMP%]{\r\n        font-size: 1.6em;\r\n    }\r\n    .id-number[_ngcontent-%COMP%]{\r\n        font-size: 1.3em;\r\n    }\r\n    .name[_ngcontent-%COMP%]{\r\n        font-size: 1.3em;\r\n    }\r\n    .tweet-volume[_ngcontent-%COMP%]{\r\n        font-size: 1.2em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmVuZC90cmVuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCOztBQUUxQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5Qjs7O0FBRzdCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJlbmQvdHJlbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAuN2VtO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4ubGlzdHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ubGlzdC1pdGVte1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDEuNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBoZWlnaHQ6IDIuNmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5saXN0LWl0ZW06aG92ZXJ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMxZGNhZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxZGNhZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmNmYztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pZC1udW1iZXJ7IFxyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiByZ2IoMTg1LCAxODUsIDE4NSk7XHJcbiAgICB3aWR0aDogMi44ZW07XHJcbiAgICBoZWlnaHQ6aW5oZXJpdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjZlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50cmVuZC13cmFwcGVyeyAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmFtZXtcclxuICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XHJcbiAgICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xyXG4gIFxyXG59XHJcblxyXG4udHdlZXQtdm9sdW1le1xyXG4gICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgY29sb3I6IHJnYigxNDgsIDE0OCwgMTQ4KTtcclxuICAgXHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpe1xyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgICAuaWQtbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgLm5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgICAudHdlZXQtdm9sdW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzAwcHgpe1xyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICB9XHJcbiAgICAuaWQtbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG4gICAgLnR3ZWV0LXZvbHVtZXtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTAwcHgpe1xyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAuaWQtbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG4gICAgLnR3ZWV0LXZvbHVtZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMTAwcHgpe1xyXG4gICAgLnN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICB9XHJcbiAgICAuaWQtbnVtYmVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgICAubmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgfVxyXG4gICAgLnR3ZWV0LXZvbHVtZXtcclxuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-trend",
                templateUrl: "./trend.component.html",
                styleUrls: ["./trend.component.css"]
            }]
    }], function () { return [{ type: _services_trend_service_service__WEBPACK_IMPORTED_MODULE_1__["TrendServiceService"] }]; }, { selectedTrend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/tweet-detail/tweet-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/tweet-detail/tweet-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: TweetDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetDetailComponent", function() { return TweetDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tweet-service.service */ "./src/app/services/tweet-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");














function TweetDetailComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faCheck);
} }
function TweetDetailComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r5.tweet == null ? null : ctx_r5.tweet.entities.media[0].media_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TweetDetailComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faHeart);
} }
function TweetDetailComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 26);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.fasHeart);
} }
function TweetDetailComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faRetweet);
} }
function TweetDetailComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 28);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r11.faRetweet);
} }
class TweetDetailComponent {
    constructor(ts, route, location) {
        this.ts = ts;
        this.route = route;
        this.location = location;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowLeft"];
        this.faHeart = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"];
        this.faRetweet = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRetweet"];
        this.faComment = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComment"];
        this.faCircle = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCircle"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"];
        this.fasHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
    }
    getId() {
        return this.route.snapshot.paramMap.get("id_str");
    }
    ngOnInit() {
        this.tweetId = this.getId();
        this.ts.getIdTweet(this.tweetId).subscribe(data => {
            this.tweet = data;
        });
    }
    goBack() {
        this.location.back();
    }
    clickReTweet() {
        if (this.tweet.retweeted) {
            this.tweet.retweeted = false;
            this.tweet.retweet_count -= 1;
        }
        else {
            this.tweet.retweet_count += 1;
            this.tweet.retweeted = true;
        }
    }
    clickfav() {
        if (this.tweet.favorited) {
            this.tweet.favorited = false;
            this.tweet.favorite_count -= 1;
        }
        else {
            this.tweet.favorite_count += 1;
            this.tweet.favorited = true;
        }
    }
}
TweetDetailComponent.ɵfac = function TweetDetailComponent_Factory(t) { return new (t || TweetDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_3__["TweetServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
TweetDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetDetailComponent, selectors: [["app-tweet-detail"]], decls: 43, vars: 18, consts: [[1, "tweet-detail-wrapper"], [1, "tweetGoBack"], ["size", "2x", 3, "icon", "click"], [1, "tweetHead"], [1, "profileImage"], ["alt", "ProfileImage", 3, "src"], [1, "userName"], [4, "ngIf"], [1, "screenName"], [1, "tweetBody"], [1, "text"], [1, "timeAgoTweet"], [1, "tweetFooter"], [1, "retweet"], [1, "favourite"], [1, "tweetIcons"], [1, "icon"], ["clas", "iconZone", 3, "click"], [4, "ngIf", "ngIfElse"], ["favorited", ""], [1, "icon", 3, "click"], ["retweetedDone", ""], ["size", "3x", 1, "iconCo", 3, "icon"], ["size", "xs", 1, "userVerified", 3, "icon"], ["alt", "img not found", 1, "imageContent", 3, "src"], ["size", "3x", 1, "iconHeart", 3, "icon"], ["size", "3x", 1, "favourited", 3, "icon"], ["size", "3x", 1, "iconRe", 3, "icon"], ["size", "3x", 1, "retweeted", 3, "icon"]], template: function TweetDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetDetailComponent_Template_fa_icon_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TweetDetailComponent_span_11_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TweetDetailComponent_div_18_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetDetailComponent_Template_div_click_32_listener($event) { ctx.clickfav(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, TweetDetailComponent_span_33_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TweetDetailComponent_ng_template_34_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetDetailComponent_Template_div_click_36_listener($event) { ctx.clickReTweet(); return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TweetDetailComponent_span_37_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TweetDetailComponent_ng_template_38_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-footer");
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.tweet == null ? null : ctx.tweet.user.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tweet == null ? null : ctx.tweet.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tweet == null ? null : ctx.tweet.user.verified);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", ctx.tweet == null ? null : ctx.tweet.user.screen_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tweet == null ? null : ctx.tweet.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tweet == null ? null : ctx.tweet.entities.media);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 15, ctx.tweet == null ? null : ctx.tweet.created_at, "h:mm a.-d MMM. yy "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tweet == null ? null : ctx.tweet.retweet_count, " Retweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tweet == null ? null : ctx.tweet.favorite_count, " Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.tweet == null ? null : ctx.tweet.favorited))("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.tweet == null ? null : ctx.tweet.retweeted))("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faComment);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  color: rgb(83, 83, 83);\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  font-size: 0.78rem;\r\n}\r\n.tweetGoBack[_ngcontent-%COMP%] {\r\n  padding: 2em;\r\n  border-bottom: 1px solid rgba(199, 199, 199, 0.794);\r\n  box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.2);\r\n}\r\n.tweetGoBack[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n  margin-right: 2em;\r\n  color: #1dcaff;\r\n}\r\n.tweetGoBack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  color: rgb(46, 46, 46);\r\n  font-weight: 500;\r\n}\r\n.profileImage[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.profileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  border-radius: 50%;\r\n  margin-top: 0.625rem;\r\n  margin-left: 0.4rem;\r\n  margin-right: 0.4rem;\r\n  width: 48px;\r\n  height: 48px;\r\n}\r\n.tweetHead[_ngcontent-%COMP%] {\r\n  margin-top: 2em;\r\n  margin-left: 1rem;\r\n  vertical-align: 0.7rem;\r\n}\r\n.tweetHead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 1.3em;\r\n}\r\n.tweetBody[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  margin-right: auto;\r\n  padding: 2em 0 2em 0;\r\n}\r\n.tweetBody[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 1.2em;\r\n}\r\n.imageContent[_ngcontent-%COMP%] {\r\n  margin-top: 0.3rem;\r\n  margin-left: 1rem;\r\n  max-width: 90%;\r\n}\r\n.tweetFooter[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  margin-top: 0.8rem;\r\n  border-top: solid 1px;\r\n  border-bottom: solid 1px;\r\n  border-color: rgb(230, 230, 230);\r\n  padding: 1em 0 1em 0;\r\n}\r\n.retweet[_ngcontent-%COMP%], .favourite[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n.retweet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .favourite[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgb(138, 138, 138);\r\n  font-size: 1.3em;\r\n  font-weight: 400;\r\n\r\n  margin-left: 1.2em;\r\n}\r\n.retweet[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n.retweet[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n.favourite[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\r\n  color: rgb(235, 47, 47);\r\n}\r\n.favourite[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  color: rgb(235, 47, 47);\r\n}\r\n.userName[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 70%;\r\n  position: absolute;\r\n  padding: 1.5em 0 0 1em;\r\n}\r\n.userName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: rgb(46, 46, 46);\r\n}\r\n.userVerified[_ngcontent-%COMP%] {\r\n  font-size: inherit;\r\n  background-color: #1dcaff;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  color: #f8fcfc;\r\n  border-radius: 50%;\r\n  margin-left: 0.3rem;\r\n  margin-right: 0.2rem;\r\n}\r\n.screenName[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 70%;\r\n  position: absolute;\r\n  padding-left: 1em;\r\n  margin-top: 40px;\r\n}\r\n.screenName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: rgb(185, 185, 185);\r\n}\r\n.timeAgoTweet[_ngcontent-%COMP%] {\r\n  margin-left: 1em;\r\n}\r\n.timeAgoTweet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 1.1em;\r\n  color: rgb(138, 138, 138);\r\n  font-weight: 500;\r\n}\r\n.tweetIcons[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  margin-top: 1.2em;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n  width: 33%;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n.iconZone[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.iconHeart[_ngcontent-%COMP%] {\r\n  color: rgb(134, 134, 134);\r\n}\r\n.iconHeart[_ngcontent-%COMP%]:hover {\r\n  color: rgb(235, 47, 47);\r\n}\r\n.iconRe[_ngcontent-%COMP%] {\r\n  color: rgb(134, 134, 134);\r\n}\r\n.iconRe[_ngcontent-%COMP%]:hover {\r\n  color: rgb(25, 175, 25);\r\n}\r\n.iconCo[_ngcontent-%COMP%] {\r\n  color: rgb(134, 134, 134);\r\n}\r\n.iconCo[_ngcontent-%COMP%]:hover {\r\n  color: #1dcaff;\r\n}\r\n.favourited[_ngcontent-%COMP%] {\r\n  color: rgb(235, 47, 47);\r\n}\r\n.retweeted[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n@media only screen and (min-width: 500px) {\r\n  .tweetHead[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n  }\r\n  .timeAgoTweet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.1em;\r\n  }\r\n  .profileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n  }\r\n  .screenName[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n  }\r\n}\r\n@media only screen and (min-width: 700px) {\r\n  .userName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 1.4em;\r\n  }\r\n  .timeAgoTweet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n  }\r\n  .profileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 72px;\r\n    height: 72px;\r\n  }\r\n  .screenName[_ngcontent-%COMP%] {\r\n    margin-top: 43px;\r\n  }\r\n}\r\n@media only screen and (min-width: 900px) {\r\n  .userName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.6em;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n  }\r\n  .timeAgoTweet[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n  }\r\n  .profileImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 84px;\r\n    height: 84px;\r\n  }\r\n  .screenName[_ngcontent-%COMP%] {\r\n    margin-top: 48px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90d2VldC1kZXRhaWwvdHdlZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0U7O0lBRUUsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7QUFFQTtFQUNFOzs7SUFHRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRjtBQUNBO0VBQ0U7OztJQUdFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90d2VldC1kZXRhaWwvdHdlZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBjb2xvcjogcmdiKDgzLCA4MywgODMpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG59XHJcbi50d2VldEdvQmFjayB7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE5OSwgMTk5LCAxOTksIDAuNzk0KTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbi50d2VldEdvQmFjayBmYS1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICBjb2xvcjogIzFkY2FmZjtcclxufVxyXG4udHdlZXRHb0JhY2sgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvZmlsZUltYWdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnByb2ZpbGVJbWFnZSBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMC42MjVyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi50d2VldEhlYWQge1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogMC43cmVtO1xyXG59XHJcbi50d2VldEhlYWQgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxufVxyXG5cclxuLnR3ZWV0Qm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDJlbSAwIDJlbSAwO1xyXG59XHJcbi50d2VldEJvZHkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmltYWdlQ29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG4udHdlZXRGb290ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjhyZW07XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweDtcclxuICBib3JkZXItY29sb3I6IHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcclxufVxyXG4ucmV0d2VldCxcclxuLmZhdm91cml0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucmV0d2VldCBzcGFuLFxyXG4uZmF2b3VyaXRlIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMTM4LCAxMzgsIDEzOCk7XHJcbiAgZm9udC1zaXplOiAxLjNlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICBtYXJnaW4tbGVmdDogMS4yZW07XHJcbn1cclxuLnJldHdlZXQ6aG92ZXIgZmEtaWNvbiB7XHJcbiAgY29sb3I6IHJnYigyNSwgMTc1LCAyNSk7XHJcbn1cclxuLnJldHdlZXQ6aG92ZXIgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigyNSwgMTc1LCAyNSk7XHJcbn1cclxuLmZhdm91cml0ZTpob3ZlciBmYS1pY29uIHtcclxuICBjb2xvcjogcmdiKDIzNSwgNDcsIDQ3KTtcclxufVxyXG4uZmF2b3VyaXRlOmhvdmVyIHNwYW4ge1xyXG4gIGNvbG9yOiByZ2IoMjM1LCA0NywgNDcpO1xyXG59XHJcblxyXG4udXNlck5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNzAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAxLjVlbSAwIDAgMWVtO1xyXG59XHJcbi51c2VyTmFtZSBzcGFuIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xyXG59XHJcbi51c2VyVmVyaWZpZWQge1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRjYWZmO1xyXG4gIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICBjb2xvcjogI2Y4ZmNmYztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxufVxyXG4uc2NyZWVuTmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLnNjcmVlbk5hbWUgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcclxufVxyXG5cclxuLnRpbWVBZ29Ud2VldCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4udGltZUFnb1R3ZWV0IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgY29sb3I6IHJnYigxMzgsIDEzOCwgMTM4KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udHdlZXRJY29ucyB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDEuMmVtO1xyXG59XHJcbi5pY29uIHtcclxuICB3aWR0aDogMzMlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaWNvblpvbmUge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaWNvbkhlYXJ0IHtcclxuICBjb2xvcjogcmdiKDEzNCwgMTM0LCAxMzQpO1xyXG59XHJcbi5pY29uSGVhcnQ6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjM1LCA0NywgNDcpO1xyXG59XHJcblxyXG4uaWNvblJlIHtcclxuICBjb2xvcjogcmdiKDEzNCwgMTM0LCAxMzQpO1xyXG59XHJcbi5pY29uUmU6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjUsIDE3NSwgMjUpO1xyXG59XHJcbi5pY29uQ28ge1xyXG4gIGNvbG9yOiByZ2IoMTM0LCAxMzQsIDEzNCk7XHJcbn1cclxuLmljb25Dbzpob3ZlciB7XHJcbiAgY29sb3I6ICMxZGNhZmY7XHJcbn1cclxuLmZhdm91cml0ZWQge1xyXG4gIGNvbG9yOiByZ2IoMjM1LCA0NywgNDcpO1xyXG59XHJcbi5yZXR3ZWV0ZWQge1xyXG4gIGNvbG9yOiByZ2IoMjUsIDE3NSwgMjUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgLnR3ZWV0SGVhZCBzcGFuLFxyXG4gIC50d2VldEZvb3RlciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgfVxyXG4gIC50d2VldEJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICB9XHJcbiAgLnRpbWVBZ29Ud2VldCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgfVxyXG4gIC5wcm9maWxlSW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxuICAuc2NyZWVuTmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xyXG4gIC51c2VyTmFtZSBzcGFuLFxyXG4gIC5zY3JlZW5OYW1lIHNwYW4sXHJcbiAgLnR3ZWV0Rm9vdGVyIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgLnR3ZWV0Qm9keSB7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gIH1cclxuICAudGltZUFnb1R3ZWV0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICB9XHJcbiAgLnByb2ZpbGVJbWFnZSBpbWcge1xyXG4gICAgd2lkdGg6IDcycHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgfVxyXG4gIC5zY3JlZW5OYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDQzcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAudXNlck5hbWUgc3BhbixcclxuICAuc2NyZWVuTmFtZSBzcGFuLFxyXG4gIC50d2VldEZvb3RlciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgfVxyXG4gIC50d2VldEJvZHkge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgLnRpbWVBZ29Ud2VldCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG4gIC5wcm9maWxlSW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiA4NHB4O1xyXG4gICAgaGVpZ2h0OiA4NHB4O1xyXG4gIH1cclxuICAuc2NyZWVuTmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tweet-detail",
                templateUrl: "./tweet-detail.component.html",
                styleUrls: ["./tweet-detail.component.css"]
            }]
    }], function () { return [{ type: src_app_services_tweet_service_service__WEBPACK_IMPORTED_MODULE_3__["TweetServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/tweet/tweet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/tweet/tweet.component.ts ***!
  \*****************************************************/
/*! exports provided: TweetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetComponent", function() { return TweetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/date-ago.pipe */ "./src/app/pipes/date-ago.pipe.ts");










function TweetComponent_li_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r14.faCheck);
} }
function TweetComponent_li_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tweet_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tweet_r13.entities.media[0].media_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TweetComponent_li_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r16.faHeart);
} }
function TweetComponent_li_0_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 19);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r18.fasHeart);
} }
function TweetComponent_li_0_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r19.faRetweet);
} }
function TweetComponent_li_0_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 20);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r21.faRetweet);
} }
function TweetComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TweetComponent_li_0_span_5_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TweetComponent_li_0_div_14_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetComponent_li_0_Template_div_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const tweet_r13 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r23.clickfav(tweet_r13); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TweetComponent_li_0_span_17_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TweetComponent_li_0_ng_template_18_Template, 1, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TweetComponent_li_0_Template_div_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const tweet_r13 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r25.clickReTweet(tweet_r13); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TweetComponent_li_0_span_23_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TweetComponent_li_0_ng_template_24_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tweet_r13 = ctx.$implicit;
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/TweetDetail/", tweet_r13.id_str, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tweet_r13.user.profile_image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tweet_r13.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tweet_r13.user.verified);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" @", tweet_r13.user.screen_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, tweet_r13.created_at), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tweet_r13.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tweet_r13.entities.media);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tweet_r13.favorited)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweet_r13.favorite_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tweet_r13.retweeted)("ngIfElse", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tweet_r13.retweet_count, " ");
} }
class TweetComponent {
    constructor() {
        this.faHeart = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faRetweet = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRetweet"];
        this.fasHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHeart"];
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
    }
    clickfav(tweet) {
        if (tweet.favorited) {
            tweet.favorited = false;
            tweet.favorite_count -= 1;
        }
        else {
            tweet.favorite_count += 1;
            tweet.favorited = true;
        }
    }
    clickReTweet(tweet) {
        if (tweet.retweeted) {
            tweet.retweeted = false;
            tweet.retweet_count -= 1;
        }
        else {
            tweet.retweet_count += 1;
            tweet.retweeted = true;
        }
    }
    ngOnInit() { }
}
TweetComponent.ɵfac = function TweetComponent_Factory(t) { return new (t || TweetComponent)(); };
TweetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TweetComponent, selectors: [["app-tweet"]], inputs: { Tweets: "Tweets" }, decls: 1, vars: 1, consts: [[3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["alt", "", 1, "profileImage", 3, "src"], [1, "tweetHead"], [1, "userName"], [4, "ngIf"], [1, "screenName"], [1, "timeAgoTweet"], [1, "tweetBody"], [1, "text"], [1, "tweetFooter"], [1, "favourite", 3, "click"], [4, "ngIf", "ngIfElse"], ["favorited", ""], [1, "retweet", 3, "click"], ["retweetedDone", ""], ["size", "xs", 1, "userVerified", 3, "icon"], ["width", "400", "height", "250", "alt", "img not found", 1, "imageContent", 3, "src"], ["size", "2x", 3, "icon"], ["size", "2x", 1, "favourited", 3, "icon"], ["size", "2x", 1, "retweeted", 3, "icon"]], template: function TweetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TweetComponent_li_0_Template, 28, 16, "li", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.Tweets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_6__["DateAgoPipe"]], styles: ["*[_ngcontent-%COMP%] {\r\n  color: rgb(83, 83, 83);\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  font-size: 0.78rem;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  border-top: 1px solid rgb(230, 230, 230);\r\n  border-bottom: 1px solid rgb(230, 230, 230);\r\n  list-style-type: none;\r\n  max-width: 100%;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover {\r\n  border-top: 1px solid #1dcaff;\r\n  border-bottom: 1px solid #1dcaff;\r\n  background-color: #f8fcfc;\r\n  cursor: pointer;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.profileImage[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  border-radius: 50%;\r\n  margin-top: 0.625rem;\r\n  display: inline-block;\r\n  margin-left: 0.4rem;\r\n}\r\n\r\n.userVerified[_ngcontent-%COMP%] {\r\n  background-color: #1dcaff;\r\n  padding-left: 2px;\r\n  padding-right: 2px;\r\n  color: #f8fcfc;\r\n  border-radius: 50%;\r\n  margin-left: 0.3rem;\r\n  margin-right: 0.2rem;\r\n}\r\n\r\n.tweetHead[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n  display: inline-block;\r\n  margin-left: 1rem;\r\n  vertical-align: 0.7rem;\r\n}\r\n\r\n.tweetBody[_ngcontent-%COMP%] {\r\n  margin-left: 3.7rem;\r\n  margin-right: auto;\r\n  font-size: 0.6em;\r\n  padding: 0.6rem 0 0.6rem 0;\r\n}\r\n\r\n.tweetFooter[_ngcontent-%COMP%] {\r\n  margin-left: 3.7rem;\r\n  margin-bottom: 0.5rem;\r\n  margin-top: 0.8rem;\r\n}\r\n\r\n.retweet[_ngcontent-%COMP%] {\r\n  color: rgb(190, 190, 190);\r\n  display: inline-block;\r\n  margin-right: 0.5em;\r\n  margin-left: 1.5em;\r\n}\r\n\r\n.favourite[_ngcontent-%COMP%] {\r\n  color: rgb(190, 190, 190);\r\n  display: inline-block;\r\n  margin-right: 0.5em;\r\n}\r\n\r\n.retweet[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n\r\n.retweet[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n\r\n.retweeted[_ngcontent-%COMP%] {\r\n  color: rgb(25, 175, 25);\r\n}\r\n\r\n.favourite[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%] {\r\n  color: rgb(235, 47, 47);\r\n}\r\n\r\n.favourite[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n  color: rgb(235, 47, 47);\r\n}\r\n\r\n.favourited[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.userName[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: rgb(46, 46, 46);\r\n}\r\n\r\n.screenName[_ngcontent-%COMP%] {\r\n  color: rgb(185, 185, 185);\r\n}\r\n\r\n.timeAgoTweet[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  color: rgb(185, 185, 185);\r\n}\r\n\r\n.imageContent[_ngcontent-%COMP%] {\r\n  margin-top: 0.3rem;\r\n  margin-left: 3.7rem;\r\n  max-width: 70%;\r\n}\r\n\r\n@media only screen and (min-width: 500px) {\r\n  .userName[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%], .timeAgoTweet[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 700px) {\r\n  .userName[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%], .timeAgoTweet[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 0.9rem;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 900px) {\r\n  .userName[_ngcontent-%COMP%], .screenName[_ngcontent-%COMP%], .timeAgoTweet[_ngcontent-%COMP%], .tweetFooter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .text[_ngcontent-%COMP%] {\r\n    font-size: 1.2rem;\r\n  }\r\n  .tweetBody[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90d2VldC90d2VldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLDJDQUEyQztFQUMzQyxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFOzs7OztJQUtFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7Ozs7O0lBS0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFDQTtFQUNFOzs7OztJQUtFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90d2VldC90d2VldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgY29sb3I6IHJnYig4MywgODMsIDgzKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcclxufVxyXG5cclxubGkge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzAsIDIzMCwgMjMwKTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbmxpOmhvdmVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzFkY2FmZjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzFkY2FmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmY2ZjO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5saTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnByb2ZpbGVJbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAwLjYyNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcclxufVxyXG5cclxuLnVzZXJWZXJpZmllZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkY2FmZjtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbiAgY29sb3I6ICNmOGZjZmM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjNyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbn1cclxuXHJcbi50d2VldEhlYWQge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiAwLjdyZW07XHJcbn1cclxuXHJcbi50d2VldEJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAzLjdyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgcGFkZGluZzogMC42cmVtIDAgMC42cmVtIDA7XHJcbn1cclxuXHJcbi50d2VldEZvb3RlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuN3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG59XHJcblxyXG4ucmV0d2VldCB7XHJcbiAgY29sb3I6IHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbn1cclxuXHJcbi5mYXZvdXJpdGUge1xyXG4gIGNvbG9yOiByZ2IoMTkwLCAxOTAsIDE5MCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuXHJcbi5yZXR3ZWV0OmhvdmVyIGZhLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjUsIDE3NSwgMjUpO1xyXG59XHJcblxyXG4ucmV0d2VldDpob3ZlciBzcGFuIHtcclxuICBjb2xvcjogcmdiKDI1LCAxNzUsIDI1KTtcclxufVxyXG5cclxuLnJldHdlZXRlZCB7XHJcbiAgY29sb3I6IHJnYigyNSwgMTc1LCAyNSk7XHJcbn1cclxuXHJcbi5mYXZvdXJpdGU6aG92ZXIgZmEtaWNvbiB7XHJcbiAgY29sb3I6IHJnYigyMzUsIDQ3LCA0Nyk7XHJcbn1cclxuXHJcbi5mYXZvdXJpdGU6aG92ZXIgc3BhbiB7XHJcbiAgY29sb3I6IHJnYigyMzUsIDQ3LCA0Nyk7XHJcbn1cclxuXHJcbi5mYXZvdXJpdGVkIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udXNlck5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XHJcbn1cclxuXHJcbi5zY3JlZW5OYW1lIHtcclxuICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG59XHJcblxyXG4udGltZUFnb1R3ZWV0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xyXG59XHJcblxyXG4uaW1hZ2VDb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDMuN3JlbTtcclxuICBtYXgtd2lkdGg6IDcwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gIC51c2VyTmFtZSxcclxuICAuc2NyZWVuTmFtZSxcclxuICAudGltZUFnb1R3ZWV0LFxyXG4gIC50d2VldEZvb3RlciBzcGFuLFxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLnR3ZWV0Qm9keSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcclxuICAudXNlck5hbWUsXHJcbiAgLnNjcmVlbk5hbWUsXHJcbiAgLnRpbWVBZ29Ud2VldCxcclxuICAudHdlZXRGb290ZXIgc3BhbixcclxuICAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgLnR3ZWV0Qm9keSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC51c2VyTmFtZSxcclxuICAuc2NyZWVuTmFtZSxcclxuICAudGltZUFnb1R3ZWV0LFxyXG4gIC50d2VldEZvb3RlciBzcGFuLFxyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICAudHdlZXRCb2R5IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-tweet",
                templateUrl: "./tweet.component.html",
                styleUrls: ["./tweet.component.css"]
            }]
    }], function () { return []; }, { Tweets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/date-ago.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/date-ago.pipe.ts ***!
  \****************************************/
/*! exports provided: DateAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function() { return DateAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29)
                // less than 30 seconds ago will show as 'Just now'
                return "Just now";
            const intervals = {
                yr: 31536000,
                month: 2592000,
                wk: 604800,
                d: 86400,
                h: 3600,
                m: 60,
                s: 1 //secondss
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) {
                    return counter + " " + i;
                }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "dateAgo",
                pure: true
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/trend-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/trend-service.service.ts ***!
  \***************************************************/
/*! exports provided: TrendServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendServiceService", function() { return TrendServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TrendServiceService {
    constructor(http) {
        this.http = http;
        this.trendsUrl = "http://localhost:8080/trends?id=23424747";
    }
    getTrends() {
        return this.http
            .get(this.trendsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getMovies", [])));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
TrendServiceService.ɵfac = function TrendServiceService_Factory(t) { return new (t || TrendServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TrendServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrendServiceService, factory: TrendServiceService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/tweet-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/tweet-service.service.ts ***!
  \***************************************************/
/*! exports provided: TweetServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetServiceService", function() { return TweetServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class TweetServiceService {
    constructor(http) {
        this.http = http;
        this.timeLineUrl = "http://localhost:8080/timeline?count=";
        this.searchURL = "http://localhost:8080/search?q=";
        this.idURL = "http://localhost:8080/show?id=";
        this.userConfiguration = {
            hideAccountsNotVerified: false,
            hidePeopleWhoDontfollow: false,
            hideDefaultProfile: false,
            hideTweetsWhitLinks: false,
            hideTweetsTruncated: false
        };
    }
    getTweets(tweetsToDisplay) {
        return this.http.get(`${this.timeLineUrl}${tweetsToDisplay}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => (data = this.finalFilter(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return err;
        }));
    }
    filterTweetsByConfiguration(tweet) {
        if (this.userConfiguration.hideAccountsNotVerified &&
            !tweet.user.verified) {
            return false;
        }
        if (this.userConfiguration.hidePeopleWhoDontfollow &&
            !tweet.user.following) {
            return false;
        }
        if (this.userConfiguration.hideDefaultProfile &&
            tweet.user.default_profile) {
            return false;
        }
        if (this.userConfiguration.hideTweetsWhitLinks &&
            tweet.entities.urls != 0) {
            return false;
        }
        if (this.userConfiguration.hideTweetsTruncated && tweet.truncated) {
            return false;
        }
        return true;
    }
    finalFilter(tweet) {
        const tweetFiltered = tweet.filter(element => this.filterTweetsByConfiguration(element));
        return tweetFiltered;
    }
    getRealTimeConfiguration() {
        return this.userConfiguration;
    }
    getSearchTweets(searchText, count) {
        return this.http
            .get(this.searchURL + searchText + "&count=" + count)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getSearchTweets", [])));
    }
    getIdTweet(searchId) {
        return this.http
            .get(this.idURL + searchId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getIdTweet", [])));
    }
    handleError(operation = "operation", result) {
        return (error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
TweetServiceService.ɵfac = function TweetServiceService_Factory(t) { return new (t || TweetServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TweetServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TweetServiceService, factory: TweetServiceService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TweetServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mjn_n\OneDrive\Escritorio\Programacion\proyectoAngular\twitter-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map