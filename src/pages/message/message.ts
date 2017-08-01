import { AuthService } from './../../providers/auth.service';
import { MESSAGE_LIST } from './../../mocks/messages/messages';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from "../../models/profile/profile";
import { Message } from "../../models/messages/messages";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {


  userId: string
  selectedProfile: Profile
  messageList: Message[]

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  private auth:AuthService) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad MessagePage');
    this.selectedProfile = this.navParams.get('profile');
    this.auth.getAuthenticatedUser().subscribe(
      auth => this.userId = auth.uid)
    console.log(this.selectedProfile);
  }

}
