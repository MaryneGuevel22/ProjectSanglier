import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceCompteRenduService } from '../service/service-compte-rendu.service';

@Component({
  selector: 'app-dialog-interpretation',
  templateUrl: './dialog-interpretation.component.html',
  styleUrls: ['./dialog-interpretation.component.css']
})
export class DialogInterpretationComponent{

  comment = '';

  constructor(private serviceCompteRenduService : ServiceCompteRenduService, public dialogRef: MatDialogRef<DialogInterpretationComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  doTextareaValueChange(ev:any) {
    try {
      this.comment = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  }


  sendComment(): void {

    this.serviceCompteRenduService.ajouterCommentaire(this.comment);
    this.dialogRef.close();
  }

}
