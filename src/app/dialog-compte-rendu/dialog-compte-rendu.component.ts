import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogInterpretationComponent } from '../dialog-interpretation/dialog-interpretation.component';

@Component({
  selector: 'app-dialog-compte-rendu',
  templateUrl: './dialog-compte-rendu.component.html',
  styleUrls: ['./dialog-compte-rendu.component.css']
})
export class DialogCompteRenduComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogCompteRenduComponent>, public dialog: MatDialog
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogInterpretationComponent, {
      /* width: '400px',
      height: '300px' */
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}