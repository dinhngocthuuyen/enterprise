import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionDetailComponent } from './contribution-detail.component';

describe('ContributionDetailComponent', () => {
  let component: ContributionDetailComponent;
  let fixture: ComponentFixture<ContributionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
