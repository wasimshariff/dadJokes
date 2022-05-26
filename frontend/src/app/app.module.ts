import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokeRandomComponent } from './joke-random/joke-random.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
            declarations: [
              AppComponent,
              JokeDetailComponent,
              AnalyticsComponent,
              DashboardComponent,
              JokeRandomComponent,
              JokeListComponent,
              AppLayoutComponent,
              AppHeaderComponent,
              AppFooterComponent
            ],
              imports: [
                  BrowserModule,
                  AppRoutingModule,
                  BrowserAnimationsModule,
                  MatCardModule,
                  MatButtonModule,
                  MatTableModule,
                  MatPaginatorModule,
                  MatInputModule,
                  MatSortModule,
                  HttpClientModule,
                  FormsModule,
                  ToastrModule.forRoot({
                                           closeButton: true,
                                           positionClass: 'toast-bottom-right',
                                           tapToDismiss: false,
                                           extendedTimeOut: 1000,
                                           timeOut: 2100
                                       }),
                  MatSelectModule
              ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
