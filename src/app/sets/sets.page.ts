import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.page.html',
  styleUrls: ['./sets.page.scss'],
})
export class SetsPage implements OnInit {

  //array of sets/folders
  allSets = [
    {
      title: 'Pets',
      iconType: 'albums',
      items: [
        {
          vocab: 'Dog',
          url: 'dogURL'
        },
        {
          vocab: 'Cat',
          url: 'catURL'
        }
      ]//end of items list
    },
    {
      title: 'MLAS 101',
      iconType: 'folder',
      items: [
        { //set1
          title: 'Unit 1',
          iconType: 'albums',
          items: [
            {
              vocab: 'chair',
              url: 'chairURL'
            },
            {
              vocab: 'person',
              url: 'personURL'
            }
          ]
        },//end of set 1
        { //start of set 2
          title: 'Unit 2',
          iconType: 'albums',
          items: [
            {
              vocab: 'make the bed',
              url: 'bedURL'
            },
            {
              vocab: 'do laundry',
              url: 'laundryURL'
            }
          ]
        }
      ] //end of list of items in folder
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
