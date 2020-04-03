import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodypartsPageRoutingModule } from './bodyparts-routing.module';

import { BodypartsPage } from './bodyparts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodypartsPageRoutingModule
  ],
  declarations: [BodypartsPage]
})
export class BodypartsPageModule {}
