import { InboxPage } from './inbox';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  imports: [IonicPageModule.forChild(InboxPage)],
  exports: [],
  declarations: [InboxPage],
  providers: [],
})
export class InboxPageModule { }
