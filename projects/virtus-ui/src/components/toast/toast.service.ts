import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { VirtusToastPosition } from './toast-position.enum';
import { VirtusToastType } from './toast-type.enum';
import { VirtusToastComponent } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class VirtusToastService {
  protected toastRefs: ComponentRef<VirtusToastComponent>[] = [];
  constructor(
    @Inject(DOCUMENT) protected document: Document,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected appRef: ApplicationRef,
    protected injector: Injector
  ) {}

  public show(
    title: string,
    message: string,
    options: {
      position: VirtusToastPosition;
      type: VirtusToastType;
      timeOut?: number;
      afterOpen?: () => any;
    } = {
      position: VirtusToastPosition.TOP_RIGHT,
      type: VirtusToastType.SUCCESS,
      timeOut: 5000,
    }
  ) {
    const { type, position, timeOut, afterOpen } = options;
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        VirtusToastComponent
      );

    const componentRef = componentFactory.create(this.injector);
    const clearToast$ = (timeOut: number = 0) =>
      timer(timeOut).pipe(
        tap(() => {
          componentRef.location.nativeElement.children[0].classList.remove(
            'visible'
          );
        }),
        switchMap(() => timer(timeOut)),
        take(1),
        tap(() => {
          this.appRef.detachView(componentRef.hostView);
          componentRef.destroy();
        })
      );

    const openToast$ = timer(0).pipe(
      take(1),
      tap(() => {
        componentRef.location.nativeElement.children[0]?.classList.add(
          'visible'
        );

        afterOpen && afterOpen();
        this.toastRefs.push(componentRef);
      })
    );

    componentRef.instance.title = title;
    componentRef.instance.message = message;
    componentRef.instance.type = type;
    componentRef.instance.position = position;
    componentRef.instance.clearToast = () => clearToast$().subscribe();

    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.document.body.appendChild(domElem);

    openToast$.subscribe();

    // clear toast if has timeout
    timeOut && clearToast$(timeOut).subscribe();

    return {
      clear: (timer: number = 0): void => {
        clearToast$(timer).subscribe();
      },
    };
  }

  public clearAll(): void {
    this.toastRefs.forEach((toast) => toast.instance.clearToast());
  }
}
