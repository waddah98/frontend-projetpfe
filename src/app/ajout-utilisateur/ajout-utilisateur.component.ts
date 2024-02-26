import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';



@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent {
  FormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.FormGroup = this.formBuilder.group({
      type: ['']
    });
  }

}
