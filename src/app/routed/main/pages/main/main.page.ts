import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chat } from '../../../../shared/models/chat-model';

@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {
  private hamburgerBtnChats: HTMLElement | null | undefined;
  private chats: HTMLElement | null | undefined;
  private hamburgerBtnFriends: HTMLElement | null | undefined;
  private friends: HTMLElement | null | undefined;

  public selectedChatId?: number;
  public selectedChat?: Chat;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAuthorized') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
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

  setSelectedChatId(chat: Chat): void {
    console.log(chat.id);
    this.selectedChatId = chat.id;
    this.selectedChat = chat;
  }
}
