import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocityStepComponent } from './step/step.component';
import { VelocityStepperComponent } from './stepper.component';

@NgModule({
  declarations: [VelocityStepperComponent, VelocityStepComponent],
  imports: [CommonModule],
  exports: [VelocityStepComponent, VelocityStepperComponent],
})
export class VelocityStepperModule {}
