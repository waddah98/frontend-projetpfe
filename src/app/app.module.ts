import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';

import {CommonModule} from '@angular/common';
import { HeadermenuComponent } from './headermenu/headermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutUtilisateurComponent,
    HeadermenuComponent,
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
