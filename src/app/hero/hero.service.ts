import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../messages/messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from '../model/hero.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
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
  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}.`);
  }

  constructor(private messageService: MessageService, private http: HttpClient) { }

  addHero(hero: Hero): Observable<any> {
    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((newHero: Hero) => this.log(`HeroService: Add Hero ID=${newHero.id} Name=${newHero.name}.`)),
      catchError(this.handleError<any>(`addHero`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`HeroService: Update Hero ID=${hero.id}.`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`Deleted Hero ID=${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('Hero list fetched')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetch Hero, ID: ${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  searchHero(term: string): Observable<Hero[]> {
    if (!term.trim()) { return of([]); }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`Hero Search ${term}`)),
      catchError(this.handleError<Hero[]>('searchHero', []))
    );

  }

}
