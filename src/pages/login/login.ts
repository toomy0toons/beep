import { ToastController } from 'ionic-angular';
import { LoginResponse } from './../../models/login/login-response.interface';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(event: LoginResponse){
    console.log(event); 
    if(!event.error){
      this.toast.create({
        message: `welcome, ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot('ProfilePage');
    }
    else{
        this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
