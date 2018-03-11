import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private _toDos = new BehaviorSubject(["clean your room", "take out the trash", "cure cancer", "save the world"]);
  toDos = this._toDos.asObservable();
  
  constructor() { }

  updateToDos(goal: string[]) {
    this._toDos.next(goal)
  }

}
