import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CertificateRoutingModule } from './certificate.routing';
import { CertificateComponent } from './certificate.component';
import { CertificateDetailComponent } from './certificate-detail/certificate-detail.component';
import { CertificateMenuComponent } from './certificate-menu/certificate-menu.component';

@NgModule({
  declarations: [
    CertificateComponent,
    CertificateDetailComponent,
    CertificateMenuComponent
  ],
  imports: [
    SharedModule,
    CertificateRoutingModule
  ]
})

export class CertificateModule { }
