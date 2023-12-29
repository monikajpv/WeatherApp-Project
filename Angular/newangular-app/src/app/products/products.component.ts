import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = [

    {id:1, name:"Watch",   price:'Price:$10987',   color:'Color:Golden',  available:'Available', image:'/assets/watch.webp'},
    {id:2, name:"iPhone",  price:'Price:$380099', color:' Color:Red',available:' Not Available' ,image:'/assets/iphone.webp'},
    {id:3, name:"Android", price:'Price:$2334', color:'Color:Black',available:'Available',image:'/assets/android.jpg' },
    {id:4, name:"Earphone", price:'Price:$5231', color:'Color:White',available:'Available',image:'/assets/earphn.jpg'},
    {id:5, name:"Tablets",  price:'Price:$2364', color:'Color:Blue',available:' Not Available',image:'/assets/tablet.webp' }





  ];

}
