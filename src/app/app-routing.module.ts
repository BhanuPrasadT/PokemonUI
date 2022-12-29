import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolbatComponent } from './golbat/golbat.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigupComponent } from './Signup/sigup.component';
import { ZubatComponent } from './zubat/zubat.component';

const routes: Routes = [{path:'Signup',component:SigupComponent},
{path:'login',component:LoginComponent},{path:'home',component:HomeComponent},
{path:'zubat', component:ZubatComponent},{path:'golbat',component:GolbatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
