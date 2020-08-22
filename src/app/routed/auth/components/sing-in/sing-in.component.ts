import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Gender, User } from '../../../../shared/models/user-model';
import { UsersApiService } from '../../../../features/users/services/users-api.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public signInForm?: FormGroup;
  public gender = Gender;

  error = false;

  constructor(private formBuilder: FormBuilder, private readonly usersApiService: UsersApiService) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, forbiddenPasswordTypeValidator()]],
      email: ['', Validators.required],
      phone: [''],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  handleRegisterClick(value: User): void {
    this.usersApiService.createUser(value).subscribe(
      () => {
        window.location.reload();
      },
      (error) => {
        console.error('Error', error);
        this.error = true;
      }
    );
  }
}

export function forbiddenPasswordTypeValidator(): ValidatorFn {
  // tslint:disable-next-line:no-any
  return (control: AbstractControl): { [key: string]: any } | null => {
    const lowerCase = control.value.toLowerCase();
    const containsNumbers = /[0-9]/.test(control.value);
    // tslint:disable-next-line:no-null-keyword
    return lowerCase !== control.value && containsNumbers ? null : { forbiddenName: { value: control.value } };
  };
}
