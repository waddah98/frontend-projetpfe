import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Import CommonModule from @angular/common
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import { AjoutVisiteurComponent } from './ajout-utilisateur/user-types/ajout-visiteur/ajout-visiteur.component';
import { AjoutStagiaireComponent } from './ajout-utilisateur/user-types/ajout-stagiaire/ajout-stagiaire.component';
import { AjoutEmployeComponent } from './ajout-utilisateur/user-types/ajout-employe/ajout-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutUtilisateurComponent,
    AjoutVisiteurComponent,
    AjoutStagiaireComponent,
    AjoutEmployeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
