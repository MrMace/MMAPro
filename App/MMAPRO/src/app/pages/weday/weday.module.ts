import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WedayPageRoutingModule } from './weday-routing.module';

import { WedayPage } from './weday.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WedayPageRoutingModule
  ],
  declarations: [WedayPage]
})
export class WedayPageModule {}
