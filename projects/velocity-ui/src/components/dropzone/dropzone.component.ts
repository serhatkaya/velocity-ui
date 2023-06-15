import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'vui-dropzone',
  templateUrl: './dropzone.component.html',
})
export class VelocityDropzoneComponent {
  droppedFiles: File[] = [];
  @Output() fileDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter<boolean>();

  isFileHovered: boolean = false;

  public onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.filesHovered.emit(true);
    this.isFileHovered = true;
  }

  public onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.filesHovered.emit(false);
    this.isFileHovered = false;
  }

  public onDrop(event: DragEvent): void {
    event.preventDefault();
    this.filesHovered.emit(false);
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.droppedFiles.push(...Array.from(files));
      this.fileDropped.emit(files);
    }
    this.isFileHovered = false;
  }

  protected getDroppedFiles(): File[] {
    return this.droppedFiles;
  }
  getFileSize(size: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return `${size.toFixed(2)} ${units[index]}`;
  }
}
