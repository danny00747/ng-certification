import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddLocationComponent} from "@app/components/add-location/add-location.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AddLocationComponent
  },
  {
    path: 'forecast',
    loadChildren: () => import('./modules/forecast/forecast.module').then(m => m.ForecastModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
