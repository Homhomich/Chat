import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chat} from '../../../../shared/models/chat-model';
import {ChatService} from '../../../../features/main/services/chat.service';
import {UsersApiService} from '../../../../features/users/services/users-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  chats?: Chat[];
  currentUserId?: number;
  selectedChatId?: number;

  @Output() setSelectedChat = new EventEmitter<Chat>();

  constructor(private chatService: ChatService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
    this.getChats();
  }

  selectChat(chat: Chat): void {
    this.setActive(String(chat.id), String(this.selectedChatId));
    this.setSelectedChat.emit(chat);
    this.selectedChatId = chat.id;
  }


  setActive(newId: string, oldId: string): void {
    const oldChat = document.getElementById(oldId);
    if (oldChat) {
      oldChat.className = oldChat.className.replace(' clicked', '');
    }

    const newChat = document.getElementById(newId);

    if (newChat) {
      newChat.className += ' clicked';
    }
  }


  setCurrentUser(): void {
    if (localStorage.getItem('isAuthorized') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.currentUserId = Number(localStorage.getItem('id'));
    }
  }

  getChats(): void {
    let requestStr = '';
    if (this.currentUserId) {
      this.chatService.getUserChatsByUserId(this.currentUserId).subscribe(userChats => {
        for (const userChat of userChats) {
          if (userChat) {
            requestStr += 'id=' + userChat.chat_id.toString() + '&';
          }
        }
        this.chatService.getChatsByUserId(requestStr).subscribe(chats => {
          this.chats = chats;
        });


      });
    }
  }
}
