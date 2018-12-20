import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetInfoService {

  // TEMPORARY POPULATED array of sets/folders
  private allSets = [
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

  //getter for this list of Sets
  getItems(){
    return this.allSets;
  }

  //getter for set object
  getSetByTitle(title: string){
    //get all sets to make sure we get a set if has same name as a class
    var sets = this.allSets.filter(items => {return items.iconType === 'albums'});
    //now get the set named after the title
    return sets.find(mySet => mySet.title === title);
  }

}
