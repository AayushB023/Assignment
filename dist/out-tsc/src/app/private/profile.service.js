import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.updateOldUser = function (id, users) {
        return this.http.patch('http://localhost:3000/profile/' + id, users);
    };
    ProfileService.prototype.loginUser = function (id, users) {
        return this.http.get('http://localhost:3000/profile', { params: {
                "id": id
            } });
    };
    ProfileService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProfileService);
    return ProfileService;
}());
export { ProfileService };
//# sourceMappingURL=profile.service.js.map