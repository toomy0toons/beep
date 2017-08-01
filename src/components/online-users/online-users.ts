import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import { DataService } from './../../providers/data.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from "../../models/profile/profile";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>
  constructor(private data: DataService,
  private navCtrl: NavController) {
  }

  ngOnInit(){
    this.setUserOnline();
    this.getOnlineUsers();
  }
  setUserOnline(){
    //getAuthenticateduser
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    })
  }

  getOnlineUsers(){
    this.userList = this.data.getOnlineUsers();
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', {profile});
  }
}
