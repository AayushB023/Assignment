import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router'
import { AuthGuardService } from 'app/auth-guard.service';
import { LoginComponent } from 'app/public/login/login.component';

const routes: Routes = [
 { path: 'navbar', component: NavbarComponent, children: [
  { path: 'faq', component: FaqComponent, canActivate: [AuthGuardService] },
  { path: 'booking', component: BookingComponent },
  { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuardService]}
]},
  {path: 'login', component: LoginComponent}

]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[AuthGuardService],
  exports: [ RouterModule]
})
export class PrivateRoutingModule { }
