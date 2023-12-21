import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { VirtusStepComponent } from './step/step.component';

@Component({
  selector: 'vui-stepper',
  templateUrl: './stepper.component.html',
})
export class VirtusStepperComponent implements AfterContentInit {
  protected destroy$ = new Subject();
  @Input() navigation: boolean = true;
  @Input() enableGoBack: boolean = true;
  @Input() showOnlyActiveStepTitle: boolean = false;
  @Input() showStepNumber: boolean = false;
  @Input() stepNumberDelimiter: string = '-';
  @Input() renderHeader: boolean = true;
  @ContentChildren(VirtusStepComponent)
  steps!: QueryList<VirtusStepComponent>;

  activeStepIndex: number = 0;

  ngAfterContentInit(): void {
    this.updateStepVisibility();
    const stepsArr = this.steps.toArray();

    stepsArr.forEach((step, index) => {
      step.broadcaster
        .pipe(takeUntil(this.destroy$))
        .subscribe((event: 'next' | 'previous') => {
          switch (event) {
            case 'next':
              if (!(index + 1 > stepsArr.length - 1)) {
                this.nextStep();
              }
              break;
            case 'previous':
              if (index > 0) {
                this.prevStep();
              }
              break;
            default:
              break;
          }
        });
    });
  }

  public prevStep(): void {
    if (this.enableGoBack && this.activeStepIndex > 0) {
      this.activeStepIndex--;
      this.updateStepVisibility();
    }
  }

  public nextStep(): void {
    if (this.activeStepIndex < this.steps.length - 1) {
      const currentStep = this.steps.toArray()[this.activeStepIndex];
      if (currentStep.condition) {
        this.activeStepIndex++;
        this.updateStepVisibility();
      }
    }
  }

  public updateStepVisibility(): void {
    this.steps.toArray().forEach((step, index) => {
      step.visible = index === this.activeStepIndex;
    });
  }

  public setActiveStepById(id: string) {
    const stepsArr = this.steps.toArray();
    const step = stepsArr.find((x) => x.id === id);
    if (!step) {
      console.warn(`[VirtusStepperComponent] Step with id "${id}" not found`);
      return;
    }

    this.activeStepIndex = stepsArr.findIndex((x) => x.id === id);
  }

  public getCurrentStep() {
    return this.steps.toArray()[this.activeStepIndex];
  }
}
