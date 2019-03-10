import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanzamientoContainerComponent } from './lanzamiento-container/lanzamiento-container.component';

const routes: Routes = [
 {
   path: ':estado',
    component: LanzamientoContainerComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanzamientoRoutingModule { }
