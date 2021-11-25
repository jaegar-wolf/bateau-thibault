import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoquillagesPage } from './coquillages.page';

const routes: Routes = [
  {
    path: '',
    component: CoquillagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoquillagesPageRoutingModule {}
