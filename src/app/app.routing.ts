import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoute } from '@data/util/menu.values.interface';
import { AppComponent } from './app.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { PanelComponent } from './layouts/panel/panel.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent
      },
      {
        path: '',
        component: PanelComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: AppRoute.HOME,
            loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
          },
          {
            path: AppRoute.MY_COURSES,
            loadChildren: () => import('@modules/course/course.module').then(m => m.CourseModule)
          },
          {
            path: AppRoute.NOTIFICATIONS,
            loadChildren: () => import('@modules/notification/notification.module').then(m => m.NotificationModule)
          },
          {
            path: AppRoute.CERTIFICATIONS,
            loadChildren: () => import('@modules/certificate/certificate.module').then(m => m.CertificateModule)
          },
          {
            path: AppRoute.PROFILE,
            loadChildren: () => import('@modules/profile/profile.module').then(m => m.ProfileModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
