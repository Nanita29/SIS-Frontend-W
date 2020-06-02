import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaComponent } from './aaa.component';

describe('AaaComponent', () => {
  let component: AaaComponent;
  let fixture: ComponentFixture<AaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< Updated upstream
  it('prueba h1', () => {
    expect(document.getElementById("h1")).toContain("HOLA");
=======

  it('prueba h1', () => {
    expect(document.getElementById("h1").textContent).toEqual("HOLA");
>>>>>>> Stashed changes
  });
});
