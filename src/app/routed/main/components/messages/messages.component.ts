import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MessagesService} from '../../../../features/main/services/messages.service';
import {Message} from '../../../../shared/models/message';
import {UsersApiService} from '../../../../features/users/services/users-api.service';
import {User} from '../../../../shared/models/user-model';
import {FriendService} from '../../../../features/main/services/friend.service';
import {ChatService} from '../../../../features/main/services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnChanges {

  messages?: Message[];
  users?: User[];

  @Input() selectedChat?: number;


  constructor(private messagesService: MessagesService,
              private userService: UsersApiService,
              private friendService: FriendService,
              private chatService: ChatService) {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedChat) {
      this.getMessages();
    }
  }

  getMessages(): void {
    if (this.selectedChat) {
      this.messagesService.getMessagesByChatId(this.selectedChat).subscribe(messages => {
        this.messages = messages;
        console.log(messages);
        this.getChatMembers();
      });
    }
  }


  getChatMembers(): void {
    let requestStr = '';

    if (this.selectedChat) {
      this.chatService.getChatMembers(this.selectedChat).subscribe(chatMembers => {
        for (const member of chatMembers) {
          if (member) {
            requestStr += 'id=' + member.user_id.toString() + '&';
          }
        }
        this.friendService.getUsers(requestStr).subscribe(users => {
          this.users = users;
        });
      });
    }
  }

  getUserName(userId: number): string | undefined{
    return this.users?.find(user => user.id = userId)?.username;
  }
}
