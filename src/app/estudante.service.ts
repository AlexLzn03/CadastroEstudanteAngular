import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'})
export class EstudanteService {
 
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
    private estudantesUrl = 'http://localhost:3000/heroes';

      /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`EstudanteService: ${message}`);
  }
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** GET estudantes from the server */
getEstudantes(): Observable<Estudante[]> {
  return this.http.get<Estudante[]>(this.estudantesUrl)
    .pipe(
      tap(_ => this.log('fetched estudantes')),
      catchError(this.handleError<Estudante[]>('getEstudantes', []))
    );
}
/** GET estudante by id. Will 404 if id not found */
getEstudante(id: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;
  return this.http.get<Estudante>(url).pipe(
    tap(_ => this.log(`fetched estudante id=${id}`)),
    catchError(this.handleError<Estudante>(`getEstudante id=${id}`))
  );
}

}