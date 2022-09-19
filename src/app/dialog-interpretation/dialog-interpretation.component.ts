import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-interpretation',
  templateUrl: './dialog-interpretation.component.html',
  styleUrls: ['./dialog-interpretation.component.css']
})
export class DialogInterpretationComponent{

  constructor(public dialogRef: MatDialogRef<DialogInterpretationComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
