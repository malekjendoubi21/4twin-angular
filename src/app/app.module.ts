import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListCategoriesComponentComponent } from './list-categories-component/list-categories-component.component';
import { ProductsComponentComponent } from './ProductModule/products-component/products-component.component';
import { ProfileComponentComponent } from './ProfileModule/profile-component/profile-component.component';
import { ContactComponentComponent } from './ContactModule/contact-component/contact-component.component';
import { AProposComponentComponent } from './AProposModule/apropos-component/apropos-component.component';
import { FilterPipe } from './filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ProductsCategoryComponentComponent } from './products-category-component/products-category-component.component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { FormProductComponentComponent } from './form-product-component/form-product-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { FormProductComponent } from './form-product/form-product.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { FormProductComponentComponentupdateComponent } from './form-product-component-componentupdate/form-product-component-componentupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    ProductsComponentComponent,
    ProfileComponentComponent,
    ContactComponentComponent,
    AProposComponentComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundPageComponent,
    ProductsCategoryComponentComponent,
    ProductsCategoryQPComponentComponent,
    DetailsCategoryComponent,
    FormProductComponentComponent,
    FormProductComponent,
    CardComponentComponent,
    FormProductComponentComponentupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
