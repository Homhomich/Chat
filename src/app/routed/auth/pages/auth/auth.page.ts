import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {
  public isLoginSide: boolean;
  public myForm?: FormGroup;

  constructor(private formBuilder: FormBuilder, private readonly router: Router) {
    this.isLoginSide = true;
  }

  ngOnInit(): void {
    if (localStorage.length > 0) {
      this.router.navigate(['/']);
    } else {
      this.myForm = this.formBuilder.group({
        radio: 'female'
      });
    }
  }

  addClass(id: string, other: string): void {
    const button = document.getElementById(id);
    if (button && !button.className.includes(' clicked')) {
      this.isLoginSide = !this.isLoginSide;
      button.className += ' clicked';
    }

    const otherButton = document.getElementById(other);
    if (otherButton) {
      otherButton.className = otherButton.className.replace(' clicked', '');
    }
  }
}
