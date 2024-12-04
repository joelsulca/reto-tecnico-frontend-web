import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../../core/interfaces/user';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users/all`);
  }

  getUser(idUser: number): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/users/${idUser}`);
  }
}
