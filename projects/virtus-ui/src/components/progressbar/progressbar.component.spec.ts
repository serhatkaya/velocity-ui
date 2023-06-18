import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
  let component: VirtusProgressbarComponent;
  let fixture: ComponentFixture<VirtusProgressbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusProgressbarComponent],
    });
    fixture = TestBed.createComponent(VirtusProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
