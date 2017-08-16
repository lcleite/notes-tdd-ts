import {Component} from '@angular/core';
import {Note} from "../../entity/Note";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'add-note',
  templateUrl: './add-note.html',
  styleUrls: ['./add-note.css']
})

export class AddNotePage{
  
  pele = "Xapa o Add!";
  note: Note;
  
  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      let json: string = params['note'];
      this.note = JSON.parse(json);
      console.log(this.note);
    });
  }
  
  
}
