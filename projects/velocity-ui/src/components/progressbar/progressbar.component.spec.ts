import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityProgressbarComponent } from './progressbar.component';

describe('ProgressbarComponent', () => {
  let component: VelocityProgressbarComponent;
  let fixture: ComponentFixture<VelocityProgressbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityProgressbarComponent],
    });
    fixture = TestBed.createComponent(VelocityProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
