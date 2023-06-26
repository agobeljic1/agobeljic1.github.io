import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MouseService {
  private _status: BehaviorSubject<string> = new BehaviorSubject<string>(
    'closed'
  );
  status$: Observable<string> = this._status.asObservable();

  setLastStatus(status: string) {
    this._status.next(status);
  }

  getLastStatus(): BehaviorSubject<string> {
    return this._status;
  }
}
