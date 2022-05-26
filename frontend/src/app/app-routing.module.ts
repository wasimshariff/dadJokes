import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokeDetailComponent} from './joke-detail/joke-detail.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: 'joke/:id', component: JokeDetailComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
