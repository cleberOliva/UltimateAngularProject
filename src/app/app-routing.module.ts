import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AreaModule } from './area/area.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'area', loadChildren: '../app/area/area.module#AreaModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
