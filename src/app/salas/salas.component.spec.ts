import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalasComponent } from './salas.component';

describe('SalasComponent', () => {
  let component: SalasComponent;
  let fixture: ComponentFixture<SalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('No tiene título', () => {
    expect(document.querySelector(".h1")).toContain("<div _ngcontent-c1=' class='h1'>Salas</div>");
  });
});

