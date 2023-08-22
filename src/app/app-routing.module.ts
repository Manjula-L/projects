import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppNotfoundComponent } from './app-notfound/app-notfound.component';

const routes: Routes = [
  
  {
  path:"auth",
  component:ChildComponent
},
{
  path:'login',
  loadChildren:()=>import("../app/auth/login/login.module").then(m=>m.LoginModule),
},
  {path:"",
  redirectTo: 'auth',
  pathMatch:'full'},
  {
    path:"**",
    component:AppNotfoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
