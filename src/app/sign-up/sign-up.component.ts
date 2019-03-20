import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private signUpForm: FormGroup;

  constructor(private authe: AuthService, private router: Router) {
    this.signUpForm = new FormGroup({
      'username': new FormControl(),
      'email': new FormControl(),
      'phoneNumber': new FormControl(),
      'password': new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authe.emailSignUp(this.signUpForm.value);
    this.router.navigate(['./login']);
  }

}
