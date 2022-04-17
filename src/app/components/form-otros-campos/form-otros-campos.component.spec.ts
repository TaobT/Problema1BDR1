import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOtrosCamposComponent } from './form-otros-campos.component';

describe('FormOtrosCamposComponent', () => {
  let component: FormOtrosCamposComponent;
  let fixture: ComponentFixture<FormOtrosCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOtrosCamposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOtrosCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
