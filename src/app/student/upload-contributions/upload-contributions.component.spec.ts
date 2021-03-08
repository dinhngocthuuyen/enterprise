import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadContributionsComponent } from './upload-contributions.component';

describe('UploadContributionsComponent', () => {
  let component: UploadContributionsComponent;
  let fixture: ComponentFixture<UploadContributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadContributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});