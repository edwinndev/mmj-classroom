import { Component } from '@angular/core';

@Component({
  selector: 'mmj-certificate-menu',
  templateUrl: './certificate-menu.component.html',
  styleUrls: ['./certificate-menu.component.css']
})

export class CertificateMenuComponent {
  public courses : string[] = ['Curso 01', 'Curso 02', 'Curso 03', 'Curso 04']
}
