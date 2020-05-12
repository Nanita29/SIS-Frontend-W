import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoComponent } from './insumo.component';

describe('InsumoComponent', () => {
  let component: InsumoComponent;
  let fixture: ComponentFixture<InsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
