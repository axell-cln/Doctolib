import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';

import { LoginComponent } from './login/login.component';
import { WaitingComponent } from './waiting/waiting.component';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    LoginComponent,
    WaitingComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
