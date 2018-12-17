import { TestBed } from '@angular/core/testing';

import { MagicItemsService } from './magic-items.service';

describe('MagicItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagicItemsService = TestBed.get(MagicItemsService);
    expect(service).toBeTruthy();
  });
});
