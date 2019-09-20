import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopupComponent } from './popup.component';
import { LeadsPopupComponent } from './leadsPopup.component';
import { InstrPopupComponent } from './instrPopup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatButtonModule, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    PopupComponent,
    LeadsPopupComponent,
    InstrPopupComponent
  ],
  entryComponents: [
    PopupComponent,
    LeadsPopupComponent,
    InstrPopupComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: StartComponent},
      {path: 'game', component: GameComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [ { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
