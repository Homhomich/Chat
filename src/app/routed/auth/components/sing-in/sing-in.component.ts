import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Gender, User } from '../../../../shared/models/user-model';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public signInForm?: FormGroup;
  public gender = Gender;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      username: ['' /* Validators.required*/],
      password: ['', [Validators.required, forbiddenPasswordTypeValidator()]],
      email: ['' /*Validators.required*/],
      phone: [''],
      birthday: ['' /*Validators.required*/],
      gender: ['' /*Validators.required*/]
    });
  }

  ngOnInit(): void {}
}

export function forbiddenPasswordTypeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const lowerCase = control.value.toLowerCase();
    const containsNumbers = /[0-9]/.test(control.value);
    console.log(lowerCase !== control.value);
    console.log(containsNumbers);
    return lowerCase !== control.value && containsNumbers ? null : { forbiddenName: { value: control.value } };
  };
}
