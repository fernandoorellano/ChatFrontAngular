import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';


import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AnimationComponent } from './componentes/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,   
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,

    AngularFireAuthModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()), 
  ],
  providers:  
    [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
