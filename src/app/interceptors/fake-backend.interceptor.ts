import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadedData } from '../api/data/data.service';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  fake: LoadedData = {
    title: 'chidume nnamdi',
  };

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') { return of(new HttpResponse({ status: 200, body: this.fake })); }
    else { next.handle(req); }
  }
}
