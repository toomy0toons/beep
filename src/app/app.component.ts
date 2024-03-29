import { TabsPage } from './../pages/tabs/tabs';
import { AuthService } from './../providers/auth.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar,
   splashScreen: SplashScreen, private auth: AuthService) {

    this.auth.getAuthenticatedUser().subscribe(auth => {
      !auth ? this.rootPage = 'LoginPage' : this.rootPage = 'TabsPage';
    })



    platform.ready().then(() => {
      // this.rootPage = 'LoginPage';
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

