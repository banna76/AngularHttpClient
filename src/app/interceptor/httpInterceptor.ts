import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs'

import{
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable < HttpEvent<any> >{
     console.log('Http Request has been Intercepted.');
     return next.handle(req);
    }
}