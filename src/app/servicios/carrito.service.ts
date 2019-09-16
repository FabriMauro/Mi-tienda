import { Injectable } from '@angular/core';
//
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  items = [];
  constructor(private http:HttpClient) { }
  // Añadir productos al carrito
  addaCarrito(producto) {
    this.items.push(producto);

  }
  // Devolver productos del Carrito
  getItems() {
    return this.items;
  }
  // Borrar los productos del Carrito
  clearCarrito() {
    this.items = [];
    return this.items;

  }
  // Obtener precios de envio
  getEnvioPrecio() {
    return this.http.get('../assets/envio.json');
  }
}
