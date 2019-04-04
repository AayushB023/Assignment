import { TestBed } from '@angular/core/testing';
import { LoginCheckService } from './login-check.service';
describe('LoginCheckService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LoginCheckService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=login-check.service.spec.js.map