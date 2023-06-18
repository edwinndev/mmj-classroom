import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.css']
})
export class CourseWorkComponent implements OnInit {

  constructor(private crumbService : BreadcrumbService) { }

  ngOnInit(): void {
    this.crumbService.addBreadcrumb({icon: '', label: 'TAREAS', link: ''})
  }

}
