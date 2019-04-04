import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LoginCheckService = /** @class */ (function () {
    function LoginCheckService(http) {
        this.http = http;
    }
    LoginCheckService.prototype.checkUser = function (parameter) {
        return this.http.get("http://localhost:3000/profile", {
            params: parameter
        });
    };
    LoginCheckService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginCheckService);
    return LoginCheckService;
}());
export { LoginCheckService };
//# sourceMappingURL=login-check.service.js.map