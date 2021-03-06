import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { BookingComponent } from './booking/booking.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadingsComponent } from './headings/headings.component';
import { PrivateRoutingModule } from './private-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileService } from './profile.service';
import { BookingService } from './booking/booking.service';
var PrivateModule = /** @class */ (function () {
    function PrivateModule() {
    }
    PrivateModule = tslib_1.__decorate([
        NgModule({
            declarations: [ProfileComponent, FaqComponent, BookingComponent, NavbarComponent, HeadingsComponent],
            imports: [
                CommonModule,
                PrivateRoutingModule,
                FormsModule,
                ReactiveFormsModule,
                RouterModule
            ],
            providers: [ProfileService, BookingService]
        })
    ], PrivateModule);
    return PrivateModule;
}());
export { PrivateModule };
//# sourceMappingURL=private.module.js.map