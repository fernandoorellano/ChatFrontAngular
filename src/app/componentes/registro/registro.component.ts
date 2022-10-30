import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConefireService } from 'src/app/servicio/conefire.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios = [];
  usuario = {
    email: '',
    pass: '',
  }
  

  ngOnInit() {}

  constructor(public authSvc: ConefireService, private router: Router) { }


  onRegister(){
    const { email, pass } = this.usuario;
    this.authSvc.register(email, pass).then(user => { 
      let lista = [...this.usuarios];
      let existe = lista.find(user => user.email == email);

      if (!existe) {
        this.router.navigate(['/']);
      };

      // this.router.navigate(['/home']);
    }).catch(err => {
      console.log(err),this.router.navigate(['/']);
    })
  }

}
