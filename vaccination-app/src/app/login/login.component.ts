import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {
  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  username: string = "";
  password: string = "";
    ngOnInit(): void {
  }
    connect(): void {
 
    this.loginService.connect(this.username, this.password ).subscribe(value => {
      this.router.navigate(["centers"])
    });
  }
}


