webpackJsonp([0],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = /** @class */ (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 209:
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
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controls_controls__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__controls_controls__["a" /* ControlsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rishabh/test/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0" color="tabcolor">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Control" tabIcon="game-controller-a"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/rishabh/test/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        var config = {
            apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
            authDomain: "cdacproject-8bc9f.firebaseapp.com",
            databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
            projectId: "cdacproject-8bc9f",
            storageBucket: "cdacproject-8bc9f.appspot.com",
            messagingSenderId: "767234563615"
        };
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["initializeApp"](config);
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref1 = ref.child("slot_1");
        var databaseref2 = ref.child("slot_2");
        var databaseref3 = ref.child("slot_3");
        var databaseref4 = ref.child("slot_4");
        databaseref1.on("value", function (snapshot) {
            HomePage_1.value1 = snapshot.val();
            console.log(HomePage_1.value1);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref2.on("value", function (snapshot) {
            HomePage_1.value2 = snapshot.val();
            console.log(HomePage_1.value2);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref3.on("value", function (snapshot) {
            HomePage_1.value3 = snapshot.val();
            console.log(HomePage_1.value3);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref4.on("value", function (snapshot) {
            HomePage_1.value4 = snapshot.val();
            console.log(HomePage_1.value4);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }
    HomePage_1 = HomePage;
    Object.defineProperty(HomePage.prototype, "value1func", {
        get: function () {
            return HomePage_1.value1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value2func", {
        get: function () {
            return HomePage_1.value2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value3func", {
        get: function () {
            return HomePage_1.value3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "value4func", {
        get: function () {
            return HomePage_1.value4;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.onContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        var length = this.slides.length();
        if (currentIndex == length) {
            this.slides.stopAutoplay();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]) === "function" && _a || Object)
    ], HomePage.prototype, "slides", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rishabh/test/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-slides  autoplay="5000" loop="true" speed="500" pager="true" (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n          <h1>This is my Home Automation App</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 2</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 3</h1>\n      </ion-slide>\n      <ion-slide>\n          <h1>Slide 4</h1>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/living-room.svg" />\n        {{value1func}} {{value2func}} {{value3func}} {{value4func}}</ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>      \n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/bathroom.svg" />\n      </ion-col>\n    </ion-row>\n    <hr style="margin-top:2px;background-color:aliceblue">\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/kitchen.svg" (click)=onContact() />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div> \n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/master-bedroom.svg" />\n      </ion-col>\n    </ion-row>\n      \n      \n      \n      \n      \n      \n      \n      \n      <!--<ion-col>\n        <ion-card-title color="light">\n          Living Room\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div class="items">\n            <p><strong><em>Usage:</em></strong></p>\n          56.6\n          <sub>kWh</sub>\n          <span class="arrow">\n              <ion-icon name="md-arrow-forward" (click)=onContact()></ion-icon>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/kitchen.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>      \n      <ion-col class="items">\n        <ion-card-title color="light">\n          Kitchen\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div>\n            <p><strong><em>Usage:</em></strong></p>\n          56.6\n          <sub>kWh</sub>\n          <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/bathroom.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n      <ion-col>\n        <ion-card-title color="light">\n          Bathroom\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div class="items">\n            <p><strong><em>Usage:</em></strong></p>\n          56.6\n          <sub>kWh</sub>\n          <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card>\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/master-bedroom.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n      <ion-col>\n        <ion-card-title color="light">\n          Bedroom\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div class="items">\n            <p><strong><em>Usage:</em></strong></p>\n          56.6\n          <sub>kWh</sub>\n          <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>-->\n  </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/home/rishabh/test/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object])
    ], HomePage);
    return HomePage;
    var HomePage_1, _a, _b;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/rishabh/test/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div>\n  <p>This page will give you information about your machines</p>\n</div>\n</ion-content>'/*ion-inline-end:"/home/rishabh/test/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlsPage = /** @class */ (function () {
    function ControlsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ControlsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-controls',template:/*ion-inline-start:"/home/rishabh/test/src/pages/controls/controls.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Controls</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color="dark">\n    <ion-card-header>\n      Header\n    </ion-card-header>\n    <ion-card-content>\n      The British use the term "header", but the American term "head-shot" the English simply refuse to adopt.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/rishabh/test/src/pages/controls/controls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ControlsPage);
    return ControlsPage;
}());

//# sourceMappingURL=controls.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, settings) {
        this.navCtrl = navCtrl;
        this.settings = settings;
    }
    SettingsPage.prototype.toggleAppTheme = function () {
        this.settings.setActiveTheme('dark-theme');
    };
    SettingsPage.prototype.appLightTheme = function () {
        this.settings.setActiveTheme('light-theme');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/rishabh/test/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card color="dark">\n\n    <ion-card-header>\n      Select App Theme:\n      <ion-row>\n        <em>(Default: Dark)</em>\n      </ion-row>\n    </ion-card-header>\n\n    <ion-card-content>\n      <button ion-button (click)="toggleAppTheme()">\n        Dark\n      </button>\n      <button ion-button (click)="appLightTheme()">\n        Light\n      </button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/rishabh/test/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingsProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/rishabh/test/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/rishabh/test/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: "AIzaSyAA7eEpxmnl30MFdAfosuj1DpdzzNnvZaY",
    authDomain: "cdacproject-8bc9f.firebaseapp.com",
    databaseURL: "https://cdacproject-8bc9f.firebaseio.com",
    projectId: "cdacproject-8bc9f",
    storageBucket: "cdacproject-8bc9f.appspot.com",
    messagingSenderId: "767234563615"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__["a" /* ControlsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["AngularFireModule"].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__["a" /* ControlsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__["a" /* SettingsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, settings) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rishabh/test/src/app/app.html"*/'<ion-menu [class]="selectedTheme" [content]="content">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Pages</ion-title>\n        </ion-toolbar>\n    </ion-header>\n</ion-menu>\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content></ion-nav>'/*ion-inline-end:"/home/rishabh/test/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__["a" /* SettingsProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map