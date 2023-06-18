import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  constructor(private crumbService : BreadcrumbService) { }

  ngOnInit(): void {
    //this.crumbService.addBreadcrumb({icon: '', label: 'CURSO 04', link: ''})
  }

}
