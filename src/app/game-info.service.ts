import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//Service to communicate between list page and game page
//passes along gameMode data, kind of like the CalcApp exercise
export class GameInfoService {

  //gameModes array holding all the different game difficulties
  //made so I can add more later
  private gameModes = 
  [
    {
      difficulty: "Easy",
      description: "Dog Breeds",
      api: "Dogs"
    },
    {
      difficulty: "Medium",
      description: "Country Capitals",
      api: "Countries"
    }
  ];

  constructor() { }

  //returns gameModes array
  getGameModes() {
    return this.gameModes;
  }

  //get the gameMode object in the gameModes array
  //based on passed in difficulty 
  //TODO: remove if unnecessary
  getModeByDifficulty(difficulty: string) {
    return this.gameModes.find(q => q.difficulty === difficulty);
  }

  



}
