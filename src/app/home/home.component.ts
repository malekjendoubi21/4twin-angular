import { Component, OnInit } from '@angular/core';
import { Menu } from "../models/Menu";
import { MenuService } from "../menu.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus: Menu[] = [];
  userId: number = 1;
  reservedMenus: Menu[] = [];

  constructor(private menuService: MenuService) {}



  ngOnInit(): void {
    // Récupérer la liste des menus depuis le service
    this.menuService.getMenus().subscribe((menus) => {
      this.menus = menus; // Assurez-vous que c'est un tableau de menus

      // Filtrer les menus réservés par l'utilisateur
      this.reservedMenus = this.menus.filter(menu =>
        menu.reservations && menu.reservations.includes(this.userId)
      );
    });
  }









        /*
          ngOnInit(): void {
            // Récupérer la liste des menus depuis le service
            this.menuService.getMenus().subscribe((menus) => {
              this.menus = menus; // Assurez-vous que c'est un tableau de menus

              // Vérifier les réservations existantes
              this.menus.forEach(menu => {
                if (menu.reservations && menu.reservations.includes(this.userId)) {
                  console.log(`Réservation trouvée pour l'utilisateur ${this.userId} sur le menu ${menu.title}`);
                }
              });
            });
          }*/

  reserve(menu: Menu): void {
    // Vérifier si l'utilisateur a déjà réservé ce menu
    if (!menu.reservations) {
      menu.reservations = []; // Initialiser le tableau de réservations si nécessaire
    }

    // Si l'utilisateur n'a pas encore réservé ce menu, ajouter son ID aux réservations
    if (!menu.reservations.includes(this.userId)) {
      menu.reservations.push(this.userId);

      // Mettre à jour le menu dans db.json
      this.menuService.updateMenu(menu).subscribe((updatedMenu) => {
        console.log(`Réservation ajoutée pour l'utilisateur ${this.userId} sur le menu ${updatedMenu.title}`);
      });
    } else {
      console.log(`L'utilisateur ${this.userId} a déjà réservé ce menu.`);
    }
  }
}
