import { ProfilePage } from './../profile/profile';
import { ChannelsPage } from './../channels/channels';
import { InboxPage } from './../inbox/inbox';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:string;
  tab2Root:string;
  tab3Root:string;


  constructor(){
    this.tab1Root="InboxPage";
    this.tab2Root="ChannelsPage";
    this.tab3Root = "ProfilePage";

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
