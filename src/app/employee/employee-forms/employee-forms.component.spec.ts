import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormsComponent } from './employee-forms.component';

describe('EmployeeFormsComponent', () => {
  let component: EmployeeFormsComponent;
  let fixture: ComponentFixture<EmployeeFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
