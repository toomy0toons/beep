import { AuthService } from './auth.service';
import { Profile } from './../models/profile/profile';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import {User} from 'firebase/app'; 
import "rxjs/add/operator/take";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>
  profileList: FirebaseListObservable<Profile>

  constructor(private database: AngularFireDatabase,
  private authService: AuthService) {
  }

  searchUser(firstName: string){
    const query = this.database.list('/profiles', {
      query: {
        orderByChild: 'firstName',
        equalTo: firstName
      }
    })

    return query.take(1);
  }

  getAuthenticatedUserProfile(){
    return this.authService.getAuthenticatedUser()
    .map(user => user.uid)
    .mergeMap(authId => this.database.object(`/profiles/${authId}`))
    .take(1)
  }
  getProfile(user: User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    return this.profileObject.take(1); //ends stream and just get one
  }

  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`,
     {preserveSnapshot : true});
    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch(e){
      console.error(e);
      return false;
    }
  }

}
