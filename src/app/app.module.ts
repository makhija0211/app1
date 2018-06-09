import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ValidFormComponent } from './valid-form/valid-form.component';
import { environment } from './../environments/environment';
//imports for mat related component 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
//firebase imports 
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule } from 'angularfire2/auth';
//data table trial 

import { Ng2TableModule} from 'ng2-table/ng2-table';
import { ListComponent } from './list/list.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const appRoutes: Routes = [
  { path: 'home', component: ValidFormComponent },
  { path: 'expenses',component: GroceryComponent },
  { path: 'listexp',component: ListComponent },
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    GroceryComponent,
    HeaderComponent,
    ValidFormComponent,
    ListComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2TableModule,
    NgbModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    //firebase modules
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    
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
