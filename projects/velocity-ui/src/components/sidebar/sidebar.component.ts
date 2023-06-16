import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { VelocitySidebarService } from './sidebar.service';

@Component({
  selector: 'vui-sidebar',
  templateUrl: './sidebar.component.html',
})
export class VelocitySidebarComponent implements OnInit {
  constructor(protected sidebarService: VelocitySidebarService) {}
  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;

  @Input() id!: string;
  @Input() title!: string;
  @Input() customHeader: boolean = false;
  @Input() position: 'left' | 'right' = 'right';
  public isOpen = false;
  public isOpen$: Observable<boolean> = of(false);
  public isOpenDelayed$: Observable<boolean> = of(false);

  ngOnInit(): void {
    this.isOpen$ = this.sidebarService
      .isOpenAsync(this.id)
      .pipe(tap((state: boolean) => (this.isOpen = state)));

    this.isOpenDelayed$ = this.isOpen$.pipe(delay(100));
  }

  public closeSidebar(): void {
    this.sidebarService.close(this.id);
  }

  onOuterClick(target: HTMLElement) {
    if (!this.wrapper.nativeElement.contains(target)) {
      this.closeSidebar();
    }
  }
}
