import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: VirtusSidebarComponent;
  let fixture: ComponentFixture<VirtusSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusSidebarComponent],
    });
    fixture = TestBed.createComponent(VirtusSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
