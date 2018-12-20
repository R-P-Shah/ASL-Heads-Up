import { Component, OnInit } from '@angular/core';
import { SetInfoService } from '../set-info.service';
@Component({
  selector: 'app-sets',
  templateUrl: './sets.page.html',
  styleUrls: ['./sets.page.scss'],
})
export class SetsPage implements OnInit {

  public allSets = [];
  constructor(private setInfo: SetInfoService) {
  }

  ngOnInit() {
    this.allSets = this.setInfo.getItems();
  }



}
