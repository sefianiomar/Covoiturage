import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamInput1Component } from './param-input1.component';

describe('ParamInput1Component', () => {
  let component: ParamInput1Component;
  let fixture: ComponentFixture<ParamInput1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamInput1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamInput1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
