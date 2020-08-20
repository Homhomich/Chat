import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user-model';
import { UsersApiService } from '../../../../features/users/services/users-api.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  username: string | null = '';
  gender: string | null = '';
  birthday: string | null = '';
  email: string | null = '';
  phone: string | null = '';

  constructor(private readonly usersApiService: UsersApiService, private readonly router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAuthorized') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.username = localStorage.getItem('username');
      this.gender = localStorage.getItem('gender');
      this.birthday = localStorage.getItem('birthday');
      this.email = localStorage.getItem('email');
      this.phone = localStorage.getItem('phone');
    }
  }
}
