import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { AnimationComponent } from './componentes/animation/animation.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: "", redirectTo: "api", pathMatch: 'full' },
  {path: "api", component: ApiComponent},
  {path: "registro", component: RegistroComponent},
  {path: "login", component: LoginComponent},
  {path: "ani", component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
