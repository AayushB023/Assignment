import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Name : String;
  user : any;
  header: String;
  constructor(private route: Router) {
    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )

   }

  ngOnInit() { //displaying full name in the navbar
    this.user = localStorage.getItem('user_info');
    const t = JSON.parse(this.user);
    this.Name = t[0].firstname+" "+t[0].lastname;

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
