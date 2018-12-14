import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInfoService } from '../game-info.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  //Variables needed to play the game
  gameMode = {};
  timer;
  //variables for getting the range of the API for calling
  min = 10;
  max = 11;
  //injection for the gameinfoservice and the activated route to send info
  constructor(private route: ActivatedRoute, private gameInfo: GameInfoService) {}

  ngOnInit() {
    this.getGameMode();
  }

  getGameMode(){
    const gameDiff = this.route.snapshot.paramMap.get('difficulty');
    this.gameMode = this.gameInfo.getModeByDifficulty(gameDiff);
    //now gameMode knows the game information
    //get the timer information
    this.timer = this.route.snapshot.paramMap.get('timer');

    //initially load a word
    this.call(this.gameMode); 
  }

  //call the selected API to get a random word from it
  call(game) {
    var xmlhttp = new XMLHttpRequest();;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var word = JSON.parse(this.responseText);
        document.getElementById('test').innerHTML = game.recall(word); 
      }
    };
    //random number for api call
    var end = Math.floor(Math.random() * game['max']) + 1; //hardcoded range
    xmlhttp.open("GET", game['api'] + end, true);
    xmlhttp.send();
  }



  //this is bad practice I know, but I didn't have much time
  //and Professor said to just get everything working without
  //worry about abstraction and OOP

  

}
