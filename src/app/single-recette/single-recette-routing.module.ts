import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRecettePage } from './single-recette.page';

const routes: Routes = [
  {
    path: '',
    component: SingleRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleRecettePageRoutingModule {}
