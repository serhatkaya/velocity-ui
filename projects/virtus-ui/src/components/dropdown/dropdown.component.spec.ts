import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusDropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: VirtusDropdownComponent;
  let fixture: ComponentFixture<VirtusDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusDropdownComponent],
    });
    fixture = TestBed.createComponent(VirtusDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
