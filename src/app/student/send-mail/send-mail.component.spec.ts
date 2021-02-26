import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMailComponent } from './send-mail.component';
import { Store, StoreModule } from '@ngrx/store';

describe('SendMailComponent', () => {
  let component: SendMailComponent;
  let fixture: ComponentFixture<SendMailComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ SendMailComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMailComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
