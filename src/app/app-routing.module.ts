import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:MainmenuComponent},
  {path:'donorrequests',component:DonorrequestsComponent},
  {path:'recipientrequests',component:RecipientrequestsComponent},
  {path:'donorschedule',component:DonorscheduleComponent},
  {path:'recipientschedule',component:RecipientscheduleComponent},
  {path:'donoractivity',component:DonoractivityComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'bloodcenters',component:BloodcentersComponent},
  {path:'cities',component:CitiesComponent},
  {path:'messages',component:MessagesComponent},
  {path:'drives',component:DrivesComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'sendnotifications',component:SendnotificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
