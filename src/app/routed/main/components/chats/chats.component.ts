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

  @Output() setSelectedChat = new EventEmitter<number>();

  constructor(private chatService: ChatService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
    this.getChats();
  }

  selectChat(id: number): void {
    this.setSelectedChat.emit(id);
  }


  setCurrentUser(): void {
    if (localStorage.getItem('isAuthorized') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.currentUserId = Number(localStorage.getItem('id'));
      console.log(Number(localStorage.getItem('id')));
    }
  }

  getChats(): void {
    let requestStr = '';
    if (this.currentUserId) {
      this.chatService.getUserChatsByUserId(this.currentUserId).subscribe(userChats => {
        console.log(userChats);
        for (const userChat of userChats) {
          if (userChat) {
            requestStr += 'id=' + userChat.chat_id.toString() + '&';
          }
        }
        this.chatService.getChatsByUserId(requestStr).subscribe(chats => {
          console.log(chats);
          this.chats = chats;
        });


      });
    }
  }
}
