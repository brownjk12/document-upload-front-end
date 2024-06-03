import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  currentFile?: File;
  message = '';
  documents?: Observable<any>;
  fileName = 'Select File';

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {
    this.documents = this.uploadService.getFiles();
   
  }

  selectFile(event: any): void {
    
    this.message = '';
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
      
    }
  }
  upload(): void {
    console.log("HERE WE ARE")
    if (this.currentFile) {
      this.uploadService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.documents = this.uploadService.getFiles();
          
          }
         
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }
}
