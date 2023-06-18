import { Component, OnInit } from '@angular/core';
import { CourseMaterial } from '@data/interfaces/api/course.interface';
import { CourseService } from '@data/services/api/course.service';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent implements OnInit {
  public videos : CourseMaterial[] = []

  constructor(private courseService : CourseService, private crumbService : BreadcrumbService) {}
  
  ngOnInit(): void {
    this.videos = this.courseService.materials
    this.crumbService.addBreadcrumb({icon: '', label: 'VIDEOS', link: ''})
  }

}
