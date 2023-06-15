import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityDropzoneComponent } from './dropzone.component';

describe('DropzoneComponent', () => {
  let component: VelocityDropzoneComponent;
  let fixture: ComponentFixture<VelocityDropzoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityDropzoneComponent],
    });
    fixture = TestBed.createComponent(VelocityDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
