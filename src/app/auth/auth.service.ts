import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getDefaultURL } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  getHttpOptions(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'text/plain'
    });
  }

  public login = (login: string, password: string): Observable<string> => {
    const toAdd = JSON.stringify({ email: login, senha: password });
    return (
      this.http
        .post<string>(getDefaultURL('auth'), toAdd, { headers: this.getHttpOptions(), responseType: 'text' as 'json' })
        .pipe(catchError(this.handleError))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      // return an observable with a user-facing error message
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  public logout = (): void => {
    localStorage.removeItem('token');
  }
}
