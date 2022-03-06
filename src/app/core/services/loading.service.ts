import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoadingService {

  private requests: HttpRequest<any>[];

  private isLoading$: BehaviorSubject<boolean>;

  constructor() {
    this.isLoading$ = new BehaviorSubject<boolean>(false);
    this.requests = [];
  }

  get isLoading(): Observable<boolean> {
    return this.isLoading$.asObservable();
  }

  start(req: HttpRequest<any>) {
    this.requests.push(req);
    this.isLoading$.next(true);
  }

  stop(req: HttpRequest<any>) {
    this.requests.splice(this.requests.indexOf(req), 1);
    if (this.requests.length === 0) {
      this.isLoading$.next(false);
    }
  }
}
