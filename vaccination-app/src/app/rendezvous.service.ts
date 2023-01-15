import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { VaccinationCenter } from './vaccination-center/vaccination-center';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {


  newRdv = {date: '', center: ''};
  constructor(private http: HttpClient,
    private router: Router) { }


    inscriptionRendezVous(date: Date, center: VaccinationCenter, nom:string, prenom:string, naissance_date: Date){
      
      let params =  new HttpParams();
     params = params.set('date',date.toDateString());
     params = params.set('center',center.toString());
     params = params.set('nom',nom);
     params = params.set('prenom',prenom);
     params = params.set('naissance_date',naissance_date.toDateString());
     this.http.post('http://localhost:8080/api/public/rendezvous',{
      params: params,
    })
      .subscribe(response => {
        console.log(response);
      });
    }
}
