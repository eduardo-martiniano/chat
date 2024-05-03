import { TestBed } from '@angular/core/testing';

import { WindowUnloadService } from './window-unload.service';

describe('WindowUnloadService', () => {
  let service: WindowUnloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowUnloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
