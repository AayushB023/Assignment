import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(route) {
        var _this = this;
        this.route = route;
        this.handleRouteChange = function () {
            if (_this.route.url.includes('profile')) {
                _this.header = "PROFILE";
            }
            if (_this.route.url.includes('booking')) {
                _this.header = "MY BOOKINGS";
            }
            if (_this.route.url.includes('faq')) {
                _this.header = "FAQs";
            }
        };
        this.Logout = function () {
            localStorage.clear();
            this.route.navigate(["/login"]);
        };
        route.events.subscribe(function (event) { return (event instanceof NavigationEnd) && _this.handleRouteChange(); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('user_info');
        console.log(this.user);
        var t = JSON.parse(this.user);
        this.Name = t[0].firstname + " " + t[0].lastname;
        console.log(this.Name);
    };
    NavbarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map