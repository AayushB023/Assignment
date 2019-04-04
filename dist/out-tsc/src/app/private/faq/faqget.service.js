import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var FaqgetService = /** @class */ (function () {
    function FaqgetService(http) {
        this.http = http;
    }
    FaqgetService.prototype.getFaq = function () {
        return this.http.get('http://localhost:3000/faqs');
    };
    FaqgetService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], FaqgetService);
    return FaqgetService;
}());
export { FaqgetService };
//# sourceMappingURL=faqget.service.js.map