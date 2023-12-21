import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
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
    protected toast: VirtusToastService,
    public sidebarService: VirtusSidebarService,
    @Inject(DOCUMENT) protected doc: Document
  ) {
    this.toast.show('Title', 'Welcome to Virtus-UI', {
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

  toastMsg(type: string) {
    const toastMap = {
      [VirtusToastType.ERROR]: () =>
        this.toast.show('Error!', 'Something happened!', {
          position: VirtusToastPosition.BOTTOM_CENTER,
          type: VirtusToastType.ERROR,
          timeOut: 3000,
        }),
      [VirtusToastType.INFO]: () =>
        this.toast.show('Info', 'Some info', {
          position: VirtusToastPosition.TOP_CENTER,
          type: VirtusToastType.INFO,
          timeOut: 3000,
        }),
      [VirtusToastType.SUCCESS]: () =>
        this.toast.show('Succes!', 'Operation successful', {
          position: VirtusToastPosition.CENTER_LEFT,
          type: VirtusToastType.SUCCESS,
          timeOut: 3000,
        }),
      [VirtusToastType.WARNING]: () =>
        this.toast.show('Warning!', 'Possible memory leak detected!', {
          position: VirtusToastPosition.CENTER_RIGHT,
          type: VirtusToastType.WARNING,
          timeOut: 3000,
        }),
    };
    // @ts-ignore
    toastMap[type]();
  }

  closeAllToasts() {
    this.toast.clearAll();
  }
}
