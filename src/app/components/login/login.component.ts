import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/getuser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formlogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private router: Router,private _loginService: LoginService) {
    _loginService.loginEjemplo();
   }

  ngOnInit(): void {
  }

  OnLogin(form:any){
    console.log(form);
    let userval = this._loginService.obtenerLogin(form.username);
    console.log("VALOR>>>"+userval);
    if(userval?.username == null){
      alert("Usuario o contraseña invalidos");
    }else{
      this.router.navigate(['dashboard',userval.username.toString()]);
    }
  }

}
