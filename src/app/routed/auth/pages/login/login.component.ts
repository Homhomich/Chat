import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoginSide: boolean;
  public myForm?: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.isLoginSide = true;
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      radio: 'female'
    });
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
