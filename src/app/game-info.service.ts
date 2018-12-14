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
      description: "Places in NY",
      api: "http://api.zippopotam.us/us/",
      range: "10001-11104"
    },
    {
      difficulty: "Medium",
      description: "Dog Breeds",
      api: "https://api.thedogapi.com/v1/breeds/", //link for API
      range: "1-264"
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
