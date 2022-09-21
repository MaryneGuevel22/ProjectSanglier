import { TestBed } from '@angular/core/testing';

import { ServiceCompteRenduService } from './service-compte-rendu.service';

describe('ServiceCompteRenduService', () => {
  let service: ServiceCompteRenduService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCompteRenduService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
