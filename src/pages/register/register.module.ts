import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";
import { RegisterPage } from "./register";
import { AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  imports: [IonicPageModule.forChild(RegisterPage),
  ComponentsModule, AngularFireAuthModule],
  exports: [],
  declarations: [RegisterPage],
  providers: [],
})
export class RegisterPageModule { }
