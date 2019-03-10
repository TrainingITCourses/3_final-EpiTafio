import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzamientoContainerComponent } from './lanzamiento-container.component';

describe('LanzamientoContainerComponent', () => {
  let component: LanzamientoContainerComponent;
  let fixture: ComponentFixture<LanzamientoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanzamientoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanzamientoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
