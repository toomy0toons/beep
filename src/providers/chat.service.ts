import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {
    console.log('Hello ChatServiceProvider Provider');
  }

  addChannel(channelName: string){
    this.database.list(`/channel-names/`).push({name: channelName});
  }

}
