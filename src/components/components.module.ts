import { RegisterFormComponent } from './register-form/register-form';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form';

@NgModule({
  imports: [IonicModule],
  exports: [LoginFormComponent, RegisterFormComponent],
  declarations: [LoginFormComponent, RegisterFormComponent],
  providers: [],
})
export class ComponentsModule { }
