import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOtrosCamposComponent } from './list-otros-campos.component';

describe('ListOtrosCamposComponent', () => {
  let component: ListOtrosCamposComponent;
  let fixture: ComponentFixture<ListOtrosCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOtrosCamposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOtrosCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
