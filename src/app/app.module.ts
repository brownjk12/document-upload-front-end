import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetailsComponent } from './document-details/document-details.component';

@NgModule({
  declarations: [
    AppComponent,
   UploadComponent,
   DocumentListComponent,
   DocumentDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }