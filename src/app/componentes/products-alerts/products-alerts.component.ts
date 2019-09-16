import { Component, OnInit } from '@angular/core';
// Entrada
// importacion necesaria para recibir un producto como entrada
import { Input } from '@angular/core';
// Salida
// Para enviar información
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-alerts',
  templateUrl: './products-alerts.component.html',
  styleUrls: ['./products-alerts.component.css']
})
export class ProductsAlertsComponent implements OnInit {

  //Propiedad nombrada product con un decorador. El decorador indica que el valor de la propiedad se pasara del elemento primario del componente
  @Input() product;
  // Producto emita un evento cusndo cambia el valor de la propiedad
  @Output() notificar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
