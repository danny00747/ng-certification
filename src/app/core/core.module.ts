import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { ListLocationComponent } from './components/list-location/list-location.component';


@NgModule({
  declarations: [
    AddLocationComponent,
    ListLocationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
