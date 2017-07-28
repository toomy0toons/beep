import { ComponentsModule } from './../../components/components.module';
import { LoginPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";



@NgModule({
  imports: [IonicPageModule.forChild(LoginPage),
  ComponentsModule,],
  exports: [],
  declarations: [LoginPage],
  providers: [],
})
export class LoginPageModule { }
