import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Joke} from '../model/app.model';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class JokeService {

  private static readonly randomJokesUrl = "api/jokes/random";
  private static readonly jokesListUrl = "api/jokes/";
  private static readonly topNJokes = "api/jokes/top/";
  private static readonly bottomNJokes = "api/jokes/bottom/";
  private static readonly activeNJokes = "api/jokes/active/";

  constructor(private httpService: HttpClient) {
  }

  getRandomJoke(): Observable<Joke> {
    return this.httpService.get<Joke>(JokeService.randomJokesUrl).pipe(catchError(this.handleError));
  }

  listAllJokes(searchValue: string): Observable<Joke[]> {
    return this.httpService.get<Joke[]>(`${JokeService.jokesListUrl}?filter=${searchValue}`).pipe(
      catchError(this.handleError));
  }

  getJokeById(id: number): Observable<Joke> {
    return this.httpService.get<Joke>(`${JokeService.jokesListUrl}${id}`).pipe(catchError(this.handleError));
  }

  updateJoke(jokeDetail: any) {
    return this.httpService.put<Joke>(`${JokeService.jokesListUrl}${jokeDetail.id}`, jokeDetail).pipe(
      catchError(this.handleError));
  }

  getTopNJokesByLikes(n: number): Observable<Joke[]> {
    return this.httpService.get<Joke[]>(`${JokeService.topNJokes}${n}`).pipe(catchError(this.handleError));
  }

  getTopNJokesByDisLikes(n: number): Observable<Joke[]> {
    return this.httpService.get<Joke[]>(`${JokeService.bottomNJokes}${n}`).pipe(catchError(this.handleError));
  }

  getTopNMostInteractedJokes(n: number): Observable<Joke[]> {
    return this.httpService.get<Joke[]>(`${JokeService.activeNJokes}${n}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.log(JSON.stringify(error));
    let errorMsg: string = '';
    if (error.error instanceof Error) {
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = `Error: ${error.status} :: ${error.message}`
    }
    return throwError(errorMsg);
  }

}
