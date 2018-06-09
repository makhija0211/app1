import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  expenseObservable: Observable<any[]> ;
  constructor(private db:AngularFireDatabase) {

   }

  ngOnInit() {
    this.expenseObservable=this.getExpenses('/listexp');
  }
  getExpenses(listPath):Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }
}
