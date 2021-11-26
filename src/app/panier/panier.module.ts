import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPageRoutingModule } from './panier-routing.module';

import { PanierPage } from './panier.page';
import { SettingsComponent } from '../settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPageRoutingModule
  ],
  declarations: [PanierPage, SettingsComponent]
})
export class PanierPageModule {}
