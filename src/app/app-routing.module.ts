import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';

const routes: Routes = [
  {path:"", component: AjoutUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
