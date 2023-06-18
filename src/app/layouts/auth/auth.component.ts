import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ROUTES, Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';
import { AppRoute } from '@data/util/menu.values.interface';

@Component({
  selector: 'mmj-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public loginRunning : boolean = false
  public message : string | undefined
  public form : FormGroup  = this.fb.group({
    username : ['edwindev@gmail.com', [Validators.required, Validators.minLength(10)]],
    password : ['123456', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private authService: AuthService,
    private router : Router, 
    private fb : FormBuilder
  ) { }

  public login() {
    this.loginRunning = true
    this.authService.login(this.form.value).subscribe(response => {
      this.loginRunning = false
      if(response.ok) {
        this.authService.user = response.data
        this.router.navigateByUrl(AppRoute.HOME)
      } else this.message = response.message
    })
  }
}
