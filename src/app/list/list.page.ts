import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
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
  public items: Array<{ title: string; note: string;}> = [];
  
  constructor() {
    for (let i = 0; i < this.gameModes.length; i++) {
      this.items.push({
        title: this.gameModes[i].description,
        note: this.gameModes[i].difficulty
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
