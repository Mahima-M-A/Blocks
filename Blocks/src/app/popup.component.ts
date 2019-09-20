import { Component, OnInit, Inject, Input, EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  template: `<h1 mat-dialog-title>Congratulations!</h1>
  <mat-dialog-content>
    <p>Completed in <span>{{data.time}}</span><p>
    <div *ngIf="data.totaltime < data.hscore">
      <form>
        Enter your Name: <input id="text" [(ngModel)]="n" type="text" [ngModelOptions]="{standalone: true}" maxlength="20" required="true">
      </form>
    </div>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="primary" (click)="onclose()">
    CLOSE
    </button>
  </mat-dialog-actions>`,
  styles: [
    `h1{
      color: orange;
      font-style: italic;
      font-size: 30px;
    }
    p>span{
      font-weight: bold;
    }
    .ng-untouhed, .ng-invalid:not(form)  {
      border-left: 5px solid #a94442; /* red */
    }
    .ng-valid[required], .ng-valid.required  {
      border-left: 5px solid #42A948; /* green */
    }`

  ]
})

export class PopupComponent implements OnInit {
  @Input() public n: string;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(public dialogRef: MatDialogRef<PopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
              }

  ngOnInit() {}
  onclose() {
    if (this.n.length !== 0 || this.data.totaltime > this.data.hscore) {
      this.passEntry.emit(this.n);
      this.dialogRef.close();
    }
  }
}
