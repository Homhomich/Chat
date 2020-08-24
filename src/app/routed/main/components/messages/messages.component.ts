import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, AfterContentInit } from '@angular/core';
import { MessagesService } from '../../../../features/main/services/messages.service';
import { Message } from '../../../../shared/models/message';
import { UsersApiService } from '../../../../features/users/services/users-api.service';
import { User } from '../../../../shared/models/user-model';
import { FriendService } from '../../../../features/main/services/friend.service';
import { ChatService } from '../../../../features/main/services/chat.service';

interface MessageFormData {
  text: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnChanges, AfterContentInit {
  messages?: Message[];
  users?: User[];

  @Input() selectedChat?: number;

  private messagesDiv = document.getElementById('messagesDiv');

  constructor(
    private messagesService: MessagesService,
    private userService: UsersApiService,
    private friendService: FriendService,
    private chatService: ChatService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.messagesDiv = document.getElementById('messagesDiv');
    if (this.selectedChat) {
      this.getMessages();
    }
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // @ts-ignore
    // this.messagesDiv.scrollTo(0, this.messagesDiv.scrollHeight);
  }

  getMessages(): void {
    if (this.selectedChat) {
      this.messagesService.getMessagesByChatId(this.selectedChat).subscribe((messages) => {
        this.messages = messages;
        this.messagesDiv = document.getElementById('messagesDiv');
        console.log('messagesDiv', this.messagesDiv);
        // @ts-ignore
        console.log('scroll 1 height', this.messagesDiv.scrollHeight);
        // @ts-ignore
        console.log('scroll 1', this.messagesDiv.scrollTop);
        // @ts-ignore
        this.messagesDiv.scrollTop = this.messagesDiv.scrollHeight;
        // @ts-ignore
        console.log('scroll 2 height', this.messagesDiv.scrollHeight);
        // @ts-ignore
        console.log('scroll 2', this.messagesDiv.scrollTop);
        this.getChatMembers();
      });
    }
  }

  getChatMembers(): void {
    let requestStr = '';

    if (this.selectedChat) {
      this.chatService.getChatMembers(this.selectedChat).subscribe((chatMembers) => {
        for (const member of chatMembers) {
          if (member) {
            requestStr += 'id=' + member.user_id.toString() + '&';
          }
        }
        this.friendService.getUsers(requestStr).subscribe((users) => {
          this.users = users;
        });
      });
    }
  }

  getUserName(userId: number): string | undefined {
    return this.users?.find((user) => (user.id = userId))?.username;
  }

  handleEnterMessageClick(): void {
    console.log('selected_chat_before', this.selectedChat);
    const date = this.getCurrentDateAndTime();
    const messageBody = {
      chat_id: this.selectedChat,
      user_id: Number(localStorage.getItem('id')),
      text: (document.getElementById('text') as HTMLInputElement).value,
      created_at: date
    };
    if (messageBody.text.length !== 0) {
      this.messagesService.createMessage(messageBody).subscribe(() => {
        console.log('selected_chat_after', this.selectedChat);
        this.getMessages();
        this.messagesDiv = document.getElementById('messagesDiv');
      });
    }
  }

  getCurrentDateAndTime(): string {
    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    const yyyy = currentDate.getFullYear();
    const hh = String(currentDate.getHours()).padStart(2, '0');
    const mn = String(currentDate.getMinutes()).padStart(2, '0');
    const ss = String(currentDate.getSeconds()).padStart(2, '0');
    return dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + mn + ':' + ss;
  }
}
