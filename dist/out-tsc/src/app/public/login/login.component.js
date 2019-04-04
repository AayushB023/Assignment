import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/login.service';
import { LoginCheckService } from 'app/login-check.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    // loginid = {
    //   "emailad": "aayush.bhargava@gmail.com",
    //   "pass": "123456"
    // };
    function LoginComponent(fb, login, loginc, router) {
        this.fb = fb;
        this.login = login;
        this.loginc = loginc;
        this.router = router;
        this.load = true;
        this.description = '';
        this.emailad = '';
        this.titleAlert = 'Atleast Enter Something';
        this.onSubmit = function () {
            var _this = this;
            this.loginc.checkUser(this.lForm.value).subscribe(function (response) {
                _this.getData = response;
                if ((Object.keys(response).length) == 0) {
                    console.log("invalid user");
                }
                else {
                    console.log(response);
                    localStorage.setItem("user_info", JSON.stringify(response));
                    localStorage.setItem("user_cred", "true");
                    window.location.reload;
                    _this.router.navigate(['/navbar/profile']);
                }
            }
            // this.loginid.emailad = this.lForm.get('emailid').value;
            // this.loginid.pass = this.lForm.get('password').value;
            // this.loginc.checkUser(this.loginid).subscribe(result => {
            );
        };
        this.lForm = fb.group({
            'password': [null, Validators.required],
            'emailad': [null, Validators.required],
            'validate': ''
        });
    }
    // loginCheck = function(){
    // }
    LoginComponent.prototype.ngOnInit = function () {
        // this.lForm.get('validate').valueChanges.subscribe(
        //   (validate) => {
        //     if (validate == '1'){
        //       this.lForm.get('emailad').setValidators([Validators.required, Validators.minLength(5)]);
        //       this.titleAlert = "Atleast Enter Something";
        //     }
        //     else{
        //       this.lForm.get('emailad').setValidators(Validators.required);
        //     }
        //     this.lForm.get('emailad').updateValueAndValidity();
        //   }
        // )
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, LoginService, LoginCheckService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map