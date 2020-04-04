import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdetailsPageRoutingModule } from './edetails-routing.module';

import { EdetailsPage } from './edetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdetailsPageRoutingModule
  ],
  declarations: [EdetailsPage]
})
export class EdetailsPageModule {}
