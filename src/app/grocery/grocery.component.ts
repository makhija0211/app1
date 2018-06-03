import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent {
    task = {
      name: '',
      price: 0,
      id: 0
    };
    tasks = [];

    onClick(){
      if(this.task.id == 0){
        this.tasks.push({id: (new Date()).getMonth(),name: this.task.name, strike: false});
        console.log((new Date()).getMonth() ,this.task.name , this.task.price)
      }
      
      this.task = {
        name: '',
        price: 0,
        id: 0
      };
    }
    
    onEdit(item){
      this.task = item;
    }

    onDelete(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
        }
      }
    }

    onStrike(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          if(this.tasks[i].strike){
            this.tasks[i].strike = false;
          }
          else{
            this.tasks[i].strike = true;
          }
          break;
        }
      }
    }

  
}