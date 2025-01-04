import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../models/Product";
@Component({
  selector: 'app-products-category-qpcomponent',
  templateUrl: './products-category-qpcomponent.component.html',
  styleUrls: ['./products-category-qpcomponent.component.css']
})
export class ProductsCategoryQPComponentComponent implements OnInit {
  categoryId: number | null = null;
  filteredProducts: Product[] = [];

  // Liste des produits pour filtrer selon l'ID de la catégorie
  listProducts: Product[] = [
    { "id": 1, "name": "Refrigérateur LGInox", "image": "assets/images/refrigerateur-lg.jpg", "categoryId": 1, "description": "", "price": 2800, "brand": "LG", "promotion": 0 },
    { "id": 2, "name": "Refrigérateur SamsungBlanc", "image": "assets/images/refrigerateur_samsung.jpeg", "categoryId": 1, "description": "", "price": 2400, "brand": "Samsung", "promotion": 0 },
    { "id": 3, "name": "Lave vaisselle Beko", "image": "assets/images/lave_vaisselle.png", "categoryId": 1, "description": "", "price": 1875, "brand": "BEKO", "promotion": 0 },
    { "id": 4, "name": "Oppo SmartPhone", "image": "assets/images/oppo_smart.jpg", "categoryId": 4, "description": "", "price": 1200, "brand": "OPPO", "promotion": 0 },
    { "id": 5, "name": "Hachoir", "image": "assets/images/hachoir.jpg", "categoryId": 2, "description": "", "price": 120, "brand": "Moulinex", "promotion": 0 },
    { "id": 6, "name": "TV 50''LG", "image": "assets/images/tv_lg.jpg", "categoryId": 5, "description": "", "price": 1800, "brand": "LG", "promotion": 0 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la catégorie depuis le query param 'id' de l'URL
    this.route.queryParams.subscribe(params => {
      this.categoryId = +params['id'];
      if (this.categoryId) {
        // Filtrer les produits en fonction de l'ID de la catégorie
        this.filteredProducts = this.listProducts.filter(product => product.categoryId === this.categoryId);
      }
    });
  }
}
