import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';

@Component({
  selector: 'mmj-course-tool',
  templateUrl: './course-tool.component.html',
  styleUrls: ['./course-tool.component.css']
})
export class CourseToolComponent implements OnInit {

  constructor(private crumbService : BreadcrumbService) {}
  
  public ngOnInit(): void {
    this.crumbService.addBreadcrumb({icon: '', label: 'HERRAMIENTAS', link: ''})
  }

}
