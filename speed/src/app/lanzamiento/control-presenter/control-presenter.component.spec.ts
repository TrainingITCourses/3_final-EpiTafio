import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPresenterComponent } from './control-presenter.component';

describe('ControlPresenterComponent', () => {
  let component: ControlPresenterComponent;
  let fixture: ComponentFixture<ControlPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
