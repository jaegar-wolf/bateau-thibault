import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoquillagesPageRoutingModule } from './coquillages-routing.module';

import { CoquillagesPage } from './coquillages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoquillagesPageRoutingModule
  ],
  declarations: [CoquillagesPage]
})
export class CoquillagesPageModule {}
