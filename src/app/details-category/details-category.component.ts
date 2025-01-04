import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  categoryId: number | null = null;
  categoryDescription: string = '';

  categories = [
    { id: 1, name: 'Catégorie 1', description: 'Description détaillée de la catégorie 1' },
    { id: 2, name: 'Catégorie 2', description: 'Description détaillée de la catégorie 2' },
    { id: 3, name: 'Catégorie 3', description: 'Description détaillée de la catégorie 3' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = +params.get('id')!;
      const category = this.categories.find(c => c.id === this.categoryId);
      if (category) {
        this.categoryDescription = category.description;
      }
    });
  }
}
