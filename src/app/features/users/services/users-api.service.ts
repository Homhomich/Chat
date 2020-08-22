import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private readonly http: HttpClient) {}

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users`);
  }

  public getUserByUsernameAndPassword(username: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/users?usermame=${username}&password=${password}`);
  }

  public createUser(body: User): Observable<User[]> {
    return this.http.post<User[]>(`http://localhost:3000/users`, body);
  }

  public  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/users?id=${id}`);
  }
}
