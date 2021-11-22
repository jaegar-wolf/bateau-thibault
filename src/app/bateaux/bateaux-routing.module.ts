import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauxPage } from './bateaux.page';

const routes: Routes = [
  {
    path: '',
    component: BateauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauxPageRoutingModule {}
