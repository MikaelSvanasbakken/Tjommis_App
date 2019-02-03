import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePageModule } from '../pages/welcome/welcome.module'
import { LoginPageModule } from '../pages/login/login.module'
import { MainPageModule } from '../pages/main/main.module'

import {LoadingPageModule} from "../pages/loading/loading.module";
import {ChatPageModule} from "../pages/chat/chat.module";
import { TjommisHubProvider } from '../providers/tjommis-hub/tjommis-hub';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { InteresserPageModule } from '../pages/interesser/interesser.module';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    LoginPageModule,
    InteresserPageModule,
    MainPageModule,
    LoadingPageModule,
    ChatPageModule,
    HttpModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TjommisHubProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
