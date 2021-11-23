import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBateauPage } from './single-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: SingleBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBateauPageRoutingModule {}
