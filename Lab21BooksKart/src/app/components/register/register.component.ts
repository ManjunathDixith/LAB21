import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CustomValidationService } from 'src/app/service/custom-validation.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
  showPassword = true;
  showConfirmPassword = true;
  private unsubscribe$ = new Subject<void>();

  constructor( private router: Router, private fb: FormBuilder,
     private customValidation: CustomValidationService,
     private userService: UserService,) { }
   
  registrationForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', [Validators.required], this.customValidation.userNameValidator.bind(this.customValidation)],
    password: ['', Validators.compose([Validators.required, this.customValidation.patternValidator()])],
    confirmPassword: ['', [Validators.required]],
    gender: ['', Validators.required],
  },
  {
    validator: this.customValidation.confirmPasswordValidator,
  }
  );

  get firstname() {
    return this.registrationForm.get('firstname');
  }

  get lastname() {
    return this.registrationForm.get('lastname');
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  
  registerUser() {
    if (this.registrationForm.valid) {
      this.userService.registerUser(this.registrationForm.value)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          () => {
            this.router.navigate(['/login']);
          }, error => {
            console.log('Error ocurred while adding book data : ', error);
          });
    }
  }
  

  ngOnInit(): void {
  }

}
