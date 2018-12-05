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
        this.vo.comment_test_noyau="";
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
      this.noyau_proportionnel_pair();
      this.noyau_proportionnel_triplet();
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
  //calculer le cout a payer pour chaque voyageur par séparation
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

  //stand lone test - séparation
  standalone_test_separation() : void {
     for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].standalone_separation = this.voyageurs[i].sa_cost>this.voyageurs[i].sep_cost;    
    }
  }
  //calculer le cout a payer pour chaque voyageur par proportion
  cout_proportionnel(): void {
    console.log('-- cout proportionnel ---');
    for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].prop_coast =  Math.round(100 *(this.voyageurs[i].distance*this.cout_total)/this.total_dist)/100;    
    }
  }
  //stand alone test proportionnel
  standalone_test_proportionnel() : void {
    for (let i = 0; i < this.voyageurs.length; i++) {
      this.voyageurs[i].standalone_porpotionnel = this.voyageurs[i].sa_cost>this.voyageurs[i].prop_coast;    
    }
  }

  //test noyau pair- proportionnel
  noyau_proportionnel_pair() : void {
     for (let i = 0; i < this.voyageurs.length; i++) {
      for (let j = 0; j < this.voyageurs.length; j++) {
         if(i!=j){
           let pair = this.voyageurs[i].id +" " +this.voyageurs[j].id;
           let cout = Math.max(this.voyageurs[i].sa_cost,this.voyageurs[j].sa_cost);
           let cout_prop = this.voyageurs[i].prop_coast+this.voyageurs[j].prop_coast;
           console.log(cout);
           console.log(cout_prop);
           console.log(cout_prop<cout);
           if(cout_prop>cout){
             if(this.voyageurs[i].comment_test_noyau==""){
             this.voyageurs[i].comment_test_noyau  = this.voyageurs[i].comment_test_noyau + "Par example, La somme de couts proportionnels pour les voyageurs ("+pair+") est :"+cout_prop+
             ", alors qu'ils peuvent s'en tirer seuls pour seulement :"+cout+", donc ce groupe à l'intérêt à quitter le noyau";
             }
           }
         }
      }
    }
  }
  //test noyau triplet- proportionnel
  noyau_proportionnel_triplet() : void {
     for (let i = 0; i < this.voyageurs.length; i++) {
      for (let j = 0; j < this.voyageurs.length; j++) {
        for (let k = 0; k < this.voyageurs.length; k++) {
         if(i!=j && i!=k && j!=k){
           let triplet = this.voyageurs[i].id +" " +this.voyageurs[j].id+" "+this.voyageurs[k].id;
           let cout = Math.max(this.voyageurs[i].sa_cost,this.voyageurs[j].sa_cost,this.voyageurs[k].sa_cost);
           let cout_prop = this.voyageurs[i].prop_coast+this.voyageurs[j].prop_coast+this.voyageurs[k].prop_coast;
           if(cout_prop>cout){
              if(this.voyageurs[i].comment_test_noyau==""){
               this.voyageurs[i].comment_test_noyau  =this.voyageurs[i].comment_test_noyau + "Par example, La somme de couts proportionnels pour les voyageurs ("+triplet+") est :"+cout_prop+", alors qu'ils peuvent s'en tirer seuls pour seulement :"+cout+", donc ce groupe à l'intérêt à quitter le noyau";
              }
           }
         }
      }
    }
   }

  }

  //initialize
  reinit() {
    window.location.reload();
  }
}
