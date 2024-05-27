import { Component } from '@angular/core';
import { Document } from '../model/document.model';
import { UploadService } from '../services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {

  documents: Document[] = [];
  currentDocument: Document;
  name = "";
  currentIndex = -1;
    

  constructor(private uploadService: UploadService,private router: Router) {
  }

  ngOnInit (): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.uploadService.getDocumentList()
    .subscribe(
      data => {
        this.documents = data;
        console.log(data)
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.getDocuments();
    this.currentDocument = undefined;
  }

  setActiveDocument(document : Document, index : number): void {
    this.currentDocument = document;
    this.currentIndex = index;
  }

  deleteDocument (id:number) {
    this.uploadService.delete(id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/documents']);
      },
      error => {
        console.log(error);
      });
  }

  updateDocument(document:Document, id:number){
    this.uploadService.update(document,id)
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
