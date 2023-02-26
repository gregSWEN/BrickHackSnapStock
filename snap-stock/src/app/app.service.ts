import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUser() {
    return this.http.get(this.rootURL + '/user');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }

}
