import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AddMenuComponentComponent} from "./menu-module/add-menu-component/add-menu-component.component";
import {MenuDetailsComponent} from "./menu-details/menu-details.component";

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  {
    path: 'reservation',
    loadChildren: () =>
      import('./reservation/reservation.module').then((m) => m.ReservationModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu-module/menu-module.module').then((m) => m.MenuModuleModule),
  },


  { path : 'addmenu', component: AddMenuComponentComponent },

  { path: 'menuDetail/:id', component: MenuDetailsComponent }, // Route avec paramètre dynamique :id




  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection par défaut vers /home
  { path: '**', component: NotFoundComponent }, // Gérer les chemins non définis

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
