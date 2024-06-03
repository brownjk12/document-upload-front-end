import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

 private  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
   
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/document/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}document/documents`);
  }


  // update(id: any, document: any): Observable<any> {
  //   return this.http.put(`${this.baseUrl}/${id}`, document);
  // }

  delete(name: String): Observable<any> {
   
   
    return this.http.delete(`${this.baseUrl}/${name}`);
   }
}