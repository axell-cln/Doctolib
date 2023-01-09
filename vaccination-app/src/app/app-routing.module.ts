import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';

import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { WaitingComponent } from './waiting/waiting.component';

const routes: Routes = [
  {path: '', redirectTo: 'connection', pathMatch: 'full'},
  {path: "connection", component: LoginComponent},
  {path: "centers", component: VaccinationCenterListComponent},
  {path: "centers/detail/:id", component: VaccinationCenterComponent},
  {path: 'waiting/:temps',component: WaitingComponent},
  {path: "signup" , component: NewUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


