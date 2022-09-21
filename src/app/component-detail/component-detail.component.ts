import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCompteRenduComponent } from '../dialog-compte-rendu/dialog-compte-rendu.component';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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


  line = this.patientChild.address[0].line[0]??'';
  city = this.patientChild.address[0].city??'';

  ngOnInit(): void {
    console.log(this.patientChild)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCompteRenduComponent, {
      width: '1300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
