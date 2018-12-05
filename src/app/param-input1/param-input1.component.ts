import {Component, NgModule, OnInit} from '@angular/core';
import {Ville} from '../Ville';
import {Voyageur} from '../Voyageur';
import {isNull} from 'util';
import {isEmpty} from 'rxjs/operator/isEmpty';
import * as math from 'mathjs';

@Component({
  selector: 'app-param-input1',
  templateUrl: './param-input1.component.html',
  styleUrls: ['./param-input1.component.css']
})

export class ParamInput1Component implements OnInit {

   visible = false ;
   showresult =false;
   depart = '';
   distance = 0 ;
   nb_ville = 0 ;
   nb_voyageurs = 0 ;
   cost_km = 0 ;
   villes: Ville[] = [] ;
   voyageurs: Voyageur[] = [];
   total_dist = 0;
   v: Ville;
   vo: Voyageur;
   str = '' ;
   result= [] ;
   result2= [] ;
   propor_matrix = [] ;
   cout_total = 0 ;
   input1 = false ;
   input2 = false ;
   input3 = false ;


   constructor() {

   }

  ngOnInit() {
    this.input1 = false ;
    this.input2 = false ;
    this.input3 = false ;
  }

  next(): void {

    if ( this.nb_voyageurs === 0 || this.cost_km === 0 ||
      !this.cost_km || !this.nb_voyageurs) {
      console.log('-- ERROR ---');

    }else {
      this.input1 = true ;
      this.input2 = true ;
      this.visible = true ;
      const j = Number (this.nb_voyageurs);
      console.log('-- this is my famous j ', j);

      for (let i = 0; i < j; i++) {
        this.result2[i] = [];
        this.vo = new Voyageur();
        this.vo.id = i + 1 ;
        this.vo.sep_cost = 0 ;
        this.vo.sa_cost = 0 ;
        this.vo.prop_coast = 0 ;
        this.vo.distance = 0 ;
      //  this.v.traveller = new Voyageur()[this.v.nb_traveller];
        this.voyageurs[i] = this.vo ;
     //   console.log('-- ', this.v);

      }
     // console.log('-- ', this.depart, '--', this.distance);
    }

  }

  checkemptyfield(): boolean {
    let booli = true ;

    for (const va of this.voyageurs) {
      if (va.distance === 0) {booli = false ; }
    }

    if (booli) {return true ; }
    else {return false ; }
  }

  next2(): void {
    if (!this.checkemptyfield()) {
      console.log('-- ERROR ---');

    }else {
      this.input3 = true ;
      for (let i = 0; i < this.voyageurs.length; i++) {
        console.log('-- ', this.voyageurs[i].id, '--', this.voyageurs[i].distance, '--');
       // this.nb_voyageurs = this.nb_voyageurs + this.villes[i].nb_traveller ;
      }

      this.initCoutTraveller();
      this.extractVille();
      this.cout_separation();
      this.standalone_test_separation();
      this.cout_proportionnel();
      this.standalone_test_proportionnel();
      this.showresult = true;
    }
  }

  existVille(dist: number): number {
      console.log('-- this is the dist i got ---', dist);
      let id = null ;
      for (const ville of this.villes) {
        console.log('-- ville dist ---', ville.distance);
        if (ville.distance === dist ) { id = ville.id ;
        } else { id = null ; }
      }
      return id ;
  }
  // extract ville
  extractVille() {
    let j = 0;
    for (let i = 0; i < this.voyageurs.length; i++) {
      const voy = this.voyageurs[i] ;
       console.log('-- distance---', (voy.distance));
       const bo = this.existVille(voy.distance) ;
      console.log('-- response from fnct---', bo);
      if ( bo === null) {
        if ( voy.sa_cost > this.cout_total) {
          this.cout_total = voy.sa_cost ;
        }
        this.v = new Ville() ;
        this.v.id = j ;
        voy.id_ville = j ;
        this.v.distance = voy.distance ;
        this.v.cost = voy.sa_cost ;
        this.v.nb_traveller = 1;
        this.total_dist +=voy.distance;
        this.villes.push(this.v);
        j++ ;
      }else {
        this.villes[this.existVille(voy.distance)].nb_traveller ++ ;
        voy.id_ville = this.existVille(voy.distance) ;
      }
    }
    this.villes.sort((a, b) => {
      if (a.distance < b.distance) return -1;
      else if (a.distance > b.distance) return 1;
      else return 0;
    });

    for (let i = 0; i < this.villes.length; i++) {
      console.log(this.villes[i].id, '--', this.villes[i].nb_traveller, '--', this.villes[i].distance, '--',
        this.villes[i].cost, '--', this.villes[i].cost_diff);
      if (i !== 0) {
        this.villes[i].cost_diff = this.villes[i].cost - this.villes[i - 1].cost  ;
      }else {
        this.villes[i].cost_diff = this.villes[i].cost ;
      }
    }
    console.log(this.villes);
  }
  // initialiser les couts standalone des voyageurs par les couts de leurs villes de depart
  // et les couts par separations par zero
  initCoutTraveller() {
    console.log('-- cout Voyageurs ---');
      for (let j = 0; j < this.voyageurs.length; j++) {
          this.voyageurs[j].sa_cost = this.voyageurs[j].distance * this.cost_km;
          this.voyageurs[j].sep_cost = 0;
      }
  }
  // get nb voyageurs pr les villes suivant la ville i
  getNbVoyageur(i: number) {
    let nb = 0 ;
    for (let j = i; j < this.villes.length; j++) {
      nb = nb + this.villes[j].nb_traveller ;
    }
    console.log('-- nb travellers a continuer le chemin ', nb);
    return nb ;
  }

  cout_separation(): void {
    console.log('-- cout separation ---');
    for (let i = 0; i < this.voyageurs.length; i++) {
      for (let j = 0; j < this.villes.length; j++) {
        if (this.voyageurs[i].distance >= this.villes[j].distance) {
          this.voyageurs[i].sep_cost = this.voyageurs[i].sep_cost +
            Math.round(100 * this.villes[j].cost_diff / this.getNbVoyageur(j)) / 100  ;
          console.log('-- je suis ', i, ' now je suis a ', j, 'et jai paye', this.voyageurs[i].sep_cost,
            'il reste avec moi ', this.getNbVoyageur(j));
        }
      }
    }
  }
  standalone_test_separation() : void {
     for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].standalone_separation = this.voyageurs[i].sa_cost>this.voyageurs[i].sep_cost;    
    }
  }
  cout_proportionnel(): void {
    console.log('-- cout proportionnel ---');
    for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].prop_coast =  Math.round(100 *(this.voyageurs[i].distance*this.cout_total)/this.total_dist)/100;    
    }
  }

  standalone_test_proportionnel() : void {
     for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].standalone_porpotionnel = this.voyageurs[i].sa_cost>this.voyageurs[i].prop_coast;    
    }
  }
  //initialize
  reinit() {
    window.location.reload();
  }
}
