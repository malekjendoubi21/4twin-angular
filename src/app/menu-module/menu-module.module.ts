import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMenuComponentComponent } from './add-menu-component/add-menu-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddMenuComponentComponent
  ],
  exports: [
    AddMenuComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModuleModule { }
