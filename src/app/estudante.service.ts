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
 
  private estudantesUrl = 'http://localhost:3000/estudantes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

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

/** PUT: update the hero on the server */
updateEstudante(estudante: Estudante): Observable<any> {
  return this.http.put(this.estudantesUrl, estudante, this.httpOptions).pipe(
    tap(_ => this.log(`updated estudante id=${estudante.id}`)),
    catchError(this.handleError<any>('updateEstudante'))
  );
  }
  /** POST: add a new hero to the server */
addEstudante(estudante: Estudante): Observable<Estudante> {
  return this.http.post<Estudante>(this.estudantesUrl, estudante, this.httpOptions).pipe(
    tap((newEstudante: Estudante) => this.log(`added estudante w/ id=${newEstudante.id}`)),
    catchError(this.handleError<Estudante>('addEstudante'))
  );
}
/** DELETE: delete the hero from the server */
deleteEstudante(id: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;

  return this.http.delete<Estudante>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted estudante id=${id}`)),
    catchError(this.handleError<Estudante>('deleteEstudante'))
  );
}
/* GET heroes whose name contains search term */
searchEstudantes(term: string): Observable<Estudante[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Estudante[]>(`${this.estudantesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found estudantes matching "${term}"`) :
       this.log(`no estudantes matching "${term}"`)),
    catchError(this.handleError<Estudante[]>('searchEstudantes', []))
  );
}
}