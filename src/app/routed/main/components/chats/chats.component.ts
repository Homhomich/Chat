import {Component, OnInit} from '@angular/core';
import {Chat} from '../../../../shared/models/chat-model';
import {ChatService} from '../../../../features/main/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  chats?: Chat[];

  currentUserId: number;

  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
    let requestStr = '';
    this.currentUserId = 1;
    this.chatService.getUserChatsByUserId(this.currentUserId).subscribe(userChats => {
      for (const userChat of userChats) {
        if (userChat) {
          requestStr += 'id=' + userChat.chat_id.toString() + '&';
          this.chatService.getChatsByUserId(requestStr).subscribe(chats => {
            this.chats = chats;
          });
        }
      }
    });


  }

}
