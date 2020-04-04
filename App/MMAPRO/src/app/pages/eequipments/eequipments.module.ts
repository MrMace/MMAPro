import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EequipmentsPageRoutingModule } from './eequipments-routing.module';

import { EequipmentsPage } from './eequipments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EequipmentsPageRoutingModule
  ],
  declarations: [EequipmentsPage]
})
export class EequipmentsPageModule {}
