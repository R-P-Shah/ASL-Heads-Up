import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
//Service to communicate between list page and game page
//passes along gameMode data
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
      difficulty: "Hard",
      description: "Country Capitals",
      api: "Countries"
    }
  ];

  constructor() { }

  //returns gameModes array
  getGameModes() {
    return this.gameModes;
  }

  



}
