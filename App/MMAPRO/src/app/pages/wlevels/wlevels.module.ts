import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WlevelsPageRoutingModule } from './wlevels-routing.module';

import { WlevelsPage } from './wlevels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WlevelsPageRoutingModule
  ],
  declarations: [WlevelsPage]
})
export class WlevelsPageModule {}
