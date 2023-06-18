import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtusAccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: VirtusAccordionComponent;
  let fixture: ComponentFixture<VirtusAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VirtusAccordionComponent],
    });
    fixture = TestBed.createComponent(VirtusAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
