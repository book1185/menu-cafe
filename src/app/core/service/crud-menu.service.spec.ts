import { TestBed } from '@angular/core/testing';

import { CrudMenuService } from './crud-menu.service';

describe('CrudMenuService', () => {
  let service: CrudMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
