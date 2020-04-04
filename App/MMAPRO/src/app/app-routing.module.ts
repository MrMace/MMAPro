import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'bmiinfo',
    loadChildren: () => import('./pages/bmiinfo/bmiinfo.module').then( m => m.BmiinfoPageModule)
  },
  {
    path: 'bodyparts',
    loadChildren: () => import('./pages/bodyparts/bodyparts.module').then( m => m.BodypartsPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./pages/calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'cdiets',
    loadChildren: () => import('./pages/cdiets/cdiets.module').then( m => m.CdietsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'ddetails',
    loadChildren: () => import('./pages/ddetails/ddetails.module').then( m => m.DdetailsPageModule)
  },
  {
    path: 'diets',
    loadChildren: () => import('./pages/diets/diets.module').then( m => m.DietsPageModule)
  },
  {
    path: 'ebodyparts',
    loadChildren: () => import('./pages/ebodyparts/ebodyparts.module').then( m => m.EbodypartsPageModule)
  },
  {
    path: 'edetails',
    loadChildren: () => import('./pages/edetails/edetails.module').then( m => m.EdetailsPageModule)
  },
  {
    path: 'eequipments',
    loadChildren: () => import('./pages/eequipments/eequipments.module').then( m => m.EequipmentsPageModule)
  },
  {
    path: 'equipments',
    loadChildren: () => import('./pages/equipments/equipments.module').then( m => m.EquipmentsPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./pages/exercises/exercises.module').then( m => m.ExercisesPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then( m => m.GoalsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
