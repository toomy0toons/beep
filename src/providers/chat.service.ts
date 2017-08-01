import { AuthService } from './auth.service';
import { Message } from './../models/messages/messages';
import { ChannelMessage } from './../models/channel/channel-message.interface';
import { Channel } from './../models/channel/channel.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin'
import 'rxjs/add/operator/first';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase,
  private auth:AuthService) {
    console.log('Hello ChatServiceProvider Provider');
  }

  addChannel(channelName: string){
    this.database.list(`channel-names`).push({name: channelName});
  }

  getChannelList(): FirebaseListObservable<Channel>{
    return this.database.list(`channel-names`)
  }

  getChannelChat(channelKey: string){
    return this.database.list(`channels/${channelKey}`)
  }

  async sendChannelChatMessage(channelKey: string, message:ChannelMessage){
    await this.database.list(`/channels/${channelKey}`).push(message)
  }

  async sendChat(message: Message){
    await this.database.list(`/messages`).push(message);
  }

  getChat(userToId:string){
    return this.auth.getAuthenticatedUser()
    .map(auth => auth.uid)
    .mergeMap(uid => this.database.list(`/user-messages/${uid}/${userToId}`))
    .mergeMap(chats => {
      return Observable.forkJoin(
        chats.map(chat => this.database.object(`/messages/${chat.$key}`)
        .first()),
        (...vals: Message[]) => {
          return vals;
        }
      )
    })
  }
}
