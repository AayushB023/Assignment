import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from 'app/private/navbar/navbar.component';
var routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: RegisterComponent
    },
    { path: 'navbar',
        component: NavbarComponent
    }
];
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());
export { PublicRoutingModule };
//# sourceMappingURL=public-routing.module.js.map