import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopersonalComponent } from './nuevopersonal.component';

describe('NuevopersonalComponent', () => {
  let component: NuevopersonalComponent;
  let fixture: ComponentFixture<NuevopersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevopersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevopersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
