import { TestBed } from '@angular/core/testing';

import { RouteGguardService } from './route-gguard.service';

describe('RouteGguardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGguardService = TestBed.get(RouteGguardService);
    expect(service).toBeTruthy();
  });
});
