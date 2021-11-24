import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleProduitPage } from './single-produit.page';

const routes: Routes = [
  {
    path: '',
    component: SingleProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleProduitPageRoutingModule {}
