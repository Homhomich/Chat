import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chat} from '../../../shared/models/chat-model';
import {UserChats} from '../../../shared/models/userChats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
  }

  getChatsByUserId(requestWithId: string): Observable<Chat[]> {
    return this.http.get<Chat[]>('http://localhost:3000/chats?' + requestWithId);
  }

  getUserChatsByUserId(id: number): Observable<UserChats[]> {
    return this.http.get<UserChats[]>(`http://localhost:3000/chats_users?user_id=${id}`);
  }
}
