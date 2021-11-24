import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleProduitPageRoutingModule } from './single-produit-routing.module';

import { SingleProduitPage } from './single-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleProduitPageRoutingModule
  ],
  declarations: [SingleProduitPage]
})
export class SingleProduitPageModule {}
