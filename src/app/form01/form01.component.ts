import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css']
})
export class Form01Component implements OnInit {
  model = {
    firstname:"",
    lastname:""
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(e:Event){
    e.preventDefault();
    console.log(e);
  }
  loginUser(model)
  {
    model.preventDefault();
    console.log(model);
    var firstname=model.target.elements[0].value;
    var lastname= model.target.elements[1].value;
    console.log(firstname,lastname);
  }
}
