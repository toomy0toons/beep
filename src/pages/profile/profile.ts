import { EditProfilePage } from './../edit-profile/edit-profile';
import { Profile } from './../../models/profile/profile';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getExistingProfile(profile: Profile){
    this.existingProfile = profile;
  }

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', {existingProfile: this.existingProfile});
  }

}
