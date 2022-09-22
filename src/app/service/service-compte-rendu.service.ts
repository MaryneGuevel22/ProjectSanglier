import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Compte rendu a envoyer à l'autre équipe. 
const crPrototype = {
  'resourceType': 'DiagnosticReport',
  'identifier': [
    {
      'value': '5234342'
    }
  ],
  'status': 'registered',
  'code': [
    {
      'text': '632ad999337d8800190ca224' //code rdv
    }
  ],
  'subject': {
    'reference': '632ac2df634beb001b834dd6' // ID du patient 632ac2df634beb001b834dd6
  },
  'effectiveDateTime': '2022-09-19T11:45:33+11:00',
  'performer': [
    {
      'display': 'Dr SANGLIER pour Bigard Laboratory'
    }
  ],
  'conclusion': ''
}

@Injectable({
  providedIn: 'root'
})
export class ServiceCompteRenduService {

  crJson = crPrototype;

  constructor(private http: HttpClient) { }

  getCr() {
    return this.crJson;
  }

  ajouterCommentaire(commentaire: string) {
    this.crJson.conclusion = commentaire;
  }

  validerCr() {
    this.crJson.status = 'final';
  }

  postCr(): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    let body = JSON.stringify(this.crJson);

    let url = "https://fhir.alliance4u.io/api/diagnostic-report";

    return this.http.post(url, body, { 'headers': headers, observe: 'response' });

  }
}
