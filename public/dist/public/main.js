(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'pets', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'pets/new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_1__["NewComponent"] },
    { path: 'pets/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"] },
    { path: 'pets/:id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/pets' }
];
/* const routes: Routes = [
  { path: 'pets', component: HomeComponent},
  { path: 'pets/new', component: NewComponent },
  { path: 'pets/details/:id', component: DetailsComponent },
  { path: 'pets/edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pets' }
]; */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n    min-height: 100vh;\r\n    background-color: aliceblue;\r\n    padding: 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>Pet Shelter</title>\n        <meta charset=\"UTF-8\">\n        <!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n        <script type=\"text/javascript\" src=\"/socket.io/socket.io.js\"></script>\n        <link rel=\"stylesheet\" type=\"text/css\" href=\"index.css\">-->\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n    </head>\n    <body>\n      <div id=\"wrapper\">\n        <h1>Pet Shelter</h1>\n        <router-outlet></router-outlet>\n      </div>\n    </body>\n</html>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Pet Shelter';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_10__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home{\r\n    float: right;\r\n}\r\n.attributeColumn1{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 150px;\r\n    text-align: right;\r\n    margin-right: 10px;\r\n}\r\n.attributeColumn2{\r\n    display: inline-block;\r\n    line-height: 11px;\r\n    vertical-align: top;\r\n    position: relative;\r\n    top: 7px;\r\n}\r\n#adopt{\r\n    display: block;\r\n}\r\n#likesRow > *, #buttonRow > *{\r\n    display: inline-block;\r\n    margin-right: 6px;\r\n    vertical-align: top;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<button id=\"home\" class=\"btn btn-primary btn-sm\" [routerLink]=\"['/pets']\">Home</button>\n<h6>Details about {{ pet.name }}</h6>\n<div class=\"attributeColumn1\">\n    <h6>Pet type:</h6>\n    <h6>Pet description:</h6>\n    <h6>Skills:</h6>\n</div>\n<div class=\"attributeColumn2\">\n    <p>{{ pet.type }}</p>\n    <p>{{ pet.description }}</p>\n    <p *ngIf=\"pet.skills[0]\">{{ pet.skills[0] }}</p>\n    <p *ngIf=\"pet.skills[1]\">{{ pet.skills[1] }}</p>\n    <p *ngIf=\"pet.skills[2]\">{{ pet.skills[2] }}</p>\n</div>\n<div id=\"likesRow\">\n    <h6>Likes:</h6>\n    <p>{{ pet.likes }}</p>\n</div>\n<div id=\"buttonRow\">\n    <button *ngIf=\"liked==false\" class=\"btn btn-warning btn-sm\" (click)=\"like()\">Like this pet!</button>\n    <button id=\"adopt\" class=\"btn btn-success btn-sm\" (click)=\"adopt()\">Adopt this pet!</button>\n</div>\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.pet = {};
        this.liked = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            var observable = _this._httpService.getPet(params['id']);
            observable.subscribe(function (data) {
                _this.pet = data['data'][0];
                console.log(_this.pet);
            });
        });
    };
    DetailsComponent.prototype.adopt = function () {
        var observable = this._httpService.adoptPet(this.pet['_id']);
        observable.subscribe();
        this._router.navigate(['/pets']);
    };
    DetailsComponent.prototype.like = function () {
        var _this = this;
        var observable = this._httpService.likePet(this.pet['_id']);
        observable.subscribe(function (data) {
            console.log(data);
            _this.pet = data['data'];
            _this.liked = true;
        });
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n}\r\n.column1{\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n.column2{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.column2 > *{\r\n    display: block;\r\n    margin-top: 5px;\r\n}\r\n#buttonRow > *{\r\n    margin-right: 8px;\r\n}\r\n.fieldDesc{\r\n    margin-bottom: 3px;\r\n}\r\n.mandatoryInput{\r\n    margin-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<div id=\"wrapper\">\n  <form (submit)=\"editPet()\">\n      <p class=\"fieldDesc\">Pet name:</p>\n      <input class=\"mandatoryInput\" name=\"name\" [(ngModel)]=\"pet.name\" type=\"text\" placeholder=\"3 or more characters\">\n      <p class=\"fieldDesc\">Pet type:</p>\n      <input class=\"mandatoryInput\" name=\"type\" [(ngModel)]=\"pet.type\" type=\"text\" placeholder=\"3 or more characters\">\n      <p class=\"fieldDesc\">Description:</p>\n      <input class=\"mandatoryInput\" name=\"description\" [(ngModel)]=\"pet.description\" type=\"text\" placeholder=\"3 or more characters\">\n      <p>Skills:</p>\n      <div class=\"column1\">\n        <p>Skill 1</p>\n        <p>Skill 2</p>\n        <p>Skill 3</p>\n      </div>\n      <div class=\"column2\">\n        <input name=\"skill1\" [(ngModel)]=\"pet.skills[0]\" type=\"text\">\n        <input name=\"skill2\" [(ngModel)]=\"pet.skills[1]\" type=\"text\">\n        <input name=\"skill3\" [(ngModel)]=\"pet.skills[2]\" type=\"text\">\n      </div>\n      <div id=\"buttonRow\">\n        <input class=\"btn btn-success btn-sm\" type=\"submit\" value=\"Submit\">\n        <button class=\"btn btn-warning btn-sm\" [routerLink]=\"['/pets/', pet._id]\">Cancel</button>\n      </div>\n    </form>\n    <p *ngIf=\"errors.name\">{{ errors.name.message }}</p>\n    <p *ngIf=\"errors.type\">{{ errors.type.message }}</p>\n    <p *ngIf=\"errors.description\">{{ errors.description.message }}</p>\n    <p *ngIf=\"errors.duplicate\">{{ errors.duplicate }}</p>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.pet = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            console.log(params['id']);
            var observable = _this._httpService.getPet(params['id']);
            observable.subscribe(function (data) {
                _this.pet = data['data'][0];
            });
        });
    };
    EditComponent.prototype.editPet = function () {
        var _this = this;
        var observable = this._httpService.editPet(this.pet);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['error']) {
                if (data['error']['name'] == "MongoError") {
                    _this.errors = { duplicate: "This name is already taken!" };
                }
                else {
                    _this.errors = data['error']['errors'];
                }
            }
            else {
                _this._router.navigate(['/pets/' + _this.pet['_id']]);
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    min-width: 350px;\r\n    width: 25%;\r\n}\r\nbutton{\r\n    margin-right: 5px;\r\n}\r\ntable{\r\n    margin-top: 5px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <h5>These pets are looking for a home!</h5>\n  <button class=\"btn btn-primary btn-sm\" [routerLink]=\"['/pets', 'new']\">Add a pet to the shelter</button>\n  <table>\n    <thead>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </thead>\n    <tr *ngFor=\"let pet of pets\">\n      <td>{{ pet.name }}</td>\n      <td>{{ pet.type }}</td>\n      <td><button class=\"btn btn-warning btn-sm\" [routerLink]=\"[pet._id]\">Details</button><button class=\"btn btn-success btn-sm\" [routerLink]=\"[pet._id, 'edit']\">Edit</button></td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.pets = [];
        this.array = [];
    }
    /*   ngOnInit() {
        console.log("In home!");
        let observable = this._httpService.allPets();
        observable.subscribe(data => {
          this.pets = data['data'];
          console.log(this.pets);
        });
      } */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("In home!");
        var observable = this._httpService.allPets();
        observable.subscribe(function (data) {
            console.log(data);
            _this.pets = data['data'];
            console.log("Unalphabetized pets:", _this.pets);
            for (var j = 0; j < _this.pets.length; j++) {
                var first = _this.pets[j];
                for (var i = j; i < _this.pets.length; i++) {
                    if (_this.pets[i]['type'] < first['type']) {
                        var temp = first;
                        first = _this.pets[i];
                        _this.pets[i] = temp;
                    }
                }
                _this.array.push(first);
            }
            console.log("This is array:", _this.array);
            _this.pets = _this.array;
            console.log("Alphabetized pets:", _this.pets);
        });
        this._router.navigate(['/pets']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.allPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.newPet = function (pet) {
        console.log("Service is getting this as pet:", pet);
        return this._http.post('/pets', pet);
    };
    HttpService.prototype.getPet = function (id) {
        console.log("Service is getting this as id:", id);
        return this._http.get('/pets/' + id);
    };
    HttpService.prototype.adoptPet = function (id) {
        console.log("Service is getting this as id:", id);
        return this._http.delete('/pets/' + id);
    };
    HttpService.prototype.editPet = function (pet) {
        console.log("Service is getting this as the new information:", pet);
        return this._http.put('/pets', pet);
    };
    HttpService.prototype.likePet = function (id) {
        return this._http.get('/pets/like/' + id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n}\r\n.column1{\r\n    display: inline-block;\r\n    margin-right: 5px;\r\n}\r\n.column2{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}\r\n.column2 > *{\r\n    display: block;\r\n    margin-top: 5px;\r\n}\r\n#buttonRow > *{\r\n    margin-right: 8px;\r\n}\r\n.fieldDesc{\r\n    margin-bottom: 3px;\r\n}\r\n.mandatoryInput{\r\n    margin-bottom: 8px;\r\n}"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" integrity=\"sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB\" crossorigin=\"anonymous\">\n\n<div id=\"wrapper\">\n  <h6>Know of a pet needing a home?</h6>\n  <form (submit)=\"newPet()\">\n    <p class=\"fieldDesc\">Pet name:</p>\n    <input class=\"mandatoryInput\" name=\"name\" [(ngModel)]=\"pet.name\" type=\"text\" placeholder=\"3 or more characters\">\n    <p class=\"fieldDesc\">Pet type:</p>\n    <input class=\"mandatoryInput\" name=\"type\" [(ngModel)]=\"pet.type\" type=\"text\" placeholder=\"3 or more characters\">\n    <p class=\"fieldDesc\">Description:</p>\n    <input class=\"mandatoryInput\" name=\"description\" [(ngModel)]=\"pet.description\" type=\"text\" placeholder=\"3 or more characters\">\n    <p>Skills:</p>\n    <div class=\"column1\">\n      <p>Skill 1</p>\n      <p>Skill 2</p>\n      <p>Skill 3</p>\n    </div>\n    <div class=\"column2\">\n      <input name=\"skill1\" [(ngModel)]=\"skill1\" type=\"text\">\n      <input name=\"skill2\" [(ngModel)]=\"skill2\" type=\"text\">\n      <input name=\"skill3\" [(ngModel)]=\"skill3\" type=\"text\">\n    </div>\n    <div id=\"buttonRow\">\n      <input class=\"btn btn-success btn-sm\" type=\"submit\" value=\"Submit\">\n      <button class=\"btn btn-warning btn-sm\" [routerLink]=\"['/pets']\">Cancel</button>\n    </div>\n  </form>\n  <p *ngIf=\"errors.name\">{{ errors.name.message }}</p>\n  <p *ngIf=\"errors.type\">{{ errors.type.message }}</p>\n  <p *ngIf=\"errors.description\">{{ errors.description.message }}</p>\n  <p *ngIf=\"errors.duplicate\">{{ errors.duplicate }}</p>\n</div>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.pet = { name: "", type: "", description: "", skills: [] };
        this.skill1 = "";
        this.skill2 = "";
        this.skill3 = "";
    }
    NewComponent.prototype.ngOnInit = function () {
        console.log("In new!");
    };
    NewComponent.prototype.newPet = function () {
        var _this = this;
        if (this.skill1) {
            this.pet['skills'].push(this.skill1);
        }
        if (this.skill2) {
            this.pet['skills'].push(this.skill2);
        }
        if (this.skill3) {
            this.pet['skills'].push(this.skill3);
        }
        var observable = this._httpService.newPet(this.pet);
        observable.subscribe(function (data) {
            if (data['error']) {
                if (data['error']['name'] == "MongoError") {
                    _this.errors = { duplicate: "This name is already taken!" };
                }
                else {
                    _this.errors = data['error']['errors'];
                }
            }
            else {
                _this._router.navigate(['/pets']);
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_0__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Elliott Chen\Desktop\CodingDojo\Mean\Angular\Belt_Exam\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map