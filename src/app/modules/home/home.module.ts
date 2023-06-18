import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home.routing';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AlertComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
