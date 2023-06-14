import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { VelocityToastPosition } from './toast-position.enum';
import { VelocityToastType } from './toast-type.enum';
import { VelocityToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class VelocityToastService {
  constructor(
    @Inject(DOCUMENT) protected document: Document,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected appRef: ApplicationRef,
    protected injector: Injector
  ) {}

  show(
    title: string,
    message: string,
    options: {
      position: VelocityToastPosition;
      type: VelocityToastType;
      timeOut?: number;
      afterOpen?: () => any;
    } = {
      position: VelocityToastPosition.TOP_RIGHT,
      type: VelocityToastType.SUCCESS,
      timeOut: 5000,
    }
  ) {
    const { type, position, timeOut, afterOpen } = options;
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        VelocityToastComponent
      );

    const componentRef = componentFactory.create(this.injector);
    const closeToast$ = (timeOut: number = 0) =>
      timer(timeOut).pipe(
        tap(() => {
          componentRef.location.nativeElement.children[0].classList.remove(
            'visible'
          );
        }),
        switchMap(() => timer(300)),
        take(1),
        tap(() => {
          this.appRef.detachView(componentRef.hostView);
          componentRef.destroy();
        })
      );

    const openToast$ = timer(0).pipe(
      take(1),
      tap(() => {
        componentRef.location.nativeElement.children[0].classList.add(
          'visible'
        );

        if (afterOpen) {
          afterOpen();
        }
      })
    );

    componentRef.instance.title = title;
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    componentRef.instance.position = position;
    componentRef.instance.closeToast = () => {
      closeToast$().subscribe();
    };

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.document.body.appendChild(domElem);

    openToast$.subscribe();

    // Close toast if has timeout
    if (timeOut && timeOut > 0) {
      closeToast$(timeOut).subscribe();
    }
    return {
      hide: () => {
        closeToast$().subscribe();
      },
    };
  }
}
