import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContributionsComponent } from './view-contributions.component';

describe('ViewContributionsComponent', () => {
  let component: ViewContributionsComponent;
  let fixture: ComponentFixture<ViewContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
