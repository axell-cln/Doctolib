import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RendezvousService } from '../rendezvous.service';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SharedModule } from '../shared-modules/shared.module';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {

  numCentre!: any;
  center: string='';
  date_rdv: string="";
  naissance_date: string="";
  nom: string="";
  prenom: string="";
  confirmation_rdv: string=""
  newRdv={date: this.date_rdv, center:  this.center, prenom: this.prenom, nom:this.nom, datenaissance: this.naissance_date }
  // example for today's labels and invalids

  constructor(private http: HttpClient,private route: ActivatedRoute, private service: RendezvousService) { }

  ngOnInit(): void {
    this.numCentre = Number(this.route.snapshot.paramMap.get('id'));
  }

  prendreRDV(){
    const body=JSON.stringify(this.newRdv);
   const parametres = new HttpParams()
      .append('date', this.newRdv.date)
      .append('prenom', this.newRdv.prenom)
     .append('center', this.newRdv.center)
      .append('datenaissance', this.newRdv.datenaissance)
      .append('nom', this.newRdv.nom); 

    this.http.post('http://localhost:8080/api/public/rendezvous', body,{
      params: parametres, 
    })
      .subscribe(response => {
        console.log(response);
      });
    }
}
