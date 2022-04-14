import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGenerosRegistrosComponent } from './list-generos-registros.component';

describe('ListGenerosRegistrosComponent', () => {
  let component: ListGenerosRegistrosComponent;
  let fixture: ComponentFixture<ListGenerosRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGenerosRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGenerosRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
