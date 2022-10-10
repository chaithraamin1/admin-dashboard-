import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashbord3Component } from './dashbord3/dashbord3.component';

const routes: Routes = [
 {path:'home',component:Dashbord3Component},
  {path:'',pathMatch:"full",component:Dashbord3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
