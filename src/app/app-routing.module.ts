import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContraintesComponent } from './contraintes/contraintes.component';

const routes: Routes = [
  { path: '', component: ContraintesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
