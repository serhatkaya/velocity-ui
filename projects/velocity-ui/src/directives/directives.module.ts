import { NgModule } from '@angular/core';
import { VelocityOuterClickDirective } from './outer-click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [VelocityOuterClickDirective],
  declarations: [VelocityOuterClickDirective],
  providers: [],
})
export class VelocityDirectivesModule {}
