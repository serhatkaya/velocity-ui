import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusAlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: VirtusAlertComponent;
  let fixture: ComponentFixture<VirtusAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VirtusAlertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtusAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
