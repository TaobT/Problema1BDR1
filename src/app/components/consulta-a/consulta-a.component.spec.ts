import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAComponent } from './consulta-a.component';

describe('ConsultaAComponent', () => {
  let component: ConsultaAComponent;
  let fixture: ComponentFixture<ConsultaAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
