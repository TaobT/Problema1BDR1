import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosRegistrosComponent } from './filtros-registros.component';

describe('FiltrosRegistrosComponent', () => {
  let component: FiltrosRegistrosComponent;
  let fixture: ComponentFixture<FiltrosRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
