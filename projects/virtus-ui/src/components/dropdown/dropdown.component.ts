import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  map,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { dropdownState } from '../../animations/dropdownState';
import { VirtusDropdownToggleDirective } from './dropdownToggle.directive';

@Component({
  selector: 'vui-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [dropdownState],
})
export class VirtusDropdownComponent implements AfterContentInit, OnDestroy {
  @Input() hoverMode: boolean = false;

  @ViewChild('wrapper', { static: true }) wrapper!: ElementRef;
  @ContentChild(VirtusDropdownToggleDirective, { static: true })
  toggleDirective!: VirtusDropdownToggleDirective;

  protected destroy$: Subject<any> = new Subject();
  public onEnterStream: EventEmitter<any> = new EventEmitter();
  public onLeaveStream: EventEmitter<any> = new EventEmitter();
  protected isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );
  public isOpen = false;
  public dropdownId = `dropdown-${Math.floor(Math.random() * 1000)}`;

  ngAfterContentInit(): void {
    if (this.toggleDirective && !this.hoverMode) {
      this.toggleDirective.onClick
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.toggleDropdown();
        });
    }

    if (this.hoverMode) {
      this.onEnterStream
        .pipe(
          takeUntil(this.destroy$),
          switchMap((val) =>
            timer(100).pipe(
              takeUntil(this.onLeaveStream),
              map(() => val)
            )
          ),
          tap(() => (this.isOpen = true))
        )
        .subscribe();

      this.onLeaveStream
        .pipe(
          takeUntil(this.destroy$),
          tap(() => (this.isOpen = false))
        )
        .subscribe();
    }
  }

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  public onOuterClick(target: HTMLElement): void {
    if (!this.wrapper.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
