import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConefireService } from 'src/app/servicio/conefire.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombreOb:string ='';
  mailOb:string= '';
  loginForm= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(public authSvc: ConefireService, private router: Router) {}

  ngOnInit(): void {}

  
  async onLogin(){
    console.log("login")
    const {email, password, } = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user){
        this.authSvc.nombreEmail = email;
        console.log("log ok para el usuario: ",this.authSvc.nombreEmail)
        this.router.navigate(['/']);
        // this.router.navigate(['/']);
      }
    }catch(error){
      console.log(error);
    }
  }

}
