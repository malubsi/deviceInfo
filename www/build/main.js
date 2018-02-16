webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__diagnostic_diagnostic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_device__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sim_sim__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__unique_device_id_unique_device_id__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__diagnostic_diagnostic__["a" /* DiagnosticPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__device_device__["a" /* DevicePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__sim_sim__["a" /* SimPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__unique_device_id_unique_device_id__["a" /* UniqueDeviceIdPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/pages/tabs/tabs.html"*/'<ion-tabs tabsHighlight="true">\n  <ion-tab [root]="tab1Root" tabTitle="Diagnostic" tabIcon="ios-build-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Device" tabIcon="ios-phone-portrait-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Sim" tabIcon="ios-call-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="UDID" tabIcon="ios-finger-print-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiagnosticPage = (function () {
    function DiagnosticPage(navCtrl, diagnostic) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.diagnostic = diagnostic;
        this.camera = false;
        this.bluetooth = false;
        this.location = false;
        this.wifi = false;
        this.diagnostic.isCameraAvailable()
            .then(function (isAvailable) { _this.camera = isAvailable; })
            .catch(function (e) { return console.error(e); });
        this.diagnostic.isBluetoothAvailable()
            .then(function (isAvailable) { _this.bluetooth = isAvailable; })
            .catch(function (e) { return console.error(e); });
        this.diagnostic.isLocationAvailable()
            .then(function (isAvailable) { _this.location = isAvailable; })
            .catch(function (e) { return console.error(e); });
        this.diagnostic.isWifiAvailable()
            .then(function (isAvailable) { _this.wifi = isAvailable; })
            .catch(function (e) { return console.error(e); });
    }
    DiagnosticPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-diagnostic',template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/pages/diagnostic/diagnostic.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Diagnostic\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 style="color:#629aff;padding-left:15px;padding-top:10px;">Is available?</h3>\n  <ion-item>\n    <ion-label> Camera</ion-label>\n    <ion-toggle color="checked" disabled [checked]="camera"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label> Bluetooth</ion-label>\n    <ion-toggle color="checked" disabled [checked]="bluetooth"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label> Location</ion-label>\n    <ion-toggle color="checked" disabled [checked]="location"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label> Wifi</ion-label>\n    <ion-toggle color="checked" disabled [checked]="wifi"></ion-toggle>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/pages/diagnostic/diagnostic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], DiagnosticPage);
    return DiagnosticPage;
}());

//# sourceMappingURL=diagnostic.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicePage = (function () {
    function DevicePage(navCtrl, device) {
        this.navCtrl = navCtrl;
        this.device = device;
        console.log(this.device);
    }
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/pages/device/device.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Device\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>Cordova:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.cordova"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>isVirtual:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.isVirtual"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Manufacturer:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.manufacturer"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Model:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.model"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Platform:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.platform"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Serial:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.serial"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Uuid:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.uuid"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Version:</ion-label>\n      <ion-input disabled type="text" [ngModel]="device.version"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/pages/device/device.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sim__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimPage = (function () {
    function SimPage(navCtrl, sim) {
        this.navCtrl = navCtrl;
        this.sim = sim;
        this.doesItHavePermission();
    }
    SimPage.prototype.doesItHavePermission = function () {
        var _this = this;
        this.sim.hasReadPermission()
            .then(function (info) {
            if (info === true) {
                _this.hasPermission = true;
                _this.getInfo();
            }
            else {
                _this.requestPermission();
            }
        }).catch(function () { return console.log('Permission Error.'); });
    };
    SimPage.prototype.requestPermission = function () {
        this.sim.requestReadPermission()
            .then(function () { return console.log('Permission granted.'); })
            .catch(function () { return console.log('Permission denied.'); });
    };
    SimPage.prototype.getInfo = function () {
        var _this = this;
        this.sim.getSimInfo()
            .then(function (info) {
            _this.simInfo = info;
            console.log(_this.simInfo);
        }).catch(function (err) { return console.log('Unable to get sim info: ', err); });
    };
    SimPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sim',template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/pages/sim/sim.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sim\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h5 *ngIf="!simInfo" style="color:#629aff;padding-left:15px;padding-top:10px;">Plugin not available.</h5>\n  <ion-list *ngIf="simInfo">\n    <ion-item-divider color="dark">General</ion-item-divider>\n    <ion-item>\n      <ion-label>Sim Capacity:</ion-label>\n      <ion-input disabled type="text" [ngModel]="simInfo.activeSubscriptionInfoCountMax"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sim Available:</ion-label>\n      <ion-input disabled type="text" [ngModel]="simInfo.activeSubscriptionInfoCount"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Network Type:</ion-label>\n      <ion-input disabled type="text" [ngModel]="simInfo.networkType"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Sim State:</ion-label>\n      <ion-input disabled type="text" [ngModel]="simInfo.simState"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Subscriber ID:</ion-label>\n      <ion-input disabled type="text" [ngModel]="simInfo.subscriberId"></ion-input>\n    </ion-item>\n    <div *ngIf="simInfo.cards[0]">\n      <ion-item-divider color="dark">Sim 1</ion-item-divider>\n      <ion-item>\n        <ion-label>Carrier Name:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].carrierName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Display Name:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].displayName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Country Code:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].countryCode"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Device ID:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].deviceId"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Is data roaming?</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].isDataRoaming"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Is network roaming?</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].isNetworkRoaming"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mcc:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].mcc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mnc:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].mnc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone Number:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].phoneNumber"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Sim Serial Number:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[0].simSerialNumber"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngIf="simInfo.cards[1]">\n      <ion-item-divider color="dark">Sim 2</ion-item-divider>\n      <ion-item>\n        <ion-label>Carrier Name:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].carrierName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Display Name:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].displayName"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Country Code:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].countryCode"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Device ID:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].deviceId"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Is data roaming?</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].isDataRoaming"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Is network roaming?</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].isNetworkRoaming"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mcc:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].mcc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mnc:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].mnc"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone Number:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].phoneNumber"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Sim Serial Number:</ion-label>\n        <ion-input disabled type="text" [ngModel]="simInfo.cards[1].simSerialNumber"></ion-input>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/pages/sim/sim.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sim__["a" /* Sim */]])
    ], SimPage);
    return SimPage;
}());

//# sourceMappingURL=sim.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqueDeviceIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_unique_device_id__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UniqueDeviceIdPage = (function () {
    function UniqueDeviceIdPage(navCtrl, uniqueDeviceID) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            _this.uuid = uuid;
        }).catch(function (error) { return console.log(error); });
    }
    UniqueDeviceIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-unique-device-id',template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/pages/unique-device-id/unique-device-id.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Unique Device ID\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>UUID:</ion-label>\n    <ion-input disabled type="text" [ngModel]="uuid"></ion-input>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/pages/unique-device-id/unique-device-id.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_unique_device_id__["a" /* UniqueDeviceID */]])
    ], UniqueDeviceIdPage);
    return UniqueDeviceIdPage;
}());

//# sourceMappingURL=unique-device-id.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_diagnostic_diagnostic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_device_device__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sim_sim__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_unique_device_id_unique_device_id__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sim_sim__["a" /* SimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_diagnostic_diagnostic__["a" /* DiagnosticPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_unique_device_id_unique_device_id__["a" /* UniqueDeviceIdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sim_sim__["a" /* SimPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_diagnostic_diagnostic__["a" /* DiagnosticPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_unique_device_id_unique_device_id__["a" /* UniqueDeviceIdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sim__["a" /* Sim */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/malu/Desktop/deviceInfo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/malu/Desktop/deviceInfo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map