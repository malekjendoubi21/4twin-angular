import { Component } from '@angular/core';
import {Product} from "../models/Product";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {

  productForm: FormGroup;
  products: Product[] = [];
  currentId = 1;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')],
      ],
      image: [''],
      categoryId: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      brand: [''],
      promotion: ['', [Validators.pattern('^(0|[1-9][0-9]?)$'), Validators.max(100)]],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        ...this.productForm.value,
        id: this.currentId++,
      };
      this.products.push(newProduct);
      alert('Product added successfully!');
      this.productForm.reset();
    }
  }
}
