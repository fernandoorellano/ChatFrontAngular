import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ConefireService {

  public usuario: any={};
  public nombreEmail: string = "";
  
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( user =>{
      //console.log("estado del usuario: ", user);
      if(!user){
        return;
      }
      this.usuario.nombre = user.email;
      this.usuario.uid = user.uid;
      this.nombreEmail = this.usuario.nombre;
    });
  }

  async register(email: string, password: string){
    try{
      return  await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch(error){
      console.log("error en login: ", error);
      return null;
    }
  }

  async login(email: string, password: string){
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }


  getUserLogged() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.signOut();
  }

  validarLogin(){
    if(this.nombreEmail.length>=10){
     //console.log("estoy logeado", this.nombreEmail);
   return true;}
   else
   //console.log("NO estoy logeado", this.nombreEmail.length);
   return false;
 }

  preguntarCuenta(){
    console.log("Cambiate de plan");
  }
}
