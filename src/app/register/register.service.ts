import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { API } from '../app.const';
import { catchError } from 'rxjs/operators';
import { AuthUtilService } from '../auth/auth-util.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(
    private http: HttpClient,
    private authUtilService: AuthUtilService
  ) { }

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.authUtilService.currentTokenValue
    })
  }

  public addUser(user: User): Observable<string> {
    var body = new User(user.name, user.mail, user.phone, user.password, moment(user.birth).format("YYYY-MM-DDTHH:mm:ssZZ"), 1, 1);
    console.log(moment(user.birth).format("YYYY-MM-DDTHH:mm:ssZZ"));
    console.log(body);
    return this.http.post<string>(`${API.default}/person`, body, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    })
    .pipe(catchError(this.handleError));
  };

  public getUser(): Observable<User> {
    return this.http.get<User>(`${API.default}/person`, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.handleError));
  };

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
