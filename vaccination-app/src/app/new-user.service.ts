import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { MapType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { VaccinationCenter } from './vaccination-center/vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

    getQuiSertDePost(): Observable<HttpResponse<String>>{
      const a = this.httpClient.get<String>("http://localhost:8080/api/public/users?profesion=Medecin&mail=Merlin&passwrd=1234&pseudo=merlin", {observe: 'response'}).pipe(take(1));
      return a;
    }

}
