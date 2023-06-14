import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityAlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: VelocityAlertComponent;
  let fixture: ComponentFixture<VelocityAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VelocityAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocityAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
