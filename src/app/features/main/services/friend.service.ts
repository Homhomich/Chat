import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chat} from '../../../shared/models/chat-model';
import {UserChats} from '../../../shared/models/userChats';
import {Friend} from '../../../shared/models/friend';
import {User} from '../../../shared/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  constructor(private http: HttpClient) { }


  getUsers(requestWithId: string): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users?' + requestWithId);
  }

  getFriendsByUserId(id: number): Observable<Friend[]> {
    return this.http.get<Friend[]>(`http://localhost:3000/friends?user_id=${id}`);
  }

}
