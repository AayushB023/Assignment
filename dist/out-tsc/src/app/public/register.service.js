import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.registerNewUser = function (users) {
        return this.http.post('http://localhost:3000/profile', users);
    };
    RegisterService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RegisterService);
    return RegisterService;
}());
export { RegisterService };
//# sourceMappingURL=register.service.js.map