import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
// import { RegistrationValidator } from "app/public/register/register.validate";
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, registerUserService, route) {
        this.fb = fb;
        this.registerUserService = registerUserService;
        this.route = route;
        this.load = true;
        this.description = '';
        this.name = '';
        this.titleAlert = 'This is required';
        this.registerUser = function (user) {
            console.log(user);
            this.registerUserService.registerNewUser(user).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
            this.route.navigate(["login"]);
        };
        this.rForm = fb.group({
            'firstname': [null, Validators.required],
            'lastname': [null, Validators.required],
            'password': [null, Validators.required],
            'repassword': [null, Validators.required],
            'emailad': [null, Validators.required],
            'phone': [null, Validators.required],
            'medical': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
            'address': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
            'validate': ''
        });
    }
    RegisterComponent.prototype.ngOnItit = function () {
        // this.rForm.get('validate').valueChanges.subscribe(
        //   (validate) => {
        //     if (validate == '1'){
        //       this.rForm.get('firstname').setValidators([Validators.required, Validators.minLength(5)]);
        //       this.titleAlert = "Atleast Enter Something";
        //     }
        //     else{
        //       this.rForm.get('firstname').setValidators(Validators.required);
        //     }
        //     this.rForm.get('firstname').updateValueAndValidity();
        //   }
        // )
    };
    RegisterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, RegisterService, Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map