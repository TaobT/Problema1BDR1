import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaBComponent } from './consulta-b.component';

describe('ConsultaBComponent', () => {
  let component: ConsultaBComponent;
  let fixture: ComponentFixture<ConsultaBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
