import { Component, OnInit } from '@angular/core';
import { GameInfoService } from '../game-info.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  //private selectedItem: any;
  public timer = 60;
  public tempDiff;

  private gameModes = [];

  public items: Array<{ description: string; difficulty: string;}> = [];
  
  //inject game-info service
  constructor(private games: GameInfoService) { }





  ngOnInit() {
    this.gameModes = this.games.getGameModes();

    for (let i = 0; i < this.gameModes.length; i++) {
      this.items.push({
        description: this.gameModes[i].description,
        difficulty: this.gameModes[i].difficulty
      });
    }
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
