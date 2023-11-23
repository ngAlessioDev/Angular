import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaGiochiComponent } from './crea-giochi.component';

describe('CreaGiochiComponent', () => {
  let component: CreaGiochiComponent;
  let fixture: ComponentFixture<CreaGiochiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaGiochiComponent]
    });
    fixture = TestBed.createComponent(CreaGiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
