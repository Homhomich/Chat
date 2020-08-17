import {Component} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chat';
  clicked = 'active';

  addClass(id: string, other: string): void {
    const button = document.getElementById(id);
    if (!button.className.includes(' clicked')) {
      button.className = button.className + ' clicked';
    }


    const otherButton = document.getElementById(other);
    otherButton.className = otherButton.className.replace(' clicked', '');
  }
}
