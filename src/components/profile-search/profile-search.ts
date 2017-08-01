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

  constructor() {
    console.log('Hello ProfileSearchComponent Component');
    this.text = 'Hello World';
  }

}
