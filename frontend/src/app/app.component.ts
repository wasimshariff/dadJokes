import { Component } from '@angular/core';
import {JokeService} from './service/joke.service';
import {Joke} from './model/app.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  randomJoke: Joke | undefined;
  constructor(private jokeService: JokeService, private toastrService: ToastrService) {
  }
  getRandomJoke() {
      this.jokeService.getRandomJoke().subscribe(result => this.randomJoke = result,
                                                 error => this.toastrService.error(JSON.stringify(error)));
  }
}
