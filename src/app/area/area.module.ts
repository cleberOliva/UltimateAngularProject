import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaFormsComponent } from './area-forms/area-forms.component';
import { AreaListComponent } from './area-list/area-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaService } from './area.service';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


const routes: Routes = [
  { path: '', component: AreaListComponent },
  { path: 'create', component: AreaFormsComponent },
  { path: 'update/:id', component: AreaFormsComponent }
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
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [AreaService]
})
export class AreaModule { }
