import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center/vaccination-center';
import { CENTERS } from '../global-variable';
import { VaccinationService } from '../vaccination.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaccination-center-list',
  templateUrl: './vaccination-center-list.component.html',
  styleUrls: ['./vaccination-center-list.component.scss']
})



export class VaccinationCenterListComponent implements OnInit {

  centers: VaccinationCenter[] = [];
  selected?: VaccinationCenter


  constructor(private service: VaccinationService) { 
 
  }

  ngOnInit(): void { 

    this.service.getAllVaccinationCenter("").subscribe(resultCenters=>{
      if (resultCenters == null){
        this.centers = [];
      }
      else{
        this.centers = resultCenters;
      }  
    })
  }

  isSpecialCenter(center: VaccinationCenter){
    return center.city == "Nancy";
  }

  selectCenter(center: VaccinationCenter){
    this.selected = center;
  }

  onDeleted(center: VaccinationCenter){
    delete this.selected;
    this.centers.splice(this.centers.indexOf(center),1);
  }


}
