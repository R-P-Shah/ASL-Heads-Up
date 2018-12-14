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
      description: "Colors",
      api: "http://www.thecolorapi.com/id?hex=",
      max: "999999", //max value for the api
      recall: function(word): any{ //how the api needs to be called to get the right data
        return word['name']['value'].split(' ')[0]; //only return first word, two is hard to fingerspell 
      }
    },
    {
      difficulty: "Medium",
      description: "Dog Breeds",
      api: "https://api.thedogapi.com/v1/breeds/", //link for API
      max: "246", //max value for the api
      recall: function(word): any{ //how the api needs to be called to get the right data
        return word['name'].split(' ')[0]; //only return first word, two is hard to fingerspell 
      }
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
