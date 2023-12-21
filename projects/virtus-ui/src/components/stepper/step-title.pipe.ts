import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuiStepTitle',
})
export class VirtusStepTitlePipe implements PipeTransform {
  transform(value: {
    showOnlyActiveStepTitle: boolean;
    title: string;
    index: number;
    activeStepIndex: number;
  }): any {
    const { showOnlyActiveStepTitle, title, index, activeStepIndex } = value;

    const getFinalTitle = () => `${title}`;

    if (showOnlyActiveStepTitle && index === activeStepIndex) {
      return getFinalTitle();
    } else if (!showOnlyActiveStepTitle) {
      return getFinalTitle();
    }
  }
}
