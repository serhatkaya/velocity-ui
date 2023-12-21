import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusStepComponent } from './step/step.component';
import { VirtusStepperComponent } from './stepper.component';
import { VirtusStepTitlePipe } from './step-title.pipe';

const impex = [
  VirtusStepperComponent,
  VirtusStepComponent,
  VirtusStepTitlePipe,
];

@NgModule({
  declarations: [...impex],
  imports: [CommonModule],
  exports: [...impex],
})
export class VirtusStepperModule {}
