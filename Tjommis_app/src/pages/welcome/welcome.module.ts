import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { WelcomePage } from './welcome';


@NgModule({
  declarations: [
    WelcomePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
  ],
  entryComponents: [
    WelcomePage,
  ]
})
export class WelcomePageModule {public navController: NavController}


