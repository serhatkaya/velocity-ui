import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocitySidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: VelocitySidebarComponent;
  let fixture: ComponentFixture<VelocitySidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocitySidebarComponent],
    });
    fixture = TestBed.createComponent(VelocitySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
