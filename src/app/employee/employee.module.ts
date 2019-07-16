import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormsComponent } from './employee-forms/employee-forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [EmployeeFormsComponent, EmployeeListComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
