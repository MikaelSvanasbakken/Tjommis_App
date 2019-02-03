import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from "../main/main";
import { TjommisHubProvider } from '../../providers/tjommis-hub/tjommis-hub';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TitleCasePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public statusMessage : string = "";
  loginFormGroup : FormGroup;
  submitAttempt : boolean = false;
  username: string = "";
  password: string = "";
  errorMessage: string = "";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider,
    public tjommisHub : TjommisHubProvider,
    public formBuilder : FormBuilder,
    )
  {
    this.loginFormGroup = formBuilder.group({
      username: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      password: ['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      affiliation:['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.submitAttempt = true;
    if (!this.loginFormGroup.valid) {
      this.errorMessage = "Please fill out all the form input correctly.";
      return;
    }

    this.statusMessage = "Authenticating...";
    
    //need to pass this value somehow
    let affiliation = this.loginFormGroup.controls["affiliation"].value;

    this.authService.login({username: this.loginFormGroup.controls["username"].value, password: this.loginFormGroup.controls["password"].value}).then(response=> 
    { 
      this.statusMessage = "Logging inn...";
      this.tjommisHub.connect(this.authService.loginToken).then(
        () => {
          this.statusMessage = "";
          this.navCtrl.push(MainPage);
        },
        rejected => {console.log("Could not connect: " ,rejected)
      });
    },error => {
      console.log(error);
      this.errorMessage = error;
    });
    //this.navCtrl.push(MainPage)
  }

}
