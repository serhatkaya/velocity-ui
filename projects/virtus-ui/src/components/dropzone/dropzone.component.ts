import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Component({
  selector: 'vui-dropzone',
  templateUrl: './dropzone.component.html',
})
export class VirtusDropzoneComponent {
  constructor(@Inject(DOCUMENT) protected document: Document) {}

  @Output() fileDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<File[]>();
  @Input() clickToUpload: boolean = false;
  @Input() multiple: boolean = true;
  protected droppedFilesSubject = new BehaviorSubject<File[]>([]);
  public droppedFiles$ = this.droppedFilesSubject
    .asObservable()
    .pipe(tap((files) => this.onChange.emit(files)));

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
      this.insert(Array.from(files));
      this.fileDropped.emit(files);
    }
    this.isFileHovered = false;
  }

  public removeFile(i: number) {
    const current = this.droppedFilesSubject.value;
    current.splice(i, 1);
    this.droppedFilesSubject.next(current);
  }

  private insert(newFiles: File[]) {
    const current = this.droppedFilesSubject.value;
    const updatedValue = [...current, ...newFiles];
    this.droppedFilesSubject.next(this.multiple ? updatedValue : [newFiles[0]]);
  }

  public onClickDropzone(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target || (target && target.classList?.contains('remove-icon'))) {
      return;
    }

    const fileSelector = this.document.createElement('input');
    fileSelector.type = 'file';
    this.multiple && fileSelector.setAttribute('multiple', '');
    fileSelector.onchange = () => {
      const selectedFiles = fileSelector?.files ?? [];
      this.insert(Array.from(selectedFiles));
      fileSelector.remove();
    };

    fileSelector.click();
  }

  public getDroppedFiles(): File[] {
    return this.droppedFilesSubject.value;
  }

  public getDroppedFilesAsync(): Observable<File[]> {
    return this.droppedFiles$;
  }

  public removeAllFiles() {
    this.droppedFilesSubject.next([]);
  }
}
