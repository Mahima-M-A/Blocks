import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-instrpopup',
  template: `<h1 mat-dialog-title>Instructions</h1>
  <mat-dialog-content>
    <ul style="list-style-type: square"><li>There are 10 matching pairs of unturned blocks.</li>
    <li>All you need to do is to click on each block and remember their positions so as to find its twin.</li>
    <li>Each time you unturn a block and find its twin in the following turn, you get closer to completing the game.</li>
    <li>The timer keeps running as long as the game is played.</li>
    <li>The game is over when you find all the matching pairs.</li></ul>
    <br>
    <i><b>Good luck!</b></i>
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
    }`
  ]
})

export class InstrPopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<InstrPopupComponent>) {}
  ngOnInit() {}
  onclose() {
    this.dialogRef.close();
  }
}
