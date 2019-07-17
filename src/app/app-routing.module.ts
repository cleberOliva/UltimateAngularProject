import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'area', loadChildren: '../app/area/area.module#AreaModule', canActivate: [AuthGuard]},
  { path: 'employee', loadChildren: '../app/employee/employee.module#EmployeeModule', canActivate: [AuthGuard]},
  { path: 'machine', loadChildren: '../app/machine/machine.module#MachineModule', canActivate: [AuthGuard]},
  { path: 'map', loadChildren: '../app/map/map.module#MapModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
