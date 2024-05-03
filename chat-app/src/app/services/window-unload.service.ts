import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowUnloadService {

  private unloadSubject: Subject<void> = new Subject<void>();

  constructor() {
    window.addEventListener('beforeunload', () => {
      this.unloadSubject.next();
    });
  }

  getUnloadEvent(): Observable<void> {
    return this.unloadSubject.asObservable();
  }
}
