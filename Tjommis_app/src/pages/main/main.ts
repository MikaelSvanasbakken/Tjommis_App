import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { LoadingPage } from "../loading/loading";
import { TjommisHubProvider } from '../../providers/tjommis-hub/tjommis-hub';
import { InteresserPage } from '../interesser/interesser';
import { Observable } from 'rxjs/Observable';
import {SettingsPage} from "../settings/settings";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tjommisHub: TjommisHubProvider,
    public events : Events,
    private zone: NgZone)
  {
    this.events.subscribe('randomNumber', (data) => {
      this.onUpdateRandomNumber(data);
    });
    
    this.events.subscribe('connectedusers', (data) => {
      this.onUpdateConnectedusers(data);
    });
    this.events.subscribe('username', (data) => {
      this.onUpdateUsername(data);
    })
  }
  username : string = this.tjommisHub.username;
  randomNumber : number; 
  connectedusers : number;

  onUpdateRandomNumber = number => {
    this.zone.run(() => {
      this.randomNumber = number;
    });
  }

  onUpdateConnectedusers = number => {
    this.zone.run(() => {
      this.connectedusers = number;
    });
  }

  onUpdateUsername = username => {
    this.zone.run(() => {
      this.username = username;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  interesser(){
    this.navCtrl.push(InteresserPage)
  }

  chat(){
    this.navCtrl.push(LoadingPage)


  }
  settings(){
    this.navCtrl.push(SettingsPage)
  }

}
