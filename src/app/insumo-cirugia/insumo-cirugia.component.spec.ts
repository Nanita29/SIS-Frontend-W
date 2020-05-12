import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumoCirugiaComponent } from './insumo-cirugia.component';

describe('InsumoCirugiaComponent', () => {
  let component: InsumoCirugiaComponent;
  let fixture: ComponentFixture<InsumoCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsumoCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsumoCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
