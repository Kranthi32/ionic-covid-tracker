import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit{
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  HAS_LOGGED_IN = 'hasLoggedIn';
  loggedIn = false;
  constructor(
    public userData: UserData,
    public router: Router,
    private storage: Storage,
  ) { this.userData.logout();}

  ngOnInit(){
    //this.storage.set(this.HAS_LOGGED_IN, false);
    this.userData.logout();
    this.updateLoggedInStatus(false);
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
     // this.storage.set(this.HAS_LOGGED_IN, true)
     
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/charts');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
