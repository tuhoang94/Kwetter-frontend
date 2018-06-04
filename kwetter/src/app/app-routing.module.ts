import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import { OtheruserprofileComponent } from './otheruserprofile/otheruserprofile.component';
import { SearchuserComponent } from './searchuser/searchuser.component';


const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path:'otheruser/:id', component: OtheruserprofileComponent},
    {path: 'searchuser', component: SearchuserComponent},

    // redirect to home
    {path: '**', redirectTo: 'login'}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
