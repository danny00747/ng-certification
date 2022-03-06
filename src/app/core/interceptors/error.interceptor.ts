import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {WeatherService} from "@app/services";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private readonly weatherService: WeatherService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes('/weather')) {
            return next.handle(request)
                .pipe(
                    catchError((err: HttpErrorResponse) => {
                        if (err.status === 404) {
                            const zipCode = request.url.split('zip=')[1].substring(0, 5);
                            this.weatherService.removeZipCode(zipCode);
                        }
                        return throwError(err);
                    }),
                    retry(1)
                );
        } else {
            return next.handle(request);
        }
    }
}
