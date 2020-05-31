import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevasalaComponent } from './nuevasala.component';

describe('NuevasalaComponent', () => {
  let component: NuevasalaComponent;
  let fixture: ComponentFixture<NuevasalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevasalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
