import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: VirtusToggleComponent;
  let fixture: ComponentFixture<VirtusToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusToggleComponent],
    });
    fixture = TestBed.createComponent(VirtusToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
