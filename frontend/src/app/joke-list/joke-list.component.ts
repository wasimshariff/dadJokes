import {Component, OnInit} from '@angular/core';
import {JokeService} from '../service/joke.service';
import {ToastrService} from 'ngx-toastr';
import {Joke} from '../model/app.model';
import {ActivatedRoute} from '@angular/router';

@Component({
             selector: 'app-joke-list',
             templateUrl: './joke-list.component.html',
             styleUrls: ['./joke-list.component.scss']
           })
export class JokeListComponent {

  searchValue: string = '';
  jokesList: Joke[] = [];
  displayedColumns: any = ['id', 'subject', 'text', 'upVotes', 'downVotes'];
  selectedJokeId: string | null = null;

  constructor(private jokeService: JokeService, private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.searchJokes();
    this.activatedRoute.paramMap.subscribe(params => this.selectedJokeId = params.get('id'))

  }

  searchJokes() {
    this.jokeService.listAllJokes(this.searchValue).subscribe(result => this.jokesList = result,
                                                              error => this.toastrService.error(JSON.stringify(error)));
  }

  isSelected(id: any) {
    return this.selectedJokeId == id;
  }
}
