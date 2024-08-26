import { TestBed } from '@angular/core/testing';

import { GlobalVariablesServiceService } from './global-variables-service.service';

describe('GlobalVariablesServiceService', () => {
  let service: GlobalVariablesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVariablesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
