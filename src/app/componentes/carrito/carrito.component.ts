import { Component, OnInit } from '@angular/core';
import {  CarritoService } from '../../servicios/carrito.service';
// Proporciona metodos convenientes para generar controles
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  // variable para almacenar productos
  items;
  // Variable para formularios
  checkoutForm;

  constructor( private carritoServicio:CarritoService,
                private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.items = this.carritoServicio.getItems();
    //Formulario
    this.checkoutForm = this.formBuilder.group({
      nombre: '',
      direccion: ''
    });
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Su pedido ha sido enviado', customerData);

    this.items = this.carritoServicio.clearCarrito();
    this.checkoutForm.reset();
  }

}
