import { Component, OnInit } from '@angular/core';
import { FaqgetService } from './faqget.service';
import { Observable, interval, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  cflag : boolean;
  detailscurrent: any;

  private updateSubscription: Subscription;
  constructor(private faq: FaqgetService, private router: RouterModule) { 
  }
 //for calling the fetch service in faq
  ngOnInit() {
    this.cflag = true;
    this.faq.getFaq().subscribe(res => {
      this.detailscurrent = res;

    })

  }



}
