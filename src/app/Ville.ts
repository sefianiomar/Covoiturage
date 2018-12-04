import {Voyageur} from "./Voyageur";

export class Ville {
  id: number;
  name: string;
  distance: number ;
  cost: number ;
  cost_diff: number ;
  nb_traveller: number ;
  traveller: Voyageur[] ;

}
