var RegistrationValidator = /** @class */ (function () {
    function RegistrationValidator() {
    }
    RegistrationValidator.validate = function (rForm) {
        var password = rForm.controls.password.value;
        var repassword = rForm.controls.repassword.value;
        if (repassword.length() <= 0) {
            return null;
        }
        if (repassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return RegistrationValidator;
}());
export { RegistrationValidator };
//# sourceMappingURL=register.validate.js.map