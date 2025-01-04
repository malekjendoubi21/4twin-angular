import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importation d'HttpClient
import { Observable } from 'rxjs';  // Importation de Observable
import { Product } from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private products: Product[] = [];  // Liste locale des produits
  baseUrl: string = "http://localhost:3000/products";  // L'URL de l'API

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  // Mettre à jour un produit
  updateProduct(updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${updatedProduct.id}`, updatedProduct);
  }

  // Supprimer un produit
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${productId}`);
  }
}
