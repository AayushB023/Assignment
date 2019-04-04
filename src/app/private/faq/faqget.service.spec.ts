import { TestBed } from '@angular/core/testing';

import { FaqgetService } from './faqget.service';

describe('FaqgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaqgetService = TestBed.get(FaqgetService);
    expect(service).toBeTruthy();
  });
});
