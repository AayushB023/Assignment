import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUser(){
    return this.http.get('http://localhost:3000/profile');
  }
}
