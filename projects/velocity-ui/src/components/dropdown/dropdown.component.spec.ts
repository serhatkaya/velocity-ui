import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityDropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: VelocityDropdownComponent;
  let fixture: ComponentFixture<VelocityDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityDropdownComponent],
    });
    fixture = TestBed.createComponent(VelocityDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
