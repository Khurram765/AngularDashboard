import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainmenuComponent } from './pages/mainmenu/mainmenu.component';
import { DonorrequestsComponent } from './pages/donorrequests/donorrequests.component';
import { RecipientrequestsComponent } from './pages/recipientrequests/recipientrequests.component';
import { DonorscheduleComponent } from './pages/donorschedule/donorschedule.component';
import { RecipientscheduleComponent } from './pages/recipientschedule/recipientschedule.component';
import { DonoractivityComponent } from './pages/donoractivity/donoractivity.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { BloodcentersComponent } from './pages/bloodcenters/bloodcenters.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { DrivesComponent } from './pages/drives/drives.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SendnotificationsComponent } from './pages/sendnotifications/sendnotifications.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainmenuComponent,
    DonorrequestsComponent,
    RecipientrequestsComponent,
    DonorscheduleComponent,
    RecipientscheduleComponent,
    DonoractivityComponent,
    InventoryComponent,
    BloodcentersComponent,
    CitiesComponent,
    MessagesComponent,
    DrivesComponent,
    NotificationsComponent,
    SendnotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
