import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineFormsComponent } from './machine-forms/machine-forms.component';
import { MachineListComponent } from './machine-list/machine-list.component';

@NgModule({
  declarations: [MachineFormsComponent, MachineListComponent],
  imports: [
    CommonModule
  ]
})
export class MachineModule { }
