import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http;
  public headers;
  constructor(private h: HTTP) { 
    this.http = h;
  }

  getNext() : void{
    this.http.get('https://dog.ceo/api/breeds/list/all', {}, {})
    .then(
      data => {
        this.headers = data.headers[5][0][0];
      }
    ).catch(error=>{
        this.headers = error.headers;
    });
  }
}
