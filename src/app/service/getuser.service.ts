
import { Injectable } from '@angular/core';
import { ILogin } from './../interfaces/interface.login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 login : ILogin[] = [];
  constructor() {
   }

   refrescarLocalStorage(){
      localStorage.setItem("login" , JSON.stringify(this.login));
   }



   obtenerLogin(username : string):ILogin|null{
     debugger;
    const aux = this.login.filter(x => x.username == username);
    if (aux.length > 0) {
      return aux[0];
    }else{
      return null;
    }
   }

   obtenerLogins(){
    if (this.validarLogin()) {
      this.login = JSON.parse(localStorage.getItem("login") || '{}');
      return this.login; 
    } else{
      this.loginEjemplo();
      return this.login ;
    } 
   }

validarLogin(){
  return localStorage.getItem("login") != null && localStorage.getItem("login") != undefined ;
}

loginEjemplo(){
    if (!this.validarLogin() ) {
        this.login.push({
          username: "user1",
          password:"123456",
          role:"admin"
        });

        this.login.push({
          username: "user2",
          password:"123456",
          role:"user"
        });
      
        this.refrescarLocalStorage();
         
    }
   }

}