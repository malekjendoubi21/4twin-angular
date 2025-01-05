import { Component ,Input } from '@angular/core';
import {Menu} from "../models/Menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu!: Menu; // Réception des données du menu via @Input

  constructor() { }
}
