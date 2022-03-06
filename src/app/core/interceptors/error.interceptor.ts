import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, filter, tap} from 'rxjs/operators';
import {CacheService} from "@app/classes/cache.service";
import {WeatherService} from "@app/services";

@Injectable()
export class ErrorInterceptor extends CacheService implements HttpInterceptor {
    constructor(private readonly weatherService: WeatherService) {
        super();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('/weather')) {
            return next.handle(request)
                .pipe(
                    filter((event: HttpEvent<any>) => event instanceof HttpResponse && event.status === 200),
                    tap(() => this.weatherService.setZipCodeNotFound(null)),
                    catchError((err: HttpErrorResponse) => {
                        if (err.status === 404) {
                            const zipCode = request.url.split('zip=')[1].substring(0, 5);
                            this.weatherService.removeZipCode(zipCode);
                        }
                        return throwError(err);
                    }));
        } else {
            return next.handle(request);
        }

    }
}
