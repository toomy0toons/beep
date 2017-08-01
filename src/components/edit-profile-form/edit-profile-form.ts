import { DataService } from './../../providers/data.service';
import { User } from 'firebase/app';
import { AuthService } from './../../providers/auth.service';
import { Profile } from './../../models/profile/profile';
import { Component, OnDestroy, EventEmitter, Output, Input, OnInit } from '@angular/core';
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
export class EditProfileFormComponent implements OnInit, OnDestroy {

  text: string;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Input() profile: Profile;

  @Output() saveProfileResult = new EventEmitter<Boolean>();

  constructor(private data: DataService, private auth:AuthService) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>
    { this.authenticatedUser = user;})
  }

  async saveProfile(){
    this.profile.email = this.authenticatedUser.email;
     const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
     this.saveProfileResult.emit(result);
     console.log("emit result");
     console.log(result);
  }

  ngOnDestroy(): void{
    this.authenticatedUser$.unsubscribe();
  }

  ngOnInit(): void {
    if (!this.profile){
      this.profile = {} as Profile;
    }
  }
  

}
