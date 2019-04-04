import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
//import { AuthService } from './auth.service';
import { Router } from '@angular/router';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(myRoute) {
        this.myRoute = myRoute;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("user_cred") == "true") {
            return true;
        }
        else {
            this.myRoute.navigate([""]);
            return false;
        }
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
//# sourceMappingURL=auth-guard.service.js.map