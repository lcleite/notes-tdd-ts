import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from "./app.routes";

import {ListNotesPage} from "./ListNotesPage/list-notes";
import {AddNotePage} from "./AddNotePage/add-note";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    ListNotesPage,
    AddNotePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
