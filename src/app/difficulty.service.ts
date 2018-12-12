import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {

  private difficulty: string;
  private description: string;
  private apiLink: string;
  
  constructor() { }

  //setters and getters for service
  setDifficulty(diff: string): void{
    this.difficulty = diff;
  }

  getDifficulty(): string{
    return this.difficulty;
  }

  setDesc(desc: string) : void{
    this.description = desc;
  }

  getDesc(): string{
    return this.description;
  }

  setLink(api: string) : void{
    this.apiLink = api;
  }

  getApi(): string{
    return this.apiLink;
  }

}
