import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  VirtusDropzoneComponent,
  VirtusSidebarService,
  VirtusStepperComponent,
  VirtusToastPosition,
  VirtusToastService,
  VirtusToastType,
} from 'virtus-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('stepper') stepper!: VirtusStepperComponent;
  toggleState = true;
  myForm: FormGroup = new FormGroup({
    toggleState: new FormControl({
      value: false,
      disabled: false,
    }),
  });

  @ViewChild(VirtusDropzoneComponent)
  dropzoneComponent!: VirtusDropzoneComponent;

  constructor(
    toast: VirtusToastService,
    public sidebarService: VirtusSidebarService
  ) {
    toast.show('Title', 'Toast Message', {
      type: VirtusToastType.SUCCESS,
      position: VirtusToastPosition.TOP_RIGHT,
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
