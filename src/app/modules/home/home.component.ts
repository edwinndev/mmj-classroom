import { Component, OnInit } from '@angular/core';
import { LoginResponse } from '@data/interfaces/api/login.interface';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'mmj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user : LoginResponse = {} as LoginResponse

  constructor(private authService : AuthService) {
    this.user = this.authService.user
  }

  ngOnInit(): void {
  }

}
