import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusDropzoneComponent } from './dropzone.component';

describe('DropzoneComponent', () => {
  let component: VirtusDropzoneComponent;
  let fixture: ComponentFixture<VirtusDropzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusDropzoneComponent],
    });
    fixture = TestBed.createComponent(VirtusDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
