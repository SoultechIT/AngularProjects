import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SucessalertComponent } from './sucessalert/sucessalert.component';
import { WarningalertComponent } from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
