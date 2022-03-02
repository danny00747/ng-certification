import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {

  private _requests: HttpRequest<any>[];

  constructor() {
    this._isLoading$ = new BehaviorSubject<boolean>(false);
    this._requests = [];
  }

  private _isLoading$: BehaviorSubject<boolean>;

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  get isLoading(): boolean {
    return this._isLoading$.value;
  }

  start(req: HttpRequest<any>) {
    this._requests.push(req);
    this._isLoading$.next(true);
  }

  stop(req: HttpRequest<any>) {
    this._requests.splice(this._requests.indexOf(req), 1);
    if (this._requests.length === 0) {
      this._isLoading$.next(false);
    }
  }
}
