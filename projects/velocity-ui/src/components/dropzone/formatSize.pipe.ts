import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSize',
})
export class VelocityDropzoneFormatSizePipe implements PipeTransform {
  transform(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return `${size.toFixed(2)} ${units[index]}`;
  }
}
