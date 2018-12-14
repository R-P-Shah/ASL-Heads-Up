import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../game-info.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  //private selectedItem: any;
  public gameModes = []; 

  public selected = {};
  public timer;
  
  //inject game-info service
  constructor(private games: GameInfoService) { }





  ngOnInit() {
    //initialize
    this.gameModes = this.games.getGameModes();
    this.timer = 60;
    this.selected = this.gameModes[0];
    
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
