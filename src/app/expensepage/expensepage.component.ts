import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expensepage',
  templateUrl: './expensepage.component.html',
  styleUrls: ['./expensepage.component.css']
})
export class ExpensepageComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};

  ngOnInit() {
  }
  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }
  editFieldValue(index){
      this.newAttribute = {};
     
  }
  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  
  selectedFile:File = null ;
  
  onFileSelected(event){
    console.log(event);
    this.selectedFile= <File> event.target.files[0];
  }
  onUpload(){
    const fd=new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name);
    /*this.http.post('https://us-central1-imageuploadtest-cfa8e.cloudfunctions.net/helloWorld',fd)
    .subscribe(res =>{
      console.log()
    })*/
  }
}
  

  


