import { TestBed } from '@angular/core/testing';

import { ProductFormUpdate } from './product-form-update';

describe('ProductFormUpdate', () => {
  let service: ProductFormUpdate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFormUpdate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
