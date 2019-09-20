import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PopupComponent } from '../popup.component';
import { HighscoresService } from '../highscores.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  src = [];
  newId;
  count;
  prev: number;
  prevId: string;
  next: number;
  nextId: string;
  ord = [];
  sec = 0;
  min = 0;
  hr = 0;
  steps = 0;
  time: string;
  totaltime = 0;
  interval;
  hscore = [];
  dbscore = {};
  n: string;
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<PopupComponent>,
              public highscoresservice: HighscoresService,
  ) {this.random();
     this.beforeFlip();
     this.startTimer();
     this.scores();
    }

  ngOnInit() {
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
      if (this.hscore.length >= 10) {
        this.newId = this.hscore[this.hscore.length - 1].id;
      }
    });
  }
  add(score) {
    this.highscoresservice.addscore(score);
  }
  beforeFlip() {
    this.prev = 0;
    this.prevId = null;
    this.next = 0;
    this.nextId = null;
    this.count = 0;
    for (let i = 1; i < 21; i++) {
      this.src[i] = 'assets/block.png';
    }
  }
  async flip(event) {
    const x = event.currentTarget.id;
    const y = parseInt(x.substring(3), 10);
    if (this.count === 2) {
      this.beforeFlip();
    }
    if (x === 'img01') {
        this.src[1] = 'assets/b1.png';
        this.count++;
    } else if (x === 'img02') {
        this.src[2] = 'assets/b1.png';
        this.count++;
    } else if (x === 'img03') {
        this.src[3] = 'assets/b2.png';
        this.count++;
    } else if (x === 'img04') {
        this.src[4] = 'assets/b2.png';
        this.count++;
    } else if (x === 'img05') {
        this.src[5] = 'assets/b3.png';
        this.count++;
    } else if (x === 'img06') {
        this.src[6] = 'assets/b3.png';
        this.count++;
    } else if (x === 'img07') {
        this.src[7] = 'assets/b4.png';
        this.count++;
    } else if (x === 'img08') {
        this.src[8] = 'assets/b4.png';
        this.count++;
    } else if (x === 'img09') {
        this.src[9] = 'assets/b5.png';
        this.count++;
    } else if (x === 'img10') {
        this.src[10] = 'assets/b5.png';
        this.count++;
    } else if (x === 'img11') {
        this.src[11] = 'assets/b6.png';
        this.count++;
    } else if (x === 'img12') {
        this.src[12] = 'assets/b6.png';
        this.count++;
    } else if (x === 'img13') {
        this.src[13] = 'assets/b7.png';
        this.count++;
    } else if (x === 'img14') {
        this.src[14] = 'assets/b7.png';
        this.count++;
    } else if (x === 'img15') {
        this.src[15] = 'assets/b8.png';
        this.count++;
    } else if (x === 'img16') {
        this.src[16] = 'assets/b8.png';
        this.count++;
    } else if (x === 'img17') {
        this.src[17] = 'assets/b9.png';
        this.count++;
    } else if (x === 'img18') {
        this.src[18] = 'assets/b9.png';
        this.count++;
    } else if (x === 'img19') {
        this.src[19] = 'assets/b10.png';
        this.count++;
    } else if (x === 'img20') {
        this.src[20] = 'assets/b10.png';
        this.count++;
    }
    if (this.count === 1) {
      this.prev = y;
      this.prevId = x;
    }
    if (this.count === 2) {
      this.next = y;
      this.nextId = x;

      if ((this.prev === 1 && this.next === 2) || (this.prev === 3 && this.next === 4) || (this.prev === 5 && this.next === 6) ||
      (this.prev === 7 && this.next === 8) || (this.prev === 9 && this.next === 10) || (this.prev === 11 && this.next === 12) ||
      (this.prev === 13 && this.next === 14) || (this.prev === 15 && this.next === 16) || (this.prev === 17 && this.next === 18) ||
      (this.prev === 19 && this.next === 20) ) {
        await this.delay(100);
        document.getElementById(this.prevId).hidden = true;
        document.getElementById(this.nextId).hidden = true;
        this.steps++;
      }
      if ((this.prev === 2 && this.next === 1) || (this.prev === 4 && this.next === 3) || (this.prev === 6 && this.next === 5) ||
      (this.prev === 8 && this.next === 7) || (this.prev === 10 && this.next === 9) || (this.prev === 12 && this.next === 11) ||
      (this.prev === 14 && this.next === 13) || (this.prev === 16 && this.next === 15) || (this.prev === 18 && this.next === 17) ||
      (this.prev === 20 && this.next === 19) ) {
        await this.delay(100);
        document.getElementById(this.prevId).hidden = true;
        document.getElementById(this.nextId).hidden = true;
        this.steps++;
      }
      if (this.steps === 10) {
        this.pauseTimer();
        this.time = this.hr + ' hr ' + this.min + ' min ' + this.sec + ' sec';
        this.openDialog();
      }
    }
  }
  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  private random() {
    for (let i = 0; i < 20; i++) {
      this.ord[i] = Math.floor(Math.random() * 20);
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.sec++;
      this.totaltime++;
      if (this.sec === 60) {
        this.min++;
        this.sec = 0;
        if (this.min === 60) {
          this.hr++;
          this.min = 0;
        }
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  openDialog() {
    this.n = '';
    this.dialogRef = this.dialog.open(PopupComponent, {
      data: {time : this.time, totaltime: this.totaltime, hscore: this.hscore[this.hscore.length - 1].totalTime}
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.componentInstance.n = this.n;
    this.dialogRef.componentInstance.passEntry.subscribe((receivedEntry) => {
      this.dbscore = {
        name : receivedEntry,
        time: this.time,
        totalTime: this.totaltime
      };
      if (this.totaltime < this.hscore[this.hscore.length - 1].totalTime && receivedEntry.length !== 0) {
        this.add(this.dbscore);
        if (this.hscore.length >= 10) {
          this.highscoresservice.deletescore(this.newId).subscribe(res => console.log(res));
        }
      }
    });
  }
}
