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
import {NgxPaginationModule} from 'ngx-pagination';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatIconModule} from '@angular/material/icon';
import { RendezvousComponent } from './rendezvous/rendezvous.component';
import { SharedModule } from './shared-modules/shared.module';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterComponent,
    VaccinationCenterListComponent,
    LoginComponent,
    WaitingComponent,
    NewUserComponent,
    RendezvousComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatFormFieldModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
