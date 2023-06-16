import { Component, ViewChild } from '@angular/core';
import {
  VelocityDropzoneComponent,
  VelocitySidebarService,
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
}
