import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaFormsComponent } from './area-forms/area-forms.component';
import { AreaListComponent } from './area-list/area-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AreaListComponent},
  { path: 'create', component: AreaFormsComponent},
  { path: 'update', component: AreaFormsComponent}
];

@NgModule({
  declarations: [AreaFormsComponent, AreaListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AreaModule { }
