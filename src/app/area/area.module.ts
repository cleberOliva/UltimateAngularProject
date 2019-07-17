import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaFormsComponent } from './area-forms/area-forms.component';
import { AreaListComponent } from './area-list/area-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaService } from './area.service';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: AreaListComponent},
  { path: 'create', component: AreaFormsComponent},
  { path: 'update/:id', component: AreaFormsComponent}
];

@NgModule({
  declarations: [AreaFormsComponent, AreaListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [AreaService]
})
export class AreaModule { }
