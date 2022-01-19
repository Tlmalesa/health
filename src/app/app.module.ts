import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { CartComponent } from './cart/cart.component';
import { FavComponent } from './fav/fav.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    FavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2PageScrollModule,
    HttpClientModule,
    NgxSpinnerModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
