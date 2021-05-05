import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILogin } from 'src/app/interfaces/interface.login';
import { Login } from 'src/app/models/model.login';
import { LoginService } from 'src/app/service/getuser.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string;
  userlogin:ILogin | null;
  constructor(private router : Router , private ruta:ActivatedRoute, private _service:LoginService) { 
    this.username = this.ruta.snapshot.params.username;
    _service.loginEjemplo();
  
    this.userlogin = this._service.obtenerLogin(this.username);

    if(this.userlogin?.role == "admin"){
      alert("es admin");
    }
  }

  ngOnInit(): void {
  }



}
