import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import {  FormControl,FormGroup, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
  standalone: true
})
export class Signin {
  submitted = false;
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;
    if (this.registrationForm.valid) {
    
      console.log(this.registrationForm.value);
      
    
    }
  } 
}
