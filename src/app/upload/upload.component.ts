import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Document } from '../model/document.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

constructor(private uploadService: UploadService) { }
document : Document = new Document();
  upload = false;
  file: File | null = null

  ngOnInit(){
  }

  saveDocument(): void{
const data ={
  name : this.document.name,
  category: this.document.category,
  id : this.document.id
};
  
this.uploadService.create(data)
.subscribe(
  response => {
    console.log(response);
    this.upload = true;
  },
  error => {
    console.log(error)
  });
}
 
 newDocument(): void {
  this.upload = false;
  this.document = {
    name: "",
    category: "",
    id: 0,
    fileLocation: ""
  };
}
}

 
  

  
