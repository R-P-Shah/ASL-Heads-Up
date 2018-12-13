import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  //private selectedItem: any;
  public timer = 60;
  public tempDiff;

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
  
  constructor() {
    for (let i = 0; i < this.gameModes.length; i++) {
      this.items.push({
        description: this.gameModes[i].description,
        difficulty: this.gameModes[i].difficulty
      });
    }
  }





  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
