import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  fake = {
    data: 'chidume nnamdi',
  };

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') { return of(new HttpResponse({ status: 200, body: this.fake })); }
    else { next.handle(req); }
  }
}
