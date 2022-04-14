import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistrosComponent } from './list-registros.component';

describe('ListRegistrosComponent', () => {
  let component: ListRegistrosComponent;
  let fixture: ComponentFixture<ListRegistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRegistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
