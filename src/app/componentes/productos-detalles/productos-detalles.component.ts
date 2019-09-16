import { Component, OnInit } from '@angular/core';
// Importamos ActiveRoute para activar la ruta del producto seleccionado
import { ActivatedRoute } from '@angular/router';
// Importamos el ts products.ts
import { products } from '../../products';
// Importamos el Servicios Carrito
import { CarritoService } from '../../servicios/carrito.service';
@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent implements OnInit {
  producto;
  constructor( private route:ActivatedRoute,
                private carritoServicio:CarritoService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.producto = products[+params.get('productoId')];
    });

  }
  addtoCarrito(producto){
    window.alert('Tu producto a sido añadido!');
    this.carritoServicio.addaCarrito(producto);

  }

}
