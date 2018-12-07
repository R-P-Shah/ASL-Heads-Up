import { Component, OnInit } from '@angular/core';
import { EasyGameService } from '../list/easy-game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  public difficulty = "";
  
  constructor(ez: EasyGameService) { 
    this.difficulty = ez.difficulty;
  }

  //TODO method getting all the JSON objects one by one

  ngOnInit() {
  }

}
