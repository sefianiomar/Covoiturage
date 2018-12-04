import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamInput2Component } from './param-input2.component';

describe('ParamInput2Component', () => {
  let component: ParamInput2Component;
  let fixture: ComponentFixture<ParamInput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamInput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
