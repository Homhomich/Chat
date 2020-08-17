import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  addClass(id: string, other: string): void {
    const button = document.getElementById(id);
    if (button && !button.className.includes(' clicked')) {
      button.className += ' clicked';
    }


    const otherButton = document.getElementById(other);
    if (otherButton) {
      otherButton.className = otherButton.className.replace(' clicked', '');
    }
  }
}
