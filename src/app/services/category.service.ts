import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../models/categorie";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string="http://localhost:3000/categories";
  constructor(private http:HttpClient) { }

  getListCategoriesFromBackend(): Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.baseUrl); }
/*
  deleteCategoryFromBackend(CategorieId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlCat}/${CategorieId}`);
  }*/

  /*
  deleteCategoryFromBackend (Categorie: Categorie): Observable<Categorie> {
    return this.http.delete<Categorie>(this.apiUrlCat +'/'+
      Categorie.id);
  }*/


  getCatgorie(id: any): Observable<Categorie> {
    return this.http.get<Categorie>(this.baseUrl + id)
  }
  addCategories(data: Categorie) {
    return this.http.post(this.baseUrl, data)
  }
  removeCategorie(id: any) {
    return this.http.delete(this.baseUrl + id)
  }
  updateCategorie(data: Categorie,id:any) {
    return this.http.put(this.baseUrl+id, data)
  }
  deleteData (Categorie: Categorie | number): Observable<Categorie> {
    const id = typeof Categorie === 'number' ? Categorie : Categorie.id;
    return this.http.delete<Categorie>(this.baseUrl+'/'+id);
  }

}
