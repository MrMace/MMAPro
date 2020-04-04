import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpostsPageRoutingModule } from './tposts-routing.module';

import { TpostsPage } from './tposts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpostsPageRoutingModule
  ],
  declarations: [TpostsPage]
})
export class TpostsPageModule {}
