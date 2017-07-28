import { ProfilePage } from './profile';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  imports: [IonicPageModule.forChild(ProfilePage)],
  exports: [],
  declarations: [ProfilePage],
  providers: [],
})
export class ProfilePageModule { }
