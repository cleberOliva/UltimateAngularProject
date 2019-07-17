import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../auth/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Area } from './area.model';
import { API } from '../app.const';
import { catchError } from 'rxjs/operators';
import { Soil } from './soil.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private authUtil: AuthUtilService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Contenty-type': 'application/json',
      'Authorization': this.authUtil.currentTokenValue
    })
  };

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

  public addArea(area: Area, soil: number): Observable<string> {
    var body = new Area(area.description,area.geometry, soil);
    console.log(body);
    return this.http.post<string>(`${API.default}/area`, body, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    })
    .pipe(catchError(this.handleError));
  };

  public getAreaById(id: number): Observable<Area> {
    return this.http.get<Area>(`${API.default}/area/${id}`, {
      headers: this.getHeaders()
    })
    .pipe(catchError(this.handleError));
  }

  public updateArea(id: number, area: Area, soil: number): Observable<string> {
    var body = new Area(area.description, area.geometry, soil);
    body.id = id.toString();
    return this.http.put<string>(`${API.default}/area`, body, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    })
    .pipe(catchError(this.handleError));
  }

  public getSoil(): Observable<Soil[]> {
    return this.http.get<Soil[]>(`${API.default}/soil`, {
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError));
  }

  public delete(id: number): Observable<{}> {
    console.log("Parei aqui parça!" + String(id));
    return this.http.delete(`${API.default}/area/${id}`, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
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
