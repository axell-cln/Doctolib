import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { VaccinationService } from '../vaccination.service';
import { HttpParams } from '@angular/common/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SharedModule } from '../shared-modules/shared.module';
import { VaccinationCenterComponent } from '../vaccination-center/vaccination-center.component';


@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendezvous.component.html',
  styleUrls: ['./rendezvous.component.scss']
})
export class RendezvousComponent implements OnInit {
  
  naissance_date: string="";
  nom: string="";
  prenom: string="";
  idPatient: any;
  
 
  id_doctor: number = 0;
  

  date_rdv: string="";

 
  private centre!: any;
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const numCentre = Number(this.route.snapshot.paramMap.get('id'));

    const parametres2 = new HttpParams()
    .append('id',numCentre)

    this.http.get("http://localhost:8080/api/public/centersID",{params:parametres2}).subscribe(resp2=>{
    this.centre = (resp2);
    console.log("Centre récupéré")
    console.log(resp2)

    })
  }

  prendreRDV(){

   
    const id_doctor = this.id_doctor;
    const date_rdv = this.date_rdv;
    let MonidPatient = this.idPatient;
   
    const parametres1 = new HttpParams()
    .append('nom', this.nom)
    .append('prenom', this.prenom)
    .append('bDate', this.naissance_date)
    

    this.http.get("http://localhost:8080/api/public/patientID",{params: parametres1}).subscribe(resp =>{
      MonidPatient = resp;
      
      console.log("id du patient grace au GET : "+ resp);
     
      //On recoit correctement le 1, faire la bonne requete mnt
    });

   
    const newRdv = {date: date_rdv, idPatient: 2, idDoc: id_doctor, centre: this.centre };
    // @RequestParam VaccinationCenter center) {

  const body=JSON.stringify(this.centre);
   const parametres = new HttpParams()
      .append('date', newRdv.date)
      //.append('center', newRdv.centre)
      .append('idDoc', newRdv.idDoc)
      .append('idPatient', 1); 


    this.http.post('http://localhost:8080/api/public/rendezvous', body,{
      params: parametres, 
    })
      .subscribe(response => {
        console.log(response);
        console.log("POST fait")

      });
    }
}
