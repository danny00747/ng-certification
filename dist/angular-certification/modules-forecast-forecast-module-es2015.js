(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-forecast-forecast-module"],{

/***/ "4eoP":
/*!*****************************************************!*\
  !*** ./src/app/modules/forecast/forecast.module.ts ***!
  \*****************************************************/
/*! exports provided: ForecastModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastModule", function() { return ForecastModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_five_day_forecast_five_day_forecast_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/five-day-forecast/five-day-forecast.component */ "NklP");
/* harmony import */ var _forecast_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forecast-routing.module */ "cLAC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _services_forecast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/forecast.service */ "9Gse");
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/can-activate.guard */ "VFIa");







class ForecastModule {
}
ForecastModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ForecastModule });
ForecastModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ForecastModule_Factory(t) { return new (t || ForecastModule)(); }, providers: [_services_forecast_service__WEBPACK_IMPORTED_MODULE_4__["ForecastService"], _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuard"]], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _forecast_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForecastRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForecastModule, { declarations: [_components_five_day_forecast_five_day_forecast_component__WEBPACK_IMPORTED_MODULE_1__["FiveDayForecastComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _forecast_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForecastRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_five_day_forecast_five_day_forecast_component__WEBPACK_IMPORTED_MODULE_1__["FiveDayForecastComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _forecast_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForecastRoutingModule"]
                ], providers: [_services_forecast_service__WEBPACK_IMPORTED_MODULE_4__["ForecastService"], _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_5__["CanActivateGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "9Gse":
/*!***************************************************************!*\
  !*** ./src/app/modules/forecast/services/forecast.service.ts ***!
  \***************************************************************/
/*! exports provided: ForecastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastService", function() { return ForecastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ts_enum_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-enum-util */ "gEWx");
/* harmony import */ var _shared_enums_sky_condiction_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/enums/sky-condiction.enum */ "zvxz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");







class ForecastService {
    constructor(http) {
        this.http = http;
        this.mapToLocationDTO = (list, city) => list.map((w) => ({
            name: city.name,
            skyCondiction: Object(ts_enum_util__WEBPACK_IMPORTED_MODULE_3__["$enum"])(_shared_enums_sky_condiction_enum__WEBPACK_IMPORTED_MODULE_4__["SkyStatusEnum"]).asValueOrDefault(w.weather[0].main.toLowerCase(), _shared_enums_sky_condiction_enum__WEBPACK_IMPORTED_MODULE_4__["SkyStatusEnum"].DEFAuLT),
            minTemp: w.temp.min,
            maxTemp: w.temp.max,
            date: w.dt,
        }));
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_URL;
    }
    getFiveDayForecastByZipCode(zipCode) {
        const url = `${this.apiUrl}forecast/daily?cnt=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].NUMBER_OF_DAYS}&zip=${zipCode},us&appid=${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_KEY}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(({ list }) => !!list.length), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ list, city }) => this.mapToLocationDTO(list, city)));
    }
}
ForecastService.ɵfac = function ForecastService_Factory(t) { return new (t || ForecastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ForecastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ForecastService, factory: ForecastService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "NklP":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/forecast/components/five-day-forecast/five-day-forecast.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FiveDayForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveDayForecastComponent", function() { return FiveDayForecastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_forecast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/forecast.service */ "9Gse");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/weather-icon/weather-icon.component */ "cJ/H");
/* harmony import */ var _shared_pipes_convert_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/pipes/convert-date.pipe */ "J6lF");
/* harmony import */ var _shared_pipes_weather_status_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/pipes/weather-status.pipe */ "hQe8");










function FiveDayForecastComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "convertDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-weather-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "weatherStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, location_r1.date), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, location_r1.skyCondiction), " - Min: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 10, location_r1.minTemp, "1.0-0"), " - Max: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 13, location_r1.maxTemp, "1.0-0"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", true)("skyCondition", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 16, location_r1.skyCondiction));
} }
const _c0 = function () { return ["/"]; };
class FiveDayForecastComponent {
    constructor(forecastService, route) {
        this.forecastService = forecastService;
        this.route = route;
        this.locations$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(params => !!params.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(params => this.forecastService.getFiveDayForecastByZipCode(params.id)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([])));
    }
}
FiveDayForecastComponent.ɵfac = function FiveDayForecastComponent_Factory(t) { return new (t || FiveDayForecastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_forecast_service__WEBPACK_IMPORTED_MODULE_3__["ForecastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
FiveDayForecastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiveDayForecastComponent, selectors: [["app-five-day-forecast"]], decls: 14, vars: 5, consts: [[1, "container"], [1, "container-fluid", "container"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-title"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "routerLink"], [1, "fa", "fa-arrow-left", "fa-arrow"], [1, "list-group-item"], [3, "icon", "skyCondition"]], template: function FiveDayForecastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Template for 5-day forecast page:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5-day forecast for Rancho Cordova");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FiveDayForecastComponent_li_8_Template, 8, 18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Back to main page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.locations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _shared_components_weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__["WeatherIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _shared_pipes_convert_date_pipe__WEBPACK_IMPORTED_MODULE_7__["ConvertDatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], _shared_pipes_weather_status_pipe__WEBPACK_IMPORTED_MODULE_8__["WeatherStatusPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9yZWNhc3QvY29tcG9uZW50cy9maXZlLWRheS1mb3JlY2FzdC9maXZlLWRheS1mb3JlY2FzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiveDayForecastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-five-day-forecast',
                templateUrl: './five-day-forecast.component.html',
                styleUrls: ['./five-day-forecast.component.css']
            }]
    }], function () { return [{ type: _services_forecast_service__WEBPACK_IMPORTED_MODULE_3__["ForecastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "VFIa":
/*!***************************************************************!*\
  !*** ./src/app/modules/forecast/guards/can-activate.guard.ts ***!
  \***************************************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services */ "dJ3e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CanActivateGuard {
    constructor(weatherService, router) {
        this.weatherService = weatherService;
        this.router = router;
    }
    canActivate(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.weatherService.getZipCodesValue.includes(route.paramMap.get('id'))) {
                return true;
            }
            else {
                yield this.router.navigate(['/']);
                return false;
            }
        });
    }
}
CanActivateGuard.ɵfac = function CanActivateGuard_Factory(t) { return new (t || CanActivateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_services__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CanActivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CanActivateGuard, factory: CanActivateGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CanActivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _app_services__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "cLAC":
/*!*************************************************************!*\
  !*** ./src/app/modules/forecast/forecast-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ForecastRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastRoutingModule", function() { return ForecastRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_five_day_forecast_five_day_forecast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/five-day-forecast/five-day-forecast.component */ "NklP");
/* harmony import */ var _guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/can-activate.guard */ "VFIa");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: ':id', component: _components_five_day_forecast_five_day_forecast_component__WEBPACK_IMPORTED_MODULE_2__["FiveDayForecastComponent"], canActivate: [_guards_can_activate_guard__WEBPACK_IMPORTED_MODULE_3__["CanActivateGuard"]] }
];
class ForecastRoutingModule {
}
ForecastRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ForecastRoutingModule });
ForecastRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ForecastRoutingModule_Factory(t) { return new (t || ForecastRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ForecastRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-forecast-forecast-module-es2015.js.map