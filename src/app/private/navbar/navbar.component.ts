import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CountBooking } from '../booking/countbooking.service';
import { BookingService } from '../booking/booking.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Name : String;
  user : any;
  header: String;
  upcomingd:boolean; 
pastd : boolean; 
total;
mybooking:any; 
pastbook: any; 
  constructor(private route: Router, private getbookingservice :BookingService, private count:CountBooking) {
    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )

   }

  ngOnInit() { //displaying full name in the navbar
    this.user = localStorage.getItem('user_info');
    const t = JSON.parse(this.user);
    this.Name = t[0].firstname+" "+t[0].lastname;
    this.upcomingd = true; 

this.getbookingservice.getbookings().subscribe(response => { //showing booking count in the dropdown menu 
this.mybooking = response; 

this.getbookingservice.getpastbookings().subscribe(response => { 
  this.pastbook = response; 
  this.total = this.pastbook.length + this.mybooking.length;
  this.count.count = this.total; 
  }); 
 
}); 

  }
  handleRouteChange = () => { //routing to various components in the navabr
    if (this.route.url.includes('profile')) { 
    this.header = "PROFILE"; 
    } 
    if (this.route.url.includes('booking')) { 
    this.header = "MY BOOKINGS"; 
    } 
    if (this.route.url.includes('faq')) { 
    this.header = "FAQs"; 
    } 
    };
  Logout= function(){
    localStorage.clear();
    this.route.navigate(["/login"]);
  }

}
