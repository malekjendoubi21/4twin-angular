import { Component } from '@angular/core';
import { Product } from "../models/Product";
import { ProductServiceService } from '../services/product-service.service';  // Importer le service

@Component({
  selector: 'app-form-product-component',
  templateUrl: './form-product-component.component.html',
  styleUrls: ['./form-product-component.component.css']
})
export class FormProductComponentComponent {
  product: Product = new Product();
  list: Product[] = []; // Liste des produits

  constructor(private productService: ProductServiceService) { }

  // Méthode pour enregistrer un produit
  saveProduct(form: any): void {
    if (form.valid) {
      // Ajouter le produit via le service
      this.productService.addProduct(this.product).subscribe({
        next: (newProduct) => {
          console.log('Produit ajouté:', newProduct);
          alert('Produit enregistré avec succès !');
          this.list.push(newProduct);  // Ajouter le produit ajouté à la liste
          form.reset();  // Réinitialiser le formulaire
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du produit:', err);
          alert('Erreur lors de l\'ajout du produit');
        }
      });
    }
  }

  // Méthode pour récupérer les produits à partir de l'API
  getProducts(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.list = products;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des produits:', err);
      }
    });
  }

  ngOnInit(): void {
    this.getProducts();  // Charger les produits au démarrage du composant
  }
}
