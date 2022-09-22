import { Component, Input, OnInit } from '@angular/core';
import { RendezVousService } from '../service/rendez-vous.service';
import { PatientService } from '../service/service-patient.service';

@Component({
  selector: 'app-component-list-patient',
  templateUrl: './component-list-patient.component.html',
  styleUrls: ['./component-list-patient.component.css']
})

export class ComponentListPatientComponent implements OnInit {

  patients : any[] = [];
  rdv : any[] = [];

  otherPatient = {
    'id' : '632ac2df633beb221b834dd6',
    'active' : true,
    'name' : [{
      'family' : 'DUPONT',
      'given' : ['Pierre'],
    }],
    'address': [
      {
          'use': 'home',
          'line': [
              '7 rue des petites écuries'
          ],
          'city': 'Paris',
          'country': 'France'
      }
  ],
    'gender' : 'mâle'
  }



  @Input() 
  patientChild = {
    'id' : '',
    'active' : true,
    'name' : [{
      'family' : '',
      'given' : [''],
    }],
    'address': [
      {
          'use': '',
          'line': [
              ''
          ],
          'city': '',
          'country': ''
      }
  ],
    'gender' : ''
  }

  @Input() 
  rdvChild = {"start":""}

  changeNameWithRdv(patient : any, rdv :any): void {
    this.patientChild = patient;
    this.rdvChild = rdv;
    console.log("rdv")
  }

  changeName(patient : any): void {
    this.patientChild = patient;
    this.rdvChild = {"start":""};
    console.log("sans rdv")
  }

  constructor(private patientService: PatientService, private rendezVousService: RendezVousService) {

  }

  async ngOnInit(): Promise<void> {
     await this.patientService.getPatient().subscribe(element=>{
      this.patients.push(element);
      this.patients.push(this.otherPatient)


    });

   await this.rendezVousService.getRDV().subscribe(element=>{
    console.log(element)
      element.forEach((elem : any) => {
        elem.start = new Date(elem.start).toLocaleDateString("fr").toString();
      })
    
      this.patients[0].rdv = element;
      this.patients[1].rdv = [];
    });

  }
}