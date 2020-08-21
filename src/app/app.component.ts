import { Component } from '@angular/core';
import { element } from 'protractor';
import { UsersApiService } from './features/users/services/users-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat';
  clicked = 'active';

  constructor(private readonly router: Router) {}

  isAuthorized = localStorage.getItem('isAuthorized');

  logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
