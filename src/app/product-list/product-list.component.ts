import { Component, OnInit } from '@angular/core';
// importamos el ts products.ts
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;


  constructor( ) { }

  ngOnInit() {
  }

  share() {
    window.alert('El Producto a sido compartido!');
  }

  onNotifica(){
    window.alert('Se le notificará cuando el producto salga a la venta!');
  }

}
