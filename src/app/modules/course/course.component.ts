import { Component, OnInit } from '@angular/core';
import { SimpleCourse } from '@data/interfaces/api/course.interface';
import { CourseService } from '@data/services/api/course.service';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courses : SimpleCourse[] = []

  public constructor(private courseService : CourseService, private crumbService : BreadcrumbService) {}
  
  ngOnInit(): void {
    this.courseService.listMyCourses(1).subscribe(
      response => this.courses = response.data
    )
  }

  public getCourseInfo() : void {
    this.crumbService.addBreadcrumb({icon: '', label: 'CURSO 04', link: ''})
    this.courseService.listCourseMaterials(1).subscribe(response => {
      if (response.ok) {
        this.courseService.materials = response.data
      }
    })
  }

}
