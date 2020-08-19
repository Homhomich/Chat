import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  private hamburgerBtnChats: HTMLElement | null | undefined;
  private chats: HTMLElement | null | undefined;
  private hamburgerBtnFriends: HTMLElement | null | undefined;
  private friends: HTMLElement | null | undefined;
  constructor() {}

  ngOnInit(): void {
    this.hamburgerBtnChats = document.getElementById('hamburgerBtnChats');
    this.chats = document.getElementById('chats');
    this.hamburgerBtnChats?.addEventListener('click', () => {
      this.chats?.classList.toggle('open');
    });
    this.hamburgerBtnFriends = document.getElementById('hamburgerBtnFriends');
    this.friends = document.getElementById('friends');
    this.hamburgerBtnFriends?.addEventListener('click', () => {
      this.friends?.classList.toggle('open');
    });
  }
}
