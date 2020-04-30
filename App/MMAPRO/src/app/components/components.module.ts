import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { LoadingComponent } from './loading/loading.component';
import { PipesModule } from '../pipes/pipes.module';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { RestdayComponent } from './restday/restday.component';
import { RouterModule } from '@angular/router';
import { WorkoutsfavComponent } from './workoutsfav/workoutsfav.component';
import { DietsfavComponent } from './dietsfav/dietsfav.component';


@NgModule({
  entryComponents: [AddcommentComponent],
  declarations: [
    BackbuttonComponent,
    LoadingComponent,
    AddcommentComponent,
    RestdayComponent,
    WorkoutsfavComponent,
    DietsfavComponent
  ],
  exports: [
    BackbuttonComponent,
    LoadingComponent,
    AddcommentComponent,
    RestdayComponent,
    WorkoutsfavComponent,
    DietsfavComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
