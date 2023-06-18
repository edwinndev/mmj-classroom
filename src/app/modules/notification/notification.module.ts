import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NotificationRoutingModule } from './notification.routing';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    SharedModule,
    NotificationRoutingModule
  ]
})

export class NotificationModule { }
