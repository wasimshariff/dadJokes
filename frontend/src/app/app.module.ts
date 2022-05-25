import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
              imports: [
                  BrowserModule,
                  AppRoutingModule,
                  BrowserAnimationsModule,
                  MatCardModule,
                MatButtonModule,
                HttpClientModule,
                FormsModule,
                ToastrModule.forRoot({
                                       closeButton: true,
                                       positionClass: 'toast-bottom-right',
                                       tapToDismiss: false,
                                       extendedTimeOut: 1000,
                                       timeOut: 2100
                                     })
              ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
