import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(fb, route, update) {
        this.fb = fb;
        this.route = route;
        this.update = update;
        this.load = true;
        this.description = '';
        this.name = '';
        this.titleAlert = 'This is required';
        this.updateUser = function (user) {
            var _this = this;
            console.log(user);
            this.update.updateOldUser(JSON.parse(localStorage.getItem("user_info"))[0].id, user).subscribe(function (response) {
                console.log(response),
                    _this.getData = response,
                    function (error) { return console.log(error); },
                    console.log("Success");
            });
            setTimeout(function () {
                _this.update.loginUser(_this.pForm.value).subscribe(function (response) {
                    _this.getDat = response.id;
                    console.log(response);
                    var temp = [_this.pForm.value];
                    localStorage.setItem("user_info", JSON.stringify(temp));
                }
                // this.loginid.emailad = this.lForm.get('emailid').value;
                // this.loginid.pass = this.lForm.get('password').value;
                // this.loginc.checkUser(this.loginid).subscribe(result => {
                );
                location.reload();
            }, 1000);
            //this.route.navigate(["/navbar/faq"]);
        };
        this.pForm = fb.group({
            'firstname': [JSON.parse(localStorage.getItem("user_info"))[0].firstname, Validators.required],
            'emailad': [JSON.parse(localStorage.getItem("user_info"))[0].emailad, Validators.required],
            'phone': [JSON.parse(localStorage.getItem("user_info"))[0].phone, Validators.required],
            'medical': [JSON.parse(localStorage.getItem("user_info"))[0].medical, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
            'address': [JSON.parse(localStorage.getItem("user_info"))[0].address, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(200)])],
            'validate': '',
            'id': [JSON.parse(localStorage.getItem("user_info"))[0].id],
            'lastname': [JSON.parse(localStorage.getItem("user_info"))[0].lastname],
            'password': [JSON.parse(localStorage.getItem("user_info"))[0].password]
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Router, ProfileService])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map