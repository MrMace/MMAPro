import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbodypartsPageRoutingModule } from './ebodyparts-routing.module';

import { EbodypartsPage } from './ebodyparts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbodypartsPageRoutingModule
  ],
  declarations: [EbodypartsPage]
})
export class EbodypartsPageModule {}
