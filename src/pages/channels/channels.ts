import { ChannelChatPage } from './../channel-chat/channel-chat';
import { Observable } from 'rxjs/Observable';
import { ChatService } from './../../providers/chat.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Channel } from "../../models/channel/channel.interface";
import { FirebaseListObservable } from "angularfire2/database";

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel []>

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private alertCntrl: AlertController,
   private chat: ChatService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelsPage');
  }

  ionViewWillLoad(){
    this.getChannels();
  }

  getChannels(){
      this.channelList = this.chat.getChannelList()
  } 

  selectChannel(channel: Channel){
    this.navCtrl.push('ChannelChatPage', {channel})
  }
  showAddChannelDialog(){
    this.alertCntrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'cancel',
          role: 'cancel' 
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }
}
