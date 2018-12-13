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
  }

}
