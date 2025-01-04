import {Component, QueryList, ViewChildren} from '@angular/core';
import {Categorie} from "../models/categorie";
import { Router } from '@angular/router';
import {Observable} from "rxjs";
import {CategoryService} from "../services/category.service";
import {CardComponentComponent} from "../card-component/card-component.component";
import {shortList} from "../models/shortList";

@Component({
  selector: 'app-list-categories-component',
  templateUrl: './list-categories-component.component.html',
  styleUrls: ['./list-categories-component.component.css']
})
export class ListCategoriesComponentComponent {
  @ViewChildren(CardComponentComponent) cardComponents!: QueryList<CardComponentComponent>;

  categories : Categorie[]=[
    {"id":1,"title":"Grand électroménager",
      "image":"assets/images/categorie_electromenager.jpg", "description":"",
      "available":true},
    {"id":2,"title":"Petit électroménager",
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"",
      "available":true},
    {"id":3,"title":"Produits informatiques",
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"",
      "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
      "description":"", "available":true},
    {"id":5,"title":"TV, images et son",
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"",
      "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
      "description":"","available":false},
  ]
  shortList: shortList[] = [];


  ngAfterViewInit(): void {
    this.cardComponents.forEach(card => {
      card.btnText = 'Add to shortlist';
    });
  }

  handleAddToShortlist(categoryId: number): void {
    const userId = 1; // Exemple d'ID utilisateur
    const existingItem = this.shortList.find(
      item => item.idElement === categoryId && item.idUser === userId && item.typeElement === 'category'
    );

    if (!existingItem) {
      this.shortList.push({
        id: this.shortList.length + 1,
        idUser: userId,
        idElement: categoryId,
        typeElement: 'category'
      });
      console.log('Shortlist updated:', this.shortList);
    } else {
      console.log('This item is already in the shortlist');
    }
  }
}
