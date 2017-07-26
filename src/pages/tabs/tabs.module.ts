import { TabsPage } from './tabs';
import { NgModule } from '@angular/core';
import { IonicPageModule } from "ionic-angular";

@NgModule({
  imports: [IonicPageModule.forChild(TabsPage)],
  exports: [],
  declarations: [TabsPage],
  providers: [],
})
export class TabsPageModule { }
