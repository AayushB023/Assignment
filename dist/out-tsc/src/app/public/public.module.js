import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginCheckService } from 'app/login-check.service';
import { PublicRoutingModule } from './public-routing.module';
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib_1.__decorate([
        NgModule({
            declarations: [LoginComponent, RegisterComponent],
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                ReactiveFormsModule,
                RouterModule,
                PublicRoutingModule
            ],
            exports: [
                RegisterComponent,
                LoginComponent
            ],
            providers: [LoginCheckService]
        })
    ], PublicModule);
    return PublicModule;
}());
export { PublicModule };
//# sourceMappingURL=public.module.js.map