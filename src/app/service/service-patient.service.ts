import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Patient } from '../DTO/Patient';
import{Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ServicePatientService {

  constructor(private http: Http) { }

  getPatient():Observable<Patient>{

    let url="https://fhir.alliance4u.io/api/patient/632ac2df634beb001b834dd6"

    return this.http.get<Patient[]>(url);

  }

  
}