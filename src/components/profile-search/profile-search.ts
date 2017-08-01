import { DataService } from './../../providers/data.service';
import { Profile } from './../../models/profile/profile';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  text: string;
  query: string;
  profileList: Profile[]

  @Output() selectedProfile: EventEmitter<Profile>

  constructor(private data: DataService) {
    console.log('Hello ProfileSearchComponent Component');
    this.text = 'Hello World';
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(query: string){
    const trimmedQuery = query.trim();

    if (trimmedQuery === query){
      this.data.searchUser(query).subscribe(profiles => {
      console.log(profiles);
      this.profileList = profiles;
    })
    }
  }

  selectProfile(profile : Profile){
    this.selectedProfile.emit(profile);
  }

}
