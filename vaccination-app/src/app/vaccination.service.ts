import { Injectable } from '@angular/core';
import { VaccinationCenter } from './vaccination-center/vaccination-center';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { Booking } from './vaccination-center/Booking';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class VaccinationService {


  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  getAllVaccinationCenter(city?: string): Observable<VaccinationCenter[]>{

    
    let params =  new HttpParams();
    if(city){
     params = params.set('city',city);
    }
    else{
      params = params.set('city','*');
    }

    return this.httpClient.get<VaccinationCenter[]>("api/public/center", {params: params, observe: 'response'})
    .pipe(
      map((resp )=> {
        if (!!resp.body) {
          return resp.body;
        }
        return [];
      }
    ), catchError(
      (err) => {
      const temps = err.headers.get('X-Rate-Limit-Retry-After-Seconds')
      console.log(temps)
      this.router.navigate(['/waiting', temps]);
      return [];
    }));
  }

  
  getAllVaccinationCenterByCity(city?: string): Observable<VaccinationCenter[]>{

    
    let params =  new HttpParams();
    if(city){
     params = params.set('city',city);
    }
    else{
      params = params.set('city','*');
    }

    return this.httpClient.get<VaccinationCenter[]>("api/public/centers/city/{city}", {params: params, observe: 'response'})
    .pipe(
      map((resp )=> {
        if (!!resp.body) {
          console.log(resp.body);
        }
        return [];
      }
    ), catchError(
      (err) => {
      const temps = err.headers.get('X-Rate-Limit-Retry-After-Seconds')
      console.log(temps)
      this.router.navigate(['/waiting', temps]);
      return [];
    }));
  }
}
