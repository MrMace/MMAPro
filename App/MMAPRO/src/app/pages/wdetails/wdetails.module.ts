import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WdetailsPageRoutingModule } from './wdetails-routing.module';

import { WdetailsPage } from './wdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WdetailsPageRoutingModule
  ],
  declarations: [WdetailsPage]
})
export class WdetailsPageModule {}
