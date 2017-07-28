import { AuthService } from './../../providers/auth.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/account/account.interface';
import { NavController } from 'ionic-angular';
import { Component, EventEmitter, Output} from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */    
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account ;

  text: string;

  @Output() loginStatus: EventEmitter<LoginResponse>;


  constructor(private navCtrl: NavController,
  private auth: AuthService) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
    this.loginStatus = new EventEmitter<any>();
  }
  
  navigateToPage(page: string){
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page); 
  }

  async login(){
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
  }

  navigateToRegisterPage(){
    this.navCtrl.push('RegisterPage');
  }
}
