import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Login = {
  username: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: Login = <Login>{};
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(){
    console.log(this.user.username);
    if(this.user.username.trim()){
      sessionStorage.setItem('user', this.user.username);
      this.router.navigate(['dhadi'])
    }
  }

}
