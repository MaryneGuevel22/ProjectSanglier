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

  otherRDV = {
    rdv : ["13/03/2023", "14/03/2023"],
  }

  otherPatient = {
    'id' : 'totot',
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

  changeName(patient : any): void {
    this.patientChild = patient
    console.log(this.patientChild)
  }

  constructor(private patientService: PatientService, private rendezVousService: RendezVousService) {

  }

  async ngOnInit(): Promise<void> {
     await this.patientService.getPatient().subscribe(element=>{
      this.patients.push(element);
      this.patients.push(this.otherPatient)
      console.log(this.patients)

    });

    this.rendezVousService.getRDV().subscribe(element=>{
      this.rdv.push(element);
      this.rdv.push(this.otherRDV)
      console.log(this.rdv)
    });
  }

  /* search(filterValue : string): void {
    this.patients.filter((val: Patient) => {
      return val.name.family.toLowerCase().indexOf(filterValue) > -1;
    });
  } */
}
