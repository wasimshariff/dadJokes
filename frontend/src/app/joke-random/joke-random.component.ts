import {Component, OnInit} from '@angular/core';
import {Joke} from '../model/app.model';
import {JokeService} from '../service/joke.service';
import {ToastrService} from 'ngx-toastr';

@Component({
             selector: 'app-joke-random',
             templateUrl: './joke-random.component.html',
             styleUrls: ['./joke-random.component.scss']
           })
export class JokeRandomComponent {

  randomJoke: Joke | undefined;

  constructor(private jokeService: JokeService, private toastrService: ToastrService) {
  }

  getRandomJoke() {
    this.jokeService.getRandomJoke().subscribe(result => this.randomJoke = result,
                                               error => this.toastrService.error(JSON.stringify(error)));
  }

}
