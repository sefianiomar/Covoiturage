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
var Voyageur_1 = require("../Voyageur");
var ParamInput1Component = /** @class */ (function () {
    function ParamInput1Component() {
        this.visible = false;
        this.showresult = false;
        this.depart = '';
        this.distance = 0;
        this.nb_ville = 0;
        this.nb_voyageurs = 0;
        this.cost_km = 0;
        this.villes = [];
        this.voyageurs = [];
        this.total_dist = 0;
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
                this.vo = new Voyageur_1.Voyageur();
                this.vo.id = i + 1;
                this.vo.sep_cost = 0;
                this.vo.sa_cost = 0;
                this.vo.prop_coast = 0;
                this.vo.distance = 0;
                this.vo.comment_test_noyau_pair = "";
                this.vo.comment_test_noyau_triplet = "";
                this.vo.comment_test_noyau_quad = "";
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
            this.standalone_test_separation();
            this.cout_proportionnel();
            this.standalone_test_proportionnel();
            this.noyau_proportionnel_pair();
            this.noyau_proportionnel_triplet();
            this.noyau_proportionnel_quad();
            this.showresult = true;
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
                this.v = new Ville_1.Ville();
                this.v.id = j;
                voy.id_ville = j;
                this.v.distance = voy.distance;
                this.v.cost = voy.sa_cost;
                this.v.nb_traveller = 1;
                this.total_dist += voy.distance;
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
        console.log(this.villes);
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
    //calculer le cout a payer pour chaque voyageur par séparation
    ParamInput1Component.prototype.cout_separation = function () {
        console.log('-- cout separation ---');
        for (var i = 0; i < this.voyageurs.length; i++) {
            for (var j = 0; j < this.villes.length; j++) {
                if (this.voyageurs[i].distance >= this.villes[j].distance) {
                    this.voyageurs[i].sep_cost = this.voyageurs[i].sep_cost +
                        Math.round(100 * this.villes[j].cost_diff / this.getNbVoyageur(j)) / 100;
                    console.log('-- je suis ', i, ' now je suis a ', j, 'et jai paye', this.voyageurs[i].sep_cost, 'il reste avec moi ', this.getNbVoyageur(j));
                }
            }
        }
    };
    //stand lone test - séparation
    ParamInput1Component.prototype.standalone_test_separation = function () {
        for (var i = 0; i < this.voyageurs.length; i++) {
            this.voyageurs[i].standalone_separation = this.voyageurs[i].sa_cost > this.voyageurs[i].sep_cost;
        }
    };
    //calculer le cout a payer pour chaque voyageur par proportion
    ParamInput1Component.prototype.cout_proportionnel = function () {
        console.log('-- cout proportionnel ---');
        for (var i = 0; i < this.voyageurs.length; i++) {
            this.voyageurs[i].prop_coast = Math.round(100 * (this.voyageurs[i].distance * this.cout_total) / this.total_dist) / 100;
        }
    };
    //stand alone test proportionnel
    ParamInput1Component.prototype.standalone_test_proportionnel = function () {
        for (var i = 0; i < this.voyageurs.length; i++) {
            this.voyageurs[i].standalone_porpotionnel = this.voyageurs[i].sa_cost > this.voyageurs[i].prop_coast;
        }
    };
    //test noyau pair- proportionnel
    ParamInput1Component.prototype.noyau_proportionnel_pair = function () {
        for (var i = 0; i < this.voyageurs.length; i++) {
            for (var j = 0; j < this.voyageurs.length; j++) {
                if (i != j) {
                    var pair = this.voyageurs[i].id + " " + this.voyageurs[j].id;
                    var cout = Math.max(this.voyageurs[i].sa_cost, this.voyageurs[j].sa_cost);
                    var cout_prop = this.voyageurs[i].prop_coast + this.voyageurs[j].prop_coast;
                    console.log(cout);
                    console.log(cout_prop);
                    console.log(cout_prop < cout);
                    if (cout_prop > cout) {
                        if (this.voyageurs[i].comment_test_noyau_pair == "") {
                            this.voyageurs[i].comment_test_noyau_pair = this.voyageurs[i].comment_test_noyau_pair + "Pair test : La somme de couts proportionnels pour les voyageurs (" + pair + ") est :" + cout_prop +
                                ", alors qu'ils peuvent s'en tirer seuls pour seulement :" + cout + ", donc ce groupe à l'intérêt à quitter le noyau";
                            break;
                        }
                    }
                }
            }
        }
    };
    //test noyau triplet- proportionnel
    ParamInput1Component.prototype.noyau_proportionnel_triplet = function () {
        for (var i = 0; i < this.voyageurs.length; i++) {
            for (var j = 0; j < this.voyageurs.length; j++) {
                for (var k = 0; k < this.voyageurs.length; k++) {
                    if (i != j && i != k && j != k) {
                        var triplet = this.voyageurs[i].id + " " + this.voyageurs[j].id + " " + this.voyageurs[k].id;
                        var cout = Math.max(this.voyageurs[i].sa_cost, this.voyageurs[j].sa_cost, this.voyageurs[k].sa_cost);
                        var cout_prop = this.voyageurs[i].prop_coast + this.voyageurs[j].prop_coast + this.voyageurs[k].prop_coast;
                        if (cout_prop > cout) {
                            if (this.voyageurs[i].comment_test_noyau_triplet == "") {
                                this.voyageurs[i].comment_test_noyau_triplet = this.voyageurs[i].comment_test_noyau_triplet + "Triplet Test : La somme de couts proportionnels pour les voyageurs (" + triplet + ") est :" + cout_prop + ", alors qu'ils peuvent s'en tirer seuls pour seulement :" + cout + ", donc ce groupe à l'intérêt à quitter le noyau";
                                break;
                            }
                        }
                    }
                }
            }
        }
    };
    //test noyau triplet- proportionnel
    ParamInput1Component.prototype.noyau_proportionnel_quad = function () {
        for (var i = 0; i < this.voyageurs.length; i++) {
            for (var j = 0; j < this.voyageurs.length; j++) {
                for (var k = 0; k < this.voyageurs.length; k++) {
                    if (i != j && i != k && j != k) {
                        var triplet = this.voyageurs[i].id + " " + this.voyageurs[j].id + " " + this.voyageurs[k].id;
                        var cout = Math.max(this.voyageurs[i].sa_cost, this.voyageurs[j].sa_cost, this.voyageurs[k].sa_cost);
                        var cout_prop = this.voyageurs[i].prop_coast + this.voyageurs[j].prop_coast + this.voyageurs[k].prop_coast;
                        if (cout_prop > cout) {
                            if (this.voyageurs[i].comment_test_noyau_quad == "") {
                                this.voyageurs[i].comment_test_noyau_quad = this.voyageurs[i].comment_test_noyau_triplet + "Triplet Test : La somme de couts proportionnels pour les voyageurs (" + triplet + ") est :" + cout_prop + ", alors qu'ils peuvent s'en tirer seuls pour seulement :" + cout + ", donc ce groupe à l'intérêt à quitter le noyau";
                                break;
                            }
                        }
                    }
                }
                quad;
            }
        }
    };
    //initialize
    ParamInput1Component.prototype.reinit = function () {
        window.location.reload();
    };
    ParamInput1Component = __decorate([
        core_1.Component({
            selector: 'app-param-input1',
            templateUrl: './param-input1.component.html',
            styleUrls: ['./param-input1.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ParamInput1Component);
    return ParamInput1Component;
}());
exports.ParamInput1Component = ParamInput1Component;
//# sourceMappingURL=param-input1.component.js.map