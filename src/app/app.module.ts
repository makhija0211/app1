import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Form01Component } from './form01/form01.component';

import { GroceryComponent } from './grocery/grocery.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { environment } from './../environments/environment';
import { HeaderComponent } from './header/header.component';
const appRoutes: Routes = [
  { path: 'home', component: Form01Component },
  { path: 'expenses',component: GroceryComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    Form01Component,
    GroceryComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
