import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormsComponent } from './employee-forms/employee-forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: EmployeeListComponent},
  { path: 'create', component: EmployeeFormsComponent},
  { path: 'update/:id', component: EmployeeFormsComponent}
]

@NgModule({
  declarations: [EmployeeFormsComponent, EmployeeListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
