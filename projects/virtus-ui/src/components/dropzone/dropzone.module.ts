import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { VirtusDropzoneComponent } from './dropzone.component';
import { VirtusDropzoneFormatSizePipe } from './formatSize.pipe';
export interface VirtusDropzoneModuleConfig {
  fileSizePipe: Type<any>;
}

@NgModule({
  declarations: [VirtusDropzoneComponent, VirtusDropzoneFormatSizePipe],
  imports: [CommonModule],
  exports: [VirtusDropzoneComponent],
})
export class VirtusDropzoneModule {
  static withConfig(
    config: VirtusDropzoneModuleConfig
  ): ModuleWithProviders<VirtusDropzoneModule> {
    return {
      ngModule: VirtusDropzoneModule,
      providers: [
        {
          provide: VirtusDropzoneFormatSizePipe,
          useClass: config.fileSizePipe,
        },
      ],
    };
  }
}
