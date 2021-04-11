import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelectedContributionsComponent } from './view-selected-contributions.component';

describe('ViewSelectedContributionsComponent', () => {
  let component: ViewSelectedContributionsComponent;
  let fixture: ComponentFixture<ViewSelectedContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelectedContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelectedContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
