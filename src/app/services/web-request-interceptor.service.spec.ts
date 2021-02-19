import { TestBed } from '@angular/core/testing';

import { WebRequestInterceptor } from './web-request.interceptor';

describe('WebRequestInterceptorService', () => {
  let service: WebRequestInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequestInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
