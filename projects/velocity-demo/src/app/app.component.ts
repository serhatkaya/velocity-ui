import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  VelocityDropzoneComponent,
  VelocitySidebarService,
  VelocityStepperComponent,
  VelocityToastPosition,
  VelocityToastService,
  VelocityToastType,
} from 'velocity-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('stepper') stepper!: VelocityStepperComponent;
  toggleState = true;
  myForm: FormGroup = new FormGroup({
    toggleState: new FormControl({
      value: false,
      disabled: false,
    }),
  });

  @ViewChild(VelocityDropzoneComponent)
  dropzoneComponent!: VelocityDropzoneComponent;

  constructor(
    toast: VelocityToastService,
    public sidebarService: VelocitySidebarService
  ) {
    toast.show('Title', 'Toast Message', {
      type: VelocityToastType.SUCCESS,
      position: VelocityToastPosition.TOP_RIGHT,
      timeOut: 5000,
    });
  }

  onFileDropped(data: any) {
    console.log(data, 'drop');
  }

  onFilesHovered(data: any) {
    console.log('hoverfile', data);
  }

  getFiles() {
    console.log(this.dropzoneComponent.getDroppedFiles());
  }

  toggleStateChange(e: any) {
    console.log(e, 'toggleState Model changed');
  }

  nextStep() {
    this.stepper.nextStep();
  }
}
