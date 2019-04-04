import { Component, OnInit } from '@angular/core'; 
import { BookingService } from './booking.service'; 

@Component({ 
selector: 'app-booking', 
templateUrl: './booking.component.html', 
styleUrls: ['./booking.component.css'] 
}) 
export class BookingComponent implements OnInit { 

mybooking:any; 
pastbook: any; 
upcomingd:boolean; 
pastd : boolean; 
constructor(private getbookingservice :BookingService) { } 

 

ngOnInit() {                    //fetching data from the server about bookings (upcoming)
this.upcomingd = true; 

this.getbookingservice.getbookings().subscribe(response => { 
this.mybooking = response; 
 
}); 
} 

//fetching data from the server about bookings (past)

bookbooking(){ 
this.getbookingservice.getpastbookings().subscribe(response => { 
this.pastbook = response; 
this.pastd= true; 
this.upcomingd = false; 
}); 
} 

upcoming() 
{ 
this.upcomingd = true; 
this.pastd= false; 
} 


}