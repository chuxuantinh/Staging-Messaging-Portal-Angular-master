import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';
import { MdSnackBar} from "@angular/material";
import {Location} from "@angular/common";

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string;
  password: string;
  confirmPassword: string;

  firstName: string;
  lastName: string;
  email: string;

  locationList = ['Virginia', 'New York', 'Florida'];
  location: string;
  error: any;
  isSignIn: boolean;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _snackBarService: MdSnackBar,
              private _location: Location) {
  }

  login(): void {
    this._loadingService.register();
    alert('Mock log in as ' + this.username);
    setTimeout(() => {
      this._router.navigate(['/']);
      this._loadingService.resolve();
    }, 2000);
  }

  public register() {
    this.error = null;

    let user = {
      email: this.username,
      password: this.password,
      location: this.location,
      firstName: this.firstName,
      lastName: this.lastName
    };

    // // if (this.password == this.confirmPassword) {
    // //   this.userService.registerUser(user)
    // //     .subscribe(data => {
    // //       this.showSnackBar();
    // //       this.toggleStatus();
    // //     }, error => this.error = error);
    // }
    // else
      this.error = {statusText: "Passwords don't match"};


  }

  public toggleStatus() {
    this.error = '';
    this.password = '';
    this.confirmPassword = '';
    this.isSignIn = !this.isSignIn;

    if(this.isSignIn)
      this._location.replaceState('register');
    else
      this._location.replaceState('login')
  }

  // showSnackBar(): void {
  //   let snackBarRef: MdSnackBarRef<any> = this._snackBarService.open("User Registered", "Login", {duration: 3000});
  //
  //   snackBarRef.onAction().subscribe(() => {
  //     this.router.navigate(['/login']);
  //   });
  // }

}
