import { Injectable } from '@angular/core';
import { GameDifficulty } from '../game-difficulty';
@Injectable({
  providedIn: 'root'
})
export class HardGameService implements GameDifficulty {

  public difficulty =  "hard";
  api="";
  constructor() { }
}
