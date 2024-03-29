import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../providers/chat.service';
import { DataService } from './../../providers/data.service';
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
  messageList: Observable<Message[]>

  userProfile: Profile;

  constructor(public navCtrl: NavController, 
  private chat:ChatService,
  public navParams: NavParams,
  private auth:AuthService,
  private data:DataService) {
    
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad MessagePage');
    this.selectedProfile = this.navParams.get('profile');
    this.data.getAuthenticatedUserProfile()
    .subscribe(profile=> {
      this.userProfile = profile,
      this.userId = profile.$key
    });
    console.log(this.selectedProfile);

    this.messageList = this.chat.getChat(this.selectedProfile.$key);
  }

  async sendMessage(content: string){
    try {
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        userFromId: this.userId,
        content: content
      }

    await this.chat.sendChat(message);
    }
    catch (e){
      console.error(e);
    }
  }
}
