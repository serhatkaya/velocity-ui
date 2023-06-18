import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusOuterClickDirective } from './outer-click.directive';

const decex = [VirtusOuterClickDirective];

@NgModule({
  imports: [CommonModule],
  exports: [...decex],
  declarations: [...decex],
  providers: [],
})
export class VirtusDirectivesModule {}
