import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VirtusSidebarService {
  private sidebarStatesSubject = new BehaviorSubject<{ [id: string]: boolean }>(
    {}
  );
  public sidebarStates$: Observable<{ [id: string]: boolean }> =
    this.sidebarStatesSubject.asObservable();

  constructor() {}

  isOpen(id: string): boolean {
    return this.sidebarStatesSubject.value[id] ?? false;
  }

  private updateSidebarState(id: string, state: boolean): void {
    const states = { ...this.sidebarStatesSubject.value };
    states[id] = state;
    this.sidebarStatesSubject.next(states);
  }

  open(id: string): void {
    this.updateSidebarState(id, true);
  }

  close(id: string): void {
    this.updateSidebarState(id, false);
  }

  toggle(id: string): void {
    const isOpen = this.isOpen(id);
    this.updateSidebarState(id, !isOpen);
  }

  isOpenAsync(id: string): Observable<boolean> {
    return this.sidebarStates$.pipe(map((states) => !!states[id]));
  }
}
