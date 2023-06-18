import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { CourseVideoComponent } from './course-video/course-video.component';
import { CourseWorkComponent } from './course-work/course-work.component';
import { CourseToolComponent } from './course-tool/course-tool.component';
import { CourseMenuComponent } from './course-menu/course-menu.component';
import { AppRoute } from '@data/util/menu.values.interface';

const routes: Routes = [
  {
    path: '',
    component: CourseComponent
  },
  {
    path: ':id',
    component: CourseDetailComponent,
    children: [
      {
        path: '',
        component: CourseMenuComponent
      },
      {
        path: AppRoute.CLASS_MATERIAL,
        component: CourseMaterialComponent
      },
      {
        path: AppRoute.CLASS_VIDEOS,
        component: CourseVideoComponent
      },
      {
        path: AppRoute.CLASS_WORKS,
        component: CourseWorkComponent
      },
      {
        path: AppRoute.CLASS_TOOLS,
        component: CourseToolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CourseRoutingModule { }
