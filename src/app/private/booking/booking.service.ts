import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable({ 
providedIn: 'root' 
}) 
export class BookingService { 


constructor(private http: HttpClient) { } 
getbookings(){ 
return this.http.get('http://localhost:3000/upcoming'); 
} 
getpastbookings(){ 
return this.http.get('http://localhost:3000/past'); 
} 

}