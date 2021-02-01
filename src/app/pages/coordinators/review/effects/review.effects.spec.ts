import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReviewEffects } from './review.effects';

describe('ReviewEffects', () => {
  let actions$: Observable<any>;
  let effects: ReviewEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReviewEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ReviewEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
