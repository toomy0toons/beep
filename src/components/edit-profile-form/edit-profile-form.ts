import { DataService } from './../../providers/data.service';
import { User } from 'firebase/app';
import { AuthService } from './../../providers/auth.service';
import { Profile } from './../../models/profile/profile';
import { Component } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent {

  text: string;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  profile = {} as Profile;

  constructor(private data: DataService, private auth:AuthService) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>
    { this.authenticatedUser = user;})
  }

  async saveProfile(){
     const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
     console.log(result);
  }

  

}
