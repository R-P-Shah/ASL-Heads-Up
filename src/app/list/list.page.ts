import { Component, OnInit } from '@angular/core';
import { DifficultyService } from '../difficulty.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  //private selectedItem: any;
  public timer = 60;
  gameSetup: DifficultyService;

  private gameModes = [
    {
      difficulty: 'Easy',
      description: 'Dog Breeds'
    },
    {
      difficulty: 'Hard',
      description: 'Country Capitols'
    }
  ];
  public items: Array<{ description: string; difficulty: string;}> = [];
  
  constructor(ds: DifficultyService) {
    for (let i = 0; i < this.gameModes.length; i++) {
      this.items.push({
        description: this.gameModes[i].description,
        difficulty: this.gameModes[i].difficulty
      });
    }
  }

  setGame(diff: string, desc: string, api: string){
    this.gameSetup
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
