import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiinfoPageRoutingModule } from './bmiinfo-routing.module';

import { BmiinfoPage } from './bmiinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiinfoPageRoutingModule
  ],
  declarations: [BmiinfoPage]
})
export class BmiinfoPageModule {}
