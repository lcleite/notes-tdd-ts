import {NoteDataService} from "../NoteDataService";
import {NoteDataModel} from "../../model/NoteDataModel";
import {NoteDataRepository} from "../../repo/NoteDataRepository";
import {NoteDataMapper} from "../../model/mapper/NoteDataMapper";
import {Note} from "../../../entity/Note";

export class NoteDataServiceImpl implements NoteDataService{
  
  private noteDataRepository: NoteDataRepository;
  private noteDataMapper: NoteDataMapper;
  
  constructor(){
    this.noteDataRepository = new NoteDataRepository();
    this.noteDataMapper = new NoteDataMapper();
  }

  add(note: NoteDataModel) {
    return this.noteDataRepository.add(note);
  }

  get(id: string) {
    return this.noteDataRepository.get(id);
  }

  getAll(): Promise<Note[]>{
    return new Promise<Note[]>((resolve, reject) => {
      this.noteDataRepository.getAll()
        .then((allNotes: NoteDataModel[]) => {
          let notes: Note[] = allNotes.map(noteData => {return this.noteDataMapper.toEntity(noteData)});
          resolve(notes);
          
        }).catch(err => {
          reject();
      });
    });
  }
}
