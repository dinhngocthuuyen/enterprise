import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsmanagerComponent } from './coordinatorsmanager.component';
import { Store, StoreModule } from '@ngrx/store';

describe('CoordinatorsmanagerComponent', () => {
  let component: CoordinatorsmanagerComponent;
  let fixture: ComponentFixture<CoordinatorsmanagerComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ CoordinatorsmanagerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorsmanagerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
