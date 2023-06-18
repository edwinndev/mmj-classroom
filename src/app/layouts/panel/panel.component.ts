import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@data/services/local/breadcrumb.service';
import { AppMenu, mainRoutes } from '@data/util/menu.interface';

@Component({
  selector: 'mmj-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{
  public menu : AppMenu[] = mainRoutes
  public selected : string = this.menu[0].label
  public crumb : string = ''
 
  constructor(private breadcrumbService : BreadcrumbService) {
    this.breadcrumbService.getBreadcrumbs().subscribe(response => {
      this.crumb = ` / ${response[0].label}`
    })
  }

  public ngOnInit(): void {
    
  }

  public changeLabel(value : string) {
    this.selected = value
    this.crumb = ''
  }
}
