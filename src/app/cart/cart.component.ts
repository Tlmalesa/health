import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../service/contact.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items=this.contactServ.getItems();
public grandTotal !: number;
  constructor(private contactServ:ContactServiceService) { }

  ngOnInit(): void {
    this.grandTotal = this.contactServ.getTotalPrice();
  }
  removeToCart() {
    this.contactServ.clearCart();
    window.alert('Your product has added to the cart');
  }
    removeItem(item: any){
    this.contactServ.removeCartItem(item);
    this.grandTotal = this.contactServ.getTotalPrice();
    window.alert('Remove Item');
  }
  emptycart(){
    this.contactServ.clearCart();
  }
}
