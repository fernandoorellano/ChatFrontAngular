import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConefireService } from '../servicio/conefire.service';
import { TraerapiService } from '../servicio/traerapi.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user; 
  // userLoged = this.authSvc.getUserLogged();
  
  constructor(public srvApi: TraerapiService, public authSvc: ConefireService){}

  aux: boolean = false;
  valorGet: string = "";
  valorPostViejos:string="";
  nuevaClave: string = "";
  nuevoMensaje: string = "Nuevo mensaje";
  mostrarBtn:boolean;

  ngOnInit(){
    this.traerValoresApi();
  }
 
  mostrarBtns(valor){
    this.nuevaClave = valor;
    this.mostrarBtn = !this.mostrarBtn;
  }

  cancelar(){
    this.aux = false;
    this.mostrarBtn = !this.mostrarBtn;
  }

  // editar valores de la BD
  editValoresApi(item, item2){
    this.srvApi.editarBD(item, item2).subscribe(()=>{this.traerValoresApi2()});
  }
  // borrar valores
  borrarValoresApi(item){
    this.srvApi.borrarBD(item).subscribe(()=>{this.traerValoresApi2()});
  }
  // enviar valores a la BDD
  enviarAlaBD(){
    this.srvApi.mostarPOST().subscribe(t=>{
      this.valorPostViejos = t,
      this.traerValoresApi();
      this.srvApi.mensaje = "";
    });
  } 
  // muestro valores de la BD con scroll
  async traerValoresApi(){
    this.srvApi.mostrarBD().subscribe( t=>{
        this.valorGet = t
        this.scrollTo();
      }
    );
  }

   // muestro valores de la BD SIN EFECTO SCROLL
   async traerValoresApi2(){
    this.srvApi.mostrarBD().subscribe( t=>{
        this.valorGet = t
      }
    );
  }

// scroll a foter
  scrollTo(){
    setTimeout(()=>{ 
      const elementList = document.querySelectorAll('.footer');
      const element = elementList[0] as HTMLElement;
      element.scrollIntoView({ behavior: 'smooth', block: 'center'  });
    },40)
  }
  // scrollTo() {
  //     const elementList = document.querySelectorAll('.footer');
  //     const element = elementList[0] as HTMLElement;
  //     element.scrollIntoView({ behavior: 'smooth', block: 'center'  });
  // }

}
