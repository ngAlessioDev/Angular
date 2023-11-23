import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGiochiComponent } from './lista-giochi.component';

describe('ListaGiochiComponent', () => {
  let component: ListaGiochiComponent;
  let fixture: ComponentFixture<ListaGiochiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGiochiComponent]
    });
    fixture = TestBed.createComponent(ListaGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
