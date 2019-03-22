import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';//new
import { ChemicalsComponent } from './chemicals/chemicals.component'; //new

const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },//new
  { path: 'chemicals', component: ChemicalsComponent }, //new
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [TeachersComponent, ChemicalsComponent]
