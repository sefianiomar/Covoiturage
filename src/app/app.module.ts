import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParamInput1Component } from './param-input1/param-input1.component';
import { ParamInput2Component } from './param-input2/param-input2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParamInput1Component,
    ParamInput2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
