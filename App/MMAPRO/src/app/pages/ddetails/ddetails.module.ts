import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdetailsPageRoutingModule } from './ddetails-routing.module';

import { DdetailsPage } from './ddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DdetailsPageRoutingModule
  ],
  declarations: [DdetailsPage]
})
export class DdetailsPageModule {}
