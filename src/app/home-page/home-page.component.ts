import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { ContactServiceService } from '../service/contact.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

// import { ToastrService } from 'ngx-toastr';
interface Product {
   id: string;
  image: string;
  name: string;
  price: number;
description: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchKey:string ="";
  public filterCategory : any
  
  product: Product[] = [
    {"id": "1",image: '../../assets/images/1.jpg',"name": "Intro to Mental Health","price": 450.00,"description": "manage behaviour and build positive relationships at all levels."},
    {"id": "2",image: '../../assets/images/2.jpg',"name": "Social Work Practice","price": 200.00,"description": "manage behaviour and build positive relationships at all levels."},
    {"id": "3",image: '../../assets/images/3.jpg',"name": " Mental Health Needs","price": 399.00,"description": "manage behaviour and build positive relationships at all levels."},
    {"id": "4",image: '../../assets/images/4.jpg',"name": "Mental Health in Education","price": 599.00,"description": "manage behaviour and build positive relationships at all levels."},
  ];
  
  searchText: string = ''; here 
  filteredCoints: Product[] = [];
  public grandTotal !: number;
 
  constructor(public router: Router, private builder: FormBuilder, private SpinnerService: NgxSpinnerService, private contactService: ContactServiceService) {
    // this.getScreenSize();


  }

  ngOnInit(): void {

   this.product=this.product;
  
    // this.searchProd();
  }
  addToCart(product: Product) {
    this.contactService.addToCart(product);
    window.alert('Your product has added to the cart');
  }
  addFav(product: Product) {
    this.contactService.addToFav(product);
    // window.alert('Your product has added to the cart');
  }
  //   filter(category:string){
  //   this.filterCategory = this.product
  //   .filter((a:any)=>{
  //     if(a.category == category || category==''){
  //       return a;
  //     }
  //   })
  // }
  searchProd() {
    this.product = this.product.filter(
      (prod) =>
        prod.name.toLowerCase().includes(this.searchText.toLowerCase()) 
    );
  }
  onClick() {
    this.router.navigate([""]);
  }
  fav() {
    this.router.navigate(["/fav"]);
  }
  cart() {
    this.router.navigate(["/cart"]);
  }
  sett() {
    this.router.navigate(["/sett"]);
  }
  flight() {
    this.router.navigate(["/flight"]);
  }
  open() {
    // this.sidebar =! this.sidebar;
    // this.static =! this.static;
  }

  
}
