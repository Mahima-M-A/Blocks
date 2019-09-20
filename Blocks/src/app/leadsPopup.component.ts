import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-leadspopup',
  template: `<h1 mat-dialog-title>Leaderboard</h1>
  <mat-dialog-content>
    <table >
      <thead>
      <tr>
        <th>Name</th>
        <th>Time taken</th>
      </tr>
        </thead>

      <tbody *ngFor="let d of data">
      <tr>
        <td>{{d.name}}</td>
        <td>{{d.time}}</td>
      </tr>
      </tbody>
    </table>

  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="primary" (click)="onclose()">
      CLOSE
    </button>
  </mat-dialog-actions>`,
  styles: [
    `h1{
      color: orange;
      font-style: bold;
      font-size: 30px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      padding: 8px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }`
  ]
})

export class LeadsPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<LeadsPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit() {}
  onclose() {
    this.dialogRef.close();
  }
}
