import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from './vaccination-center';

@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.scss']
})
export class VaccinationCenterComponent implements OnInit {

  @Input() centerVac?: VaccinationCenter;
  @Output() deleted = new EventEmitter<VaccinationCenter>();


  constructor(private route: ActivatedRoute, private service: VaccinationService) { }

  ngOnInit(): void { 
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getAllVaccinationCenter("").subscribe(resultCenters=>{this.centerVac=resultCenters[id-1]})
   }


  delete(){
    this.deleted.emit(this.centerVac);
  }


}


