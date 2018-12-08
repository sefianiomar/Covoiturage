"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Ville_1 = require("../Ville");
var ParamInput2Component = /** @class */ (function () {
    function ParamInput2Component() {
    }
    ParamInput2Component.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Ville_1.Ville)
    ], ParamInput2Component.prototype, "ville", void 0);
    ParamInput2Component = __decorate([
        core_1.Component({
            selector: 'app-param-input2',
            templateUrl: './param-input2.component.html',
            styleUrls: ['./param-input2.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ParamInput2Component);
    return ParamInput2Component;
}());
exports.ParamInput2Component = ParamInput2Component;
//# sourceMappingURL=param-input2.component.js.map