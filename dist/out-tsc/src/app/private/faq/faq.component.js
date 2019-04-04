import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FaqgetService } from './faqget.service';
var FaqComponent = /** @class */ (function () {
    function FaqComponent(faq) {
        this.faq = faq;
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cflag = true;
        this.faq.getFaq().subscribe(function (res) {
            _this.detailscurrent = res;
            console.log(_this.detailscurrent);
        });
    };
    FaqComponent.prototype.find = function () {
        location.reload();
    };
    FaqComponent = tslib_1.__decorate([
        Component({
            selector: 'app-faq',
            templateUrl: './faq.component.html',
            styleUrls: ['./faq.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FaqgetService])
    ], FaqComponent);
    return FaqComponent;
}());
export { FaqComponent };
//# sourceMappingURL=faq.component.js.map