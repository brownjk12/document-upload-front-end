import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Document } from '../model/document.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrl: './document-details.component.css'
})
export class DocumentDetailsComponent implements OnInit{

  currentDocument : Document = {
    id : 0,
    name: "",
    category: "",
    fileLocation : ""
  };

  constructor(
    private uploadService : UploadService,
    private route: ActivatedRoute,
    private router : Router
  ) {}


  ngOnInit(): void {
      this.getDocuments(this.route.snapshot.params['id'])
  }

getDocuments(id:number): void{
  this.uploadService.get(id)
  .subscribe(
    data => {
      this.currentDocument = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
}

updateDocument(): void {
  this.uploadService.update(this.currentDocument.id, this.currentDocument)
  .subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
}

deleteDocument (): void {
  this.uploadService.delete(this.currentDocument.id)
  .subscribe(
    response => {
      console.log(response);
      this.router.navigate(['/documents']);
    },
    error => {
      console.log(error);
    });
}

}
