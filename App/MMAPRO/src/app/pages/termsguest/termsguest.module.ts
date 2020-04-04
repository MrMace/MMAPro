import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsguestPageRoutingModule } from './termsguest-routing.module';

import { TermsguestPage } from './termsguest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsguestPageRoutingModule
  ],
  declarations: [TermsguestPage]
})
export class TermsguestPageModule {}
