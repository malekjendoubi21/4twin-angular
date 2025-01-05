import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Menu} from "./models/Menu";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiUrl: string = "http://localhost:3000/menu";  // L'URL de l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des menus
  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.apiUrl);
  }


  getMenuById(id: number): Observable<Menu | null> {
    return this.http.get<Menu[]>(this.apiUrl).pipe(
      map(menus => menus.find(menu => menu.id === id) || null) // Retourne null si le menu n'est pas trouvé
    );
  }
  updateMenu(menu: Menu): Observable<Menu> {
    const url = `${this.apiUrl}/${menu.id}`;
    return this.http.put<Menu>(url, menu);
  }

}
