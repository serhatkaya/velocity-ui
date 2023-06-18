import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityStepComponent } from './step.component';

describe('StepComponent', () => {
  let component: VelocityStepComponent;
  let fixture: ComponentFixture<VelocityStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityStepComponent],
    });
    fixture = TestBed.createComponent(VelocityStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
