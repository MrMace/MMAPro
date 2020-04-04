import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CdietsPageRoutingModule } from './cdiets-routing.module';

import { CdietsPage } from './cdiets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CdietsPageRoutingModule
  ],
  declarations: [CdietsPage]
})
export class CdietsPageModule {}
