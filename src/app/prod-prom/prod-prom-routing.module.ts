import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdPromPage } from './prod-prom.page';

const routes: Routes = [
  {
    path: '',
    component: ProdPromPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdPromPageRoutingModule {}
