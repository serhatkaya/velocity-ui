import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VelocityOuterClickDirective } from './outer-click.directive';

const decex = [VelocityOuterClickDirective];

@NgModule({
  imports: [CommonModule],
  exports: [...decex],
  declarations: [...decex],
  providers: [],
})
export class VelocityDirectivesModule {}
