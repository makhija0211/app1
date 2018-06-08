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
import { ValidFormComponent } from './valid-form/valid-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';


const appRoutes: Routes = [
  { path: 'home', component: ValidFormComponent },
  { path: 'expenses',component: GroceryComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    Form01Component,
    GroceryComponent,
    HeaderComponent,
    ValidFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   
   
  ],
  exports:[MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
