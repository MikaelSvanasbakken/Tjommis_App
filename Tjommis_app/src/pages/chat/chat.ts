import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { TjommisHubProvider } from '../../providers/tjommis-hub/tjommis-hub';
import {LoginPage} from "../login/login";
import {MainPage} from "../main/main";

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  message: string;
  public messages: string[] = this.tjommisHub.messages;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tjommisHub: TjommisHubProvider,
    public events: Events,
    private zone: NgZone
  ) {
    events.subscribe("message",(data) => {
      this.onAddMessage(data);
    });
  }
  private onAddMessage = message => {
    console.log("event:",message);
    this.zone.run(() => {
      let allmessages = this.tjommisHub.messages;
      this.messages = allmessages; 
    })
  }
  handleSendMessage() {
    this.tjommisHub.SendMessage(this.message);
    this.message = "";
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  home(){
    this.navCtrl.push(MainPage);

  }
}
