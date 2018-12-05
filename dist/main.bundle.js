webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ville; });
var Ville = /** @class */ (function () {
    function Ville() {
    }
    return Ville;
}());

//# sourceMappingURL=Ville.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 227;


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(240);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Voyageur; });
var Voyageur = /** @class */ (function () {
    function Voyageur() {
    }
    return Voyageur;
}());

//# sourceMappingURL=Voyageur.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Partage Equitable du cout d'un trajet entre deux villes";
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(716),
            styles: [__webpack_require__(296)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__param_input1_param_input1_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__param_input2_param_input2_component__ = __webpack_require__(239);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__param_input1_param_input1_component__["a" /* ParamInput1Component */],
                __WEBPACK_IMPORTED_MODULE_6__param_input2_param_input2_component__["a" /* ParamInput2Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ville__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Voyageur__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mathjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mathjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamInput1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParamInput1Component = /** @class */ (function () {
    function ParamInput1Component() {
        this.visible = false;
        this.depart = '';
        this.distance = 0;
        this.nb_ville = 0;
        this.nb_voyageurs = 0;
        this.cost_km = 0;
        this.villes = [];
        this.voyageurs = [];
        this.str = '';
        this.result = [];
        this.result2 = [];
        this.propor_matrix = [];
        this.cout_total = 0;
        this.input1 = false;
        this.input2 = false;
        this.input3 = false;
    }
    ParamInput1Component.prototype.ngOnInit = function () {
        this.input1 = false;
        this.input2 = false;
        this.input3 = false;
    };
    ParamInput1Component.prototype.next = function () {
        if (this.nb_voyageurs === 0 || this.cost_km === 0 ||
            !this.cost_km || !this.nb_voyageurs) {
            console.log('-- ERROR ---');
        }
        else {
            this.input1 = true;
            this.input2 = true;
            this.visible = true;
            var j = Number(this.nb_voyageurs);
            console.log('-- this is my famous j ', j);
            for (var i = 0; i < j; i++) {
                this.result2[i] = [];
                this.vo = new __WEBPACK_IMPORTED_MODULE_2__Voyageur__["a" /* Voyageur */]();
                this.vo.id = i + 1;
                this.vo.sep_cost = 0;
                this.vo.sa_cost = 0;
                this.vo.prop_coast = 0;
                this.vo.distance = 0;
                //  this.v.traveller = new Voyageur()[this.v.nb_traveller];
                this.voyageurs[i] = this.vo;
                //   console.log('-- ', this.v);
            }
            // console.log('-- ', this.depart, '--', this.distance);
        }
    };
    ParamInput1Component.prototype.checkemptyfield = function () {
        var booli = true;
        for (var _i = 0, _a = this.voyageurs; _i < _a.length; _i++) {
            var va = _a[_i];
            if (va.distance === 0) {
                booli = false;
            }
        }
        if (booli) {
            return true;
        }
        else {
            return false;
        }
    };
    ParamInput1Component.prototype.next2 = function () {
        if (!this.checkemptyfield()) {
            console.log('-- ERROR ---');
        }
        else {
            this.input3 = true;
            for (var i = 0; i < this.voyageurs.length; i++) {
                console.log('-- ', this.voyageurs[i].id, '--', this.voyageurs[i].distance, '--');
                // this.nb_voyageurs = this.nb_voyageurs + this.villes[i].nb_traveller ;
            }
            this.initCoutTraveller();
            this.extractVille();
            this.cout_separation();
            this.cout_proportionnel();
        }
    };
    ParamInput1Component.prototype.existVille = function (dist) {
        console.log('-- this is the dist i got ---', dist);
        var id = null;
        for (var _i = 0, _a = this.villes; _i < _a.length; _i++) {
            var ville = _a[_i];
            console.log('-- ville dist ---', ville.distance);
            if (ville.distance === dist) {
                id = ville.id;
            }
            else {
                id = null;
            }
        }
        return id;
    };
    // extract ville
    ParamInput1Component.prototype.extractVille = function () {
        var j = 0;
        for (var i = 0; i < this.voyageurs.length; i++) {
            var voy = this.voyageurs[i];
            console.log('-- distance---', (voy.distance));
            var bo = this.existVille(voy.distance);
            console.log('-- response from fnct---', bo);
            if (bo === null) {
                if (voy.sa_cost > this.cout_total) {
                    this.cout_total = voy.sa_cost;
                }
                this.v = new __WEBPACK_IMPORTED_MODULE_1__Ville__["a" /* Ville */]();
                this.v.id = j;
                voy.id_ville = j;
                this.v.distance = voy.distance;
                this.v.cost = voy.sa_cost;
                this.v.nb_traveller = 1;
                this.villes.push(this.v);
                j++;
            }
            else {
                this.villes[this.existVille(voy.distance)].nb_traveller++;
                voy.id_ville = this.existVille(voy.distance);
            }
        }
        this.villes.sort(function (a, b) {
            if (a.distance < b.distance)
                return -1;
            else if (a.distance > b.distance)
                return 1;
            else
                return 0;
        });
        for (var i = 0; i < this.villes.length; i++) {
            console.log(this.villes[i].id, '--', this.villes[i].nb_traveller, '--', this.villes[i].distance, '--', this.villes[i].cost, '--', this.villes[i].cost_diff);
            if (i !== 0) {
                this.villes[i].cost_diff = this.villes[i].cost - this.villes[i - 1].cost;
            }
            else {
                this.villes[i].cost_diff = this.villes[i].cost;
            }
        }
    };
    // initialiser les couts standalone des voyageurs par les couts de leurs villes de depart
    // et les couts par separations par zero
    ParamInput1Component.prototype.initCoutTraveller = function () {
        console.log('-- cout Voyageurs ---');
        for (var j = 0; j < this.voyageurs.length; j++) {
            this.voyageurs[j].sa_cost = this.voyageurs[j].distance * this.cost_km;
            this.voyageurs[j].sep_cost = 0;
        }
    };
    // get nb voyageurs pr les villes suivant la ville i
    ParamInput1Component.prototype.getNbVoyageur = function (i) {
        var nb = 0;
        for (var j = i; j < this.villes.length; j++) {
            nb = nb + this.villes[j].nb_traveller;
        }
        console.log('-- nb travellers a continuer le chemin ', nb);
        return nb;
    };
    ParamInput1Component.prototype.cout_separation = function () {
        console.log('-- cout separation ---');
        for (var i_1 = 0; i_1 < this.voyageurs.length; i_1++) {
            for (var j = 0; j < this.villes.length; j++) {
                if (this.voyageurs[i_1].distance >= this.villes[j].distance) {
                    this.voyageurs[i_1].sep_cost = this.voyageurs[i_1].sep_cost +
                        Math.round(100 * this.villes[j].cost_diff / this.getNbVoyageur(j)) / 100;
                    console.log('-- je suis ', i_1, ' now je suis a ', j, 'et jai paye', this.voyageurs[i_1].sep_cost, 'il reste avec moi ', this.getNbVoyageur(j));
                }
            }
        }
        var i = 0;
        for (var _i = 0, _a = this.voyageurs; _i < _a.length; _i++) {
            var tr = _a[_i];
            this.result[i] = 'je suis le voyageurs ' + tr.id + ' pour partir à la ville ' +
                tr.id_ville + '-- je paye seul ' + tr.sa_cost + '--mais avec separation ' + tr.sep_cost + ' euro';
            i++;
        }
    };
    ParamInput1Component.prototype.cout_proportionnel = function () {
        var b = [];
        console.log('-- cout proportionnel ---');
        for (var i = 0; i < this.voyageurs.length; i++) {
            for (var j = 0; j < this.voyageurs.length; j++) {
                if (i === 0) {
                    this.result2[i][j] = 1;
                }
                else {
                    if (j === 0) {
                        this.result2[i][0] = 1 / this.voyageurs[0].sa_cost;
                    }
                    else if (i === j) {
                        this.result2[i][i] = 0 - (1 / this.voyageurs[i].sa_cost);
                    }
                    else {
                        this.result2[i][j] = 0;
                    }
                }
                console.log('thiiiis is the matrix value at i =', i, ' and j= ', j, ' v = ', this.result2[i][j]);
            }
            if (i === 0) {
                b[i] = this.cout_total;
            }
            else {
                b[i] = 0;
            }
        }
        //let i = 0 ;
        /*for (const tr of this.voyageurs) {
          this.result2[i] = 'je suis le voyageurs ' + tr.id + ' pour partir à la ville ' +
            tr.id_ville + '-- je paye seul ' + tr.sa_cost + '--mais avec separation ' + tr.sep_cost + ' euro';
          i++ ;
        }*/
        console.log(this.result2);
        console.log(b);
        var matrix = __WEBPACK_IMPORTED_MODULE_3_mathjs__["matrix"](this.result2);
        console.log(matrix);
        var rs = __WEBPACK_IMPORTED_MODULE_3_mathjs__["lusolve"](matrix, b);
        console.log(rs._data);
    };
    ParamInput1Component.prototype.reinit = function () {
        window.location.reload();
    };
    ParamInput1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-param-input1',
            template: __webpack_require__(717),
            styles: [__webpack_require__(297)]
        }),
        __metadata("design:paramtypes", [])
    ], ParamInput1Component);
    return ParamInput1Component;
}());

