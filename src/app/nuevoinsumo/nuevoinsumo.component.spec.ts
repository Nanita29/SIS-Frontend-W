import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoinsumoComponent } from './nuevoinsumo.component';

describe('NuevoinsumoComponent', () => {
  let component: NuevoinsumoComponent;
  let fixture: ComponentFixture<NuevoinsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoinsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoinsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
