import { Injectable } from '@angular/core';
import { GameDifficulty } from '../game-difficulty';
@Injectable({
  providedIn: 'root'
})
export class EasyGameService implements GameDifficulty{

  difficulty = "Easy";
  api = "dogs";
  constructor() { }

  //begin the game
  onload(): void{
    
  }
}
