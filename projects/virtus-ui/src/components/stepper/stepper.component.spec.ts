import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusStepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: VirtusStepperComponent;
  let fixture: ComponentFixture<VirtusStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusStepperComponent],
    });
    fixture = TestBed.createComponent(VirtusStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
