import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityAccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: VelocityAccordionComponent;
  let fixture: ComponentFixture<VelocityAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VelocityAccordionComponent],
    });
    fixture = TestBed.createComponent(VelocityAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
