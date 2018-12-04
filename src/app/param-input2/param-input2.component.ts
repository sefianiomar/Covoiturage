import {Component, Input, OnInit} from '@angular/core';
import {Ville} from '../Ville';

@Component({
  selector: 'app-param-input2',
  templateUrl: './param-input2.component.html',
  styleUrls: ['./param-input2.component.css']
})
export class ParamInput2Component implements OnInit {

  @Input() ville: Ville;

  constructor() { }

  ngOnInit() {
  }


}
