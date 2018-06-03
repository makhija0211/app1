import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expensepage',
  templateUrl: './expensepage.component.html',
  styleUrls: ['./expensepage.component.css']
})
export class ExpensepageComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
