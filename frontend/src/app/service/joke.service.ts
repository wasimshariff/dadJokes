import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Joke} from '../model/app.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
              providedIn: 'root'
            })
export class JokeService {

  private static readonly url = "api/jokes/random";

  constructor(private httpService: HttpClient) { }

  getRandomJoke() {
    return this.httpService.get<Joke>(JokeService.url).pipe(catchError(this.handleError));
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
