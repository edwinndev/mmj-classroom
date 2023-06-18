import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CourseRoutingModule } from './course.routing';
import { CourseComponent } from './course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseMaterialComponent } from './course-material/course-material.component';
import { CourseVideoComponent } from './course-video/course-video.component';
import { CourseWorkComponent } from './course-work/course-work.component';
import { CourseToolComponent } from './course-tool/course-tool.component';
import { CourseMenuComponent } from './course-menu/course-menu.component';

@NgModule({
  declarations: [
    CourseComponent,
    CourseDetailComponent,
    CourseMaterialComponent,
    CourseVideoComponent,
    CourseWorkComponent,
    CourseToolComponent,
    CourseMenuComponent
  ],
  imports: [
    SharedModule,
    CourseRoutingModule
  ]
})

export class CourseModule { }
