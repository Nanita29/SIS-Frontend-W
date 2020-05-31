import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCirugiaComponent } from './personal-cirugia.component';

describe('PersonalCirugiaComponent', () => {
  let component: PersonalCirugiaComponent;
  let fixture: ComponentFixture<PersonalCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
