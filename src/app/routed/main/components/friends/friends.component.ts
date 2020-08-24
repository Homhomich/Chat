import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Friend } from '../../../../shared/models/friend';
import { FriendService } from '../../../../features/main/services/friend.service';
import { User } from '../../../../shared/models/user-model';
import { ChatService } from '../../../../features/main/services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, OnChanges {
  currentUserId!: number;
  friends?: User[];

  @Input() selectedChat?: number;

  constructor(
    private friendService: FriendService,
    private readonly router: Router,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.setCurrentUser();
    this.getUserFriends();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedChat) {
      this.getChatMembers();
    }
  }

  setCurrentUser(): void {
    if (localStorage.getItem('isAuthorized') !== 'true') {
      this.router.navigate(['/auth']);
    } else {
      this.currentUserId = Number(localStorage.getItem('id'));
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
        this.friendService.getUsers(requestStr).subscribe((friends) => {
          this.friends = friends;
        });
      });
    }
  }

  getUserFriends(): void {
    let requestStr = '';
    this.friendService.getFriendsByUserId(this.currentUserId).subscribe((userFriends) => {
      for (const friend of userFriends) {
        if (friend) {
          requestStr += 'id=' + friend.friend_id.toString() + '&';
        }
      }
      this.friendService.getUsers(requestStr).subscribe((friends) => {
        this.friends = friends;
      });
    });
  }
}
