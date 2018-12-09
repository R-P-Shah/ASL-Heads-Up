import { Component, OnInit } from '@angular/core';
import { EasyGameService } from '../list/easy-game.service';
import { HttpService } from './http.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  public difficulty = "";
  api;
  constructor(ez: EasyGameService, http: HttpService) { 
    this.difficulty = ez.difficulty;
    this.api = http;
  }

  

  //TODO method getting all the JSON objects one by one

  ngOnInit() {
  }

}
