import { Injectable } from '@angular/core';
import { Event } from '../../../shared/models/event';

import * as socketIo from 'socket.io-client';
import {Observable} from 'rxjs';
import {Message} from '../../../shared/models/message';
import Socket = SocketIOClient.Socket;

const SERVER_URL = 'http://localhost:3030';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket?: Socket ;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    console.log('iam in socket and sending');
    this.socket?.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket?.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      console.log(event);
      this.socket?.on(event, () => observer.next());
    });
  }
}
