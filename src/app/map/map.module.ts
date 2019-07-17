import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MapFormComponent } from './map-form/map-form.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes = [
  { path: '', component: MapFormComponent}
];

@NgModule({
  declarations: [MapFormComponent],
  imports: [
    CommonModule
    , AgmCoreModule.forRoot({apiKey: ''})
    , FormsModule
    , ReactiveFormsModule
    , RouterModule.forChild(routes)
    , MatButtonModule
    , MatFormFieldModule
    , MatInputModule
  ]
})
export class MapModule { }
