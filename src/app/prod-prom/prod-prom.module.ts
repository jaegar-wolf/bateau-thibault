import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdPromPageRoutingModule } from './prod-prom-routing.module';

import { ProdPromPage } from './prod-prom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdPromPageRoutingModule
  ],
  declarations: [ProdPromPage]
})
export class ProdPromPageModule {}
