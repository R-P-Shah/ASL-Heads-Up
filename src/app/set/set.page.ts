import { Component, OnInit } from '@angular/core';
import { SetInfoService } from '../set-info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set',
  templateUrl: './set.page.html',
  styleUrls: ['./set.page.scss'],
})
export class SetPage implements OnInit {

  private title; //title of set

  private vocabList = []; //list of vocab in the set
  constructor(private setInfo: SetInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    //get the title of the page/set
    this.title = this.route.snapshot.paramMap.get('title');
    console.log("set name: " + this.title);

    //now get the actual vocab set
    

  }



}
