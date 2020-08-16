import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterPage } from './pages/register/register.page';
import {LoginPage} from './pages/login/login.page';


@NgModule({
  declarations: [RegisterPage, LoginPage],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
