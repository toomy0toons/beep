import { ComponentsModule } from './../../components/components.module';
import { ProfilePage } from './profile';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  imports: [IonicPageModule.forChild(ProfilePage),
  ComponentsModule],
  exports: [],
  declarations: [ProfilePage],
  providers: [],
})
export class ProfilePageModule { }
