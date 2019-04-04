import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FaqComponent } from './faq/faq.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from 'app/auth-guard.service';
import { LoginComponent } from 'app/public/login/login.component';
var routes = [
    { path: 'navbar', component: NavbarComponent, children: [
            { path: 'faq', component: FaqComponent, canActivate: [AuthGuardService] },
            { path: 'booking', component: BookingComponent },
            { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
        ] },
    { path: 'login', component: LoginComponent }
];
var PrivateRoutingModule = /** @class */ (function () {
    function PrivateRoutingModule() {
    }
    PrivateRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forChild(routes)
            ],
            providers: [AuthGuardService],
            exports: [RouterModule]
        })
    ], PrivateRoutingModule);
    return PrivateRoutingModule;
}());
export { PrivateRoutingModule };
//# sourceMappingURL=private-routing.module.js.map