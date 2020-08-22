import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersApiService } from '../../../../features/users/services/users-api.service';
import { Router } from '@angular/router';

interface LoginFormData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSide: boolean;
  public loginForm?: FormGroup;

  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private readonly usersApiService: UsersApiService
  ) {
    this.isLoginSide = true;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  handleLoginClick(value: LoginFormData): void {
    this.usersApiService.getUserByUsernameAndPassword(value.username, value.password).subscribe((userResult) => {
      if (userResult.length === 1) {
        localStorage.setItem('id', String(userResult[0].id));
        localStorage.setItem('username', userResult[0].username);
        localStorage.setItem('gender', userResult[0].gender);
        localStorage.setItem('birthday', userResult[0].birthday);
        localStorage.setItem('email', userResult[0].email);
        localStorage.setItem('phone', userResult[0].phone);
        localStorage.setItem('isAuthorized', 'true');
        window.location.reload();
      } else {
        this.error = true;
      }
    });
  }
}
