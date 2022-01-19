import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import {FavComponent} from './fav/fav.component';
const routes: Routes = [
  {path: '',component:HomePageComponent},
  {path: 'cart',component:CartComponent},
  {path: 'fav',component:FavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
