import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component'
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {ProductsCategoryComponentComponent} from "./products-category-component/products-category-component.component";
import {
  ProductsCategoryQPComponentComponent
} from "./products-category-qpcomponent/products-category-qpcomponent.component";
import {ListCategoriesComponentComponent} from "./list-categories-component/list-categories-component.component";
import {DetailsCategoryComponent} from "./details-category/details-category.component";
import {FormProductComponentComponent} from "./form-product-component/form-product-component.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {
  FormProductComponentComponentupdateComponent
} from "./form-product-component-componentupdate/form-product-component-componentupdate.component";
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },

  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  { path: 'categories/:id', component: ListCategoriesComponentComponent },
  { path: 'updateproduct/:id', component: FormProductComponentComponentupdateComponent },

  { path: 'categories', component: ListCategoriesComponentComponent, children: [
      { path: 'category-details/:id', component: DetailsCategoryComponent }
    ] },
  { path: 'products-category-qp', component: ProductsCategoryQPComponentComponent },
  { path :"addproduct" , component :FormProductComponentComponent },
  //{ path :"addproduct" , component :FormProductComponent },

  { path: 'products/:id', component: ProductsCategoryComponentComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers /home

  { path: '**', component: NotFoundPageComponent }, // Gérer les chemins non définis
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
