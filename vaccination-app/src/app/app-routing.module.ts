import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RendezvousComponent } from './rendezvous/rendezvous.component';

import { VaccinationCenterListComponent } from './vaccination-center-list/vaccination-center-list.component';
import { VaccinationCenterComponent } from './vaccination-center/vaccination-center.component';
import { WaitingComponent } from './waiting/waiting.component';
import { RoleGuardService as RoleGuard } from './services/role-guard.service';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';


const routes: Routes = [
  {path: '', redirectTo: 'connection', pathMatch: 'full'},
  {path: "connection", component: LoginComponent},
  {path: "centers", component: VaccinationCenterListComponent,canActivate: [AuthGuard],},
  {path: "centers/detail/:id", component: VaccinationCenterComponent},
  {path: 'waiting/:temps',component: WaitingComponent},
  {path: "signup" , component: NewUserComponent,canActivate: [AuthGuard],},
  {path: "admin" , component: AdminpanelComponent,canActivate: [AuthGuard],},
  {path: "signup" , component: NewUserComponent,canActivate: [AuthGuard],},
  {path: "centers/rendezvous/:id" , component: RendezvousComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


