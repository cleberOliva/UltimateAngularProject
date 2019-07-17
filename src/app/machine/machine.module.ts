import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineFormsComponent } from './machine-forms/machine-forms.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatCardModule, MatToolbarModule, MatDividerModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

const routes = [
  { path: '', component: MachineListComponent},
  { path: 'create', component: MachineFormsComponent},
  { path: 'update/:id', component: MachineFormsComponent}
]
@NgModule({
  declarations: [MachineFormsComponent, MachineListComponent],
  imports: [
    CommonModule
    , FormsModule
    , ReactiveFormsModule
    , RouterModule.forChild(routes)
    , MatButtonModule
    , MatFormFieldModule
    , MatInputModule
    , MatExpansionModule
    , MatCardModule
    , MatToolbarModule
    , MatDividerModule
    , MatSidenavModule
    , MatButtonModule
    , MatIconModule
    , MatListModule
  ]
})
export class MachineModule { }
