import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FriendsComponent } from './components/friends/friends.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatsComponent } from './components/chats/chats.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FriendsComponent, MessagesComponent, ChatsComponent],
  exports: [FriendsComponent, MessagesComponent, ChatsComponent],
  imports: [CommonModule, MainRoutingModule, FormsModule]
})
export class MainModule {}
