import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WgoalsPageRoutingModule } from './wgoals-routing.module';

import { WgoalsPage } from './wgoals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WgoalsPageRoutingModule
  ],
  declarations: [WgoalsPage]
})
export class WgoalsPageModule {}
