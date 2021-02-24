import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream:src/app/pages/faculty/faculty.component.spec.ts
import { FacultyComponent } from './containers/faculty.component';

describe('FacultyComponent', () => {
  let component: FacultyComponent;
  let fixture: ComponentFixture<FacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyComponent ]
=======
import { GuestComponent } from './guest.component';

describe('GuestComponent', () => {
  let component: GuestComponent;
  let fixture: ComponentFixture<GuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestComponent ]
>>>>>>> Stashed changes:src/app/guest/guest.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< Updated upstream:src/app/pages/faculty/faculty.component.spec.ts
    fixture = TestBed.createComponent(FacultyComponent);
=======
    fixture = TestBed.createComponent(GuestComponent);
>>>>>>> Stashed changes:src/app/guest/guest.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
