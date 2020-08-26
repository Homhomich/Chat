import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chat} from '../../../shared/models/chat-model';
import { InputMessage, Message } from '../../../shared/models/message';
import { User } from '../../../shared/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {
  }


  getMessagesByChatId(id: number): Observable<Message[]> {
    return this.http.get<Message[]>(`http://localhost:3000/messages?chat_id=${id}`);
  }

  createMessage(body: InputMessage): Observable<Message> {
    return this.http.post<Message>(`http://localhost:3000/messages`, body);
  }

}
