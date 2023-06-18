import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusResponsiveHeaderComponent } from './responsive-header.component';

describe('ResponsiveHeaderComponent', () => {
  let component: VirtusResponsiveHeaderComponent;
  let fixture: ComponentFixture<VirtusResponsiveHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusResponsiveHeaderComponent],
    });
    fixture = TestBed.createComponent(VirtusResponsiveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
