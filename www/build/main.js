webpackJsonp([0],{

/***/ 140:
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

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 210:
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
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(256);
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
    /*tab2Root = ControlsPage;
    tab3Root = SettingsPage;
    tab4Root = ContactPage;*/
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/rishabh/test/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="0" color="tabcolor">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="Control" tabIcon="game-controller-a"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contact"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/home/rishabh/test/src/pages/tabs/tabs.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, speech, zone) {
        this.navCtrl = navCtrl;
        this.speech = speech;
        this.zone = zone;
        this.isListening = false;
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
        var databaseref1 = ref.child("air_quality");
        var databaseref2 = ref.child("humidity");
        var databaseref3 = ref.child("motion");
        var databaseref4 = ref.child("temp");
        var databaseref5 = ref.child("tempstate");
        var databaseref6 = ref.child("washroomstate");
        var databaseref7 = ref.child("bedroomstate");
        var databaseref8 = ref.child("livingroomstate");
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
        databaseref5.on("value", function (snapshot) {
            HomePage_1.value5 = snapshot.val();
            console.log(HomePage_1.value5);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref6.on("value", function (snapshot) {
            HomePage_1.value6 = snapshot.val();
            console.log(HomePage_1.value6);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref7.on("value", function (snapshot) {
            HomePage_1.value7 = snapshot.val();
            console.log(HomePage_1.value7);
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
        databaseref8.on("value", function (snapshot) {
            HomePage_1.value8 = snapshot.val();
            console.log(HomePage_1.value8);
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
    HomePage.prototype.hasPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permission, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.speech.hasPermission()];
                    case 1:
                        permission = _a.sent();
                        console.log(permission);
                        return [2 /*return*/, permission];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.speech.requestPermission();
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.listen = function () {
        console.log('listen action triggered');
        if (this.isListening) {
            this.speech.stopListening();
            this.toggleListenMode();
            return;
        }
        this.toggleListenMode();
        var _this = this;
        this.speech.startListening()
            .subscribe(function (matches) {
            _this.zone.run(function () {
                _this.matches = matches;
            });
        }, function (error) { return console.error(error); });
    };
    HomePage.prototype.toggleListenMode = function () {
        this.isListening = this.isListening ? false : true;
        console.log('listening mode is now : ' + this.isListening);
    };
    HomePage.prototype.kitchenValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref5 = ref.child("kitchenstate");
        if (HomePage_1.value5 == 0) {
            databaseref5.set(1);
        }
        else {
            databaseref5.set(0);
        }
    };
    HomePage.prototype.washroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref6 = ref.child("washroomstate");
        if (HomePage_1.value6 == 0) {
            databaseref6.set(1);
        }
        else {
            databaseref6.set(0);
        }
    };
    HomePage.prototype.bedroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref7 = ref.child("bedroomstate");
        if (HomePage_1.value7 == 0) {
            databaseref7.set(1);
        }
        else {
            databaseref7.set(0);
        }
    };
    HomePage.prototype.livingroomValue = function () {
        var ref = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["app"]().database().ref();
        var databaseref8 = ref.child("livingroomstate");
        if (HomePage_1.value8 == 0) {
            databaseref8.set(1);
        }
        else {
            databaseref8.set(0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/rishabh/test/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="background">\n  <ion-card style="background-color:purple">\n    <ion-slides  autoplay="5000" loop="true" speed="500" pager="true" (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n          <h1>This is my Home Automation App</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 2</h1>\n      </ion-slide>\n      <ion-slide>\n        <h1>Slide 3</h1>\n      </ion-slide>\n      <ion-slide>\n          <h1>Slide 4</h1>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <ion-card class="card">\n    <div>\n        <ion-row>\n            <ion-col>\n              <img style="max-width:90%;" src="../../assets/images/living-room.svg" />\n            </ion-col>\n        </ion-row>\n    </div>\n    \n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgb(128,0,128);"></div>      \n      <!--<ion-col>\n        <img style="max-width:90%;" src="../../assets/images/bathroom.svg" />\n      </ion-col>\n    </ion-row>\n    <hr style="margin-top:2px;background-color:aliceblue">\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/kitchen.svg" (click)=onContact() />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div> \n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/master-bedroom.svg" />\n      </ion-col>\n    </ion-row>-->\n    <div>\n        <ion-row>\n            <ion-card-title class="font">\n              Living Room\n            </ion-card-title>\n            <hr style="margin-top:-7px;background-color:purple">\n            <div class="items">\n                \n              <!-- <span class="arrow">\n                  <ion-icon name="md-arrow-forward" (click)=onContact()></ion-icon>\n              </span> -->\n              <ion-list>\n                  <p><strong><em>Usage:</em></strong></p>\n                  <ion-item class="card">\n                    <ion-label>Fan : {{value1func}}<sub>kWh</sub></ion-label>\n                    <ion-toggle [(ngModel)]="pepperoni" (click)="livingroomValue()"></ion-toggle>\n                  </ion-item>\n              </ion-list>\n            </div>\n          </ion-row>\n    </div>\n      \n    \n  </ion-card>\n  <ion-card class="card">\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/kitchen.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>      \n      <ion-col class="items">\n        <ion-card-title class="font">\n          Kitchen\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div>\n            <ion-list>\n                <p><strong><em>Usage:</em></strong></p>\n                <ion-item class="card">\n                  <ion-label>Oven : {{value2func}}<sub>kWh</sub></ion-label>\n                  <ion-toggle [(ngModel)]="abc" (click)="kitchenValue()"></ion-toggle>\n                </ion-item>\n            </ion-list>\n          <!-- <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class="card">\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/bathroom.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n      <ion-col>\n        <ion-card-title class="font">\n          Bathroom\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div class="items">\n            <ion-list>\n                <p><strong><em>Usage:</em></strong></p>\n                <ion-item class="card">\n                  <ion-label>Gyser : {{value3func}}<sub>kWh</sub></ion-label>\n                  <ion-toggle [(ngModel)]="def" (click)="washroomValue()"></ion-toggle>\n                </ion-item>\n            </ion-list>\n          <!-- <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  <ion-card class="card">\n    <ion-row>\n      <ion-col>\n        <img style="max-width:90%;" src="../../assets/images/master-bedroom.svg" />\n      </ion-col>\n      <div style="margin-left:-15px;margin-top:2%;margin-bottom:2%;border-left: 1px solid rgba(255, 255, 255, 0.589);"></div>\n      <ion-col>\n        <ion-card-title class="font">\n          Bedroom\n        </ion-card-title>\n        <hr style="margin-top:-7px;background-color:aliceblue">\n        <div class="items">\n            <ion-list>\n                <p><strong><em>Usage:</em></strong></p>\n                <ion-item class="card">\n                  <ion-label>Fan : {{value4func}}<sub>kWh</sub></ion-label>\n                  <ion-toggle [(ngModel)]="ghi" (click)="bedroomValue()"></ion-toggle>\n                </ion-item>\n            </ion-list>\n          <!-- <span class="arrow">\n              <ion-icon name="md-arrow-forward"></ion-icon>\n          </span> -->\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n  \n  <button ion-button (click)="getPermission()">Get Permission</button>\n  <button ion-button (click)="listen()">\n    <div>\n      <ion-icon name="mic">\n        <label>Speak to me</label>\n      </ion-icon>\n    </div>\n  </button>\n\n  <ion-card>\n    <ion-card-content *ngFor="let match of matches">\n      <p>{{ match }}</p>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <p>Is listening ? : {{ isListening }}</p>\n    </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/home/rishabh/test/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
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

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(365);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_controls_controls__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_speech_recognition__ = __webpack_require__(262);
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
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_setting_setting__["a" /* SettingsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_setting_setting__ = __webpack_require__(140);
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

/***/ }),

/***/ 690:
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

/***/ 691:
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

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(140);
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

/***/ })

},[360]);
//# sourceMappingURL=main.js.map