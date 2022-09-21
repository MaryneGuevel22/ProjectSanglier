import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//Compte rendu a envoyer à l'autre équipe. 
const crPrototype = {
  "resourceType": "DiagnosticReport",
  "identifier": [
    {
      "value": "5234342"
    }
  ],
  "status": "registered",
  "code": [
    {
      "text": "XXXX" //code rdv
    }
  ],
  "subject": {
    "reference": "XXX" // ID du patient 632ac2df634beb001b834dd6
  },
  "effectiveDateTime": "2022-09-19T11:45:33+11:00",
  "performer": [
    {
      "display": "Dr SANGLIER pour Bigard Laboratory"
    }
  ],
  "conclusion": "<string>"
}



@Injectable({
  providedIn: 'root'
})
export class ServiceCompteRenduService {

  crJson = crPrototype;

  constructor(private http: Http) { }

  getCr(){
    return this.crJson;
  }

  ajouterCommentaire(commentaire: string){
    this.crJson.conclusion = commentaire;
  }

  validerCr(){
    this.crJson.status = "final";
  }

  postCr(commentaire : string) {

    let body = this.crJson;
    let url = "https://fhir.alliance4u.io/api/diagnostic-report";
    let envoi = this.http.post(url ,body);
    return envoi;
  }

}
