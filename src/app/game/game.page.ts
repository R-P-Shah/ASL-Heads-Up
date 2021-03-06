import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameInfoService } from '../game-info.service';
import { AlertController } from '@ionic/angular';
//cordova plugin
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';


@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  //Variables needed to play the game
  gameMode = {};
  timer;
  currentTime = 0;
  quit = false; //user ended session, stops timer
  //variables for getting the range of the API for calling
  min = 10;
  max = 11;
  //score variables
  correct = 0;
  incorrect = 0;
  //injection for the gameinfoservice and the activated route to send info
  //injection for alert to let user know when game is over
  constructor(private route: ActivatedRoute, private gameInfo: GameInfoService, public alertController: AlertController, private gyroscope: Gyroscope) {}

  ngOnInit() {
    this.getGameMode();
    this.startTimer(this.timer);

    //now watch for gyroscope
    let options: GyroscopeOptions = {
      frequency: 1000
    };

    this.gyroscope.getCurrent(options)
    .then((orientation: GyroscopeOrientation) => {
      if(orientation.z <= -9){
        //user was wrong
        this.wrong();
      }else if(orientation.z >= 9){
        //user was right
        this.right();
      }
    })
    .catch()


    this.gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
        console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    });
  }





  getGameMode(){
    const gameDiff = this.route.snapshot.paramMap.get('difficulty');
    this.gameMode = this.gameInfo.getModeByDifficulty(gameDiff);
    //now gameMode knows the game information
    //get the timer information
    this.timer = this.route.snapshot.paramMap.get('timer');

    //initially load a word
    this.call(this.gameMode);
  }

  //call the selected API to get a random word from it
  call(game) {
    var xmlhttp = new XMLHttpRequest();;
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var word = JSON.parse(this.responseText);
        document.getElementById('word').innerHTML = game.recall(word); //digs out the word I want from the api using the method inside the game mode object
      }
    };
    //random number for api call
    var end = Math.floor(Math.random() * game['max']) + 1; //hardcoded range
    xmlhttp.open("GET", game['api'] + end, true);
    xmlhttp.send();
  }

  //wrapper functions for the right/wrong buttons
  right(){
    this.correct++;
    this.call(this.gameMode);
  }
  wrong(){
    this.incorrect++;
    this.call(this.gameMode);
  }

  //controls the timer
  startTimer(seconds){
    this.currentTime = seconds;
    //timer runs for given time
    var interval = setInterval(() => {
      this.currentTime--;
      if(this.currentTime <= 0 || this.quit===true){ //time's up or the user hit end the game
        clearInterval(interval);
        //end of the game, send alert if timer is up ONLY
        //(so if you go back the alert doesn't sneak up on you)
        if(this.quit!== true){
            this.presentAlert();
        }

      };
    }, 1000);


  };

  //alert at end of game tells the score
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'TIME IS UP!',
      message: '# Correct: ' + this.correct + ", # Incorrect: " + this.incorrect,
      buttons: ['OK']
    });

    await alert.present();
  }

}
