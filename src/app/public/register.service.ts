import { Injectable } from '@angular/core';
//import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }
  registerNewUser(users:any[]){
    return this.http.post('http://localhost:3000/profile', users);
  }
}
