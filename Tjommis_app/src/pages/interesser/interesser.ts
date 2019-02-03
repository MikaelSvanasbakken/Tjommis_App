import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the InteresserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interesser',
  templateUrl: 'interesser.html',
})
export class InteresserPage {
  
 public tags: any[] = [];
 public selectedTags: any[] = [];


   skole = ["#eksamen", "#kollokvie", "#bachelor","#master", "#brukerundersøkelse", "#fadderuke"];
   teknologi = ["#ps4", "#xbox", "#switch", "#mobil","#hardware", "#software","#mac","#windows", "#data"];
   idrett = ["#fotball", "#basketball", "#extremsport", "håndball","#ski","#BMX","#Skateboard",];
   kultur = ["#teater", "#kino", "#film", "#festival", "#litteratur", "#kunst", "#musikk"];
   jobb = ["#jobbsøknad", "#internship", "#lønn", "#personutvikling","#deltidsjobb", "#opplæring"];
   matdrikke = ["#resturant", "#øl", "#vin", "#sprit", "#julebord", "#kjøtt", "#fisk", "#bacon"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  // Sander
  btnActivate(ionicButton) {
    if(ionicButton._color === 'dark')
      ionicButton.color = 'primary';
    else
      ionicButton.color = 'dark';
  }
  // Sander
  btntags(ionicButton) {
    if(ionicButton._color === 'light')
      ionicButton.color = 'primary';
    else
      ionicButton.color = 'light';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InteresserPage');
  }

  selectTags(tag) {
    console.log(tag);

    
    
      if(this.selectedTags.includes(tag)){
        console.log("tag already in array"); 
      }
      else {
        this.selectedTags.push(tag);
        console.log(this.selectedTags);
      }
  }



  toMain() {
    this.navCtrl.push(MainPage);
    console.log(this.selectedTags);
  }
  
  }


