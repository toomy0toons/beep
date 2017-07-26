import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

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

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }
  
  navigateToPage(page: string){
    page === 'TabsPage' ? this.navCtrl.setRoot(page) : this.navCtrl.push(page); 
  }

}
