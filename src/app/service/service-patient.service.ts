import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }

  getPatient(): Observable<any>{
    let url="https://fhir.alliance4u.io/api/patient/632ac2df634beb001b834dd6"
    let res = this.http.get(url);
    return res;
  }

  /* getPatientById(id : string): Observable<any>{
    let url="https://fhir.alliance4u.io/api/patient/" + id
    return this.http.get(url);
  } */
}