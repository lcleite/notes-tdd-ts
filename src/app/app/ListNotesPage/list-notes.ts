import {Component, OnInit} from '@angular/core';
import {Note} from "../../entity/Note";

@Component({
  selector: 'list-notes',
  templateUrl: './list-notes.html',
  styleUrls: ['./list-notes.css']
})

export class ListNotesPage implements OnInit{
  pele = "Xapa o Peleloko!";
  note: Note = new Note();
  
  ngOnInit(){
    this.note.text = "xaxaxaxa taxxxs";
    this.note.lastEdited = new Date();
  }

  getNote(): string{
    return JSON.stringify(this.note);
  }
}
