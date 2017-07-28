import { LoginResponse } from './../../models/login/login-response.interface';
import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration:3000
      }).present();
    }
    else{
      this.toast.create({
        message: `Account X: ${event.error.message}`,
        duration:3000
      }).present();
    }
  }

}
