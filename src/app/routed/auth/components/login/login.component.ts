import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSide: boolean;
  public loginForm?: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.isLoginSide = true;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  buttonSubmit(): void {
    console.log(this.loginForm?.controls.username.value);
  }
}
