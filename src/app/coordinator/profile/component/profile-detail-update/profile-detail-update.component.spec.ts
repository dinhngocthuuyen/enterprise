import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailUpdateComponent } from './profile-detail-update.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ProfileDetailUpdateComponent', () => {
  let component: ProfileDetailUpdateComponent;
  let fixture: ComponentFixture<ProfileDetailUpdateComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ProfileDetailUpdateComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailUpdateComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
