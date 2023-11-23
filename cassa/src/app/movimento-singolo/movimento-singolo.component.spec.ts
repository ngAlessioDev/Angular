import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoSingoloComponent } from './movimento-singolo.component';

describe('MovimentoSingoloComponent', () => {
  let component: MovimentoSingoloComponent;
  let fixture: ComponentFixture<MovimentoSingoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentoSingoloComponent]
    });
    fixture = TestBed.createComponent(MovimentoSingoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
