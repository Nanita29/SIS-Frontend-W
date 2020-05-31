import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevomaterialComponent } from './nuevomaterial.component';

describe('NuevomaterialComponent', () => {
  let component: NuevomaterialComponent;
  let fixture: ComponentFixture<NuevomaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevomaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevomaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
