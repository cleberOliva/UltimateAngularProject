import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaFormsComponent } from './area-forms.component';

describe('AreaFormsComponent', () => {
  let component: AreaFormsComponent;
  let fixture: ComponentFixture<AreaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
