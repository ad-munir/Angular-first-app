import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRoutingModule } from './student/student-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StudentRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
