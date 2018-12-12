import { Component, OnInit } from '@angular/core';
import { DifficultyService } from '../difficulty.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  private difficulty: string;
  private description: string;
  private apiLink: string;
  
  constructor(ds: DifficultyService) {

   }

  ngOnInit() {
  }

}
