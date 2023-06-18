import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VirtusDirectivesModule } from '../../directives/directives.module';
import { VirtusPipesModule } from '../../pipes';
import { VirtusSidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [VirtusSidebarComponent],
  imports: [CommonModule, VirtusDirectivesModule, VirtusPipesModule],
  exports: [VirtusSidebarComponent],
})
export class VirtusSidebarModule {}
