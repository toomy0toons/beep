import { DataService } from './../../providers/data.service';
import { Profile } from './../../models/profile/profile';
import { Component } from '@angular/core';

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

  constructor(private data: DataService) {
    console.log('Hello ProfileSearchComponent Component');
    this.text = 'Hello World';
  }

  searchUser(query: string){
    this.data.searchUser(query).subscribe(profiles => {
      console.log(profiles);
      this.profileList = profiles;
    })
  }

}
