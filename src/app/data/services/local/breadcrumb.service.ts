import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Breadcrumb from '@data/interfaces/local/breadcrumb.interface';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private list : Breadcrumb[] = []
  private crumbSubject : Subject<Breadcrumb[]> = new Subject()

  constructor(private http : HttpClient) { }

  public addBreadcrumb(crumb : Breadcrumb) {
    this.list = []
    this.list.push(crumb)
    this.crumbSubject.next(this.list)
  }

  public getBreadcrumbs() : Observable<Breadcrumb[]> {
    return this.crumbSubject.asObservable()
  }
}
