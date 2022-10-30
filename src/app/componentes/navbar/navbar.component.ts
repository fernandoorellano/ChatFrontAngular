import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ConefireService } from 'src/app/servicio/conefire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 

  usuarios = []; 

  public user$: Observable<any> = this.authSvc.afAuth.user;
  nombreUsuario = this.user$;
  userLoged = this.authSvc.getUserLogged();



  public mensj: string ="";
  public nombre: string = "";
  public hora= new Date();

  constructor(private router: Router, public srv: ConefireService ,private authSvc: ConefireService) {}

  ngOnInit() {
    
  }

 

  async onLogout(){
   
    try{
      this.authSvc.logout();
      this.srv.nombreEmail = "";
      this.router.navigate(['/']);
    }
    catch(error){console.log(error);} 
  }

}
