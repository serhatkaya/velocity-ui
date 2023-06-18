import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusStepComponent } from './step.component';

describe('StepComponent', () => {
  let component: VirtusStepComponent;
  let fixture: ComponentFixture<VirtusStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusStepComponent],
    });
    fixture = TestBed.createComponent(VirtusStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
