import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoissonsPage } from './poissons.page';

const routes: Routes = [
  {
    path: '',
    component: PoissonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoissonsPageRoutingModule {}
