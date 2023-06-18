import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityStepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: VelocityStepperComponent;
  let fixture: ComponentFixture<VelocityStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityStepperComponent],
    });
    fixture = TestBed.createComponent(VelocityStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
