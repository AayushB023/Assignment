import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class LoginCheckService {
    constructor(public http: HttpClient) {
  }

  checkUser(parameter)
  {
    return this.http.get("http://localhost:3000/profile",
    {
      params:parameter
    });
  }
}