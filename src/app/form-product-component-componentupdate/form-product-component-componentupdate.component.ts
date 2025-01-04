import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from "../models/Product";
import { ProductServiceService } from "../services/product-service.service";

@Component({
  selector: 'app-form-product-component-componentupdate',
  templateUrl: './form-product-component-componentupdate.component.html',
  styleUrls: ['./form-product-component-componentupdate.component.css']
})
export class FormProductComponentComponentupdateComponent implements OnInit {
  product: Product = new Product();
  id: number | null = null;

  constructor(
    private productService: ProductServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.productService.getProductById(this.id).subscribe({
        next: (product) => {
          this.product = product; // Remplir le produit avec les données existantes
        },
        error: (err) => {
          console.error('Erreur lors de la récupération du produit:', err);
          alert('Erreur lors de la récupération du produit');
          this.router.navigate(['/products']); // Rediriger si une erreur se produit
        }
      });
    } else {
      console.error('ID du produit manquant');
      this.router.navigate(['/products']); // Si l'ID est manquant, rediriger vers la liste des produits
    }
  }

  saveProduct(form: any): void {
    if (form.valid) {
      if (this.product.id) {
        this.productService.updateProduct(this.product).subscribe({
          next: (updatedProduct) => {
            console.log('Produit mis à jour:', updatedProduct);
            alert('Produit mis à jour avec succès!');
            this.router.navigate(['/products']); // Rediriger vers la liste des produits après la mise à jour
          },
          error: (err) => {
            console.error('Erreur lors de la mise à jour du produit:', err);
            alert('Erreur lors de la mise à jour du produit');
          }
        });
      } else {
        console.error('Aucun produit à mettre à jour');
        alert('Produit non trouvé pour la mise à jour');
      }
    }
  }

}
