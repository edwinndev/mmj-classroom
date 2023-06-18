import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate.component';
import { CertificateDetailComponent } from './certificate-detail/certificate-detail.component';
import { CertificateMenuComponent } from './certificate-menu/certificate-menu.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateComponent,
    children: [
      {
        path: '',
        component: CertificateMenuComponent
      },
      {
        path: ':id',
        component: CertificateDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CertificateRoutingModule { }
