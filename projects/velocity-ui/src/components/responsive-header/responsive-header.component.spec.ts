import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityResponsiveHeaderComponent } from './responsive-header.component';

describe('ResponsiveHeaderComponent', () => {
  let component: VelocityResponsiveHeaderComponent;
  let fixture: ComponentFixture<VelocityResponsiveHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityResponsiveHeaderComponent],
    });
    fixture = TestBed.createComponent(VelocityResponsiveHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
