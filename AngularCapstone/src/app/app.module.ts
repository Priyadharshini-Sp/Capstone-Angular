import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';


import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
 
import {ServiceService} from './service.service';
import { HomeComponent } from './home/home.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UserviewComponent } from './userview/userview.component';
import { UsercarComponent } from './usercar/usercar.component';
import { FormComponent } from './form/form.component';
import { ViewformComponent } from './viewform/viewform.component';
import { PayComponent } from './pay/pay.component';
import { FinalComponent } from './final/final.component';
ReactiveFormsModule
const routes: Routes = [{path:"adminregister",component:AdminRegisterComponent},
{path:"home",component:HomeComponent},
{path:"adminlogin",component:AdminLoginComponent},
{path:"userlogin",component:UserLoginComponent},
{path:"userregister",component:UserRegistrationComponent},
{path:"addcar",component:CarDetailsComponent},
{path:"viewcar",component:ViewDetailsComponent},
{path:"viewuser",component:ViewuserComponent},
{path:"user",component:UserviewComponent},
{path:"usercar",component:UsercarComponent},
{path:"form",component:FormComponent},
{path:"viewform",component:ViewformComponent},
{path:"pay",component:PayComponent},
{path:"final",component:FinalComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AdminRegisterComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    CarDetailsComponent,
    ViewDetailsComponent,
    ViewuserComponent,
    UserviewComponent,
    UsercarComponent,
    FormComponent,
    ViewformComponent,
    PayComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
