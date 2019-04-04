import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
    }
    BookingService.prototype.getbookings = function () {
        return this.http.get('http://localhost:3000/upcoming');
    };
    BookingService.prototype.getpastbookings = function () {
        return this.http.get('http://localhost:3000/past');
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map