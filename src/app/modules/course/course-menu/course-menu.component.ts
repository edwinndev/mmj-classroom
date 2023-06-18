import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';
import { AppMenu, courseRoutes } from '@data/util/menu.interface';

@Component({
  selector: 'mmj-course-menu',
  templateUrl: './course-menu.component.html',
  styleUrls: ['./course-menu.component.css']
})

export class CourseMenuComponent implements OnInit{
  public menu : AppMenu[] = courseRoutes

  constructor(private crumbService : BreadcrumbService) {}
  
  public ngOnInit(): void {}

  public change(value : string) {
    //this.crumbService.addBreadcrumb({icon: '', label: value, link: ''})
  }

}
