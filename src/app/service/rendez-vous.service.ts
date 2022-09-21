import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  constructor(private http : HttpClient) { }

   getRDV(): Observable<any>{
    let url="https://fhir.alliance4u.io/api/appointment?participant.actor.identifier.value=632ac2df634beb001b834dd6"
    return this.http.get(url);
  }
}