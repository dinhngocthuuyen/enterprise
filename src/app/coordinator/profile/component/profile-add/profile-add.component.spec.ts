import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddComponent } from './profile-add.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ProfileAddComponent', () => {
  let component: ProfileAddComponent;
  let fixture: ComponentFixture<ProfileAddComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ProfileAddComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAddComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
