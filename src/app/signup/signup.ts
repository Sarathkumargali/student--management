import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  styleUrls: ['./signup.css'],
})
export class Signup {
  submitted = false;

  registrationForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required),
    agreeterms: new FormControl(false, Validators.requiredTrue),
  });

  constructor(private router: Router) {
    console.log('Signup form initialized:', this.registrationForm);
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    } else {
      console.log('Signin payload:', this.registrationForm.value);
      this.router.navigate(['/homepage']);

      // https://localhost:4200/homepage
    }
  }
}
