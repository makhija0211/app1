import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';
import { ExpensepageComponent } from './expensepage/expensepage.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    Form01Component,
    Form02Component,
    ExpensepageComponent,
    GroceryComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
