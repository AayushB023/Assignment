import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  updateOldUser(id,users){
    return this.http.patch('http://localhost:3000/profile/'+id,users);
  }
  loginUser(id,users){
    return this.http.get('http://localhost:3000/profile',{params: {
      "id": id
    }});
  }
}
