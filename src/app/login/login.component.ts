import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { AuthUtilService } from '../auth/auth-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  message: { type: string; text: string };

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private authUtil: AuthUtilService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        localStorage.setItem('token', data);
        this.authUtil.currentTokenValue = data;
        console.log(this.authUtil.currentTokenValue);
        // this.router.navigate([this.returnUrl]);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.message = { type: 'danger', text: error };
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
