import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EolComponent } from './eol/eol.component';
import { HomeComponent } from './home/home.component';
import { EolNotificationComponent } from './eol-notification/eol-notification.component';
import { EolUpdateComponent } from './eol-update/eol-update.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
 // { path: 'eol', component: EolComponent },
  //{ path: 'eol/notification', component: EolNotificationComponent },
  //{ path: 'eol/update', component: EolUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
