import {Component, OnInit} from '@angular/core';
import {Friend} from '../../../../shared/models/friend';
import {FriendService} from '../../../../features/main/services/friend.service';
import {User} from '../../../../shared/models/user-model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  currentUserId: number;

  friends?: User[];

  constructor(private friendService: FriendService) {
  }

  ngOnInit(): void {
    let requestStr = '';
    this.currentUserId = 1;
    this.friendService.getFriendsByUserId(this.currentUserId).subscribe(userFriends => {
      for (const friend of userFriends) {
        if (friend) {
          requestStr += 'id=' + friend.friend_id.toString() + '&';
          this.friendService.getFriends(requestStr).subscribe(friends => {
            console.log(friends);
            this.friends = friends;
          });
        }
      }
    });
  }

}
