import { Injectable } from '@angular/core';
// import {Product} from './products';
// import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
interface Product {
	id: string;
	image: string;
  name: string;
  price: number;
description: string;
  }
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

//   BASE_URL: string = 'https://tlhtech.herokuapp.com';

	
// 	constructor(private  http: HttpClient) { }

//   contactMe(userDetail:any)
// 	{
// 		console.log(userDetail)
// 		return this.http.post(`${this.BASE_URL}/contact-us/`,userDetail) ;
// 	}
// items: Product[] =[];
public search = new BehaviorSubject<string>("");
public productList = new BehaviorSubject<any>([]);
items: Product[] = [];
addToCart(product:Product){
	this.items.push(product);
	this.getTotalPrice();
}
addToFav(product:Product){
	this.items.push(product);
	
}
getItems(){
	return this.items;
}
clearCart(){
	this.items=[];
	return this.items;
}
  removeCartItem(product: Product){
    this.items.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.items.splice(index,1);
      }
    })
    this.productList.next(this.items);
  }
  removeAllCart(){
    this.items = []
    this.productList.next(this.items);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.items.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
}
