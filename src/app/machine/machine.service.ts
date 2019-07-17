import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthUtilService } from '../auth/auth-util.service';
import { Observable, throwError } from 'rxjs';
import { Machine } from './machine.model';
import { API } from '../app.const';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  constructor(private http: HttpClient, private authUtil: AuthUtilService) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.authUtil.currentTokenValue
    })
  };

  public getAll(): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${API.default}/machine`,{
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError));
  }
  public getById(id: number): Observable<Machine> {
    return this.http.get<Machine>(`${API.default}/machine/${id}`,{
      headers: this.getHeaders()
    }).pipe(catchError(this.handleError));
  }

  public addMachine(machine: Machine, person: number): Observable<string> {
    var body = new Machine(machine.year, machine.description, person);
    return this.http.post<string>(`${API.default}/machine`, body, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    }).pipe(catchError(this.handleError));
  }

  public updateMachine(id: number, machine: Machine, person: number): Observable<string> {
    var body = new Machine(String(machine.year), machine.description, person);
    body.id = id;
    console.log(body);
    return this.http.put<string>(`${API.default}/machine`, body, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    }).pipe(catchError(this.handleError));
  }

  public delete(id: number): Observable<{}> {
    return this.http.delete(`${API.default}/machine/${id}`, {
      headers: this.getHeaders(),
      responseType: "text" as "json"
    }).pipe(catchError(this.handleError));
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
