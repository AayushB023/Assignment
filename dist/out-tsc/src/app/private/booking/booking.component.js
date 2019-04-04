import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BookingService } from './booking.service';
var BookingComponent = /** @class */ (function () {
    function BookingComponent(getbookingservice) {
        this.getbookingservice = getbookingservice;
    }
    // booking(){ 
    // this.getbookingservice.getbookings().subscribe(response => { 
    // this.mybooking = response; 
    // console.log(response); 
    // console.log("hey"); 
    // console.log(this.mybooking); 
    // //this.mybooking = response; 
    // } 
    // } 
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upcomingd = true;
        this.getbookingservice.getbookings().subscribe(function (response) {
            _this.mybooking = response;
            // console.log(response); 
            // console.log("hey"); 
            // console.log(this.mybooking); 
            //this.mybooking = response; 
        });
    };
    BookingComponent.prototype.bookbooking = function () {
        var _this = this;
        this.getbookingservice.getpastbookings().subscribe(function (response) {
            _this.pastbook = response;
            console.log(response);
            console.log(_this.pastbook);
            _this.pastd = true;
            _this.upcomingd = false;
        });
    };
    BookingComponent.prototype.upcoming = function () {
        this.upcomingd = true;
        this.pastd = false;
    };
    BookingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-booking',
            templateUrl: './booking.component.html',
            styleUrls: ['./booking.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BookingService])
    ], BookingComponent);
    return BookingComponent;
}());
export { BookingComponent };
//# sourceMappingURL=booking.component.js.map