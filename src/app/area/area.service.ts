import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../auth/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Area } from './area.model';
import { API } from '../app.const';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService) { }

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.authUtil.currentTokenValue
    });
  }

  public getAll(): Observable<Area[]> {
    return this.http
    .get<Area[]>(`${API.default}/area`, {
      headers: this.getHeaders()
    })
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }
}
