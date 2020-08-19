import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AuthPage } from './pages/auth/auth.page';
import { SingInComponent } from './components/sing-in/sing-in.component';

@NgModule({
  declarations: [LoginComponent, AuthPage, SingInComponent],
  imports: [CommonModule, AuthRoutingModule, BsDatepickerModule.forRoot(), ReactiveFormsModule, ButtonsModule.forRoot()]
})
export class AuthModule {}
