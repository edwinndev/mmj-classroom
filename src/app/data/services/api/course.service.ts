import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { ApiResponse } from '@data/interfaces/api/response.interface';
import { CourseMaterial, SimpleCourse } from '@data/interfaces/api/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private url : string = environment.API_URL
  private courseInfo : CourseMaterial[] = []

  constructor(private http : HttpClient) {}

  public get materials() : CourseMaterial[] {
    return this.courseInfo
  }

  public set materials(value : CourseMaterial[]) {
    this.courseInfo = value;
  }
  
  public listMyCourses(userId : number) : Observable<ApiResponse<SimpleCourse[]>> {
    return this.http.get<ApiResponse<SimpleCourse[]>>(`${this.url}/auth/profile/${userId}`)
  }

  public listCourseMaterials(courseId : number) : Observable<ApiResponse<CourseMaterial[]>> {
    console.log('Llamada a  Cursos');
    return this.http.get<ApiResponse<CourseMaterial[]>>(`${this.url}/courses/classes/${courseId}`)
  }

}
