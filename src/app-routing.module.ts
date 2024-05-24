import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './app/upload/upload.component';
import { DocumentListComponent } from './app/document-list/document-list.component';
import { DocumentDetailsComponent } from './app/document-details/document-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'documents', pathMatch: 'full' },
  { path: 'documents', component: DocumentListComponent },
  { path: 'documents/:id', component: DocumentDetailsComponent },
  { path: 'upload', component: UploadComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }