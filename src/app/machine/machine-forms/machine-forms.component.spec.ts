import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineFormsComponent } from './machine-forms.component';

describe('MachineFormsComponent', () => {
  let component: MachineFormsComponent;
  let fixture: ComponentFixture<MachineFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
