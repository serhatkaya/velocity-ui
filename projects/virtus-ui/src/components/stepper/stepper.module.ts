import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusStepComponent } from './step/step.component';
import { VirtusStepperComponent } from './stepper.component';

@NgModule({
  declarations: [VirtusStepperComponent, VirtusStepComponent],
  imports: [CommonModule],
  exports: [VirtusStepComponent, VirtusStepperComponent],
})
export class VirtusStepperModule {}
