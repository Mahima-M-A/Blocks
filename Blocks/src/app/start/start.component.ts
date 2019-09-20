import { Component, OnInit } from '@angular/core';
import { LeadsPopupComponent } from '../leadsPopup.component';
import { InstrPopupComponent } from '../instrPopup.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { HighscoresService } from '../highscores.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  hscore = [];
  n = [];
  t = [];
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<LeadsPopupComponent>,
              public popup: MatDialogRef<InstrPopupComponent>,
              public highscoresservice: HighscoresService) {
                this.scores();
              }

  ngOnInit() {
  }
  openDialog1() {
    this.popup = this.dialog.open(InstrPopupComponent, {
      width: '550px'
    });
  }
  openDialog2() {
    this.dialogRef = this.dialog.open(LeadsPopupComponent, {width: '350px', data:  this.n});
  }
  scores() {
    this.highscoresservice.gethighscore().subscribe((data: any) => {
      for (let i of data) {
        this.hscore.push({
          id: i.id,
          name: i.name,
          time: i.time,
          totalTime: i.totalTime
        });
      }
      for (let i = 0; i < this.hscore.length; i++) {
        this.n.push({name: this.hscore[i].name.toUpperCase(), time: this.hscore[i].time});
      }
    });
  }
}
