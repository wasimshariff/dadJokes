import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {JokeService} from '../service/joke.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Joke} from '../model/app.model';

@Component({
             selector: 'app-analytics',
             templateUrl: './analytics.component.html',
             styleUrls: ['./analytics.component.scss']
           })
export class AnalyticsComponent implements OnInit {

  mostLikedJokes: Joke[] = [];

  mostDisLikedJokes: Joke[] = [];

  mostInteractedJokes: Joke[] = [];

  likedColumns: string[] = ['text', 'upVotes'];

  disLikedColumns: string[] = ['text', 'downVotes'];

  mostInteractedColumns: string[] = ['text', 'interactionCount'];

  topNValuesArray: number[] = [5, 10, 20];

  topNValue: number = 5;

  @ViewChild('myForm') myForm: ElementRef | undefined;

  constructor(private jokeService: JokeService, private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getTopNData();

  }

  private getTopNData() {
    this.jokeService.getTopNJokesByLikes(this.topNValue).subscribe(result => this.mostLikedJokes = result,
                                                                   error => this.toastrService.error(
                                                                     JSON.stringify(error)));

    this.jokeService.getTopNJokesByDisLikes(this.topNValue).subscribe(result => this.mostDisLikedJokes = result,
                                                                      error => this.toastrService.error(
                                                                        JSON.stringify(error)));

    this.jokeService.getTopNMostInteractedJokes(this.topNValue).subscribe(result => this.mostInteractedJokes = result,
                                                                          error => this.toastrService.error(
                                                                            JSON.stringify(error)));
  }

  refreshWithTopN() {
    console.log(this.topNValue)
    this.getTopNData();
  }
}
