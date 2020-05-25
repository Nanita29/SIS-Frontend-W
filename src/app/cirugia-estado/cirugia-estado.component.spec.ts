import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaEstadoComponent } from './cirugia-estado.component';

describe('CirugiaEstadoComponent', () => {
  let component: CirugiaEstadoComponent;
  let fixture: ComponentFixture<CirugiaEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirugiaEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirugiaEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