//# sourceMappingURL=param-input1.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Ville__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParamInput2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParamInput2Component = /** @class */ (function () {
    function ParamInput2Component() {
    }
    ParamInput2Component.prototype.ngOnInit = function () {
    };
    var _a;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Ville__["a" /* Ville */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Ville__["a" /* Ville */]) === "function" ? _a : Object)
    ], ParamInput2Component.prototype, "ville", void 0);
    ParamInput2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-param-input2',
            template: __webpack_require__(718),
            styles: [__webpack_require__(298)]
        }),
        __metadata("design:paramtypes", [])
    ], ParamInput2Component);
    return ParamInput2Component;
}());

//# sourceMappingURL=param-input2.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(77)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">\n  {{title}}\n</h1>\n<br>\n<br>\n<h3 class=\"text-center\">On suppose que la ville de départ de tous les voyageurs est la même</h3>\n<br>\n<app-param-input1></app-param-input1>\n<br>\n<br>\n\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div>\n <br>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\" id=\"basic-addon4\">Nombre de voyageurs</span>\n    <input [disabled]=\"input1\" [(ngModel)]=\"nb_voyageurs\" type=\"number\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n  </div>\n  <br>\n  <div class=\"input-group mb-3\">\n    <span class=\"input-group-addon\" id=\"basic-addon44\">  Cout du voyage au Km </span>\n    <input [disabled]=\"input2\" [(ngModel)]=\"cost_km\"  type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon44\">\n    <span class=\"input-group-addon\">Euro</span>\n  </div>\n  <br>\n<button (click)=\"next()\" type=\"button\" class=\"btn btn-primary\">Next</button>\n</div>\n  <br>\n  <br>\n<div *ngIf=\"visible\">\n  <ul>\n    <li *ngFor=\"let v of voyageurs let index = index;\">\n      <div>\n\n        <span> Voyageur {{index+1}}</span>\n        <br>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon6\">Distance à faire vers la ville d'arrivé</span>\n          <input [disabled]=\"input3\" [(ngModel)]=\"voyageurs[index].distance\" type=\"number\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon6\">\n          <span class=\"input-group-addon\">Km</span>\n        </div>\n        <br>\n      </div>\n    </li>\n  </ul>\n  <button (click)=\"next2()\" type=\"button\" class=\"btn btn-primary\">Next</button>\n</div>\n  <div *ngFor=\"let item of result\">\n    <label>{{item}}</label>\n  </div>\n  <br>\n  <button (click)=\"reinit()\" type=\"button\" class=\"btn btn-primary\">Réinitialiser</button>\n</div>\n"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <span> Ville {{ville.id}}</span>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\" id=\"basic-addon1\">Nom la ville</span>\n    <input [(ngModel)]=\"ville.name\" type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n  </div>\n  <br>\n  <div class=\"input-group\">\n    <span class=\"input-group-addon\" id=\"basic-addon2\">Distance entre ville {{ville.id}} et la ville d'arrivé</span>\n    <input [(ngModel)]=\"ville.distance\" type=\"text\" class=\"form-control\" aria-label=\"Username\" aria-describedby=\"basic-addon2\">\n    <span class=\"input-group-addon\">Km</span>\n  </div>\n  <br>\n  <div class=\"input-group mb-3\">\n    <span class=\"input-group-addon\" id=\"basic-addon3\"> Nombre de voyageurs de cette ville</span>\n    <input [(ngModel)]=\"ville.nb_traveller\"  type=\"number\" class=\"form-control\" aria-describedby=\"basic-addon3\">\n  </div>\n  <br>\n  <br>\n</div>\n"

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);


/***/ })

},[751]);
//# sourceMappingURL=main.bundle.js.map