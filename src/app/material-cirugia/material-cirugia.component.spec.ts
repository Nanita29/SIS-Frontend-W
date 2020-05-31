import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCirugiaComponent } from './material-cirugia.component';

describe('MaterialCirugiaComponent', () => {
  let component: MaterialCirugiaComponent;
  let fixture: ComponentFixture<MaterialCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
