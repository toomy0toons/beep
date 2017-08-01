import { User } from 'firebase/app';
import { Profile } from './../../models/profile/profile';
import { AuthService } from './../../providers/auth.service';
import { DataService } from './../../providers/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoadingController, Loading} from "ionic-angular";

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent {

  text: string;

  loader: Loading;
  
  public userProfile: Profile;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(private data: DataService, 
  private auth: AuthService, private loading: LoadingController) {
    console.log('Hello ProfileViewComponent Component');
    this.text = 'Hello World';
    this.loader = this.loading.create({
      content: 'Loading profile...'
    });
    this.existingProfile = new EventEmitter<Profile>();
  }

  //onInit is rplace for willload for compoenent, as navctrl never loads

  ngOnInit():void{
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User)=> {
      this.data.getProfile(user).subscribe((profile: Profile)=> {
        this.userProfile = profile;
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      })
    })
  }

}
