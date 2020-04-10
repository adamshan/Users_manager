import {Subject} from 'rxjs';
import { User } from '../modeles/user.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

   constructor(private http: HttpClient) { }

  private users: User[] = [
    new User(1,'willalex','Will', 'Alexander', 'will@will.com','superadmin')
];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}

/*
    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }

    getAll() {
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

   
}*/