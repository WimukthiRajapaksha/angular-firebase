import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private toastr: ToastrService, private auth: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.toastr.success('Successfully Added!', 'Placed that order.', { positionClass: 'toast-bottom-right', timeOut: 5000,
        extendedTimeOut: 0, easeTime: 300, tapToDismiss: true, disableTimeOut: false
    });

    this.auth.emailLogin(this.loginForm.value).then(res => {
      if (res === 'success') {
        const redirect = '/items';
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }
}
