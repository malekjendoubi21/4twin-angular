import { Component, Input, Output, EventEmitter } from '@angular/core';
import {shortList} from "../models/shortList";

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() id!: number;
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() available!: boolean;
  @Output() addToShortlist = new EventEmitter<number>(); // Émet un événement au parent

  btnText: string = 'Add to shortlist';

  onAddToShortlist(): void {
    this.addToShortlist.emit(this.id); // Émet l'ID de l'élément au parent
  }
}
