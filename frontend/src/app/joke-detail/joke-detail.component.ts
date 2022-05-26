import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JokeService} from '../service/joke.service';
import {Joke} from '../model/app.model';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Component({
             selector: 'app-joke-detail',
             templateUrl: './joke-detail.component.html',
             styleUrls: ['./joke-detail.component.scss']
           })
export class JokeDetailComponent implements OnInit {

  jokeDetail: Joke | undefined;

  constructor(private activatedRoute: ActivatedRoute, private jokeService: JokeService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => this.getJokeDetail(params.get('id')))
  }

  private getJokeDetail(id: string | null) {
    this.jokeService.getJokeById(Number(id)).subscribe(result => this.jokeDetail = result,
                                                       error => this.toastrService.error(JSON.stringify(error)));
  }

  likeJoke() {
    // @ts-ignore
    this.jokeDetail.upVotes = this.jokeDetail.upVotes + 1;
  }

  disLikeJoke() {
// @ts-ignore
    this.jokeDetail?.downVotes = this.jokeDetail.downVotes + 1;
  }

  saveJokeDetail() {
    this.jokeService.updateJoke(this.jokeDetail).subscribe(result => this.toastrService.success("Updated Successfully"),
                                                           error => this.toastrService.error(JSON.stringify(error)));
  }

  goToDashboard() {
    let jokeId = this.jokeDetail?.id;
    this.router.navigate(['/home', {id: jokeId}]);
  }
}
