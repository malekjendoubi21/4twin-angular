import {Component, OnInit} from '@angular/core';
import {Menu} from "../models/Menu";
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service'; // Import du service Menu
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  id!: number; // Variable pour stocker l'ID du menu
  menu!: Menu; // Variable pour stocker les détails du menu
  noteForm!: FormGroup;  // Formulaire pour saisir la note

  constructor(
    private route: ActivatedRoute, // Permet de récupérer l'ID dans l'URL
    private menuService: MenuService,
    private fb: FormBuilder
    // Service pour récupérer les menus
  ) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      note: [null, [Validators.pattern('^[1-5]$')]] // Validation pour être un chiffre entre 1 et 5
    });


    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.menuService.getMenuById(this.id).subscribe((menu) => {
      if (menu) {
        this.menu = menu; // Le menu a été trouvé
      } else {
        // Gérer le cas où le menu n'a pas été trouvé
        console.log('Menu non trouvé');
      }
    });
  }
  get note() {
    return this.noteForm.get('note');
  }
  updateMark() {
    const newNote = this.note?.value;

    if (newNote !== null) {
      if (this.menu.mark === 0) {
        this.menu.mark = newNote;
      } else {
        this.menu.mark = (this.menu.mark + newNote) / 2;
      }
    }

    // Mettre à jour le menu dans le fichier db.json ou le service
    this.menuService.updateMenu(this.menu).subscribe(); // Méthode hypothétique de mise à jour
  }

}
