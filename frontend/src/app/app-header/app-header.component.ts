import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
             selector: 'app-header',
             templateUrl: './app-header.component.html',
             styleUrls: ['./app-header.component.scss']
           })
export class AppHeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
    console.log(this.activatedRoute.url);
  }

  goToDashboard() {
    this.router.navigate(['home']);
  }

  goToAnalytics() {
    this.router.navigate(['analytics']);
  }

  isSelected(route: string) {
    return this.router.url.lastIndexOf(route) > -1;
  }
}
