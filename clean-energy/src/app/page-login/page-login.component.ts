import { Component, Injectable  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']  // Corrected to 'styleUrls'
})
export class PageLoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.apiService.login(username, password).subscribe({
        next: (response: any) => {
          if (response.token) {
            console.log('Login successful:', response);

            // Store the token in localStorage (or sessionStorage)
            localStorage.setItem('jwt_token', response.token);

            // Redirect to the dashboard
            this.router.navigate(['/dashboard']);
          } else {
            console.error('No token received:', response.message);
            alert('Login failed: Invalid credentials');
          }
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Login failed: Please try again');
        }
      });
    } else {
      console.error('Form is not valid');
      alert('Please fill out the login form');
    }
  }

}
