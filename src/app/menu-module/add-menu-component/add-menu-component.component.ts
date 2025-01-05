import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Menu} from "../../models/Menu";

@Component({
  selector: 'app-add-menu-component',
  templateUrl: './add-menu-component.component.html',
  styleUrls: ['./add-menu-component.component.css']
})
export class AddMenuComponentComponent implements OnInit {
  menuForm: FormGroup;
  menus: Menu[] = []; // Liste des menus

  constructor(private fb: FormBuilder) {
    this.menuForm = this.fb.group({
      title: ['', Validators.required], // Champ obligatoire
      description: ['', [Validators.required, Validators.minLength(10)]], // Champ obligatoire + MinLength
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.menuForm.valid) {
      const newMenu = this.menuForm.value; // Récupère les valeurs du formulaire
      const menu: Menu = {
        ...newMenu,  // Valeurs du formulaire
        id: this.menus.length + 1, // Génération d'un ID unique
        mark: 0, // Marque par défaut
        approved: false, // Par défaut non approuvé
        reservations: [], // Liste vide de réservations
      };
      this.menus.push(menu); // Ajoute le menu à la liste des menus
      console.log('Menu ajouté avec succès :', menu);
      this.menuForm.reset(); // Réinitialise le formulaire après l'ajout
    }
  }
}
