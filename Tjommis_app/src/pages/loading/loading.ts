import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})

export class LoadingPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    //let bool = false;
    let a = navCtrl;
    //if(bool = true){
    //  this.navCtrl.push(ChatPage)
    //}



    let inspiration = ['The ships hung in the sky in much the same way that bricks don’t.',
      'Funny,” he intoned funereally, “how just when you think life can’t possibly get any worse it suddenly does.', '' +
      'Forty-two,” said Deep Thought, with infinite majesty and calm.', 'It is a mistake to think you can solve any major problems just with potatoes.'];
    Quotes(0);
    function Quotes(i) {
      if (inspiration.length > i) {
        setTimeout(function () {
          document.getElementById("changingText").innerHTML = inspiration[i];
          Quotes(++i);


        }, 3000); // 1 second (in milliseconds)


      } else if (inspiration.length == i) { // Loop
        //bool = true;
        a.push(ChatPage)
      }


    }

  }


  }








