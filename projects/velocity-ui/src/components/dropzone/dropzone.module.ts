import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { VelocityDropzoneComponent } from './dropzone.component';
import { VelocityDropzoneFormatSizePipe } from './formatSize.pipe';
export interface VelocityDropzoneModuleConfig {
  fileSizePipe: Type<any>;
}

@NgModule({
  declarations: [VelocityDropzoneComponent, VelocityDropzoneFormatSizePipe],
  imports: [CommonModule],
  exports: [VelocityDropzoneComponent],
})
export class VelocityDropzoneModule {
  static withConfig(
    config: VelocityDropzoneModuleConfig
  ): ModuleWithProviders<VelocityDropzoneModule> {
    return {
      ngModule: VelocityDropzoneModule,
      providers: [
        {
          provide: VelocityDropzoneFormatSizePipe,
          useClass: config.fileSizePipe,
        },
      ],
    };
  }
}
