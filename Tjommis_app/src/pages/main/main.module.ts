import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { TjommisHubProvider } from '../../providers/tjommis-hub/tjommis-hub';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  entryComponents: [
    MainPage
  ]
})
 export class MainPageModule {
 }

