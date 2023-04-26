import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ResponseDTO } from '../DTO/ResponseDTO';
import { globalEnum } from '../globalEnum';
import { Usuario } from './Usuario';

@Injectable({ providedIn: "root" })
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(globalEnum.url + "api/users").pipe(catchError(this.handleError));
  }

 
  getUsersByNameOrCorreo(nameOrEmail: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(globalEnum.url + "api/users/" + nameOrEmail).pipe(catchError(this.handleError));
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(globalEnum.url + "api/users", usuario).pipe(catchError(this.handleError));
  }

  deleteUsuario(id: number): Observable<ResponseDTO> {
    return this.http.delete<ResponseDTO>(globalEnum.url + "api/users/" + id).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or0network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
