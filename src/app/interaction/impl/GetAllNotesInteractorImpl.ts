import {GetAllNotesInteractor} from "../GetAllNotesInteractor";
import RequestData = GetAllNotesInteractor.RequestData;
import ResponseData = GetAllNotesInteractor.ResponseData;
import {Note} from "../../entity/Note";
import {NoteDataService} from "../../data/service/NoteDataService";
import {NoteDataServiceImpl} from "../../data/service/impl/NoteDataServiceImpl";

export class GetAllNotesInteractorImpl implements GetAllNotesInteractor{
  
  private noteDataService: NoteDataService;
  
  constructor(){
    this.noteDataService = new NoteDataServiceImpl();
  }
  
  interact(requestData: RequestData): Promise<ResponseData> { //responseData: ResponseData
    return new Promise<ResponseData>(async (resolve, reject) => {
      try {
        let allNotes: Note[] = await this.noteDataService.getAll();
        let responseData: ResponseData = new ResponseData();
        
        responseData.allNotes = allNotes;
        
        resolve(responseData);
      } catch (err){
        reject();
      }
    });
  }
}
