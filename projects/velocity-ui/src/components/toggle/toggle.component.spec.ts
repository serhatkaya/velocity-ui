import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: VelocityToggleComponent;
  let fixture: ComponentFixture<VelocityToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityToggleComponent],
    });
    fixture = TestBed.createComponent(VelocityToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
