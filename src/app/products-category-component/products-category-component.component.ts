import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "../models/Product";
import { shortList } from "../models/shortList";
import { ProductServiceService } from '../services/product-service.service'; // Importer le service

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category-component.component.html',
  styleUrls: ['./products-category-component.component.css']
})
export class ProductsCategoryComponentComponent implements OnInit {
  categoryId: number | null = null;
  filteredProducts: Product[] = [];
  shortList: shortList[] = []; // Ajout de la propriété shortList

  listProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService, // Injecter le service
    private router: Router // Injecter le Router pour la navigation
  ) {}

  ngOnInit(): void {
    this.categoryId = Number(this.route.snapshot.paramMap.get('id'));

    // Charger les produits depuis le fichier JSON
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.listProducts = products;  // Mettre à jour la liste des produits
        if (this.categoryId) {
          // Filtrer les produits par catégorie si un ID est fourni
          this.filteredProducts = this.listProducts.filter(
            (product) => product.categoryId === this.categoryId
          );
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des produits:', err);
      }
    });
  }

  // Ajouter un produit à la liste de souhaits
  handleAddToShortlist(productId: number): void {
    const userId = 1; // Exemple d'ID utilisateur
    const existingItem = this.shortList.find(
      item => item.idElement === productId && item.idUser === userId && item.typeElement === 'product'
    );

    if (!existingItem) {
      this.shortList.push({
        id: this.shortList.length + 1,
        idUser: userId,
        idElement: productId,
        typeElement: 'product'
      });
      console.log('Shortlist updated:', this.shortList);
    } else {
      console.log('This item is already in the shortlist');
    }
  }

  navigateToUpdate(id: number): void {
    this.router.navigate([`/updateproduct/${id}`]);
  }
  // Supprimer un produit
  deleteProduct(productId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          console.log('Produit supprimé');
          alert('Produit supprimé avec succès!');
          // Filtrer et supprimer le produit de la liste affichée
          this.filteredProducts = this.filteredProducts.filter(p => p.id !== productId);
        },
        error: (err) => {
          console.error('Erreur lors de la suppression du produit:', err);
        }
      });
    }
  }
}
