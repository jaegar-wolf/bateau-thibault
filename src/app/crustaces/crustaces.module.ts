import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrustacesPageRoutingModule } from './crustaces-routing.module';

import { CrustacesPage } from './crustaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrustacesPageRoutingModule
  ],
  declarations: [CrustacesPage]
})
export class CrustacesPageModule {}
