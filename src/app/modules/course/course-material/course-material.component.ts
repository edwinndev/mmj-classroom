import { Component, OnInit } from '@angular/core';
import { CourseMaterial } from '@data/interfaces/api/course.interface';
import { CourseService } from '@data/services/api/course.service';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.css']
})
export class CourseMaterialComponent implements OnInit {
  public materials : CourseMaterial[] = []

  constructor(private courseService : CourseService, private crumbService : BreadcrumbService) {}
  
  public ngOnInit(): void {
    this.materials = this.courseService.materials
    this.crumbService.addBreadcrumb({icon: '', label: 'MATERIAL', link: ''})
  }
}
