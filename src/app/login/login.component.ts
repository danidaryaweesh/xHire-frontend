 import { Component, OnInit } from '@angular/core';
 import { Router} from '@angular/router';
 import { UserService } from '../services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['../main.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private router: Router,
    private userService: UserService) { }

    ngOnInit() {
      this.userService.logout();
    }

    login() {
      this.userService.login(this.model.username, this.model.password)
        .subscribe(
          data => {
            console.log("logged in");
            localStorage.setItem('currentUser', JSON.stringify(data));
            localStorage.setItem('password', this.model.password);
            window.location.href = '/home';
          },
          error => {
            alert(error);
          });
  }
}

