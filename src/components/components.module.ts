import { RegisterFormComponent } from './register-form/register-form';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';
import { EditProfileFormComponent } from './edit-profile-form/edit-profile-form';
import { ProfileViewComponent } from './profile-view/profile-view';
import { ProfileSearchComponent } from './profile-search/profile-search';
import { SendMessageBoxComponent } from './send-message-box/send-message-box';

@NgModule({
  imports: [IonicModule],
  exports: [LoginFormComponent, RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent],
  declarations: [LoginFormComponent, RegisterFormComponent,
    EditProfileFormComponent,
    ProfileViewComponent,
    ProfileSearchComponent,
    SendMessageBoxComponent],
  providers: [],
})
export class ComponentsModule { }
